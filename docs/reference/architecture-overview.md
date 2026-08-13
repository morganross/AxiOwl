---
sidebar_position: 2
---

# AxiOwl Architecture Overview

AxiOwl is a common coordination core surrounded by provider-specific, protocol-specific, platform-specific, and trust-specific components.

## System Layers

| Layer | Responsibility |
|---|---|
| Local core | Registry, normalized addresses, sender identity, messages, receipts, MCP, mailbox, and logs |
| Provider packages | Discovery and delivery for one concrete provider surface |
| A2A | Standards-based Agent Cards, messages, tasks, external endpoints, and inter-node agents |
| Secure XMPP | Approved-device actions, endpoint protection, exact-resource routing, receiver authorization, replay state, and protected results |
| Account and pool | Website account session and the customer's current device group |
| Device trust | Signed genesis, later-device admission, device lifecycle, and trusted state |
| Licensing | Optional entitlement for licensed product experiences |
| Packaging and updates | Platform installers, provider packages, signatures, release metadata, and pull updates |

## Local Provider Flow

```text
CLI, GUI, or MCP request
  -> resolve the registry target
  -> select one provider package
  -> use that provider's delivery method
  -> record a receipt
  -> correlate the provider reply
```

The core normalizes the request and evidence. The provider package preserves the destination's own session and delivery model.

## A2A Flow

```text
A2A caller or client
  -> Agent Card and scoped target
  -> message or task
  -> destination agent boundary
  -> task state, result, and artifacts
```

Desktop provider sessions can appear as selected A2A agents through the interactive user broker. AxiOwl can also call external Agent Cards as part of a larger project workflow.

## Secure XMPP Flow

```text
approved source device
  -> protect the signed action
  -> route to one exact destination resource
  -> verify, decrypt, and authorize at the receiver
  -> hand one request to the local provider package
  -> protect and return the result
```

The routing server moves the protected envelope. The destination endpoint owns device trust, action permission, replay state, and provider delivery.

## Identity And Authority

```text
website account     -> account access
device pool         -> current approved-device group
device trust        -> admitted device identity
XMPP credential     -> transport connection
provider login      -> provider account and model access
license entitlement -> optional licensed capability
```

Keeping these responsibilities separate gives AxiOwl a clear trust model and allows each service to remain focused.

## Platform Shape

Windows and Linux use the shared C++ coordination and security core. macOS and iPhone use native Swift experiences. Android uses a native Kotlin/Compose application with native security integration. Each platform presents the product using its own lifecycle and protected storage conventions.

## Release Shape

Core applications and provider packages are independently identifiable. Signed artifacts, immutable publication, channel promotion, verified pull state, and explicit application form a traceable path from release authority to installed product.

Continue with [How AxiOwl Works](../how-it-works/README.md) for a user-centered tour.
