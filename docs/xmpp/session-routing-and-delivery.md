---
sidebar_position: 2
---

# Session Routing And Delivery

## Addressing Model

An approved installation has its own transport credential, resource identity, messaging device identity, and local provider registry. Human-readable names help discovery, but remote authorization binds to exact endpoint and provider identifiers.

## Protected Action Flow

```text
source registry target
  -> resolve exact destination resource and protected route
  -> encrypt content for that approved endpoint
  -> sign the requested action and routing binding
  -> send one XMPP stanza
  -> server authenticates and routes opaque endpoint data
  -> destination verifies, decrypts, authorizes, and checks replay
  -> one request enters the local provider adapter
  -> provider result becomes a protected receipt
```

The sender cannot authorize an action merely by naming a provider. The server cannot turn ordinary chat text into an authorized provider request. The receiving endpoint owns the final decision.

## Exact Resource Delivery

Actionable stanzas target one exact online resource. They are not copied to every device under the account. This prevents a single remote action from invoking the same provider on multiple machines.

## Route Directory

The server can carry a bounded route directory whose sensitive descriptor remains endpoint-protected. Clear routing tokens are not action authority. The destination compares server-visible routing data with the authenticated protected descriptor before use.

## Receipts And Failure States

Transport acceptance, endpoint decryption, authorization, provider handoff, provider result, and provider reply are separate states. The receipt vocabulary preserves that separation so an offline target, rejected device, replay, local provider rejection, and completed provider result do not collapse into "send failed" or "send worked."

## Reconnection

Selected XMPP client features can maintain or restore a long-lived connection. This is required to receive remote work while the feature is active; it is not a generic application heartbeat. Local provider messaging remains on demand.
