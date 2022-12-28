// * analyze.js: Analyze as it name suggests and save to csv

import * as fs from "fs/promises";

let langObj = {};

try {
  const buffer = await fs.readFile("data/data.json");
  langObj = JSON.parse(buffer.toString());
} catch (err) {
  console.log("data.json not found");
  process.exit(1);
}

const langCounter = {};

for (const repo in langObj) {
  const langStats = langObj[repo];
  for (const lang in langStats) {
    if (lang.startsWith("__")) continue;

    if (langCounter[lang]) {
      langCounter[lang] += parseInt(langStats[lang]);
    } else {
      langCounter[lang] = parseInt(langStats[lang]);
    }
  }
}

const sorted = Object.entries(langCounter).sort(([, a], [, b]) => b - a);

const languages = [];
sorted.map((lang) => {
  languages.push(lang[0]);
});

console.log(langCounter);

let CSVWrite = "Repository Name,Status,";

for (const lang of languages) {
  CSVWrite += `${lang},`;
}
CSVWrite += "Total,\n";

const onemo = 30 * 24 * 60 * 60 * 1000;

/**
 * @param {boolean} archived
 * @param {string} date
 * @returns {string}
 */
function getType(archived, date) {
  if (archived) return "ARCHIVED";

  const time = new Date(date).getTime();
  const diff = new Date().getTime() - time;

  if (diff >= 3 * onemo) {
    return "ABANDONED";
  } else if (diff >= 1 * onemo) {
    return "STALE";
  } else {
    return "ACTIVE";
  }
}

for (const reponame in langObj) {
  let totalThisRepo = 0;
  const repolang = langObj[reponame];
  CSVWrite += `${reponame},${getType(
    repolang.__isArchived,
    repolang.__pushedAt
  )},`;
  for (const lang of languages) {
    if (repolang[lang]) {
      CSVWrite += `${repolang[lang].toString()},`;
      totalThisRepo += repolang[lang];
    } else {
      CSVWrite += "0,";
    }
  }
  CSVWrite += `${totalThisRepo},\n`;
}

CSVWrite += "Total,,";

let totalポイッ = 0;
for (const lang of sorted) {
  CSVWrite += `${lang[1]},`;
  totalポイッ += lang[1];
}

CSVWrite += `${totalポイッ},\n`;

CSVWrite += "Percentage,,";
for (const lang of sorted)
  CSVWrite += `${((100 * lang[1]) / totalポイッ).toFixed(2)},`;
CSVWrite += "100.00,\n";

await fs.writeFile("data/lang.csv", CSVWrite);

console.log("Convert to CSV Success");
