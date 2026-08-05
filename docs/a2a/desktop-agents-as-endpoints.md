---
sidebar_position: 2
---

# Desktop Chats As A2A Endpoints

AxiOwl can wrap a real provider session in an A2A Agent Card. The resulting endpoint is not a simulated generic bot. It is a standard protocol entrance to the same Codex, Cursor, VS Code, Antigravity, or CLI session that AxiOwl already knows how to address.

## How A Session Becomes An Endpoint

```text
provider session
  -> provider discovery
  -> AxiOwl registry record
  -> sendability and identity checks
  -> scoped A2A Agent Card
  -> scoped A2A send endpoint
```

Only eligible registry records are exposed. A record needs usable identity and routing information. Private provider metadata is not included in public cards by default.

## Root And Scoped Cards

The root Agent Card describes the AxiOwl gateway. Scoped cards describe one registry agent or one provider factory.

Examples:

```text
/.well-known/agent-card.json
/agents/{agent-id}/.well-known/agent-card.json
/providers/{provider-id}/.well-known/agent-card.json
```

A scoped agent endpoint enforces the agent named by its URL. A caller cannot use a scoped card for one chat and silently redirect the request to another chat.

## Provider Factories

Provider factories describe AxiOwl surfaces that can create a new provider session. Their endpoints use the provider create workflow and return an A2A task representing the operation.

Provider factory availability is narrower than provider send support. For example, current Codex Desktop create is deliberately disabled even though delivery and rename are implemented. The [Provider Support Matrix](../reference/provider-support-matrix.md) records those differences.

## Interactive User Boundary

Provider state normally belongs to the signed-in Windows user, while the optional API service runs as LocalSystem. Current code defines a named-pipe user broker so the service can forward protected A2A work into the active interactive session without copying user registry state into the service account.

The checked-in MSI currently does not package or start `axiowl-user-broker.exe`. The automatic API service can expose public routes, but protected routes that require interactive provider access return a service-unavailable response until the broker is separately running. This is a known packaging gap, not a protocol success.
