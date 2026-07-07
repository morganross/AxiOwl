# Claude Code CLI

Status: `target`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Claude Code CLI sessions.

## Delivery Method

AxiOwl uses Claude Code CLI documented print/resume behavior against discovered JSONL session state. Current final support requires provider-owned MCP metadata or an AxiOwl/provider patch that supplies that metadata programmatically.

## Installer Action

Target behavior: install Claude MCP config and metadata support when Claude Code CLI is discovered and selected.

## Requirements

| Requirement | Needed |
|---|---|
| Patch | Required for final metadata compliance unless Claude supplies metadata natively. |
| Extension | No VSIX. |
| MCP | Required. |
| Config | Claude MCP config. |

## Test Status

Historical response-backed proof exists, but current support requires new proof under the metadata policy.

## Known Risks

- Claude sessions need valid working directories.
- Stale cwd paths can block tool calls.
- JSONL session discovery must not mark stale sessions as sendable.
