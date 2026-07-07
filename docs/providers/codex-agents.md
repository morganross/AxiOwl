# Codex Agents

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Novice Summary

Use this page when you mean Codex running as an active agent session. Do not use this page to reason about standalone Codex CLI. The main thing to remember is that a Codex agent is supported when it can receive a message and reply through AxiOwl MCP with Codex session identity.

## Surface

Codex agent sessions running locally.

Plain English version: this is Codex as an active agent session, not the standalone Codex CLI surface.

## Delivery Method

AxiOwl delivers through the Codex provider edge. Replies come back through AxiOwl MCP, which gives AxiOwl sender/session identity for the replying Codex session.

The expected flow is:

```text
AxiOwl send
  -> Codex provider edge
  -> target Codex session
  -> Codex reply over AxiOwl MCP
  -> registry sender identity resolution
```

## Installer Action

The installer installs the AxiOwl Codex plugin/skill integration and MCP config where selected.

Codex should be selected only when Codex is discovered or the user explicitly selects it. Installing another provider should not remove or reinstall Codex integration as collateral damage.

## Requirements

| Requirement | Needed |
|---|---|
| Patch | No editor binary patch expected. |
| Extension | No VSIX-style extension expected. |
| MCP | Required for replies. |
| Config | Codex plugin/MCP config. |

## Test Status

Response-backed Codex tests have passed. A receipt alone is not enough; the passing proof is a Codex reply through AxiOwl MCP.

## Known Risks

- Existing sessions can keep stale MCP transport state until restarted.
- Old product naming or stale plugin config can confuse discovery after rename/refactor work.
- Sender identity must come from MCP metadata, not guessed display names.

## Architecture Rationale

Codex agents are treated as their own provider surface because the agent runtime can provide MCP metadata and reply directly through AxiOwl. That is cleaner than pretending Codex agent behavior and Codex CLI behavior are identical.
