---
sidebar_position: 1
slug: /security
---

# Security And Trust

AxiOwl crosses local provider applications, user sessions, machine services, network protocols, and cloud services. Its security model is based on narrow authority: no one credential, service, display name, or transport event should be able to impersonate all the others.

These pages explain the public model without publishing private infrastructure identifiers, credentials, secret key material, or a wire-format implementation recipe.

## Security Goals

AxiOwl is designed to:

- keep provider authentication under the provider's control;
- use provider-owned session identity instead of guessing from titles;
- protect remote message content between approved endpoints;
- require device trust and receiver-owned authorization before a remote request reaches a provider;
- reject duplicate, stale, malformed, revoked, or ambiguous actions;
- keep licensing separate from identity and messaging authority;
- constrain installer changes to selected features;
- distinguish acceptance, routing, provider delivery, provider effect, and reply evidence.

## Security Is More Than Encryption

Encryption hides content from parties that only need to route it. Authentication identifies a transport or signer. Authorization decides whether that identity may request this action. Replay protection prevents reusing an old valid request. Provider proof shows what happened after authorization.

A system can have encrypted transport and still authorize the wrong sender. It can have a valid signature and still replay an old action. AxiOwl therefore keeps these checks separate.

## Current Evidence Boundary

Current main contains substantial endpoint security source: protected XMPP messages, per-device identity, signed actions, trust transitions, receiver authorization, durable replay/dispatch state, one-shot provider handoff, and protected receipts. Windows and Linux packages and cloud server deployment evidence also exist.

The public site does **not** yet claim a complete current end-to-end encrypted client-to-provider demonstration. Source completion, service health, and a complete user journey are different evidence levels. See [Current Product Status](../reference/current-product-status.md).

## Read By Topic

| Page | Topic |
|---|---|
| [Encryption And Privacy](encryption-and-privacy.md) | What content protection covers and what metadata remains visible |
| [Device Trust And Enrollment](device-trust-and-enrollment.md) | First device, later-device approval, revocation, and trust loss |
| [Authorization And Replay](authorization-and-replay.md) | Why decryption does not automatically invoke a provider |
| [Metadata And Identity](metadata-and-identity.md) | Session identity, routing metadata, aliases, and logs |
| [Trust Boundaries](trust-boundaries.md) | Local user, installer, provider, service, A2A, XMPP, and licensing authority |
| [Updates And Supply Chain](updates-and-supply-chain.md) | Signed artifacts, provider packages, and pull-update boundaries |
| [Known Security Limits](known-limitations.md) | What the current product does not promise |

## Reporting Sensitive Issues

Do not place credentials, private keys, complete message bodies, private host details, or a working exploit in a public issue. Share the smallest useful redacted description first and use a private maintainer channel for sensitive evidence.
