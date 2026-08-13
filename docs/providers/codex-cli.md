---
sidebar_position: 3
---

# Codex CLI

Codex CLI brings terminal-centered Codex sessions into AxiOwl workflows. It is useful for focused repository work, command-line automation, and specialist sessions that live close to the shell.

## Available Operations

| Discover | Send | Create | Rename | Status | Reply through MCP |
|---|---|---|---|---|---|
| Yes | Yes | Yes | Yes | Yes | Yes |

## What AxiOwl Installs

The dedicated Windows feature installs the Codex CLI provider package, isolated worker, and AxiOwl MCP/session configuration.

## A Typical Workflow

Create or discover a Codex CLI session for one responsibility, such as build engineering or dependency analysis. Other AxiOwl sessions can send it focused work, and the CLI session can return its result through AxiOwl MCP.

Codex CLI keeps its own provider identity in the registry, even when a related desktop conversation uses the same project. This makes the destination clear to both the user and the routing layer.

For desktop threads, see [Codex Agents](codex-agents.md).
