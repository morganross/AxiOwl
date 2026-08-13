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

Provider factory availability is evaluated independently from send and rename. The [Provider Support Matrix](../reference/provider-support-matrix.md) records the current operation-level claims instead of assuming that a provider with send support can also create a chat.

## Interactive User Boundary

Provider state normally belongs to the signed-in Windows user, while the optional A2A server runs as LocalSystem. A named-pipe user broker forwards eligible work into the interactive session without moving provider registry state or provider credentials into the service account.

The current Windows MSI packages this boundary as two explicit features:

- **A2A Server** installs `axiowl-api-service.exe` as the `AxiOwlApi` service;
- **A2A Client** installs `axiowl-user-broker.exe` for the interactive user.

Installing only the server can expose service-owned protocol routes, but it does not make an interactive desktop provider available. A broker-dependent request must fail visibly when no eligible interactive broker is present.

## What A Card Proves

An Agent Card proves that an A2A endpoint advertises a capability. It does not prove that a specific provider session is currently logged in, sendable, or able to answer. A complete journey still needs provider delivery evidence and, where expected, a correlated MCP reply.
