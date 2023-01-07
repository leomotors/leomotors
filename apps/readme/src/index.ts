import fs from "node:fs/promises";

import { readmeLinks } from "./npm.js";

const readme = await fs.readFile("./template.md", "utf-8");

await fs.mkdir("out").catch(() => null);
await fs.writeFile(
  "out/readme.md",
  readme.replace("<npm-packages />", readmeLinks)
);
