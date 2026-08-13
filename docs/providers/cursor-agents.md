---
sidebar_position: 7
---

# Cursor Agents

Cursor Agents connects AxiOwl to Composer sessions in the Cursor desktop editor. It is a natural fit for implementation and review work that benefits from Cursor's current workspace context.

## Available Operations

| Discover | Send | Create | Rename | Reply through MCP |
|---|---|---|---|---|
| Yes | Yes | Yes | Yes | Yes |

## What AxiOwl Installs

The Cursor feature owns its bridge extension, MCP configuration, session integration, isolated worker, and AxiOwl-managed lifecycle.

## A Typical Workflow

1. Discover current Cursor Composer sessions.
2. Assign one session a clear project role.
3. Send it work that benefits from the open Cursor workspace.
4. Receive the result through the correlated reply path.

The bridge keeps the readable Composer title connected to the exact Cursor session so the project can use friendly names with precise delivery.

For the terminal surface, see [Cursor Agent CLI](cursor-agent-cli.md).
