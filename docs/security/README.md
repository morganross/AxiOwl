---
sidebar_position: 1
slug: /security
---

# Security And Trust

AxiOwl is a local coordination and normalization layer for AI provider sessions. It can connect several provider surfaces, but it does not become the provider, the provider account, or the user's identity authority. The security model is built around narrow permissions, explicit device trust, authenticated message paths, and clear failure boundaries.

These pages describe the public security model in plain English. They intentionally do not publish private keys, credentials, internal host details, or exact wire-level cryptographic parameters. Public documentation should explain what protection is intended to accomplish without becoming a deployment manual for private infrastructure.

## Security goals

AxiOwl is designed to:

- protect message content while it moves between approved endpoints;
- bind an action to an approved device and recipient before a provider is called;
- reject stale, duplicated, malformed, or unauthorized requests;
- keep provider authentication under the provider's control;
- make sender identity stronger than a display name or a typed alias;
- keep installation and provider integration changes narrow and reviewable;
- expose enough status and evidence to distinguish handoff from delivery.

## What encryption does and does not mean

Encryption protects content from parties that should only route or observe the connection. It does not make every part of a workflow invisible. Routing metadata, timing, endpoint state, provider state, local logs, and the provider's own user interface can still reveal information. AxiOwl therefore treats encryption, authentication, authorization, and privacy as related but separate properties.

See [Encryption And Privacy](encryption-and-privacy.md) for the practical explanation and [Metadata And Identity](metadata-and-identity.md) for the information needed to route replies.

## Current product status

Security design and source work are active. Support varies by provider surface, and a source-level implementation is not the same as a built, installed, provisioned, or connected deployment. The [Provider Support Matrix](../reference/provider-support-matrix.md) is the public authority for provider status. Do not infer security or delivery support from the existence of a configuration file or an installer checkbox.

## Security pages

| Page | What it explains |
|---|---|
| [Encryption And Privacy](encryption-and-privacy.md) | Content protection, transport protection, metadata limits, and privacy expectations. |
| [Device Trust And Enrollment](device-trust-and-enrollment.md) | How a device becomes trusted, how it is admitted, and how it is removed. |
| [Authorization And Replay Protection](authorization-and-replay.md) | Why a message must be authorized before provider delivery and how repeats are rejected. |
| [Metadata And Identity](metadata-and-identity.md) | Sender identity, session identity, receipts, and data minimization. |
| [Updates And Supply Chain](updates-and-supply-chain.md) | Installer provenance, signed artifacts, and update trust. |
| [Known Security Limits](known-limitations.md) | Honest boundaries and risks that encryption cannot solve by itself. |
| [Trust Boundaries](trust-boundaries.md) | What AxiOwl can read, write, configure, or patch on a user's machine. |

## Reporting a security issue

Do not put credentials, private keys, or a complete exploit in a public issue. Use the maintainer's private reporting channel, provide the smallest useful description, and wait for a safe channel before sending sensitive evidence.
