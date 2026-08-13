---
sidebar_position: 1
---

# Secure XMPP Transport

Status: **implemented in current `main`, packaged by platform role, and deployed for the cloud server role. A complete current protected client-to-provider demonstration is not yet claimed.**

XMPP gives AxiOwl a standards-based, long-lived remote transport for approved devices. It is separate from A2A and separate from local provider delivery.

## What Current Main Contains

- secure WebSocket XMPP clients for Windows and Linux;
- native mobile and Apple integration work;
- a shared endpoint security library;
- end-to-end protected message envelopes;
- signed device trust and action authorization;
- replay and dispatch state;
- protected receipts;
- an optional native Windows self-host server;
- a Linux self-host server profile;
- a cloud ARM64 Linux server deployment role;
- per-device transport provisioning and exact-resource routing.

## Security Boundary

The XMPP server authenticates the connecting resource and routes encrypted endpoint data. It does not decide whether an action may invoke Codex, Cursor, Claude, or another provider. The receiving endpoint decrypts, verifies device trust and action authority, rejects replay, and only then hands one request to the unchanged local provider adapter.

## No Hidden Fallback

An XMPP target either uses its selected protected XMPP route or fails. It does not silently switch to A2A, SSH, a proprietary API, or plaintext provider delivery. This protects both security meaning and duplicate-delivery behavior.

## Online-Only Protected Actions

The selected action path targets one exact approved resource. It does not retain an offline message body, mirror to sibling devices, or use a message archive as a fallback. If that resource is unavailable, the sender receives an offline result.

## A2A Remains Separate

A2A exposes or calls standards-based agent endpoints over HTTP/JSON. XMPP carries protected device-to-device actions. Neither protocol is tunneled through the other, and a success on one is not evidence for the other.

## Read Next

- [Session Routing And Delivery](session-routing-and-delivery.md)
- [Deployment, Credentials, And Security](deployment-credentials-and-security.md)
- [External Chat And Provider Authority](external-chat-gateway.md)
- [Encryption And Privacy](../security/encryption-and-privacy.md)
- [Authorization And Replay](../security/authorization-and-replay.md)
