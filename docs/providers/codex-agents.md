---
sidebar_position: 2
---

# Codex Agents

Codex Agents connects AxiOwl to Codex desktop conversations. It is a strong choice for implementation, repository analysis, long-running technical work, and specialist reviews that benefit from a persistent thread.

## Available Operations

| Discover | Send | Create | Rename | Reply through MCP |
|---|---|---|---|---|
| Yes | Yes | Yes | Yes | Yes |

## What AxiOwl Installs

The Windows feature installs the AxiOwl Codex plugin, MCP configuration, marketplace entry, skill, and isolated provider worker.

## How A Session Is Addressed

The provider thread ID is the delivery identity. A readable thread title becomes the friendly registry name, so users can work with meaningful labels while AxiOwl retains the exact provider address.

## A Typical Workflow

1. Discover current Codex conversations.
2. Give the intended thread a project role such as Builder or Reviewer.
3. Send a focused request from another AxiOwl session.
4. Let the Codex thread complete the work with its existing context.
5. Return a correlated MCP reply to the coordinator.

Codex Agents and [Codex CLI](codex-cli.md) remain distinct surfaces, which lets a project use each where it fits best.
