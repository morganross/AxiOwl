# VS Code Copilot

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Novice Summary

Use this page when you mean Copilot chat inside VS Code. The important idea is that AxiOwl talks to VS Code through an installed bridge extension and MCP definition, not by pretending VS Code is just a simple command-line tool.

## Surface

Copilot-backed chat inside VS Code.

Plain English version: this is Copilot running in VS Code, reached through the AxiOwl VS Code bridge and MCP registration.

## Delivery Method

AxiOwl uses the VS Code bridge extension and MCP server definition. The bridge exposes AxiOwl MCP to VS Code and can route messages through VS Code chat commands.

The important implementation boundary is that useful VS Code chat behavior lives inside VS Code. A local executable alone cannot reliably control it without an in-host bridge.

## Installer Action

The installer installs the AxiOwl VS Code bridge extension and MCP server definition when the VS Code/Copilot feature is selected.

VS Code should be closed only when the selected install action requires patching or replacing loaded extension files.

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

## Architecture Rationale

The VS Code bridge is the right shape because it uses the host that owns the chat state. The alternative, trying to drive VS Code only from outside, gives weaker targeting and weaker proof.
