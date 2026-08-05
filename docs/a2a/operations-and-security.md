---
sidebar_position: 6
---

# A2A Operations And Security

The safest default is a loopback listener with authentication enabled. Public network exposure needs explicit TLS termination, client enrollment, rate limits, replay controls, and firewall review.

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

## Public Service

The optional Windows MSI feature installs:

- `axiowl-api-service.exe` as the automatic `AxiOwlApi` Windows service;
- `axiowl-relay.exe` as a separate relay-capable executable;
- machine-scoped service configuration and feature markers.

The feature is unchecked by default. Installing the runtime alone does not enable an always-running public A2A listener.

The current MSI does not package the interactive user broker required for protected provider delivery through the LocalSystem service. Treat direct `axiowl a2a serve` operation and public Agent Card routes separately from the incomplete service-to-user delivery path.
