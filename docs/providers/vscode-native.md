# VS Code Native

Status: `supported`

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Novice Summary

Use this page when you mean VS Code's native chat/session surface. AxiOwl must target the correct VS Code window and session, so ownership and session proof matter.

## Surface

Native VS Code chat/session surfaces.

Plain English version: this is VS Code chat itself, not merely a generic Copilot label.

## Delivery Method

AxiOwl writes bridge commands and the VS Code extension executes VS Code chat/session commands. The stronger native path opens the exact target session and proves message persistence against VS Code session files.

The target-session proof matters because sending to “whatever chat is active” is unsafe. AxiOwl should know which session it targeted.

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

## Architecture Rationale

VS Code native support uses a bridge because the relevant chat commands and session context are in the VS Code process. Ownership checks exist because multiple VS Code windows can be open at once, and the wrong window can produce a false success.
