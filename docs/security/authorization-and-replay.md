---
sidebar_position: 4
---

# Authorization And Replay Protection

AxiOwl separates receiving a message from authorizing an action. The provider should not be called merely because an encrypted envelope arrived or because a local process recognized a familiar name.

## Authorization before provider delivery

Before a protected action reaches a provider boundary, the receiving side should establish:

- the sender is an admitted device;
- the target is the intended provider session;
- the request belongs to the current trust and policy state;
- the request has not already been consumed;
- the exact provider-visible content is the content that was authorized.

If those conditions cannot be established, the safe result is rejection before provider invocation. A failure should not be hidden by retrying a request that may already have been accepted.

## Replay protection in plain English

Replay protection prevents a previously valid request from being treated as a new request. AxiOwl keeps enough durable state to distinguish a new request, a duplicate, a rejected request, and a request whose final outcome is already known.

This matters for more than attackers. Network retries, process restarts, duplicate command files, stale provider sessions, and interrupted handoffs can all produce the same request twice.

## One-shot handoff

The handoff into a provider is intentionally narrow. Once a request is consumed, it should be moved into the provider boundary rather than copied into multiple competing paths. A provider failure does not automatically mean the action is safe to retry; the system must preserve the original outcome and make the uncertainty visible.

## Receipts are not authorization proof

A receipt tells the caller where the request stopped. It does not grant permission and it does not prove that a provider displayed or acted on the message. See [Receipts Versus Proof](../concepts/receipts-vs-proof.md) for the user-facing evidence model.

## Fail-closed behavior

The following are security outcomes, not unusual edge cases:

- malformed protected data is rejected;
- unknown or revoked devices are rejected;
- stale policy or trust state is rejected;
- duplicate requests are not invoked twice;
- an uncertain handoff is reported instead of guessed;
- provider-visible bytes are not silently changed after authorization.
