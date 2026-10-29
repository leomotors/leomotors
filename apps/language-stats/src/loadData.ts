import fs from "node:fs/promises";

const query = /* GraphQL */ `
  query getRepoLangs($after: String) {
    viewer {
      repositories(
        ownerAffiliations: OWNER
        isFork: false
        privacy: PUBLIC
        first: 100
        after: $after
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          name
          isArchived
          pushedAt
          languages(first: 100) {
            edges {
              size
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;

type Repo = {
  name: string;
  isArchived: boolean;
  pushedAt: string;
  languages: { edges: { size: number; node: { name: string } }[] };
};

type RepoPage = {
  pageInfo: { hasNextPage: boolean; endCursor: string | null };
  nodes: Repo[];
};

async function getRepoLangs(after: string | null): Promise<RepoPage> {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GH_PAT}`,
      "User-Agent": "leomotors-language-stats",
    },
    body: JSON.stringify({ query, variables: { after } }),
  });

  const body = (await res.json()) as {
    data?: { viewer: { repositories: RepoPage } };
    errors?: unknown;
  };

  if (!res.ok || !body.data) {
    throw new Error(
      `GitHub GraphQL failed (${res.status}): ${JSON.stringify(body.errors)}`,
    );
  }

  return body.data.viewer.repositories;
}

const repos: Repo[] = [];
let after: string | null = null;
let page = 0;

do {
  page++;
  console.log(`Fetching Page ${page}`);
  const result = await getRepoLangs(after);
  repos.push(...result.nodes);
  after = result.pageInfo.hasNextPage ? result.pageInfo.endCursor : null;
} while (after);

const data: {
  [repoName: string]: { [langName: string]: number } & {
    __isArchived?: boolean;
    __pushedAt?: string;
  };
} = {};

for (const repo of repos) {
  const repoLangs: (typeof data)[string] = {};

  for (const edge of repo.languages.edges) {
    repoLangs[edge.node.name] = edge.size;
  }

  repoLangs.__isArchived = repo.isArchived;
  repoLangs.__pushedAt = repo.pushedAt;
  data[repo.name] = repoLangs;
}

await fs.writeFile("data/data.json", JSON.stringify(data, null, 2));
