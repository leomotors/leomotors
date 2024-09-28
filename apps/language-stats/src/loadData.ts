import fs from "node:fs/promises";

import { GraphQLClient } from "graphql-request";

import { getSdk } from "../generated/graphql.js";

const gqlClient = new GraphQLClient("https://api.github.com/graphql", {
  headers: {
    Authorization: "Bearer " + process.env.GH_PAT,
  },
});

const sdk = getSdk(gqlClient);

console.log("Fetching Page 1");
let result = await sdk.getRepoLangs();
let page = 1;

const repos = result.viewer.repositories.nodes ?? [];

while (result.viewer.repositories.pageInfo.hasNextPage) {
  page++;
  console.log(`Fetching Page ${page}`);
  result = await sdk.getRepoLangs({
    after: result.viewer.repositories.pageInfo.endCursor,
  });

  for (const node of result.viewer.repositories.nodes ?? []) {
    repos.push(node);
  }
}

const data: {
  [repoName: string]: { [langName: string]: number } & {
    __isArchived?: boolean;
    __pushedAt?: string;
  };
} = {};

for (const repo of repos) {
  const repoLangs: (typeof data)[string] = {};

  for (const edge of repo!.languages?.edges ?? []) {
    repoLangs[edge!.node.name] = edge!.size;
  }

  repoLangs.__isArchived = repo!.isArchived;
  repoLangs.__pushedAt = repo!.pushedAt;
  data[repo!.name] = repoLangs;
}

await fs.writeFile("data/data.json", JSON.stringify(data, null, 2));
