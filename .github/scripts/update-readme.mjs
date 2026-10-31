// Refreshes the STATS and RECENT blocks in README.md from the public GitHub API.
// Only numbers and PR titles change; every other line of the README is hand-written.
import { readFile, writeFile } from "node:fs/promises";

const USER = "harsh-batheja";
const AO = "OrchestratorInc/agent-orchestrator";
const OH = "OpenHands/OpenHands";
const headers = {
  accept: "application/vnd.github+json",
  "user-agent": "profile-readme-updater",
  ...(process.env.GITHUB_TOKEN ? { authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

async function gh(path) {
  const r = await fetch(`https://api.github.com${path}`, { headers });
  if (!r.ok) throw new Error(`GitHub ${r.status} for ${path}`);
  return r;
}
const json = async (path) => (await gh(path)).json();
const count = async (q) => (await json(`/search/issues?q=${encodeURIComponent(q)}&per_page=1`)).total_count;
const stars = (n) => (n >= 1000 ? `${Math.floor(n / 100) / 10}k`.replace(/\.0k$/, "k") : String(n));
const ordinal = (n) => n + (["th", "st", "nd", "rd"][((n % 100) - 20) % 10] || ["th", "st", "nd", "rd"][n % 100] || "th");

async function contributorStats(repo) {
  const first = await gh(`/repos/${repo}/contributors?per_page=1&anon=0`);
  const last = /[?&]page=(\d+)>; rel="last"/.exec(first.headers.get("link") || "");
  const total = last ? Number(last[1]) : (await first.json()).length;
  for (let page = 1; page <= 5; page++) {
    const list = await json(`/repos/${repo}/contributors?per_page=100&page=${page}`);
    const i = list.findIndex((c) => c.login === USER);
    if (i >= 0) return { total, rank: ordinal((page - 1) * 100 + i + 1) };
    if (list.length < 100) break;
  }
  return { total, rank: null };
}

const [ao, oh, aoMerged, aoReviewed, ohMerged, contrib, recent] = await Promise.all([
  json(`/repos/${AO}`),
  json(`/repos/${OH}`),
  count(`repo:${AO} type:pr is:merged author:${USER} base:main`),
  count(`repo:${AO} type:pr reviewed-by:${USER}`),
  count(`repo:${OH} type:pr is:merged author:${USER}`),
  contributorStats(AO),
  json(`/search/issues?q=${encodeURIComponent(`author:${USER} type:pr is:merged base:main -user:${USER}`)}&sort=updated&order=desc&per_page=5`),
]);

const today = new Date().toISOString().slice(0, 10);
const rank = contrib.rank ? ` · ${contrib.rank} of ${contrib.total} contributors` : "";
const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
const statsBlock = `<!--STATS:START-->
<div align="center">

| | |
|:---|:---|
| 🤖 **agent-orchestrator** | ${aoMerged} PRs merged to main · ${aoReviewed} PRs reviewed${rank} · ${stars(ao.stargazers_count)} ⭐ project |
| 🖥️ **OpenHands** | ${plural(ohMerged, "merged PR")} · ${stars(oh.stargazers_count)} ⭐ project |

<sub>Updated automatically from the GitHub API · ${today}</sub>

</div>
<!--STATS:END-->`;

const escape = (t) => t.replace(/[\[\]|<>]/g, (c) => `\\${c}`);
const recentBlock = `<!--RECENT:START-->
${recent.items
  .map((it) => {
    const repo = it.repository_url.split("/").slice(-2).join("/");
    return `- [${repo}#${it.number}](${it.html_url}) ${escape(it.title)}`;
  })
  .join("\n")}
<!--RECENT:END-->`;

const path = new URL("../../README.md", import.meta.url);
const before = await readFile(path, "utf8");
const replace = (src, name, block) => {
  const re = new RegExp(`<!--${name}:START-->[\\s\\S]*?<!--${name}:END-->`);
  if (!re.test(src)) throw new Error(`marker ${name} missing from README.md`);
  return src.replace(re, block);
};
// Ignore the date line when deciding whether anything changed, so a quiet day makes no commit.
const strip = (s) => s.replace(/Updated automatically from the GitHub API · \d{4}-\d{2}-\d{2}/, "");
const after = replace(replace(before, "STATS", statsBlock), "RECENT", recentBlock);
if (strip(after) === strip(before)) {
  console.log("no changes");
} else {
  await writeFile(path, after);
  console.log("README updated");
}
