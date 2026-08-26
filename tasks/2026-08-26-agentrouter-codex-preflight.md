# Codex CLI + AgentRouter Preflight — 2026-08-26

> **Two runs.** Run 1 (below) halted because Codex CLI was absent. Run 2 (appended at
> the end) proceeds after install approval. Run 1 preserved as historical context.

Status: **COMPLETE — RUN 2 PASSED.** AgentRouter works through genuine Codex CLI, no UA spoofing.

Read-only preflight. Nothing was installed, configured, or modified. Stopped at the
first gate per the task's own stop rule.

## RUN 1 — preflight before install (historical)

## Goal

Determine whether the AgentRouter token can run `gpt-5.6-sol` through the officially
supported **Codex CLI** client, without the generic HTTP workaround (and without
spoofing a `claude-cli` User-Agent, which is what made the raw HTTP path work in
`tasks/2026-08-26-agentrouter-api-test.md` Run 3).

## STEP 1 — Codex CLI check

**Result: NOT INSTALLED.** Verified four independent ways so this is not a PATH
artifact:

| Check | Result |
|---|---|
| `codex --version` (Git Bash) | `command not found` |
| `Get-Command codex` (PowerShell) | not found |
| `npm ls -g --depth=0` | only `@anthropic-ai/claude-code@2.1.186` — no Codex |
| `%APPDATA%\npm\codex[.cmd]` | absent |
| `%LOCALAPPDATA%\Programs\codex` | absent |
| `%LOCALAPPDATA%\codex` | absent |
| `%ProgramFiles%\codex` | absent |
| `~/.codex/` | **does not exist** |

Per the stop rule — *"If Codex CLI is not installed, report that and STOP. Do not
install anything without approval."* — testing halted here. Steps 3 through 6 were
not attempted.

## STEP 2 — existing Codex config

`~/.codex/config.toml` **does not exist** (the `~/.codex/` directory itself is absent).

Therefore:
- **No custom AgentRouter provider is configured.**
- There is no personal Codex configuration at risk of being overwritten.
- Nothing needed redaction; no secrets were encountered.

## STEPS 3–6 — not attempted

| Step | Status | Reason |
|---|---|---|
| 3 — isolated test config/profile | **Not attempted** | No Codex binary to configure |
| 4 — connectivity test | **Not attempted** | Blocked by Step 1 |
| 5 — structured manager test | **Not attempted** | Blocked by Step 4 |
| 6 — non-interactive capability | **Not determinable** | Capability is version-specific and must be read from an actual install, not from memory |

Deliberately **not** asserted from recollection: whether the current Codex CLI
supports config profiles, custom OpenAI-compatible base URLs, or a headless execution
mode. Those must be confirmed against the installed binary's own `--help` output.

## Reference (read-only registry lookup, nothing installed)

To make the recommendation accurate rather than remembered, the npm registry was
queried without installing:

| Field | Value |
|---|---|
| Package | `@openai/codex` |
| Latest version | `0.149.1` |
| Description | "Codex CLI is a coding agent from OpenAI that runs locally on your computer." |
| Homepage | `https://github.com/openai/codex#readme` |

## What this preflight cannot yet answer

The central question — *does AgentRouter accept our token through an official client,
without User-Agent spoofing?* — remains **open**. It is the important question,
because Run 3 of the API test established that `agentrouter.org/v1` admits only
clients identifying as `claude-cli`:

| Client identity sent | HTTP |
|---|---|
| default Node fetch UA | 401 `unauthorized_client_error` |
| `curl/8.4.0` | 401 `unauthorized_client_error` |
| `OpenAI/NodeJS 4.28.0` | 401 `unauthorized_client_error` |
| `claude-cli/1.0.0` | **200** |

Codex CLI would send its **own** User-Agent, not `claude-cli`. Based on the evidence
above — where an OpenAI-SDK-style UA was rejected — there is a **material risk that
Codex CLI is rejected by this host for the same reason**. That is a hypothesis, not a
finding, and only an actual install can settle it.

This is the single most valuable thing to test next, because the answer determines the
whole AI Manager runtime strategy:

- **If Codex works** → clean, officially supported, no spoofing, viable runtime.
- **If Codex is rejected** → the token is effectively usable only from Claude Code
  itself, and the AI Manager cannot be a standalone scheduled process against this
  provider without a workaround of questionable standing.

## Recommendation

Installing `@openai/codex` is a **one-command, reversible** test that would resolve
the strategy question directly. It is not requested here because approval is required.

If approved, the minimal sequence would be:

1. `npm i -g @openai/codex` (or a sandboxed local install to avoid touching global npm)
2. `codex --version` and `codex --help` — read actual supported flags rather than assume
3. Configure an **isolated** profile pointing at `https://agentrouter.org/v1` with
   `model = gpt-5.6-sol`, leaving any personal config untouched
4. Run the two tests (plain reply, then JSON) and record whether AgentRouter accepts
   Codex's native User-Agent

Note also, from the earlier API test: the token authenticates on
`agentrouter.org` for the Anthropic-compatible endpoint too (403 *model not
permitted*, not 401), and the plan exposes exactly one model — `gpt-5.6-sol`.

## Final status

| # | Item | Result |
|---|---|---|
| 1 | Codex installed | **No** |
| 2 | Codex version | n/a — not installed (registry latest: `@openai/codex@0.149.1`) |
| 3 | AgentRouter through Codex | **Not tested** — blocked at Step 1 |
| 4 | `gpt-5.6-sol` confirmed via Codex | **Not tested** (already confirmed via raw HTTP in the API-test doc) |
| 5 | Basic response | **Not tested** |
| 6 | Structured JSON result | **Not tested** |
| 7 | Non-interactive execution available | **Undetermined** — must be read from an install |
| 8 | User-Agent spoofing required | **None used.** No headers were set, faked, or overridden in this preflight. |
| 9 | Suitable as AI Manager runtime | **Cannot be assessed yet** |
| 10 | Limitation | Codex CLI absent; and a real risk that this host rejects Codex's native client identity, given it already rejects an OpenAI-SDK-style UA |
| 11 | Task MD path | `tasks/2026-08-26-agentrouter-codex-preflight.md` |
| 12 | Git status | see below |

## Git status

```
?? tasks/2026-08-26-agentrouter-api-test.md
?? tasks/2026-08-26-agentrouter-codex-preflight.md
?? tasks/2026-08-26-claude-agent-inventory.md
```

The other two files are from earlier tasks and are untouched by this preflight. This
preflight created only `tasks/2026-08-26-agentrouter-codex-preflight.md`.

Nothing installed. No Codex config created or modified. `.env.local` **not read** —
the token was never needed, because testing stopped before any request. No website
code, content, or configuration touched. No automation created. Not committed, not
pushed.

---

# RUN 2 — install approved, full test — **PASS**

Status: **SUCCESS.** The AgentRouter token runs `gpt-5.6-sol` through the genuine
Codex CLI with **no User-Agent spoofing**. Run 1's risk hypothesis was wrong — Codex's
own client identity is accepted.

## Objective

Determine whether our AgentRouter token can drive `gpt-5.6-sol` via the officially
supported Codex CLI client, using only Codex-supported configuration, without faking
any header.

## Install performed

```
npm install -g @openai/codex@latest      →  added 2 packages in 36s, exit 0
codex --version                          →  codex-cli 0.149.1
```

Global npm now holds exactly two packages: `@anthropic-ai/claude-code@2.1.186` and
`@openai/codex@0.149.1`. Binary resolves at
`~/AppData/Roaming/npm/codex`.

The install created `~/.codex/` containing only `tmp/` — **no `config.toml`**. There
was and is no personal Codex configuration to preserve or overwrite.

## Capabilities read from the INSTALLED version (not from memory)

From `codex --help` and `codex exec --help`:

| Capability | Finding |
|---|---|
| Non-interactive execution | **Yes** — `codex exec` (alias `e`) |
| Custom model providers | **Yes** — `[model_providers.<id>]` table |
| Custom `base_url` | **Yes** |
| Provider selection | **Yes** — `model_provider = "<id>"` |
| Isolated config home | **Yes** — `CODEX_HOME` env var (confirmed by `-p/--profile` help text: "Layer `$CODEX_HOME/<name>.config.toml`") |
| Config override on CLI | **Yes** — `-c key=value`, dotted paths, TOML-parsed |
| Structured output | **Yes** — `--output-schema <FILE>` (JSON Schema) |
| Final message to file | **Yes** — `-o/--output-last-message <FILE>` |
| Event stream | **Yes** — `--json` (JSONL to stdout) — *flag confirmed in help; not exercised* |
| No session persistence | **Yes** — `--ephemeral` |
| Skip user config | **Yes** — `--ignore-user-config` |
| Sandbox | **Yes** — `-s read-only \| workspace-write \| danger-full-access` |
| Run outside a git repo | **Yes** — `--skip-git-repo-check` |

Provider-config keys verified as present **in the shipped binary** (string scan of
`codex.exe`): `model_providers`, `base_url`, `env_key`, `wire_api`, `model_provider`,
`query_params`, `http_headers`, `env_http_headers`, `requires_openai_auth`. Both
`"responses"` and `"chat"` appear as wire values — but see the compatibility finding
below.

## Config approach — isolated, secret-free

Test config written to a **scratchpad** `CODEX_HOME`, never to the repo and never to
`~/.codex`:

```toml
model = "gpt-5.6-sol"
model_provider = "agentrouter"

[model_providers.agentrouter]
name = "AgentRouter"
base_url = "https://agentrouter.org/v1"
env_key = "AGENT_ROUTER_API_KEY"
wire_api = "responses"
```

Two deliberate properties:

1. **The API key is not in the file.** `env_key` makes Codex read it from the
   environment at runtime. Verified programmatically: the config does **not** contain
   the key.
2. **No `http_headers` / `env_http_headers` entries.** Codex sent its own genuine
   client identity. This was the entire point of the test.

Invocation shape:

```
CODEX_HOME=<scratch>/codex-home  AGENT_ROUTER_API_KEY=<from .env.local>
codex exec --skip-git-repo-check --ephemeral -s read-only -C <scratch>/codex-wd \
           -o <file> "<prompt>"  < /dev/null
```

## Compatibility finding — `wire_api = "chat"` is dead

First attempt with `wire_api = "chat"` failed hard:

```
Error loading config.toml: `wire_api = "chat"` is no longer supported.
How to fix: set `wire_api = "responses"` in your provider config.
More info: https://github.com/openai/codex/discussions/7782
```

Codex 0.149.1 **only** speaks the Responses API. AgentRouter's OpenAI-compatible
surface accepts it — consistent with the earlier raw-HTTP test, where the chat
completion returned an id prefixed `resp_`, indicating a Responses-based backend.

Also corrected: `-a/--ask-for-approval` is a **top-level** flag, not valid on
`codex exec` (`exec` is already non-interactive and reports `approval: never`).

## TEST 4 — basic connectivity — **PASS**

```
exit=0    latency 7,214 ms
model: gpt-5.6-sol      provider: agentrouter
approval: never         sandbox: read-only
session id: 01a03e67-ee83-7472-8941-1f8e1313b6cf
tokens used: 9,723
```

Response, verbatim: **`SANMATEO_CODEX_MANAGER_OK`** — exact, no extra prose.

No unauthorized-client error. No authentication error. No protocol error.

## TEST 5 — structured result — **PASS**

Run with Codex's native `--output-schema` (a real JSON Schema file), not
prompt-only coaxing:

```
tokens used: 9,283
```

Output: `{"decision":"NO_ACTION","reason":"codex preflight"}`

| Check | Result |
|---|---|
| Parses as JSON | **YES** |
| `decision` | `"NO_ACTION"` |
| `reason` | `"codex preflight"` |
| Matches target exactly | **true** |
| Extra keys | none |

## TEST 6 — headless automation — **PASS**

```
codex exec --skip-git-repo-check --ephemeral -s read-only -C <dir> \
           --output-schema <schema.json> -o <out.txt> "<prompt>"  < /dev/null

exit=0    latency 7,547 ms    tokens used: 13,351
→ {"decision":"NO_ACTION","reason":"headless test"}
```

The architecture **scheduler → Codex CLI → AgentRouter → gpt-5.6-sol → structured
result** is technically confirmed end to end.

### Operational gotcha worth recording

`codex exec` prints `Reading additional input from stdin...` and **will hang waiting
on stdin** if stdin is left open. The first structured run produced correct output but
never exited, and was killed at 6m40s by the harness timeout. Redirecting
`< /dev/null` fixes it — exit 0 in ~7.5 s. Any scheduler invocation **must** close
stdin.

## TEST 7 — security / side-effect check

| Check | Result |
|---|---|
| API key printed anywhere | **No** — never echoed; all output redaction-filtered |
| API key written to any file | **No** — filesystem scan of scratchpad + `tasks/` found the key in **no file** outside `.env.local` |
| API key committed | **No** — nothing staged or committed |
| Website file changed | **No** — repo tree shows only the three untracked `tasks/*.md` |
| Permanent Codex config overwritten | **No** — `~/.codex/config.toml` still does not exist |
| Fake User-Agent used | **No** — active config has zero `http_headers` / `env_http_headers` lines |
| Unexpected installs | **No** — global npm holds exactly claude-code + codex |

Test artifacts (config, schema, outputs, working dir) all live in the session
scratchpad, outside the repository.

## Final report

| # | Item | Result |
|---|---|---|
| 1 | Codex install | **PASS** |
| 2 | Exact version | **`codex-cli 0.149.1`** |
| 3 | Custom AgentRouter provider supported | **Yes** — `[model_providers.*]` with `base_url` + `env_key` |
| 4 | AgentRouter through genuine Codex CLI | **PASS** |
| 5 | `gpt-5.6-sol` through Codex | **PASS** — reported as `model: gpt-5.6-sol`, `provider: agentrouter` |
| 6 | Basic response | `SANMATEO_CODEX_MANAGER_OK` (exact) |
| 7 | Structured JSON | **PASS** — valid, exact, no extra keys, via native `--output-schema` |
| 8 | Headless / non-interactive | **Yes** |
| 9 | Automation command | `codex exec --skip-git-repo-check --ephemeral -s read-only -C <dir> --output-schema <schema.json> -o <out> "<prompt>" < /dev/null` with `CODEX_HOME` + `AGENT_ROUTER_API_KEY` in env |
| 10 | User-Agent spoofing required | **NO** — this is the headline result |
| 11 | Latency / tokens | 7.2 s / 9,723 · 7.5 s / 13,351 |
| 12 | Suitable as AI Manager runtime | **Yes, technically** — with caveats below |
| 13 | Limitations | see below |
| 14 | Task MD | `tasks/2026-08-26-agentrouter-codex-preflight.md` |
| 15 | Git status | three untracked `tasks/*.md`; nothing else |

## Limitations and cautions

1. **Token cost per call is high.** ~9.3k–13.4k tokens for trivial prompts. Codex
   ships a large agent system prompt on every invocation. At scheduled frequency this
   dominates cost — budget on the order of 10k tokens per manager tick, not per
   thousand words of output.
2. **Latency ~7.5 s** for a trivial structured response. Fine for a scheduler, far too
   slow for anything interactive.
3. **stdin must be closed** or the process hangs indefinitely (see gotcha above).
4. **`wire_api` must be `"responses"`.** `"chat"` is rejected outright by 0.149.1.
5. **Single model.** The plan exposes only `gpt-5.6-sol`; no fallback model exists on
   this token if it degrades.
6. **No rate-limit or quota headers** were observed from AgentRouter in any earlier
   raw test, so retry logic must be blind exponential backoff with jitter.
7. **Codex is an agent, not a plain completion API.** It has its own sandbox, approval
   model, and tool loop. For an AI Manager this is an advantage (it can inspect a repo
   under `-s read-only`), but it means output is agent-shaped and needs
   `--output-schema` discipline to stay machine-parseable.
8. **Pinned version.** Behaviour was verified against 0.149.1 specifically; `wire_api`
   already changed once. Pin the version in any automation and re-verify on upgrade.

## Git status

```
?? tasks/2026-08-26-agentrouter-api-test.md
?? tasks/2026-08-26-agentrouter-codex-preflight.md
?? tasks/2026-08-26-claude-agent-inventory.md
```

The other two files are from earlier tasks and are untouched here. Only this task MD
was written. No website code, content, or configuration changed. No AI Manager, no
agents, no scheduler created. Not committed, not pushed.
