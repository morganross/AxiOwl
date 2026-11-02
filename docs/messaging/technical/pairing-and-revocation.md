---
title: "Device pairing and revocation"
slug: /messaging/technical/pairing-and-revocation
description: "Crypto identity, account-only authority, independent trust and request-time checks."
---

# Device pairing and revocation

Pairing binds a real endpoint identity, not merely its display name. The same native node and public key must remain associated across discovery, handshake, trust and execution.

## Three separate grants

| Grant | Established by | Continued use |
| --- | --- | --- |
| Local owner control | OS/user-scoped native control admission | Confined to that local owner context |
| Independent pairing | Explicit native pairing/approval | Governed by its own exact trust and revocation record |
| Account-derived access | Current account membership plus native cryptographic approval | Requires exact approved identity and fresh account authority |

A shared account is not a replacement for the encrypted native relationship. An account notification cannot create a paired key.

## Saved connection versus live authority

A retained transport stream can outlive its original authorization observation. The runtime checks live stream identity/generation and paired-device authorization before admitting new work.

The latest source additionally limits account-only membership observations to 300 seconds and invalidates them when a change hint arrives. Mac/Linux use an in-process monotonic lease. Windows publishes a bounded authenticated observation over the local owner channel onto existing approvals; a restarted Core requires a fresh generation.

These checks use cached authority and schedule reconciliation separately. They do not perform an HTTPS refresh while holding file/bridge/store locks. Refused work is not automatically replayed.

## Revocation effects and limits

Account revocation removes account-derived access and published routing information through the applicable account/native paths. Explicit independent pairing can remain valid and must be reported separately.

The freshness limit bounds admission of **new account-only work**. It is not a guarantee of instant universal cancellation of already executed commands, completed downloads, provider actions or data already disclosed. Offline notification delivery cannot be assumed.

## Safe approval

Review the device, public identity/fingerprint, user and intended scope. Pairing offers and control tokens are sensitive even when device public keys are not passwords.

Do not regenerate an identity to avoid a denied approval, repurpose a pending candidate belonging to another endpoint or change saved keys merely because a friendly name matches.

See [security boundaries](security-model.md), [account discovery](account-and-device-discovery.md), [connected workspaces](connected-workspaces.md) and [recovery](operations-and-recovery.md).

