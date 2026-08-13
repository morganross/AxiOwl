---
sidebar_position: 1
---

# Product Reference

The reference section provides detailed product maps for users, administrators, and developers who want to look beyond the guided workflows.

## Reference Pages

| Document | What it provides |
|---|---|
| [Product Capabilities](current-product-status.md) | A concise map of core, extended, and preview experiences |
| [Architecture Overview](architecture-overview.md) | The major runtime, provider, protocol, trust, and release layers |
| [Provider Support Matrix](provider-support-matrix.md) | Operations and installer integration by provider surface |
| [Platform Support Matrix](platform-support-matrix.md) | Product shape by desktop, mobile, and server role |
| [Protocol Support Matrix](protocol-support-matrix.md) | MCP, A2A, SSH, and secure XMPP responsibilities |
| [Installer Behavior Matrix](installer-behavior-matrix.md) | Windows feature ownership and selection |
| [Release Evidence Checklist](release-validation-checklist.md) | A release-oriented view of artifacts and product journeys |

## A Consistent Product Vocabulary

AxiOwl documentation uses several distinctions throughout the site:

- a provider brand can have several concrete surfaces;
- a display name is friendly, while a provider session ID is the exact address;
- a receipt identifies the stage that produced it;
- provider authentication, device trust, licensing, and transport credentials have separate roles;
- A2A and secure XMPP are separate transports selected for different jobs.

These distinctions let the public documentation remain simple without flattening the architecture into one generic adapter.
