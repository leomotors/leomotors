// Use Bun to run this!
/// <reference types="bun-types" />

interface IArgs {
  package: string;
  path: string;
  project: string;
  short: string;
}

const template = (args: IArgs) =>
  `name: ${args.short}

on:
  push:
    branches:
      - main

jobs:
  ignore_build:
    name: Ignored Build Step
    runs-on: ubuntu-latest
    outputs:
      run_rest_jobs: \${{ steps.set_output.outputs.run_jobs }}

    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 10

      - name: Check if new build is needed
        id: set_output
        run: bash ignore-build.bash ${args.package}

  deploy:
    name: Deploy to Cloudflare Pages
    runs-on: ubuntu-latest
    
    needs: [ ignore_build ]
    if: needs.ignore_build.outputs.run_rest_jobs == 'true'

    permissions:
      contents: read
      deployments: write

    env:
      TURBO_TOKEN: \${{ secrets.TURBO_TOKEN }}
      TURBO_TEAM: leomotors

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - uses: pnpm/action-setup@v2
        name: Install pnpm
        id: pnpm-install
        with:
          version: 7
          run_install: false

      - name: Get pnpm store directory
        id: pnpm-cache
        run: |
          echo "::set-output name=pnpm_cache_dir::$(pnpm store path)"

      - uses: actions/cache@v3
        name: Setup pnpm cache
        with:
          path: \${{ steps.pnpm-cache.outputs.pnpm_cache_dir }}
          key: \${{ runner.os }}-pnpm-store-\${{ hashFiles('**/pnpm-lock.yaml') }}
          restore-keys: |
            \${{ runner.os }}-pnpm-store-

      - name: Install Dependencies
        run: pnpm install

      - name: Build all websites
        run: pnpm build

      - name: Publish to Cloudflare Pages
        uses: cloudflare/pages-action@1
        with:
          apiToken: \${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: \${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          gitHubToken: \${{ secrets.GITHUB_TOKEN }}
          projectName: ${args.project}
          directory: ${args.path}/build
`;

const projects: IArgs[] = [
  {
    package: "@leomotors/migration",
    path: "apps/migration",
    project: "migration-leomotors",
    short: "migration",
  },
  {
    package: "portfolio.leomotors.net",
    path: "apps/portfolio",
    project: "portfolio-leomotors",
    short: "portfolio",
  },
  {
    package: "resume.leomotors.net",
    path: "apps/resume",
    project: "resume-leomotors",
    short: "resume",
  },
  {
    package: "leomotors.net",
    path: "apps/www",
    project: "www-leomotors",
    short: "www",
  },
];

await Promise.all(
  projects.map((project) =>
    Bun.write(`.github/workflows/pages.${project.short}.yml`, template(project))
  )
);
