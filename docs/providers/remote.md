# AxiOwl Remote Nodes

Remote nodes let one AxiOwl installation address an A2A endpoint owned by another installation. Secure XMPP approved devices are documented separately because they use different identity, transport, encryption, and authorization rules.

## Capabilities

| Operation | Status |
|---|---|
| Node registration and verification | implemented |
| Direct A2A send | implemented |
| A2A over SSH | implemented |
| External task tracking | implemented |
| Provider operation behind the destination | determined by the destination registry and provider package |

## Transports

Current `main` supports direct HTTPS A2A and A2A-over-SSH for newly registered nodes. The proprietary common `/v1/*` API and hosted relay server are retired. See [Inter-node Communication](../inter-node/README.md).

## Installer

The Windows MSI exposes A2A Server and A2A Client as separate optional features. Remote routing is not used as a fallback to hide a broken local provider.

## Linux Boundary

The Linux x86-64 package includes the native AxiOwl client and provider packages, but it is still an engineering preview and does not inherit every Windows provider claim automatically.

## Risks

- a display name or setup value is not durable node authority;
- direct A2A requires HTTPS and Agent Card preflight;
- retry is blocked after ambiguous failures to prevent duplicate delivery;
- A2A acceptance is not destination-provider proof;
- XMPP is a separate path and is never an A2A fallback.
