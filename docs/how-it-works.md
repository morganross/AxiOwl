---
sidebar_position: 4
slug: /how-it-works
title: How The Products Work Together
---

# How The Products Work Together

The AxiOwl family connects several kinds of work: messages between agents, direct interaction with a session, and visibility into account usage. Each has a clear owner for its data and permissions.

## Messaging: Address A Real Session

A caller chooses a registry target. AxiOwl resolves its provider, surface, session identity, and route, then hands the request to that integration. The target's response returns through its configured AxiOwl tools with sender and correlation information.

The common interface saves the caller from knowing every provider's delivery mechanism. Provider workers still handle the details of their own applications.

Names help you navigate. Session IDs address conversations. A renamed chat can remain the same destination, while two chats with identical names remain distinct.

## Mobile: Interact With A Paired Host

AxiOwl Mobile connects to a host runtime on your computer. Pairing establishes which device may connect. The host exposes its available projects, agents, provider catalog, and controls.

The phone sends a turn to the selected agent and receives a timeline of the provider's work. Tool output, permissions, and completion events stay associated with that agent. The host continues to run the tools and own the project files.

Relay connections provide reachability across networks through encrypted application traffic. Direct connections use a route chosen by the operator. The host identity remains the same when the network path changes.

## Native Phone Apps: A Separate Local Loop

The native Goose Android and iPhone applications can run an agent loop inside the phone app. That loop uses its own configured model connection and local capabilities. It is separate from a desktop provider session reached through the host runtime.

Local phone inference still depends on the chosen model route; a local loop does not imply an offline model. A desktop pairing supplies remote access, not credentials for this separate local mode. Read [On-device agents](mobile/on-device-agents.md).

## IDE: Resolve Account, Model, And Brain

The IDE resolves three selections into one execution route:

| Selection | What it controls |
|---|---|
| Billed to | The account or configured connection supplying model access |
| Model | The model selected from that account's available catalog |
| Brain | The provider client or AxiCode runtime running the agent loop |

A provider CLI can run its own agent loop. AxiCode can run a local loop using a configured provider connection, either directly or through its supported local proxy route. These choices affect credentials, billing, tools, and session ownership, so the IDE keeps them visible.

## Usage Meter: Observe Capacity

Usage Meter collects readings from the provider method assigned to an account. It preserves the account identity, source, observation time, allowance windows, and reset times.

Cloud Costs uses a separate set of cloud-account bindings and provider-reported monetary periods. A quota percentage, a reset time, and a cloud-cost amount have different meanings and remain separate.

A Usage Meter companion receives an approved, limited snapshot from the desktop. It displays usage information without obtaining provider credentials or control of the desktop's agents.

## A2A: Connect Standard Agent Services

An A2A Agent Card describes an endpoint and its capabilities. A caller sends a message or task to that service and follows the task's result and artifacts. AxiOwl can call external agents and expose selected local targets.

A2A task identity is separate from a provider conversation. A task may use a provider session behind the endpoint, but its public lifecycle belongs to the A2A service.

## Read Completion In Context

| Product event | Meaning |
|---|---|
| Messaging acceptance | AxiOwl accepted the request |
| Messaging reply | The selected agent answered |
| Mobile connection | The phone reached its paired host |
| Provider turn complete | The provider reported completion of that turn |
| IDE route selected | An account, model, and brain are selected |
| Usage observation current | A provider reading is available within its freshness rules |
| A2A task complete | The endpoint reported a terminal result |

A connection can be healthy while a provider waits for permission. A usage reading can be old while the phone connection is current. Keeping these states distinct makes the software easier to use.

## Shared Infrastructure, Separate Permissions

Products may reuse a relay or connection library. Their device approvals, credentials, and allowed operations remain product-specific. Approving a Usage Meter reader does not approve terminal access in Mobile.

The daemon is the host connection component, not the IDE's brain. It forwards an IDE request to the local IDE integration; the IDE still owns its selected execution route. A relay is a routing service, not another provider runtime. Installer helpers carry out application-owned setup, not provider authentication.

For the current Windows native producer, the delivered shared artifact is a binary bundle. Consuming applications own installation and service integration. POSIX host packages follow their platform packaging contracts. These implementation roles are separate from the thirteen product/platform targets in [Products and platforms](platforms.md).

See [Security and privacy](security.md) for the responsibilities at each boundary.
