---
sidebar_position: 4
---

# Permissions And Session Control

The mobile app controls an agent that already belongs to an AxiOwl host. The daemon keeps every turn tied to the selected host, provider, workspace, agent ID, and active provider session.

## Agent Ownership

The daemon owns creation, import, resume, update, cancellation, and completion for the agents it manages. The phone selects one of those agents and sends protocol commands to that host-owned session.

## Provider Permissions

When a provider asks for approval to use a tool or perform an action, the request appears in the agent timeline. The user's answer returns to the provider runtime that issued it.

The relay does not approve provider tools, and pairing alone does not grant a provider account new operating-system permissions.

## Ordered Timeline

The daemon publishes ordered events for user text, assistant output, reasoning, tools, permissions, usage, and turn completion. Acknowledgement and reconnect state let the client reconcile the same timeline rather than starting a duplicate conversation.

## Stable Intent

Create and send operations use stable request and agent identity so reconnect recovery can return the existing operation instead of silently creating another agent or turn.

## Completion

The mobile UI reads completion from the daemon's authoritative provider timeline. A network send confirms transmission; the terminal timeline event confirms what the host provider session reported.
