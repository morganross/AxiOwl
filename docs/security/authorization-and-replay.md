---
sidebar_position: 4
---

# Authorization And Replay Protection

Decryption answers "could this endpoint read the message?" Authorization answers "may this request invoke this provider action now?" AxiOwl performs both.

## Receiver-Owned Decision

Before a remote request reaches a provider, the receiving endpoint checks:

- the authenticated sending device;
- current device membership and revocation state;
- the intended destination endpoint and provider target;
- the requested operation and grant;
- policy freshness and trust-chain continuity;
- message ordering and prior use;
- exact binding between signed bytes and the provider-visible request.

The XMPP server cannot grant provider permission. The sender cannot authorize itself merely by choosing a target name. A license token cannot authorize an action.

## One-Shot Provider Handoff

An authorized request becomes a move-only, one-shot handoff to the existing local provider boundary. The provider adapter still applies its normal provider-specific rules. Authorization does not rewrite provider behavior or create a second provider API.

The state transition is recorded before or with the handoff so an ambiguous process interruption does not lead to an automatic second provider call.

## Replay Protection In Plain English

A correctly signed message can still be dangerous if an attacker can submit it twice. AxiOwl records sender ordering, message identity, receiver-run ownership, and dispatch state. Repeated, stale, forked, or already-terminal requests fail closed.

Exactly-once provider effect cannot be promised across every external provider. The practical guarantee is **at most one authorized handoff from AxiOwl for the recorded request**, with an indeterminate state preserved when the process cannot prove what the provider did.

## Receipts

Protected receipts distinguish rejection before provider handoff, provider-ingress rejection, dispatch started, terminal provider result, and reply correlation. A receipt is signed and returned through the authenticated endpoint session; the platform may choose fresh transport metadata but may not reconstruct the recipient or signer from untrusted input.

See [Receipts, Delivery, And Completion Proof](../concepts/receipts-vs-proof.md).
