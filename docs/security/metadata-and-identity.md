---
sidebar_position: 5
---

# Metadata And Identity

AxiOwl uses several identifiers because a friendly title, a host, a connection, and an agent session answer different questions.

| Identity | Purpose |
|---|---|
| Host ID | Immutable identity of one AxiOwl daemon |
| Host label | Friendly mobile and desktop display name |
| Mobile client ID | Stable identity of one paired app installation |
| Connection ID | One live relay or direct connection |
| Relay route ID | Connects the phone-side and daemon-side encrypted channel |
| Project or workspace ID | Names host-owned working context |
| Agent ID | Names one daemon-managed agent lifecycle |
| Provider session ID | Names the provider's underlying conversation |
| Timeline sequence | Orders events for reconnect and rendering |
| A2A task ID | Names a separate standards-based task |

## Friendly Names And Exact Identity

Users can rename a host, project, workspace, or agent without changing the immutable identity used to route the connected session.

## Metadata Privacy

Encryption protects daemon-protocol content across the relay, while connection services still process metadata needed to route traffic. Logs and support material should minimize private paths, provider session IDs, host details, and message content.

## Provider Metadata

Local provider packages and MCP replies continue to use provider-owned session identity. The daemon model adds host and agent identity around that provider session rather than replacing it.
