# Claude Agent & Automation Inventory — SanMateo FixHub — 2026-08-26

Status: **COMPLETE** · Read-only audit · No application files changed

## Headline finding

**This repository (`d:\sanmateo-fixhub`) has no Claude configuration of any kind.**
There is no `.claude/` directory — no agents, no commands, no skills, no hooks, no
project MCP config, no settings file. Zero custom sub-agents exist for this project.

The sub-agents you remember creating are real, but they live in a **different
repository**: `d:\silverspringovenpro`. They are project-scoped and therefore **not
visible or usable from this repository**. See section B2.

## Task objective

Produce a complete, evidence-based inventory of every agent, sub-agent, command,
skill, hook, MCP/connector, and automation currently available to Claude for this
repository, so an automation architecture can be designed on facts rather than
recollection. Discovery only — nothing created, edited, or removed.

## Files and locations inspected

### This repository (`d:\sanmateo-fixhub`)
- `.claude/` — **does not exist** (confirmed via `ls` and repo-wide `find`)
- `CLAUDE.md` — exists (1 line: `@AGENTS.md`)
- `AGENTS.md` — exists (single Next.js documentation rule)
- `README.md`
- Repo-wide search for nested `CLAUDE.md` / `AGENTS.md` — only the two at root
- Repo-wide search for any `.claude` directory — none
- `.mcp.json` — does not exist
- `.github/` — does not exist (no Actions/workflows)
- `.git/hooks/` — only `.sample` files, no active hooks
- `scripts/`, `bin/`, `.husky/` — none exist
- `package.json` scripts — `dev`, `build`, `start`, `lint` only
- `vercel.json` — one Vercel cron entry
- `app/api/cron/publish-blogs/route.ts` — cron handler
- `docs/` — 7 human-authored reference docs (no agent definitions)

### User/global Claude config (`C:\Users\FINE COMPUTER 62\.claude\`)
- `settings.json` — `{ autoUpdatesChannel, theme }` only. No agents, hooks, or permissions.
- `agents/`, `commands/`, `hooks/`, `skills/`, `output-styles/` — **none exist**
- `plugins/` — marketplace catalog only (`claude-plugins-official`), **nothing installed**
- `mcp-needs-auth-cache.json` — connector auth state
- `.credentials.json` — **not opened** (secrets; existence noted only)
- `~/.claude.json` — inspected by key; project entries and `mcpServers` only

### Sibling repositories (for provenance only)
- `d:\silverspringovenpro\.claude\` — 7 agents, 4 commands, 2 skills
- `d:\conroemetalroofpros\.claude\`, `d:\my-nextjs-app\.claude\`,
  `d:\pinterestvideoindir\.claude\` — exist, not inventoried (out of scope)

---

## A. Custom project sub-agents

**Count: 0.**

No `.claude/agents/` directory exists in this repository. There is nothing to
enumerate, describe, or tabulate for section A.

## B. Global / user-level sub-agents available in this project

### B1. User-level custom agents
**Count: 0.** `~/.claude/agents/` does not exist, so no user-scoped custom agent is
inherited by this project.

### B2. Agents that exist but are NOT available here

These are yours, but scoped to `d:\silverspringovenpro`. Claude only loads
`.claude/agents/` from the current project (plus `~/.claude/agents/`), so **none of
these are reachable from `d:\sanmateo-fixhub`**. Recorded because they are the most
likely basis for a future SanMateo FixHub agent set — and because every one of them
is written for an *oven repair* site, so none can be copied without rewriting.

| Agent | Tools | Model | Purpose (from its own description) |
|---|---|---|---|
| `topic-scout` | Read, Edit, Grep, Glob, WebSearch, WebFetch | sonnet | Researches new article topics, dedupes, queues into `seo/article-backlog.md` |
| `learn-writer` | Read, Write, Glob, Grep (+`memory: project`) | sonnet | Writes Learning Center articles — symptom, question, error-code, brand guides |
| `content-reviewer` | Read, Grep, Glob | sonnet | Editorial quality gate; reviews drafts for quality/AEO/SEO/compliance |
| `page-builder` | Read, Write, Glob, Grep (+`memory: project`, 2 skills) | sonnet | Builds brand and location ranking pages |
| `schema-writer` | Read, Write, Edit, Glob, Grep | sonnet | Creates/fixes JSON-LD as Next.js code |
| `internal-linker` | Read, Edit, Glob, Grep | sonnet | Maintains hub-and-spoke internal linking |
| `onpage-auditor` | Read, Grep, Glob, Bash, WebFetch, Write | haiku | Read-only SEO + compliance audit; metadata, headings, links, schema, phones |

Their companion commands (`/daily-audit`, `/new-article`, `/new-page`,
`/publish-article`) and skills (`local-service-page-content`,
`local-location-page-content`) are likewise scoped to that project.

Corroborating evidence: `~/.claude.json` `skillUsage` records `daily-audit` (1 use,
2026-08-11), `new-article` (3 uses, last 2026-08-24), `publish-article` (1 use,
2026-08-24) — all belonging to that other project, none to this one.

### B3. Built-in agent types (available everywhere, not custom)

`claude`, `claude-code-guide`, `Explore`, `general-purpose`, `Plan`,
`statusline-setup`. Anthropic-provided defaults, not project configuration.

## C. Claude slash commands

**Project-specific commands: 0.** No `.claude/commands/` in this repository, and none
at user level.

Only built-in CLI commands are available (`/code-review`, `/loop`, `/schedule`,
`/init`, `/security-review`, etc.). The four custom commands listed in B2 belong to
`d:\silverspringovenpro`.

## D. Claude skills

**Project skills: 0.** No `.claude/skills/` in this repository or at user level.

Skills present in the session are Anthropic-provided, not project assets:

| Skill | Purpose | Scope | Relevant to SanMateo FixHub? |
|---|---|---|---|
| `code-review` | Diff/PR review for correctness + cleanup | built-in | Yes — dev QA |
| `simplify` | Quality-only refactor pass | built-in | Yes — dev QA |
| `security-review` | Security review of branch changes | built-in | Yes |
| `run` | Launch/drive the app to verify a change | built-in | Yes — deployment verification |
| `init` | Generate a CLAUDE.md | built-in | Situational |
| `loop` | Recurring prompt on an interval | built-in | Yes — automation building block |
| `schedule` | Cron-scheduled cloud agents (routines) | built-in | **Yes — key to autonomy** |
| `update-config` | Edit settings.json, permissions, hooks | built-in | Yes — needed to create hooks |
| `fewer-permission-prompts` | Build a Bash allowlist | built-in | Yes — needed for unattended runs |
| `claude-api` | Anthropic API/model reference | built-in | Only if building on the API |
| `keybindings-help` | Keybinding customization | built-in | No |
| `design` | Multi-artboard design canvas | built-in | Marginal (UI mockups) |
| `dataviz` | Chart/dashboard design system | built-in | Marginal (reporting) |
| `artifact-design` / `artifact-diagramming` / `artifact-capabilities` | Artifact authoring | built-in | Marginal (reporting) |

Which agents can use them: no custom agents exist, so only the main session and the
built-in agent types.

## E. Hooks / automatic triggers

**None. Explicitly: this repository has zero hooks.**

- No `.claude/settings.json` or `.claude/settings.local.json` (no `hooks` block)
- No `.claude/hooks/` directory
- No active `.git/hooks/` (only Git's stock `.sample` files)
- No `.husky/`
- User `~/.claude/settings.json` contains no `hooks` key

Nothing in this repository causes Claude to run anything automatically.

## F. MCP / connectors / tools

### Locally configured MCP servers

| Name | Scope | Transport / purpose | Status |
|---|---|---|---|
| `ahrefs` | user-global (`~/.claude.json` → `mcpServers`) | HTTP → `https://api.ahrefs.com/mcp/mcp` — SEO data | **Needs authorization** (listed in `mcp-needs-auth-cache.json`). Redundant with the claude.ai Ahrefs connector below. |

Project-scoped `mcpServers` for all three recorded `sanmateo` paths: **empty**.
`allowedTools` for all three: **`[]`** (no pre-approved tools).

### claude.ai account connectors visible this session

| Connector | Purpose | Authorization status | Blocking? |
|---|---|---|---|
| claude.ai **Ahrefs** | Keyword/SERP/backlink/GSC/site-audit data | **Authorized and verified working** | No |
| claude.ai **Gmail** | Email read/send/label | Surfaced, not flagged | No |
| claude.ai **Google Drive** | File search/read/create | Surfaced, not flagged | No |
| claude.ai **Shopify** | Store management | Surfaced, not flagged | No (irrelevant here) |
| claude.ai **Webflow** | Site/CMS management | Surfaced, not flagged | No (irrelevant here) |
| claude.ai **WordPress.com** | Site/content management | Surfaced, not flagged | No (irrelevant here) |
| claude.ai **Canva** | Design | **Needs authorization** | Yes |
| claude.ai **emcp-mohsintesting-cyfrow-net** | Unknown/custom | **Needs authorization** | Yes |

**Verified, not assumed:** the Ahrefs connector status was confirmed by an actual
read-only call (`subscription-info-limits-and-usage`, which consumes zero API units).
It returned: Advanced plan billed monthly, workspace usage **657,620 / 1,000,000**
units, quota resets **2026-09-08**. So Ahrefs research is available today.

Important distinction: the lowercase local `ahrefs` MCP server is a **separate,
unauthorized duplicate** of the working claude.ai Ahrefs connector. The earlier
"ahrefs needs authorization" warning refers to that local entry, not to the connector
that actually works.

Authorization cannot be completed from a non-interactive session. claude.ai
connectors are authorized in claude.ai connector settings; other servers via
`claude mcp` or `/mcp` in an interactive session.

Which agents can use these: no custom agents exist, so the main session only.

### Installed plugins
**None.** Only the `claude-plugins-official` marketplace *catalog* is cached; no
plugin is installed or enabled for this project.

## G. Scripts / scheduled / automation utilities

| Item | What it is | Runs without Claude? | Notes |
|---|---|---|---|
| `vercel.json` → `crons` | Vercel cron hitting `/api/cron/publish-blogs/` daily at `0 15 * * *` (15:00 UTC) | **Yes** | Platform automation, entirely independent of Claude |
| `app/api/cron/publish-blogs/route.ts` | Revalidates blog hub, sitemap, layout so scheduled posts go live | Yes | Bearer-auth via `CRON_SECRET`, constant-time compare, fails closed when unset |
| `package.json` scripts | `dev`, `build`, `start`, `lint` | Manual | No agent wiring |
| `.github/workflows` | — | — | **Does not exist** |

The only recurring automation in this project is the Vercel cron. It publishes
already-written content; it does not invoke Claude and cannot create content.

## H. Instruction files controlling agent behavior

| File | Content | Effect |
|---|---|---|
| `CLAUDE.md` | `@AGENTS.md` (import only) | Delegates all project rules to AGENTS.md |
| `AGENTS.md` | One rule, in `nextjs-agent-rules` markers: this Next.js version has breaking changes; read `node_modules/next/dist/docs/` before writing code; heed deprecation notices | The **only** behavioural constraint in the repo. Auto-generated block — likely tool-managed, do not hand-edit. |
| `docs/*.md` (7 files) | content architecture, internal linking map, keyword research/mapping, form + Ringba setup, SEO launch checklist | Human reference. **Not** loaded automatically; no agent consumes them today. |

There are no rules covering commit policy, validation gates, content standards,
truthfulness/claim policy, or schema policy — even though this project has strong
*de facto* conventions (no unverified claims, no fabricated reviews, estimate-before-work
language, `supported: false` brand gating). Those conventions currently live only in
code comments and conversation history.

---

## Agent inventory table

| Agent | Scope | Primary Role | Can Edit | Can Run Commands | MCP/External Tools | Trigger/Usage | Status |
|---|---|---|---|---|---|---|---|
| — | — | *No custom sub-agents exist for this repository* | — | — | — | — | — |

For completeness, the same table for the out-of-scope sibling project:

| Agent | Scope | Primary Role | Can Edit | Can Run Commands | MCP/External Tools | Trigger/Usage | Status |
|---|---|---|---|---|---|---|---|
| topic-scout | silverspringovenpro | Topic research + backlog | Yes (Edit) | No | WebSearch, WebFetch | via `/new-article` | Not available here |
| learn-writer | silverspringovenpro | Article drafting | Yes (Write) | No | No | via `/new-article` | Not available here |
| content-reviewer | silverspringovenpro | Editorial QA gate | No | No | No | after learn-writer | Not available here |
| page-builder | silverspringovenpro | Brand/location pages | Yes (Write) | No | No | via `/new-page` | Not available here |
| schema-writer | silverspringovenpro | JSON-LD authoring | Yes (Write, Edit) | No | No | on auditor finding | Not available here |
| internal-linker | silverspringovenpro | Hub-and-spoke linking | Yes (Edit) | No | No | after new content | Not available here |
| onpage-auditor | silverspringovenpro | SEO/compliance audit | Yes (Write — reports) | **Yes (Bash)** | WebFetch | `/daily-audit` | Not available here |

None of these can commit or push; `/publish-article` performs the git work itself
under an explicit pre-flight allowlist.

## How Claude currently chooses agents in this project

- **Manual invocation:** N/A — there are no custom agents to invoke.
- **Automatic invocation:** None. No hooks, no `description`-based auto-delegation,
  because no agent definitions exist.
- **Task-type selection:** Only the built-in heuristic for built-in agent types
  (`Explore`, `Plan`, `general-purpose`), and this session is additionally instructed
  not to use the Agent tool unless asked.
- **Coordinator/orchestrator:** None exists.
- **Hooks triggering agents:** None.
- **Commands delegating to agents:** None in this repository.
- **Recurring/background automation:** Only the Vercel cron (platform-side).
- **Does closing Claude stop agent work?** Yes — completely. Every Claude action here
  is session-bound. Subagents, background Bash tasks, and monitors all die with the
  session.
- **Can any agent run without an interactive session?** No. Nothing is configured for
  headless or scheduled Claude execution. The built-in `/schedule` skill (cloud
  routines) and `/loop` could provide this, but neither is set up.

## Project-management capability matrix

No custom agents exist, so every role below is currently uncovered by a dedicated
agent. The column records what the *general-purpose session* can do ad hoc today.

| Role | Dedicated agent? | Session capability today |
|---|---|---|
| Technical SEO | ❌ none | ⚠️ ad hoc |
| On-page SEO | ❌ none | ⚠️ ad hoc |
| Content planning | ❌ none | ⚠️ ad hoc |
| Content writing | ❌ none | ⚠️ ad hoc |
| Content QA | ❌ none | ⚠️ ad hoc |
| Semantic SEO / entity optimization | ❌ none | ⚠️ ad hoc |
| Local SEO | ❌ none | ⚠️ ad hoc |
| Schema / structured data | ❌ none | ⚠️ ad hoc |
| Internal linking | ❌ none | ⚠️ ad hoc (`docs/internal-linking-map.md` exists as reference) |
| Blog scheduling | ❌ none | ✅ infrastructure exists (Vercel cron + `content/blogs.ts` gating) |
| Competitive research | ❌ none | ⚠️ ad hoc |
| Ahrefs research | ❌ none | ✅ connector authorized and working |
| Design / UI review | ❌ none | ⚠️ ad hoc (headless Chrome screenshots proven in-session) |
| Development | ❌ none | ✅ full tool access |
| Testing / QA | ❌ none | ⚠️ lint + build only; no test suite in the repo |
| Security | ❌ none | ⚠️ built-in `/security-review` skill |
| Performance / Core Web Vitals | ❌ none | ❌ no tooling configured |
| Git / version control | ❌ none | ✅ full |
| Deployment verification | ❌ none | ✅ proven (live production probes) |
| Indexing / GSC monitoring | ❌ none | ⚠️ Ahrefs connector exposes GSC endpoints |
| Autonomous PM / orchestrator | ❌ none | ❌ not possible unattended |

## Duplication and gaps

### Duplicate / overlapping agents
**None** — there are no agents to overlap.

One genuine duplication does exist at the **connector** level: the local `ahrefs` MCP
server duplicates the working claude.ai Ahrefs connector, and the local copy is
unauthorized. It is a source of false "needs authorization" warnings and should be
removed or authorized (not both).

### Missing capabilities
Every role is missing, because the agent layer is empty. Ranked by what blocks
autonomous operation of this specific site:

1. **Orchestrator / project manager** — nothing decides what to do next.
2. **Content QA / truthfulness gate** — this site's hardest constraint is *no
   unverified claims* (no reviews, ratings, licensing, warranty, brand-service
   claims while `supported: false`). Today that rule is enforced only by a human
   reading the diff. This is the highest-risk gap.
3. **Content planner + writer** — `content/blogs.ts` supports scheduled publishing,
   but nothing generates the backlog or the drafts.
4. **Technical SEO auditor** — no automated check for canonical/metadata/schema drift.
5. **Schema auditor** — the recent `heroUrl` and trailing-slash issues were found by
   hand; nothing would have caught them.
6. **Internal linking agent** — `docs/internal-linking-map.md` is unenforced.
7. **Local SEO auditor** — NAP/service-area/location-page consistency unchecked.
8. **Deployment verifier** — the live-production checks done manually this week are
   exactly what should be automated.
9. **GSC / indexing monitor** — Ahrefs GSC endpoints are available but unused.
10. **Performance / CWV auditor** — no tooling at all.
11. **Analytics / reporting** — no scheduled reporting.
12. **UX / CRO reviewer** — no dedicated coverage.
13. **Link-building / off-page** — no coverage.

### Closest thing to a project manager today
**Nothing.** The interactive session is the de facto orchestrator. Among the sibling
project's agents, `onpage-auditor` comes closest in spirit (broad, proactive,
Bash-capable, writes reports) but it is oven-repair-specific and not available here.

### Can the project run autonomously without keeping Claude open?
**No.** Only the Vercel cron survives session close, and it merely revalidates
already-authored content. There are no cloud routines, no GitHub Actions, no hooks,
and no headless Claude configuration. Everything else stops the moment the session
ends.

## Validation performed

- Verified absence (not just non-discovery) of `.claude/` via direct `ls` plus a
  repo-wide `find`, and at user level via per-directory existence checks.
- Verified no installed plugins by inspecting `plugins/` contents and the absence of
  any `enabledPlugins` key on the project entries in `~/.claude.json`.
- Verified project-scoped MCP and `allowedTools` for all three recorded `sanmateo`
  path variants.
- **Verified** the Ahrefs connector by making a real zero-cost read-only API call
  rather than inferring from the warning banner.
- Traced the three `skillUsage` entries to their actual definition files, confirming
  they belong to `d:\silverspringovenpro`.
- Confirmed no secrets were read or printed: `.credentials.json` was never opened;
  MCP config was printed through a redaction filter; `CRON_SECRET` was never read.

## Final result

Zero custom sub-agents, zero project commands, zero project skills, zero hooks, and
zero project MCP servers exist for `d:\sanmateo-fixhub`. The agent layer is a clean
slate. The only live automation is a Vercel cron that revalidates scheduled blog
posts. Ahrefs research is available and authorized; Canva and one custom connector
plus the redundant local `ahrefs` entry remain unauthorized.

The previously built agent set exists in `d:\silverspringovenpro` and is written for
an oven-repair site — usable as a structural template, not as a drop-in.

## Git status

```
 M tasks/  (new file only)
?? tasks/2026-08-26-claude-agent-inventory.md
```

No application code, content, configuration, agent, hook, or automation file was
modified. This audit file is the only change. Not committed, not pushed.
