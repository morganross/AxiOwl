---
sidebar_position: 1
---

# XMPP Transport

Status: `feature branch`, not part of current `main` or the current primary MSI.

The `feature/xmpp-remote-transport` branch contains a substantial XMPP implementation for Axi-to-Axi routing and ordinary XMPP chat clients. It is intentionally documented separately from the released A2A implementation so branch work is not presented as current-main behavior.

## What The Branch Implements

- real XMPP over WebSocket using RFC 7395;
- SCRAM-SHA-256 authentication;
- mandatory TLS certificate and hostname verification;
- account-scoped hidden routes for provider sessions;
- XMPP discovery, registration, delivery, deduplication, and result stanzas;
- a per-user receiver agent and transient sender connections;
- an external XMPP chat gateway backed by Prosody;
- an isolated Windows installer and Ubuntu server deployment package;
- protocol, client, credential, framing, adapter, registry, and agent tests.

The branch uses XMPP stanzas. It is not a generic JSON-over-WebSocket broker.

## Branch Provenance

At the documentation audit on July 13, 2026:

- current `main` was 29 commits ahead of the XMPP branch;
- the XMPP branch had two unique implementation commits;
- no XMPP source files were present in current `main`;
- the XMPP installer had a separate product identity and build path.

Integration therefore requires a deliberate merge and regression pass against current A2A, provider, installer, and activation behavior.

## Documentation Caution

Some branch-local planning documents describe earlier stages. For example, a dependency note says the XMPP CMake module is not wired in, while the branch's current CMake files do include and link it. Public claims should follow current branch code and tests, not stale planning text.

## Read Next

- [Session Routing And Delivery](session-routing-and-delivery.md)
- [External XMPP Chat Gateway](external-chat-gateway.md)
- [Deployment, Credentials, And Security](deployment-credentials-and-security.md)
