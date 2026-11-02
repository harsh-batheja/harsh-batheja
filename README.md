<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0b1d2a,50:0f4c5c,100:14b8a6&height=250&section=header&text=Harsh%20Batheja&fontSize=44&fontColor=e6fffb&fontAlignY=32&desc=AI%20Agent%20Platforms%20%7C%20TypeScript%20and%20Node.js%20%7C%20Infrastructure&descSize=17&descColor=99f6e4&descAlignY=52&animation=fadeIn" width="100%" /></p>

<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&duration=3000&pause=1000&color=2DD4BF&center=true&vCenter=true&multiline=false&repeat=true&width=680&height=35&lines=Founding+engineer+on+an+open-source+AI+agent+orchestrator;Agent+lifecycles+%C2%B7+pipelines+%C2%B7+coding-agent+integrations;Ran+infrastructure+solo+for+4+years" alt="Typing SVG" />
  </a>
</p>

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/B.Tech_Computer_Science-2019-0f4c5c?style=for-the-badge&logo=googlescholar&logoColor=white" alt="Education" />
  &nbsp;
  <img src="https://img.shields.io/badge/OpenHands-Contributor-14b8a6?style=for-the-badge&logo=github&logoColor=white" alt="OpenHands contributor" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/📍_Indore,_India-0b1d2a?style=flat-square&labelColor=0b1d2a" alt="Location" />
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/harsh-batheja/"><img src="https://img.shields.io/badge/LinkedIn-0f4c5c?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  &nbsp;
  <a href="mailto:harshb012@gmail.com"><img src="https://img.shields.io/badge/Email-0d9488?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
  &nbsp;
  <a href="https://github.com/harsh-batheja"><img src="https://img.shields.io/badge/GitHub-0b1d2a?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=harsh-batheja&style=flat-square&color=14b8a6&label=Profile+Views" alt="Profile Views" />
</p>

<br/>

## About

<p align="justify">
I build the machinery that runs AI coding agents. Most recently I was a <b>founding engineer on <a href="https://github.com/OrchestratorInc/agent-orchestrator">agent-orchestrator</a></b>, an open-source orchestrator for Claude Code, Codex and 30+ coding agents. I built its session lifecycle layer, GitHub and GitLab webhooks, and the OpenCode integration, and I designed and built a multi-stage agent pipeline engine.
</p>

<p align="justify">
Before that I was the <b>sole infrastructure owner</b> for a smart-building organisation for four years (Proxmox, networking, backup and disaster recovery), and a software engineer on the <b>Namma Yatri founding team at Juspay</b>, where I set up an enforced 80% unit-test coverage gate and helped grow the backend team from 3 to 8.
</p>

<br/>

**`Open To:`**

```
🤖  AI agent platform and developer-tooling roles
🟦  TypeScript / Node.js backend roles
🛠️  Platform and infrastructure work
🌐  Open-source collaboration
```

<br/>

## Tech Stack

<br/>

<table align="center">
<tr>
<td align="center" width="190"><b>Languages</b></td>
<td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=ts,nodejs,python&theme=dark" alt="Languages" /></a></td>
</tr>
<tr>
<td align="center" width="190"><b>Web & Real-time</b></td>
<td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=nextjs,react&theme=dark" alt="Web" /></a></td>
</tr>
<tr>
<td align="center" width="190"><b>CI/CD & Automation</b></td>
<td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=jenkins,ansible,git,github,gitlab&theme=dark" alt="CI/CD" /></a></td>
</tr>
<tr>
<td align="center" width="190"><b>Containers & Cloud</b></td>
<td><a href="https://skillicons.dev"><img src="https://skillicons.dev/icons?i=docker,aws,linux&theme=dark" alt="Containers and cloud" /></a></td>
</tr>
</table>

<br/>

<div align="center">

**Shipped with**

`TypeScript` · `Node.js` · `Next.js` · `SSE` · `WebSockets` · `REST` · `webhooks` · `Docker` · `Jenkins` · `Ansible` · `AWS ECS` · `Proxmox` · `Linux`

**AI agents** — `Claude Code` · `Codex` · `OpenCode` · `Aider` · `agent orchestration` · `multi-stage pipelines`

</div>

<br/>

## Featured Work

<br/>

<details open>
<summary><b>🤖 agent-orchestrator — session lifecycle layer and webhooks</b></summary>

<br/>

> Open-source orchestrator that plans, runs and supervises teams of coding agents from task to merged PR.

<br/>

- **Lifecycle:** polls every agent session every 30 seconds and reacts to CI failures and review comments
- **Backlog auto-claim:** picks up labeled GitHub issues for up to 5 concurrent agents, with a human verification gate before issues close
- **Webhooks:** GitHub and GitLab events trigger lifecycle checks instantly instead of on the next poll
- **Agents:** OpenCode as a fully managed agent (session mapping, spawn, restore, send, cleanup); shared workspace hooks that removed about 200 duplicated lines across the Codex, Aider and OpenCode adapters
- **Observability:** structured logs, correlation IDs and health surfaces across core, web API, event streams and terminal sessions

**[🔗 My merged PRs](https://github.com/OrchestratorInc/agent-orchestrator/pulls?q=is%3Apr+author%3Aharsh-batheja+is%3Amerged)**

</details>

<br/>

<details>
<summary><b>🧩 Multi-stage agent pipeline engine</b> <sub>(designed and built solo · feature branch)</sub></summary>

<br/>

> Turns one-shot agent runs into structured, multi-step workflows.

<br/>

- **Core:** typed stages, a state machine and a flat-file store
- **Executor:** a fresh agent session per stage that you can still talk to mid-run
- **Scheduling:** DAG with parallel stages and stage routing
- **CLI:** pipelines, stages and artifacts from the command line
- Built on the `pipelines` branch; it was not merged to main

**[🔗 Branch](https://github.com/OrchestratorInc/agent-orchestrator/tree/pipelines)**

</details>

<br/>

<details>
<summary><b>🖥️ OpenHands — universal macOS desktop build</b></summary>

<br/>

> One DMG that runs on both Intel and Apple Silicon Macs.

<br/>

- Ships per-architecture bundled Node.js and uv runtimes and picks the right one at startup, so Intel Mac users no longer got arm64 binaries they couldn't run

**[🔗 Merged PR #17225](https://github.com/OpenHands/OpenHands/pull/17225)**

</details>

<br/>

<details>
<summary><b>🏗️ Solo infrastructure at Mradudhan</b> <sub>(2021 – 2025)</sub></summary>

<br/>

- Ran a Proxmox virtualization cluster for surveillance, smart-home services and internal applications, with automated backup and disaster recovery
- Designed the building network from scratch (connectivity, segmentation, security)
- Integrated electronic locks, cameras and real-time alerting into one IoT management platform

</details>

<br/>

<details>
<summary><b>🚕 Namma Yatri founding team at Juspay</b> <sub>(2020 – 2021)</sub></summary>

<br/>

- Built a Jenkins CI/CD pipeline (Docker, Ansible, AWS ECS) from a senior engineer's design, moving releases from every 2-4 weeks to weekly
- Set up an enforced 80% unit-test coverage gate and drove test-first adoption
- Interviewed about 20 candidates, onboarded 4 engineers and mentored 2 interns as the team grew from 3 to 8

</details>

<br/>

## Highlights

<br/>

<!--STATS:START-->
<div align="center">

| | |
|:---|:---|
| 🤖 **agent-orchestrator** | 45 PRs merged to main · 49 PRs reviewed · 14th of 132 contributors · 14k ⭐ project |
| 🖥️ **OpenHands** | 1 merged PR · 92.4k ⭐ project |

<sub>Updated automatically from the GitHub API · 2026-11-02</sub>

</div>
<!--STATS:END-->

<br/>

## Recently Merged

<!--RECENT:START-->
- [OpenHands/OpenHands#17225](https://github.com/OpenHands/OpenHands/pull/17225) feat(desktop): universal macOS DMG with per-arch bundled runtimes
- [OrchestratorInc/agent-orchestrator#1549](https://github.com/OrchestratorInc/agent-orchestrator/pull/1549) fix(web): render empty-state in sidebar when no projects configured
- [OrchestratorInc/agent-orchestrator#1390](https://github.com/OrchestratorInc/agent-orchestrator/pull/1390) feat(plugin): implement kimicode agent plugin
- [OrchestratorInc/agent-orchestrator#1330](https://github.com/OrchestratorInc/agent-orchestrator/pull/1330) fix(cli): derive projectId from prefixed issue id on spawn
- [OrchestratorInc/agent-orchestrator#1334](https://github.com/OrchestratorInc/agent-orchestrator/pull/1334) fix(core): dispatch detailed bugbot review comments to agents
<!--RECENT:END-->

<br/>

## GitHub Analytics

<br/>
<p align="center">
  <a href="https://github.com/harsh-batheja">
    <img width="49%" src="https://streak-stats.demolab.com?user=harsh-batheja&theme=dark&hide_border=true&background=0D1117&ring=14B8A6&fire=2DD4BF&currStreakLabel=2DD4BF&sideLabels=C9D1D9&dates=8B949E" alt="GitHub Streak" />
  </a>
</p>

<br/>

## Currently Learning

<br/>

```yaml
Building in public right now:
  - Kubernetes: deploying my resume service to a k3s homelab
    cluster with manifests I write myself
  - Prometheus + Grafana: instrumenting that service by hand
  - PostgreSQL: moving its build history into Postgres

Next:
  - Writing up the design of the agent pipeline engine
```

<br/>

## Connect

<br/>

<p align="center">
  <a href="mailto:harshb012@gmail.com"><img src="https://img.shields.io/badge/Gmail-harshb012@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white&labelColor=0b1d2a" alt="Gmail" /></a>
  &nbsp;
  <a href="https://www.linkedin.com/in/harsh-batheja/"><img src="https://img.shields.io/badge/LinkedIn-Harsh_Batheja-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0b1d2a" alt="LinkedIn" /></a>
</p>

<br/>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0b1d2a,50:0f4c5c,100:14b8a6&height=120&section=footer" width="100%" />
</p>
