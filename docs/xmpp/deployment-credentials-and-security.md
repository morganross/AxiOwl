---
sidebar_position: 3
---

# Deployment, Credentials, And Security

## Server Roles

| Role | Current evidence | Ownership |
|---|---|---|
| Windows x64 self-host | Native server and admin source, MSI feature, service install evidence | Customer machine and LocalSystem service boundary |
| Linux x86-64 self-host | Prosody/nginx package source and install lifecycle | Customer Linux host |
| Cloud ARM64 Linux | Deployed server and private provisioner health evidence | Hosted AxiOwl service boundary |

All three roles are intended to preserve the same security meaning even though their process and storage implementations differ.

## Credential Types

Do not treat these values as interchangeable:

| Credential or identity | Purpose |
|---|---|
| Website account session | Account access |
| License entitlement | Optional product feature |
| Device trust key | Device admission and lifecycle |
| XMPP transport credential | Authenticate one approved connecting resource |
| Message/action key | Protect and authorize endpoint actions |
| Provider credential | Authenticate the local provider account |

Transport provisioning occurs only after an authorized trust decision. Possessing an XMPP password does not grant provider action authority.

## TLS And Server Identity

Clients require a secure WebSocket endpoint with validated TLS and expected server identity. A user-entered URL, QR code, local discovery result, or DNS hint can identify where to connect, but it cannot override certificate and signed trust checks.

## Server Data

Servers may retain account verifiers, active resource bindings, bounded public messaging-key bundle state, route-directory state, and operational metadata. The selected protected action path does not require plaintext message bodies, an offline payload archive, or provider credentials on the server.

Public device/key bundle data is routing and encryption setup material, not device authority. Revocation must remove the corresponding active server state.

## Deployment Evidence

A healthy service proves that the server process and its immediate dependencies are available. It does not prove:

- a customer device was admitted;
- that device established the expected protected session;
- a message was decrypted by the destination;
- the receiver authorized a provider action;
- the provider produced an effect or reply.

Those boundaries need endpoint and provider evidence.
