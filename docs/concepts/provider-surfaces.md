---
sidebar_position: 1
---

# Provider Surfaces

A provider surface is a brand plus the specific place AxiOwl talks to.

Examples:

- `codex:agents`
- `codex:cli`
- `cursor:agents`
- `vscode:agents`
- `copilot:vsix extension`
- `claude-code:cli`

## Why Brand Name Is Not Enough

“Codex works” is not precise enough. Codex agents and Codex CLI use different mechanics. “Cursor works” is not precise enough. Cursor Agent Window and a hypothetical Cursor CLI would be different surfaces.

Plain English version: the app name is not the whole address. The surface matters.

## Surface Differences

| Surface | Typical requirements |
|---|---|
| Agent window | Bridge, session discovery, MCP, sometimes patch. |
| Editor chat | Extension, workspace/session ownership, MCP config. |
| CLI | Executable discovery, auth, cwd, session files, MCP config, metadata. |
| VSIX extension | Extension install, host APIs, MCP server definition. |
| Remote node | Network/node contract and separate trust boundary. |

## Why AxiOwl Separates Them

Separating surfaces keeps the installer honest and the tests meaningful. A passing VS Code test should not mark Copilot CLI supported. A passing Cursor agent test should not imply any other Cursor surface exists.
