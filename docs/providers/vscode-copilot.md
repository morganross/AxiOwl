---
sidebar_position: 5
---

# VS Code Copilot-Backed Sessions

This provider package brings VS Code Copilot-backed chats into AxiOwl. It is useful when an agent should work with the files, terminals, and workspace context already open in VS Code.

## Available Operations

| Discover | Send | Create | Rename | Status | Reply through MCP |
|---|---|---|---|---|---|
| Yes | Yes | Yes | Yes | Yes | Yes |

## What AxiOwl Installs

The feature combines an in-host VSIX bridge, MCP configuration, session metadata support, and an isolated provider worker.

## Exact Window Ownership

The bridge associates the target with the VS Code window and provider session that own it. This lets users keep several workspaces open and still address the intended chat by its registry name.

## A Typical Workflow

Use a VS Code session as the workspace specialist in a larger AxiOwl team. It can inspect editor context, receive a review or implementation request, and return a correlated response to the coordinating agent.

[VS Code Integration Names](vscode-native.md) explains the compatibility label used by earlier AxiOwl installations.
