---
title: "MCP, native IPC and SDK contracts"
slug: /messaging/technical/protocols-and-ipc
description: "Separate tool arguments, worker protocols, owner control and connected-client APIs."
---

# MCP, native IPC and SDK contracts

Messaging uses several interfaces. They are not interchangeable merely because they serialize JSON.

| Interface | Caller and purpose | Compatibility boundary |
| --- | --- | --- |
| Native MCP tools | Agent host calls Send and advertised administration tools | Installed host names/schema and native conversation metadata |
| Desktop native bridge | Local Settings requests native work | Action-specific owner context and mutation handling |
| Worker RPC | Application dispatches to selected provider worker | Worker descriptor/protocol and exact provider identity |
| Native Core control | Local owner application/CLI controls host state | OS/user admission and private IPC |
| Local HTTP/WebSocket | Authorized native clients use host capabilities | Binding, authentication and advertised runtime features |
| Paired Relay transport | Authorized endpoints exchange encrypted application messages | Crypto identity and negotiated control/data capabilities |
| TypeScript client API | Connected-client application uses SDK root exports | Matching daemon, capabilities and SDK version |
| A2A | Service interoperability | Actual Agent Card, authentication and task contract |

## MCP integration

The common native Send input is two strings: recipient name and body. The tool can be exposed under different host namespaces. Let the host provide executing-session metadata; do not derive it from whichever provider chat is newest.

Invoke supplied-name Send directly. Optional identity, discovery or status tools remain separate requested operations. A Send-only caller finishes after the tool result; SDK model-run waiting must not leak into that contract.

## Local control

Loopback is an address restriction, not sufficient authentication. Owner-authorized desktop control and private helper IPC are separate from arbitrary browser requests or public endpoints.

POSIX helper lifetimes can be tied to inherited private pipes. Windows control paths are scoped to the native user. Platform-specific admission must not be replaced by a generic unauthenticated shell or web endpoint.

## Compatibility and retries

Keep operation IDs, fingerprints, target identity and actual worker results across interface boundaries. A serialization error, timeout or dropped connection does not prove cancellation.

Retries of transport handshakes or cache reads are not permission to issue another product Send. Mutating operations need their own no-replay rules.

SDK high-level exports are the supported integration surface where documented. Protocol schemas/internal package paths are not promised as a stable public wire API. Capability negotiation must gate new message types or fields so older consumers do not receive unsupported contracts.

See [Send lifecycle](send-contract.md), [compatibility](compatibility.md), [connected clients](stack-mobile-sdk.md) and [A2A](a2a.md).

