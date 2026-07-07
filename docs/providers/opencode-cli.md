# OpenCode CLI

Status: `target`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Novice Summary

Use this page when you mean OpenCode CLI. Historical tests showed reachability, but final support requires provider-owned MCP metadata under the current rules.

## Surface

Standalone OpenCode CLI sessions.

Plain English version: this is the OpenCode command-line provider surface.

## Delivery Method

Historical implementation used `opencode session list` and `opencode run --session` with an AxiOwl MCP config directory. Current final support requires provider-owned MCP metadata or an AxiOwl/provider patch that supplies that metadata programmatically.

## Installer Action

Target behavior: install OpenCode CLI MCP config and metadata support when OpenCode is discovered and selected.

## Requirements

| Requirement | Needed |
|---|---|
| Patch | Required for final metadata compliance unless OpenCode supplies metadata natively. |
| Extension | No supported VSIX currently. |
| MCP | Required. |
| Config | OpenCode MCP config. |

## Test Status

Historical response-backed proof exists, but current support requires new proof under the metadata policy.

## Known Risks

- CLI config location can vary.
- Session list output and run syntax can change.
- Environment-only identity is not accepted as final support.

## Architecture Rationale

OpenCode CLI remains target because the existing path proved reachability but not the final identity contract. Keeping it target avoids overstating support before clean-machine metadata proof exists.
