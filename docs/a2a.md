---
sidebar_position: 7
slug: /a2a
---

# A2A And Connected Systems

AxiOwl supports the Agent2Agent protocol as a separate standards-based boundary for discovering agents, sending messages, following tasks, and collecting results or artifacts.

## A2A Roles

| Role | Purpose |
|---|---|
| A2A Server | Exposes selected AxiOwl agents through Agent Cards and task routes |
| A2A Client | Imports and calls external Agent Cards |
| A2A user broker | Connects the machine service to provider state owned by the interactive user |
| A2A-over-SSH | Carries A2A operations through an operator-managed SSH connection |

## Desktop Agents As Endpoints

An AxiOwl registry target can be exposed as an A2A agent. The Agent Card advertises identity, URL, operations, and authentication requirements. A request to that endpoint crosses the A2A boundary and then uses the destination's normal provider integration.

The machine service does not inherit arbitrary interactive-user provider authority. Provider-backed delivery crosses the packaged user-broker boundary into the intended user session.

## Calling External Agents

An explicit external Agent Card can be imported into the registry. AxiOwl records its URL, advertised capabilities, and configured authentication, then uses the A2A client for messages and tasks.

External endpoints can participate in a larger workflow: an A2A research agent can return an artifact, a local provider can analyze it, and another provider can review the result.

## Tasks And Results

An A2A task has its own ID and lifecycle. Useful states include working, input required, completed, canceled, rejected, and failed. A completed task can return messages and artifacts.

Task identity remains separate from the provider session that may perform work behind an AxiOwl endpoint.

## Authentication

A2A endpoint authentication can use configured bearer credentials or OAuth client credentials. Credentials are bound to the selected endpoint rather than stored in public registry aliases.

## A2A Nodes

One AxiOwl installation can register another as a node through direct A2A or A2A-over-SSH. The destination owns its provider registry and local delivery. The source addresses the advertised A2A agent.

## Transport Comparison

| Destination | Route |
|---|---|
| External agent service | Direct A2A |
| Reachable AxiOwl agent endpoint | Direct A2A |
| Operator-managed AxiOwl machine | A2A-over-SSH |
| Paired phone controlling a host workspace | Daemon relay or direct connection |

The mobile daemon protocol is an interactive host/session/timeline experience. A2A is a standards-based agent/task experience. They intentionally remain separate.

## Operational Evidence

Follow Agent Card discovery, client authentication, task acceptance, destination handoff, task state, result and artifacts, and optional callback delivery as distinct stages.
