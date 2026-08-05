---
sidebar_position: 4
---

# Deployment, Credentials, And Security

## Client Dependencies

The feature branch vendors pinned source releases of libstrophe, libwebsockets, Mbed TLS, and Expat. The final transport adapter converts libstrophe's native stream opening and closing into RFC 7395 WebSocket framing while leaving ordinary XMPP stanzas as XML.

## Server

Prosody provides the central XMPP service. Its WebSocket endpoint is exposed through TLS on port 443. A custom route module handles account-scoped registration, discovery, hidden route ownership, deduplication, and delivery results.

Federation, BOSH, offline storage, and direct client-to-install messaging are disabled in the documented deployment.

## Credentials

The runtime credential boundary contains account ID, install ID, node ID, install JID, WSS endpoint, runtime token, and token expiry. The runtime token is protected for the current Windows user with DPAPI.

The runtime token must not be placed in:

- registry rows;
- command-line arguments;
- evidence logs;
- installer logs;
- source control.

Activation and XMPP runtime authentication are separate boundaries. An activation key should not remain the permanent XMPP password.

## Installer Status

The branch builds a separate XMPP MSI with its own product and upgrade identity. It does not currently participate in the main A2A MSI's feature ownership or current provider installer contract. Reintegration must preserve the XMPP logic while reconciling it with current-main changes instead of replacing either implementation wholesale.
