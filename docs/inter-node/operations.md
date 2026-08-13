---
sidebar_position: 4
---

# Inter-node Operations

## Enrollment And Inspection

The CLI provides node add, list, show, verify, disable, enable, and removal operations for explicit A2A nodes. Verification checks the selected transport boundary, such as an A2A Agent Card or an A2A-over-SSH session.

## Failure Diagnosis

Read evidence in this order:

1. node lookup and enabled state;
2. selected transport plan;
3. required address and credential availability;
4. Agent Card or SSH preflight;
5. network response;
6. remote A2A task result;
7. destination provider delivery evidence;
8. correlated provider reply.

This ordering distinguishes DNS, TLS, authentication, node routing, target discovery, provider delivery, and reply failures.

## Linux Boundary

Linux x86-64 now has a compiled native client and Debian packaging, including the shared secure XMPP runtime and provider packages. It remains an engineering preview: package presence does not establish that every Windows provider method or a complete protected-device journey is demonstrated on Linux.

## XMPP Operations

XMPP endpoint selection, device admission, transport credentials, and protected action receipts belong to the XMPP/device-trust model, not the A2A node registry. Diagnose them with the [XMPP documentation](../xmpp/README.md) and do not copy A2A access tokens into XMPP configuration.
