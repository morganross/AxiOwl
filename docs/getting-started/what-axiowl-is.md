---
sidebar_position: 1
---

# What AxiOwl Is

AxiOwl is local software that helps AI provider sessions send messages to each other.

Think of it as a switchboard. Codex, Cursor, VS Code, Antigravity, Claude Code CLI, OpenCode CLI, and Copilot CLI all have different ways of storing sessions, exposing tools, receiving messages, and replying. AxiOwl gives them a shared local coordination layer.

## Plain English Version

Without AxiOwl, each provider session is mostly trapped in its own app or command line. With AxiOwl, a supported provider session can be addressed by name, receive a message, and reply back through AxiOwl MCP.

The important phrase is “supported provider session.” AxiOwl does not make every possible app magically work. It supports specific provider surfaces that have been installed, discovered, tested, and proven.

## What AxiOwl Does

AxiOwl:

- installs local provider integrations;
- discovers chats, sessions, and agents;
- stores them in a local registry;
- lets users or providers send messages to targets;
- exposes MCP tools so providers can reply;
- logs receipts and delivery evidence;
- separates supported providers from targets and experiments.

## What AxiOwl Does Not Do

AxiOwl does not:

- replace the provider apps;
- guarantee delivery just because a message was accepted;
- make unsupported providers work;
- use remote routing as a hidden fallback for local failures;
- safely patch providers without install-time and post-install validation.

## The Mental Model

```text
Provider app or CLI
  -> has sessions/chats
  -> AxiOwl discovers them
  -> AxiOwl stores address records
  -> user or provider sends a message
  -> AxiOwl routes to the right provider surface
  -> provider replies over MCP
```

## Why It Is Built This Way

The providers are different. Cursor Agent Window is not VS Code Copilot. Codex CLI is not Codex agents. Claude Code CLI is not Antigravity agents. AxiOwl keeps those paths separate because separate paths make failures explainable.

The architecture favors clear proof over broad claims. That is why the docs repeatedly distinguish receipts, provider acceptance, and MCP replies.
