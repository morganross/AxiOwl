---
sidebar_position: 3
---

# Provider Support Matrix

A provider in AxiOwl is a brand plus a concrete surface. This matrix shows the coordination operations and installer integration available for each Windows provider package.

## Provider Packages

| Provider surface | Discover | Send | Create | Rename | Status | MCP reply | Integration package |
|---|---:|---:|---:|---:|---:|---:|---|
| Antigravity agents | Yes | Yes | Yes | Yes | Yes | Yes | Desktop MCP and isolated worker |
| Antigravity CLI | Yes | Yes | Yes | Yes | Yes | Yes | CLI MCP, metadata, and worker |
| Claude Code CLI | Yes | Yes | Yes | Yes | | Yes | User MCP configuration and worker |
| Codex agents | Yes | Yes | Yes | Yes | Yes | Yes | Plugin, MCP, skill, and worker |
| Codex CLI | Yes | Yes | Yes | Yes | Yes | Yes | CLI MCP/session package |
| Codex Remote | Yes | Yes | Yes | Yes | | | Remote provider worker |
| Copilot CLI | Yes | Yes | Yes | Yes | | Yes | Session metadata and worker |
| Cursor agents | Yes | Yes | Yes | Yes | | Yes | Bridge extension, MCP, and worker |
| Cursor Agent CLI | Yes | Yes | Yes | Yes | | Yes | CLI metadata and worker |
| OpenCode CLI | Yes | Yes | Yes | Yes | | Yes | MCP/native metadata and worker |
| VS Code Copilot-backed | Yes | Yes | Yes | Yes | Yes | Yes | VSIX bridge, MCP, metadata, and worker |

Blank cells mean the public workflow focuses on the operations shown for that surface.

## Built-In And Network Targets

| Surface | What it adds |
|---|---|
| AxiOwl Mailbox | A built-in local inbox and coordination endpoint |
| AxiOwl daemon host | Provider catalog, projects, agents, sessions, permissions, and live timelines for connected clients |
| Paired mobile app | Android or iPhone access to host-owned agents through relay or direct connection |
| External A2A agent | Agent Card discovery, tasks, results, and artifacts |
| AxiOwl Remote Node | Explicit A2A coordination across installations |

## How To Read The Matrix

- **Discover** adds existing sessions to the AxiOwl registry.
- **Send** delivers a focused request to an existing target.
- **Create** starts a new provider session through that provider package.
- **Rename** updates the provider-visible session name.
- **Status** reads the provider-specific state exposed by the package.
- **MCP reply** lets the provider session return a correlated response through AxiOwl tools.

Visit [Provider Surfaces](../providers/README.md) for user-facing guides and examples.
