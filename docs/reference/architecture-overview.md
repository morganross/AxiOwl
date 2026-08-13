# AxiOwl Architecture Overview

AxiOwl is not one universal adapter. It is a common coordination core surrounded by provider-specific, protocol-specific, platform-specific, and authority-specific components.

## System Layers

| Layer | Responsibility |
|---|---|
| Local core | Registry, normalized addresses, sender identity, message and receipt IDs, MCP, mailbox, logs, and workflow results |
| Provider packages | Discovery, installation, send, create, rename, and provider-specific verification for one concrete surface |
| A2A | Standards-based Agent Cards, inbound/outbound tasks, external endpoints, and node transport |
| Secure XMPP | Approved-device remote actions, endpoint encryption, exact-resource routing, receiver authorization, replay handling, and protected receipts |
| Account and pool | Website account session and the account's current device pool/generation |
| Device trust | Signed genesis, later-device admission, revocation, replacement, closure, and read-only trust projections |
| Licensing | Optional entitlement for licensed product behavior; no account, device, pool, or messaging authority |
| Packaging and update | Windows MSI, Linux Debian package, Apple/Android artifacts, provider packages, signatures, release manifests, and pull metadata |

## Local Provider Flow

```text
CLI, GUI, or MCP request
  -> validate caller and operation
  -> resolve exact target in the registry
  -> select one provider package
  -> invoke that provider's native delivery method
  -> record acceptance or rejection
  -> correlate a later provider-owned MCP reply
```

Display names are for people. Provider session IDs and authenticated callback metadata are used for routing and proof.

## A2A Flow

```text
external A2A caller
  -> authenticated A2A route
  -> scoped Agent Card or task target
  -> interactive user broker when local user state is required
  -> normal provider package
  -> task state and correlated result
```

The Windows installer now has separate A2A server and A2A client/user-broker features. The old documentation claim that the broker was compiled but absent from the MSI is no longer true.

Outbound A2A works in the other direction: an explicit external Agent Card is imported as a target and called through the A2A client. AxiOwl does not need to reimplement that endpoint's internals.

## Secure XMPP Flow

```text
approved source device
  -> endpoint encrypts content and signs the requested action
  -> XMPP server authenticates transport and routes to an exact resource
  -> destination endpoint decrypts and verifies sender/session binding
  -> receiver checks device trust, permission, freshness, and replay state
  -> one authorized request crosses the unchanged provider boundary
  -> endpoint protects and returns the terminal receipt
```

The server routes; it does not decide that a provider action is permitted. Successful decryption is also not enough: receiver-owned authorization must succeed before provider invocation.

The selected protected path stores no offline message body. An unavailable exact destination reports that it is offline rather than silently queuing or switching transports.

## Identity And Authority Separation

```text
website login      -> account identity
current pool       -> account's active device group
device trust       -> admitted keys and lifecycle
XMPP provisioning  -> per-device transport credential
provider login     -> provider's own local authority
license token      -> optional product entitlement only
```

No arrow in this diagram means one credential can substitute for another. See [Accounts, Licensing, Pools, And Device Trust](../concepts/accounts-licensing-and-device-trust.md).

## Platform Shape

Windows and Linux consume the shared C++ secure-XMPP core. macOS and iOS are native Swift products that consume compatible contracts. Android is a native Kotlin/Compose product with native security bridges. Platform custody and UI differ, but a protected action must retain one security meaning.

## Release Shape

Core applications and provider packages are separately identifiable. Building, signing, publishing immutable bytes, promoting an update channel, checking for an update, and applying an update are separate operations. A later stage must not be inferred from an earlier one.

## Current Completion Boundary

The named source components are broad and substantial. Windows and Linux packages exist; cloud service deployment evidence exists. The public site does not yet claim a complete current protected client-to-XMPP-to-provider-to-receipt demonstration. See [Current Product Status](current-product-status.md).
