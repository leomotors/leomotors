import { GraphQLClient } from "graphql-request";
import fs from "node:fs/promises";

import { getSdk } from "../generated/graphql.js";

const gqlClient = new GraphQLClient("https://api.github.com/graphql", {
    headers: {
        Authorization: "Bearer " + process.env.GH_PAT,
    },
});

const sdk = getSdk(gqlClient);

const result = await sdk.getRepoLangs();

const repos = result.viewer.repositories.nodes ?? [];

const data: {
    [repoName: string]: { [langName: string]: number } & {
        __isArchived?: boolean;
        __pushedAt?: string;
    };
} = {};

for (const repo of repos) {
    const repoLangs: typeof data[string] = {};

    for (const edge of repo!.languages?.edges ?? []) {
        repoLangs[edge!.node.name] = edge!.size;
    }

    repoLangs.__isArchived = repo!.isArchived;
    repoLangs.__pushedAt = repo!.pushedAt;
    data[repo!.name] = repoLangs;
}

await fs.writeFile("data/data.json", JSON.stringify(data, null, 2));
