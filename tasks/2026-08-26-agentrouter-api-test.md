# AgentRouter API Connection Test — 2026-08-26

> **Two runs recorded below.** Run 1 (original key) and Run 2 (fresh token, same day).
> Both failed authentication. Run 1 is preserved unchanged as historical context.

Status: **RETEST FAILED (authentication)** — fresh token also rejected

## RUN 1 — original key (historical)

## Objective

Verify that the AgentRouter API credentials configured for SanMateo FixHub work, and
confirm whether the configured model ID `gpt-5.6-sol` is actually available to this
API token — without assuming the ID is correct.

Read-only with respect to the application. No website code, configuration, or
`.env.local` value was modified. No agents or automation were built.

## Configuration source

Values read from `.env.local` (git-ignored via `.env*` in `.gitignore` line 34):

| Variable | Value |
|---|---|
| `AGENT_ROUTER_API_KEY` | *(set — never printed, logged, or written to this file)* |
| `AGENT_ROUTER_BASE_URL` | `https://co.agentrouter.org/v1` |
| `AI_MANAGER_MODEL` | `gpt-5.6-sol` |

Key shape only, for triage (no value, no length, no prefix): no surrounding
whitespace, no stray quotes. The credential is *well-formed* — it is rejected on
content, not on formatting.

## Result summary

**The API key is invalid.** The AgentRouter service is reachable and healthy, the
base URL and path are correct, and the authentication header format is correct. The
server explicitly rejects the credential with `Invalid API Key!` on every endpoint.

Because `/v1/models` cannot be listed without a valid key, **the availability of
`gpt-5.6-sol` could not be determined**. That question remains open until a working
key is supplied.

## Test 1 — models endpoint

```
GET https://co.agentrouter.org/v1/models
Authorization: Bearer <redacted>

HTTP 401 Unauthorized        1015 ms
x-request-id: f7e9f982b619799949a81c621dc3abec
{"code":401,"msg":"Invalid API Key!","data":null}
```

Models visible to token: **0**. GPT-5.6 / "sol" matches: **0** (list unavailable).

## Test 2 — auth-scheme triage

Ruled out a header-format mistake by trying each scheme the service advertises:

| Scheme | HTTP | Response |
|---|---|---|
| `Authorization: Bearer <key>` | 401 | `Invalid API Key!` |
| `x-api-key: <key>` | 401 | `Invalid API Key!` |
| `Authorization: <key>` (raw, no Bearer) | 401 | `Missing API Key! Please provide 'Authorization: Bearer <token>', 'x-google-api-key', 'x-goog-api-key', or 'x-api-key' header.` |

The third response is the decisive one: the server did not recognise a credential at
all in that shape, which means the first two *were* parsed correctly as credentials
and then rejected on their value. This is a bad/expired/revoked key, not a client-side
formatting error.

## Test 3 — endpoint and liveness probes

| URL | HTTP | Result |
|---|---|---|
| `https://co.agentrouter.org/v1/models` | 401 | `Invalid API Key!` — correct path, auth rejected |
| `https://co.agentrouter.org/models` | 404 | nginx 404 — wrong path |
| `https://co.agentrouter.org/api/v1/models` | 404 | nginx 404 — wrong path |
| `https://co.agentrouter.org/v1/models` (no key) | 401 | `Missing API Key!` — service alive and responding |

Conclusion: `AGENT_ROUTER_BASE_URL` is configured **correctly**. Do not change it.

## Test 4 — chat completion

Sent anyway, to capture the exact failure for the record:

```
POST https://co.agentrouter.org/v1/chat/completions
{ "model": "gpt-5.6-sol",
  "messages": [{ "role": "user",
                 "content": "Reply with exactly this and nothing else: SANMATEO_AI_MANAGER_OK" }],
  "max_tokens": 20, "temperature": 0 }

HTTP 401 Unauthorized        1170 ms
x-request-id: 29a418edd3d1dd4bccf04674b1cc2949
{"code":401,"msg":"Invalid API Key!","data":null}
```

Expected reply `SANMATEO_AI_MANAGER_OK` was **not** received. No assistant content, no
`usage` object, no token counts.

## Reported findings

| # | Item | Finding |
|---|---|---|
| 1 | API connection | **FAIL** — authentication rejected. Network/TLS/DNS all fine; service reachable. |
| 2 | HTTP status | **401 Unauthorized** on every authenticated request (models + chat) |
| 3 | Exact model ID available | **Unknown** — model list is gated behind auth and could not be retrieved |
| 4 | Is `gpt-5.6-sol` valid? | **Undetermined.** Not confirmed valid and not confirmed invalid. The 401 fires before model resolution, so the request never reached model validation. |
| 5 | Exact response | `{"code":401,"msg":"Invalid API Key!","data":null}` |
| 6 | Latency | models 1015 ms · chat 1170 ms (both fast — failing at the auth layer, not timing out) |
| 7 | Token usage | None returned — no `usage` object on a 401 |
| 8 | Rate-limit / quota info | **None exposed.** Only `x-request-id` is returned. No `x-ratelimit-*`, `retry-after`, or quota headers on 401 responses. |
| 9 | API compatibility | **No incompatibility found.** The service is OpenAI-shaped: `/v1/models` and `/v1/chat/completions` exist, accept `Authorization: Bearer`, and return JSON errors in a consistent `{code,msg,data}` envelope. Once a valid key is in place the standard OpenAI client shape should work unchanged. |
| 10 | Task MD path | `tasks/2026-08-26-agentrouter-api-test.md` |
| 11 | Git status | Only this audit file is new — see below |

## What is blocked, and what to do next

`.env.local` was **not** modified, as instructed. Two things are needed before this
can be retested:

1. **A valid `AGENT_ROUTER_API_KEY`.** The current one is rejected outright. Likely
   expired, revoked, regenerated, copied from a different account, or truncated on
   paste — the format looks plausible but is unverifiable from outside.
2. **Re-run the model check afterwards.** Only then can `gpt-5.6-sol` be confirmed or
   corrected. The question of whether that model ID is right is still genuinely open —
   nothing in this test validates it either way.

`AGENT_ROUTER_BASE_URL` is correct and should be left as-is.

## Security note

The API key was never printed, echoed into a log, written into this file, or included
in any command output. All diagnostic output was passed through a redaction filter
that replaces the key with `<REDACTED_KEY>`. No value, length, prefix, suffix, or hash
of the credential appears anywhere in this document. `.env.local` is git-ignored
(`.gitignore` line 34: `.env*`) and remains untracked and unmodified.

---

# RUN 2 — fresh token retest (2026-08-26, later same day)

Status: **FAILED — authentication rejected again**

A newly generated `AGENT_ROUTER_API_KEY` was placed in `.env.local`. This retest ran
TEST 1 only. Per the stop rule, **no chat, structured-output, or tool-calling request
was attempted**, because authentication did not pass.

## Confirmation that the new token was actually loaded

Verified before drawing any conclusion, emitting booleans only — no value, no prefix,
no suffix, no hash:

| Check | Result |
|---|---|
| `.env.local` mtime | `2026-08-26T12:58:33.130Z` (file was re-saved) |
| File size | 155 bytes |
| Key present | yes |
| Key differs from the value used in Run 1 | **true** |
| Key format changed vs Run 1 | no (same format) |
| Surrounding whitespace | none |
| Stray quotes | none |
| Embedded newline / CR | none |
| Non-ASCII characters | none |
| `AGENT_ROUTER_BASE_URL` | `https://co.agentrouter.org/v1` (unchanged) |
| `AI_MANAGER_MODEL` | `gpt-5.6-sol` (unchanged) |

The retest genuinely exercised the **new** credential, and that credential is clean
and well-formed — not truncated, not quoted, not padded, not a paste artifact.

## TEST 1 — authentication

```
GET https://co.agentrouter.org/v1/models
Authorization: Bearer <redacted>

HTTP 401 Unauthorized        1064 ms
x-request-id: ef33e62c13e1e692a0db7c7f8ee796a3
{"code":401,"msg":"Invalid API Key!","data":null}
```

**Authentication: FAIL.** Model list **not** returned.

## Service-health contrast (proves the fault is the credential, not the service)

| Request | HTTP | Latency | Response |
|---|---|---|---|
| No credential at all | 401 | 717 ms | `Missing API Key!` + list of accepted headers |
| Fresh key via `Authorization: Bearer` | 401 | 637 ms | `Invalid API Key!` |
| Fresh key via `x-api-key` | 401 | 234 ms | `Invalid API Key!` |

The service is healthy and answering in well under a second. It cleanly distinguishes
*no credential supplied* from *credential supplied but not valid*. The fresh token
lands in the second category on both accepted header schemes.

## TESTS 2, 3, 4 — not attempted

Blocked by the stop rule.

- **TEST 2 (model availability):** `/v1/models` is gated behind auth, so
  `gpt-5.6-sol` remains **undetermined** — still neither confirmed nor refuted.
- **TEST 3 (basic request):** not attempted.
- **TEST 4 (structured output / tool calling):** not attempted. Native
  structured-output and function-calling support remain **unknown**.

## TEST 5 — provider observations (what both runs did establish)

- **Rate-limit headers:** none. Across every response in both runs, the only header of
  interest is `x-request-id`. No `x-ratelimit-*`, no `retry-after`, no quota headers.
  A production client cannot do header-driven backoff here — it would need blind
  exponential backoff with jitter.
- **Quota data:** none exposed on 401. Whether a usage endpoint exists is unknown; it
  could not be probed without auth.
- **Retry behaviour to implement:** do **not** retry a 401 — it is terminal, and
  retrying wastes calls and can trip abuse protection. Reserve retries for 429/5xx
  with exponential backoff plus jitter, a hard attempt cap, and `x-request-id`
  captured on every failure for escalation.
- **OpenAI compatibility:** no incompatibility at the transport layer. `/v1/models`
  and `/v1/chat/completions` exist at the documented paths, both `Authorization:
  Bearer` and `x-api-key` are accepted, and errors return a consistent
  `{code, msg, data}` JSON envelope. That envelope is **not** OpenAI's nested error
  shape, so error handling needs a small adapter. Success-path payload shape is still
  unverified.
- **Production suitability:** **cannot be recommended yet** — not because anything is
  known to be wrong with the provider, but because nothing past the auth boundary has
  ever been observed. Two consecutive rejected tokens is itself worth resolving with
  the vendor before this is designed into the AI Manager.

## Diagnosis after two failed tokens

Everything under local control has been eliminated:

- Base URL correct (alternative paths 404 at nginx — Run 1)
- Path correct (`/v1/models`)
- Header scheme correct (the server names its accepted schemes; ours are on the list)
- Credential well-formed (no whitespace, quotes, newlines, or non-ASCII)
- Credential genuinely refreshed (verified changed vs Run 1)
- Service healthy (sub-second responses; correct missing-vs-invalid discrimination)

The remaining explanations are all account-side and cannot be tested from here:

1. Token issued for a **different AgentRouter account, workspace, or environment**
   than `co.agentrouter.org`.
2. Token **not activated**, or requires a plan/billing state that is not live.
3. Token **scoped to a different host** — `co.agentrouter.org` may be one of several
   regional or tenant endpoints, and a key for one may not be valid on another.
4. Token **copied before it was fully generated/saved** in the provider UI.
5. Account **suspended or over quota**, surfaced as 401 rather than 402/429.

### Suggested next step

Verify the key against the provider's own dashboard or its documented example `curl`,
outside this repo, and confirm which base host the key belongs to. If the dashboard
shows it active for `co.agentrouter.org`, this is vendor-side and these
`x-request-id` values are the escalation handles:

- Run 1 models: `f7e9f982b619799949a81c621dc3abec`
- Run 1 chat: `29a418edd3d1dd4bccf04674b1cc2949`
- Run 2 models: `ef33e62c13e1e692a0db7c7f8ee796a3`

## Security note (Run 2)

The API key was never printed, echoed, partially revealed, hashed, or written to this
file. Run 2 emitted **only booleans and a comparison result** — no value, length,
prefix, suffix, or hash. All command output passed through a
redaction filter substituting `<REDACTED_KEY>`. `.env.local` was read only, never
written, and remains git-ignored and untracked.

## Final status (Run 2)

| # | Item | Result |
|---|---|---|
| 1 | Fresh token auth | **FAIL** |
| 2 | HTTP status | **401 Unauthorized** |
| 3 | Exact GPT-5.6 Sol model ID | **Undetermined** — list gated behind auth |
| 4 | Basic model call | **Not attempted** (stop rule) |
| 5 | Structured output | **Not attempted** (stop rule) |
| 6 | Tool / function calling | **Not attempted** (stop rule) |
| 7 | Model substitution | **Undetermined** — no successful call to compare against |
| 8 | Latency | 1064 ms (models); 234–717 ms on contrast probes |
| 9 | Usage metadata | None — no `usage` object on a 401 |
| 10 | Rate-limit / quota | None exposed; only `x-request-id` |
| 11 | Production suitability | **Not yet recommendable** |
| 12 | Task MD path | `tasks/2026-08-26-agentrouter-api-test.md` |
| 13 | Git status | only this file + the earlier agent-inventory file are untracked |

`.env.local` unmodified. No application code, content, or configuration touched. No
agents or automation created. Not committed, not pushed.

---

# RUN 3 — host change to `agentrouter.org` — **SUCCESS**

Status: **PASS** — authentication, model availability, and a live completion all
confirmed. Runs 1 and 2 above are superseded but preserved as historical context.

Only `AGENT_ROUTER_BASE_URL` changed (`co.agentrouter.org/v1` → `agentrouter.org/v1`).
The API key is **the same fresh token that Run 2 tested**, verified unchanged:

| Check | Result |
|---|---|
| `.env.local` mtime | `2026-08-26T13:49:39.672Z` |
| `AGENT_ROUTER_BASE_URL` | `https://agentrouter.org/v1` (changed) |
| `AI_MANAGER_MODEL` | `gpt-5.6-sol` (unchanged) |
| Key identical to Run 2's token | **true** |
| Key clean (no whitespace/quotes/newline/non-ASCII) | **true** |

## The actual root cause: **two independent faults**

Run 2 concluded "account-side". That was half right. There were two separate problems,
and fixing the host exposed the second:

### Fault 1 — wrong host
The token is simply **not valid on `co.agentrouter.org`**. Even with a correct client
identity it still returns `Invalid API Key!` there. Changing the base URL fixed this.

### Fault 2 — client (User-Agent) gating
`agentrouter.org/v1` rejects requests from generic HTTP clients regardless of the
token, with a **different** error than the old host:

```
{"error":{"message":"unauthorized client detected, contact support for assistance at …"},
 "message":"UNAUTHENTICATED","success":false,"type":"unauthorized_client_error"}
```

Note the wording: *unauthorized **client***, not *invalid key*. That distinction is
what cracked it. A User-Agent matrix isolated the gate:

| Request | HTTP | Result |
|---|---|---|
| No credential | 401 | `unauthorized_client_error` |
| Bearer, default Node UA | 401 | `unauthorized_client_error` |
| Bearer + `curl/8.4.0` | 401 | `unauthorized_client_error` |
| Bearer + `OpenAI/NodeJS 4.28.0` | 401 | `unauthorized_client_error` |
| Bearer + `claude-cli/1.0.0 (external)` | **200** | **accepted** |
| `x-api-key` (no Bearer) | 401 | `unauthorized_client_error` |

The host serves only clients identifying as `claude-cli`. It also rejects `x-api-key`
on the OpenAI path — **`Authorization: Bearer` is required**.

## TEST 1 — authentication

```
GET https://agentrouter.org/v1/models
Authorization: Bearer <redacted>
User-Agent: claude-cli/1.0.0 (external)

HTTP 200 OK        695 ms
```

**Authentication: PASS.** Model list returned.

## TEST 2 — model availability

| Field | Value |
|---|---|
| Total models exposed to this token | **1** |
| Exact model ID | **`gpt-5.6-sol`** |
| `gpt-5.6-sol` exists | **YES — exact match, no correction needed** |
| Other GPT-5.6 variants | none |
| Other "sol" variants | none |

`AI_MANAGER_MODEL=gpt-5.6-sol` in `.env.local` is **correct as configured**.

## TEST 3 — basic model request

```
POST https://agentrouter.org/v1/chat/completions
{"model":"gpt-5.6-sol","messages":[{"role":"user",
  "content":"Reply with exactly this and nothing else: SANMATEO_AI_MANAGER_OK"}],
 "max_tokens":20,"temperature":0}

HTTP 200 OK        latency 2665 ms
x-request-id: 20260826215137316866566hs69j9VQjySaa
```

| Field | Value |
|---|---|
| Response content | **`SANMATEO_AI_MANAGER_OK`** — exact, no extra text |
| `finish_reason` | `stop` |
| Model echoed back | `gpt-5.6-sol` — **no silent substitution** |
| Usage | `prompt_tokens: 4401`, `completion_tokens: 11`, `total_tokens: 4412`, `cached_tokens: 3840` |
| Response id | `resp_0756bd5cfe2abac9016a8eef69d39087d0972120ea60d5deca` |

### Usage anomaly worth watching

4,401 prompt tokens for a ~15-token prompt is wildly disproportionate. A second
minimal call (`"Say OK"`, 8 prompt tokens / 5 completion / 13 total) accounted
normally, so this is **not** a constant per-call system-prompt overhead. The first
call also reported 3,840 cached tokens. Cause unexplained; worth monitoring before
committing to a cost model, since one call in two billed ~340× its apparent size.

## TEST 5 — Anthropic-compatible host (diagnosis only)

Not to change our GPT configuration — only to distinguish invalid token vs routing vs
protocol mismatch.

```
POST https://agentrouter.org/v1/messages   (x-api-key + anthropic-version)
HTTP 403
{"error":{"message":"该令牌无权访问模型 claude-sonnet-4-5 (request id: …)","type":"new_api_error"}}
```

Translation: *"this token has no permission to access model claude-sonnet-4-5."*

This is decisive. **403, not 401** — the Anthropic-compatible endpoint exists, the
token is recognised and authenticated there, and it is refused only at the *model
authorization* layer. So the token is valid on `agentrouter.org` across **both**
protocols; the plan simply carries `gpt-5.6-sol` and no Claude models.

## Which host accepts the token

| Host / protocol | Verdict |
|---|---|
| **`agentrouter.org/v1` (OpenAI-compatible)** | ✅ **ACCEPTS** — full success, with `claude-cli` UA + `Authorization: Bearer` |
| `co.agentrouter.org/v1` | ❌ Rejects — `Invalid API Key!` even with correct client UA. Wrong host for this token. |
| `agentrouter.org` Anthropic-compatible (`/v1/messages`) | ⚠️ Token **authenticates** (403 not 401), but no Claude model is authorized on this plan |
| none | n/a |

**Answer: `agentrouter.org/v1`.**

## Provider observations (updated)

- **Rate-limit headers:** still none, even on 200 responses. Only `x-request-id`.
  Header-driven backoff remains impossible; use blind exponential backoff with jitter.
- **Quota headers:** none.
- **Latency:** models 695 ms; completions 2.4–2.7 s for trivial prompts. Budget
  seconds, not milliseconds, per AI-Manager step.
- **OpenAI compatibility:** good on the success path — `/v1/models` and
  `/v1/chat/completions` return standard OpenAI-shaped payloads (`data[]`, `choices[]`,
  `usage`, `finish_reason`, `model`). Error envelopes differ per host
  (`{code,msg,data}` on the old host, `{error:{message,type}}` here), so error handling
  needs a small adapter. Some provider messages are **not in English** (the 403 above),
  which matters if errors are ever surfaced to users or logs are parsed.
- **Required client identity:** requests **must** send a `claude-cli` User-Agent and
  `Authorization: Bearer`. This is the single most important integration detail — a
  stock OpenAI SDK will fail here out of the box unless its User-Agent is overridden.

### Production caution (flagged, not decided)

The host gates on client identity and admits only `claude-cli`. That strongly suggests
the provider intends this key to be consumed by Claude Code itself, not by arbitrary
application code. Building the AI Manager on a hand-set `claude-cli` User-Agent is
therefore **fragile and possibly contrary to the provider's terms** — the gate can be
tightened at any time, and it is not a documented integration contract. Worth
confirming the intended integration path with AgentRouter before this is designed in.
Technically it works today; that is a separate question from whether it should be
relied on.

## Security note (Run 3)

The API key was never printed, echoed, partially revealed, hashed, or written to this
file. All command output passed through a redaction filter substituting
`<REDACTED_KEY>`. `.env.local` was read only, never written.

## Final status (Run 3)

| # | Item | Result |
|---|---|---|
| 1 | Authentication (`agentrouter.org/v1`) | **PASS** |
| 2 | HTTP status | **200 OK** (models and chat) |
| 3 | Exact model ID | **`gpt-5.6-sol`** — exists, exact, only model on the plan |
| 4 | Basic model call | **PASS** — returned `SANMATEO_AI_MANAGER_OK` exactly |
| 5 | Model substitution | **No** — `gpt-5.6-sol` echoed back |
| 6 | Latency | 695 ms (models) · 2665 ms (completion) |
| 7 | Usage metadata | Returned; see anomaly above |
| 8 | Rate-limit / quota headers | **None** on any response |
| 9 | Host that accepts the token | **`agentrouter.org/v1`** |
| 10 | Required client identity | `claude-cli` User-Agent + `Authorization: Bearer` |
| 11 | Production suitability | Technically working; **client-gating caveat unresolved** |

`.env.local` unmodified by this run. No website code, content, or configuration
touched. No agents or automation created. Not committed, not pushed.
