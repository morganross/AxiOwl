# AxiOwl Provider Docs

Each provider page describes one provider surface. The status source of truth is [Provider Support Matrix](../reference/provider-support-matrix.md).

## Why Provider Pages Are Surface-Specific

Provider support is not just brand support. A brand can expose an editor integration, an agent window, a CLI, and a VSIX-backed chat surface. Those surfaces can require different installs, patches, metadata, delivery proof, and failure handling.

Plain English version: `codex:agents` and `codex:cli` are not the same thing. `cursor:agents` and a hypothetical Cursor CLI are not the same thing. Treating them as the same creates bad tests and bad installs.

## Provider Pages

| Provider surface | Page | Current status |
|---|---|---|
| Codex agents | [Codex Agents](codex-agents.md) | supported |
| Codex CLI | [Codex CLI](codex-cli.md) | supported |
| VS Code Copilot | [VS Code Copilot](vscode-copilot.md) | supported |
| VS Code native | [VS Code Native](vscode-native.md) | supported |
| Cursor agents | [Cursor Agents](cursor-agents.md) | supported |
| Antigravity agents | [Antigravity Agents](antigravity-agents.md) | supported |
| Antigravity CLI | [Antigravity CLI](antigravity-cli.md) | target |
| Claude Code CLI | [Claude Code CLI](claude-code-cli.md) | target |
| OpenCode CLI | [OpenCode CLI](opencode-cli.md) | target |
| Copilot CLI | [Copilot CLI](copilot-cli.md) | target |
| Remote | [Remote](remote.md) | unsupported for local-provider remediation |

## Provider Page Contract

Every provider page should answer:

1. Is this surface supported, target, experimental, unsupported, or removed?
2. How does AxiOwl deliver a message?
3. What does the installer do?
4. What patch, extension, MCP config, or CLI config is required?
5. What test proof exists?
6. What risks are known?
7. Why is this architecture the right current choice?
