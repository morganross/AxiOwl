---
title: "System architecture and ownership"
slug: /messaging/technical/system-architecture
description: "Component boundaries from an authored Send to the native target and remote services."
---

# System architecture and ownership

Messaging has several cooperating processes and services. The desktop interface is not the model provider, the shared runtime is not the Relay server, and account membership is not a provider login.

~~~text
User or native agent tool
          |
Desktop / CLI / MCP adapter
          |
Identity + registry + durable operation
          |
Selected local worker or authorized remote route
          |
Exact native provider conversation
~~~

A remote route can add an SSH account, a paired Relay channel or an A2A endpoint. These routes have different credentials and completion contracts.

## Ownership boundaries

| Component | Owns | Does not establish |
| --- | --- | --- |
| Desktop/CLI/MCP | Requested operation, selected surface, user-facing result | Provider entitlement or model completion |
| Registry | Discovered names, native identities and routes | Permission to invent a sender |
| Durable operation store | Dispatch ownership, target binding and recorded outcome | Authorization to replay uncertainty |
| Provider integration | Its worker, owned configuration and bridge assets | Ownership of unrelated provider profiles |
| Shared native runtime | Host/device connections and advertised host capabilities | Every consumer feature being installed or enabled |
| Account authority | Account session and device membership | Native crypto approval or provider credentials |
| Relay | Reachability and routing | Decrypted paired application content or account grants |
| Provider | Native conversation, account and execution policy | Another provider's chat identity |

## Process boundaries

Windows uses native services/processes and owner-scoped IPC. Mac uses Swift application/CLI code with native helpers and the shared runtime. Linux uses a native CLI/GUI and user-service integration. Provider-specific JavaScript or TypeScript assets run only where the integration requires them.

The native daemon/account source has a separate producer repository. Application builds consume it through the source/publication contract; generated copies are not independent implementations to maintain.

## Data and failure flow

An operation can be durably accepted before target discovery or delivery finishes. The worker preserves the request, resolves and pins the destination, and records the actual outcome. Errors in a remote hop must not create a fresh logical Send.

A connection can remain established after authorization becomes stale. The reviewed runtime therefore rechecks account-only authority before admitting new remote work; see [revocation](pairing-and-revocation.md).

Source delivery, artifact publication, installation and visible target delivery remain separate. See [source status](source-and-release-status.md), [data lifecycle](data-lifecycle.md) and [protocol boundaries](protocols-and-ipc.md).

