# Claude Code CLI

Status: `target`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Novice Summary

Use this page when you mean Claude Code CLI sessions. It is a target surface because AxiOwl needs robust metadata and stale-working-directory handling before marking it supported.

## Surface

Claude Code CLI sessions.

Plain English version: this is Claude's command-line coding session surface.

## Delivery Method

AxiOwl uses Claude Code CLI documented print/resume behavior against discovered JSONL session state. Current final support requires provider-owned MCP metadata or an AxiOwl/provider patch that supplies that metadata programmatically.

## Installer Action

Target behavior: install Claude MCP config and metadata support when Claude Code CLI is discovered and selected.

The installer should validate that Claude exists and that discovered sessions have valid working directories before marking targets sendable.

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

## Architecture Rationale

Claude Code CLI is a good target because it has documented CLI resume behavior, but it should not be promoted until metadata and stale-cwd handling are robust on clean machines.
