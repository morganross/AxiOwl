# VS Code Copilot

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Copilot-backed chat inside VS Code.

## Delivery Method

AxiOwl uses the VS Code bridge extension and MCP server definition. The bridge exposes AxiOwl MCP to VS Code and can route messages through VS Code chat commands.

## Installer Action

The installer installs the AxiOwl VS Code bridge extension and MCP server definition when the VS Code/Copilot feature is selected.

## Requirements

| Requirement | Needed |
|---|---|
| Patch | Native/Copilot patch path may be selected depending on feature. |
| Extension | AxiOwl VS Code bridge extension. |
| MCP | Required. |
| Config | VS Code MCP server definition. |

## Test Status

Response-backed VS Code Copilot tests have passed.

## Known Risks

- VS Code extension folders can become stale after rename/refactor work.
- New chats may inherit stale workspace state from VS Code itself.
- The bridge depends on VS Code MCP APIs being available in that host.
