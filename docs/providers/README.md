---
sidebar_position: 1
slug: /providers
---

# Bring Your Preferred AI Providers

AxiOwl is built around a simple principle: normalize the coordination experience while preserving the provider experience.

Every provider is represented as a brand plus a concrete surface. Codex agents and Codex CLI, for example, are separate destinations because they have different session lifecycles and delivery paths.

## Windows Provider Packages

| Provider surface | A good fit for |
|---|---|
| [Codex Agents](codex-agents.md) | Long-running desktop coding conversations |
| [Codex CLI](codex-cli.md) | Terminal-centered coding and automation sessions |
| [Codex Remote](codex-remote.md) | Codex-owned remote projects and conversations |
| [VS Code Copilot-Backed](vscode-copilot.md) | AI work inside VS Code workspaces |
| [Cursor Agents](cursor-agents.md) | Cursor Composer and editor-centered work |
| [Cursor Agent CLI](cursor-agent-cli.md) | Cursor command-line agent sessions |
| [Antigravity Agents](antigravity-agents.md) | Antigravity desktop agent workflows |
| [Antigravity CLI](antigravity-cli.md) | Antigravity terminal workflows |
| [Claude Code CLI](claude-code-cli.md) | Claude Code project sessions |
| [Copilot CLI](copilot-cli.md) | GitHub Copilot command-line sessions |
| [OpenCode CLI](opencode-cli.md) | OpenCode command-line sessions |

## Built-In And Network Surfaces

- [AxiOwl Mailbox](axiowl-mailbox.md) provides a built-in coordination endpoint.
- [External A2A Endpoints](external-a2a.md) connect standards-based agent services.
- [AxiOwl Remote Nodes](remote.md) connect selected agents across AxiOwl installations.

## What A Provider Package Adds

A selected provider package can add discovery, an isolated worker, MCP configuration, a provider plugin or skill, a bridge extension, and the metadata needed to identify the current session.

AxiOwl uses the package to reach the intended session. The provider continues to own account sign-in, model access, and conversation data.

Read [Provider Packages](../how-it-works/provider-packages.md) to understand the architecture or open the [Provider Support Matrix](../reference/provider-support-matrix.md) for an operation-by-operation view.
