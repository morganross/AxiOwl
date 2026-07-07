# VS Code Native

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Native VS Code chat/session surfaces.

## Delivery Method

AxiOwl writes bridge commands and the VS Code extension executes VS Code chat/session commands. The stronger native path opens the exact target session and proves message persistence against VS Code session files.

## Installer Action

The installer installs the VS Code bridge extension, MCP config, and selected native patch/config pieces.

## Requirements

| Requirement | Needed |
|---|---|
| Patch | Yes for native metadata/session integration where selected. |
| Extension | AxiOwl VS Code bridge extension. |
| MCP | Required for replies. |
| Config | VS Code MCP server definition. |

## Test Status

Response-backed tests have passed for VS Code sessions.

## Known Risks

- Native VS Code internals can change.
- Ownership matters: the bridge must target the correct window/session.
- Stale old extension folders from previous product naming must be cleaned.
- A send receipt is not enough; session-file proof or MCP reply is needed.
