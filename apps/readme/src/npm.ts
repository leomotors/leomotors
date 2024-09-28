import { NPMPackage, NPMPackageReturnType, NPMReturnType } from "./types.js";

const result = (await fetch(
  "https://registry.npmjs.org/-/v1/search?text=maintainer:leomotors&size=250",
).then((r) => r.json())) as NPMReturnType;

const knownDate: Record<string, number> = {};

async function getFirstDate(pkg: NPMPackage) {
  const response = (await fetch(`https://registry.npmjs.org/${pkg.name}`).then(
    (r) => r.json(),
  )) as NPMPackageReturnType;

  knownDate[pkg.name] = new Date(response.time.created).getTime();
}

const packages = result.objects
  .map((obj) => obj.package)
  .filter(
    (pkg) =>
      "repository" in pkg.links && typeof pkg.links.repository === "string",
  );

for (const pkg of packages) {
  await getFirstDate(pkg);
}

const sortedPackages = packages.sort(
  (a, b) => knownDate[a.name]! - knownDate[b.name]!,
);

function getReadmeLink(pkg: NPMPackage) {
  const npmLink = `https://www.npmjs.com/package/${pkg.name}`;
  return `[${pkg.name}](${pkg.links.repository}) =>
  [![](https://img.shields.io/npm/v/${pkg.name}.svg?maxAge=3600)](${npmLink})
  [![](https://img.shields.io/npm/dt/${pkg.name}.svg?maxAge=3600)](${npmLink})`;
}

export const readmeLinks = sortedPackages
  .map(getReadmeLink)
  .map((s) => `- ${s}`)
  .join("\n");
