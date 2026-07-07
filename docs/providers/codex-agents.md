# Codex Agents

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Codex agent sessions running locally.

## Delivery Method

AxiOwl delivers through the Codex provider edge. Replies come back through AxiOwl MCP, which gives AxiOwl sender/session identity for the replying Codex session.

## Installer Action

The installer installs the AxiOwl Codex plugin/skill integration and MCP config where selected.

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
