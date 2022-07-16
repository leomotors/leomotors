import fetch from "node-fetch";
import fs from "node:fs/promises";
import type { GetRepoLangsQuery } from "../generated/graphql";

const query = /* GraphQL */ `
    query getRepoLangs {
        viewer {
            repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
                totalCount
                nodes {
                    name
                    languages(first: 100) {
                        edges {
                            size
                            node {
                                color
                                name
                            }
                        }
                    }
                }
                pageInfo {
                    endCursor
                }
            }
        }
    }
`;

const result = (
    (await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GH_PAT}`,
        },
        body: JSON.stringify({ query }),
    }).then(async (res) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const obj = (await res.json()) as any;
        if (res.status >= 400) {
            throw new Error(JSON.stringify(obj, null, 4));
        }
        return obj;
    })) as { data: unknown }
).data as GetRepoLangsQuery;

const repos = result.viewer.repositories.nodes ?? [];

const data: { [repoName: string]: { [langName: string]: number } } = {};

for (const repo of repos) {
    const repoLangs: typeof data[string] = {};

    for (const edge of repo?.languages?.edges ?? []) {
        repoLangs[edge!.node.name] = edge!.size;
    }

    data[repo!.name] = repoLangs;
}

await fs.writeFile("data/data.json", JSON.stringify(data, null, 2));
