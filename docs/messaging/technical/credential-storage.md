---
title: "Credentials and protected state"
slug: /messaging/technical/credential-storage
description: "Separate application sessions, provider accounts, pairing keys, SSH and release signing."
---

# Credentials and protected state

AxiOwl account credentials, provider credentials, device keys, SSH identities, A2A credentials and release-signing material are different assets. One must not be copied into another context as a shortcut.

| Asset | Purpose | Boundary |
| --- | --- | --- |
| AxiOwl account session | Website-authorized account operations | Native account helper and configured account authority |
| Provider session | Model/provider access | Provider's own application, profile and entitlement |
| Device identity/private key | Pairing and endpoint authentication | Owner-private native host/device state |
| SSH key/agent | Remote OS-user authentication | OpenSSH configuration and selected user |
| A2A credential | Agent-service authentication | Exact external/local service policy |
| Offline entitlement | Signed feature activation | Local claims/signature and machine binding |
| Publisher credentials | Package signing/notarization/publication | Release environment, never end-user message content |

## Platform mechanisms

The reviewed Windows account implementation uses native protected account state in the intended Windows user context. POSIX has a native credential adapter: Linux uses the selected secret-service helper and macOS uses its signed account credential helper/OS security facilities.

Credential availability is environment-dependent. A headless Linux session may lack the same secret-service session as the desktop. A rebuilt Mac helper can have different OS identity requirements. A policy forbidding a credential store can block that account path; documentation does not authorize recreating or weakening the store.

The helper boundary avoids passing secrets in shell arguments. Its private IPC and executable admission are not general-purpose public credential endpoints.

## State protection is not universal encryption

Private directories and ownership checks limit access but do not encrypt every file against the owning user or an administrator. Registry, operation-body, transcript and diagnostic files can remain sensitive plaintext even when session tokens use OS protection.

Pairing links/offers and control tokens are sensitive. Public device IDs/keys are identifiers, not account passwords, but still deserve careful handling when combined with routing information.

## Recovery and revocation

Sign-out removes local usable account access and attempts server-family revocation. If server revocation cannot finish, the record must remain visibly unfinished for recovery. Provider logout and independent pairing revocation are separate.

Do not rotate host keys, clear all provider logins, change file permissions broadly or reinstall credential services merely to hide an error. Preserve exact state and report which mechanism is unavailable.

See [account discovery](account-and-device-discovery.md), [pairing](pairing-and-revocation.md), [operations](operations-and-recovery.md) and [data lifecycle](data-lifecycle.md).

