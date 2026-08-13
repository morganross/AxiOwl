---
sidebar_position: 6
---

# A2A Operations And Security

A2A is a standards boundary, not permission to expose every desktop chat to a network. The safest default is a loopback listener with authentication enabled. Any wider exposure needs an explicit endpoint, transport security, client authorization, rate limits, and firewall policy.

## Local Commands

The current CLI includes operations for:

```text
axiowl a2a agent-card
axiowl a2a capabilities
axiowl a2a discover --url <url>
axiowl a2a import --url <url>
axiowl a2a send --to <agent> --body <text> --from <agent>
axiowl a2a get-task --id <task-id>
axiowl a2a list-tasks
axiowl a2a push drain
axiowl a2a auth add-client ...
axiowl a2a auth list-clients
axiowl a2a serve ...
axiowl a2a self-test
```

Use `axiowl a2a capabilities` to inspect the route-owned capability manifest instead of assuming every A2A feature is enabled.

## Durable State

The user-scoped A2A state includes task history, client registrations, imported Agent Card audit records, push configurations, pending callbacks, delivery logs, and dead-letter records. Authentication tokens are hashed or referenced indirectly; outbound secrets are not copied into registry aliases.

## Inbound Authentication

Authentication is required by default. Clients have stable IDs, sender identities, nodes, and scopes. No-auth mode is for bounded local development only.

## Windows Service Boundary

The Windows installer separates the network and interactive halves:

| Feature | Installed role |
|---|---|
| A2A Server | `axiowl-api-service.exe`, registered as the machine-scoped `AxiOwlApi` service. |
| A2A Client | `axiowl-user-broker.exe`, running in the interactive user boundary. |

The service does not inherit provider credentials or user registry state. Provider-backed delivery crosses the authenticated broker boundary and remains subject to the destination registry and provider package.

The old proprietary hosted relay server is retired. A2A-over-SSH remains a separate standards-preserving transport for explicitly configured AxiOwl nodes; it is not a silent fallback for local provider failure.

## Public Exposure

Installing A2A components does not by itself authorize public Internet access. Operators still own TLS termination, endpoint naming, client enrollment, credential rotation, firewall rules, and log handling. Keep bearer credentials and OAuth client secrets out of command history and support reports.

## Result Semantics

An HTTP success or accepted task means the A2A boundary accepted work. It is not proof that the desktop provider displayed the message or answered. Use task state, provider delivery evidence, and a correlated MCP reply to describe those later boundaries.
