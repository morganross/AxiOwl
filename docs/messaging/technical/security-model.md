---
title: "Security boundaries and permissions"
slug: /messaging/technical/security-model
description: "Identity, content, local ownership, remote authority and limits of protection."
---

# Security boundaries and permissions

The central security question is **which user, device and provider conversation is authorized to receive or act on the requested content**. An addressable name alone is not a permission.

## Trust boundaries

| Boundary | Required distinction | Consequence of crossing it |
| --- | --- | --- |
| Agent to native Send | Executing host/session identity versus authored body | Prevents another chat being claimed as sender |
| Name to native conversation | Initial selection versus pinned destination | Later recency changes cannot redirect admitted work |
| UI to local native control | Owner authorization versus loopback reachability | An arbitrary local page is not the desktop owner |
| Device to host | Cryptographic identity versus display name | A copied device name does not grant access |
| Account to paired device | Current membership versus saved crypto approval | Stale account authority cannot admit new work |
| Host to provider | User profile, account and surface | Service elevation does not supply provider login |
| Updater to installed assets | Verified package identity, ownership and shutdown | Availability is not permission to replace unrelated files |

## Content is input, not permission

A delivered message is content for the target's environment. It may contain instructions, file names or malicious text. Sending it does not grant new OS permissions, waive the target's tool policy or authorize an additional Send.

A provider or agent can act on the message using permissions already available to it. Operators must evaluate those tools and account policies separately. Message routing is not a sandbox for the recipient model.

## Encryption and local data

Paired Relay application content is encrypted between the paired endpoints. Relay routing and connection metadata remain observable to the transport service. Endpoint compromise, exported diagnostics and provider processing remain outside that protection.

SSH protects its own transport using the selected identity and verified host key. A2A protection depends on the endpoint's authenticated TLS/service configuration. These properties do not imply universal encryption of local operation files or every HTTP interface.

## Revocation and restricted state

The new account-only freshness lease is bounded to five minutes and invalidated by a received change hint. The bridge rechecks live identity and authorization when admitting new work. Independent pairing and local owner channels have separate trust.

A missing credential mechanism or refused identity check should produce an accurate incomplete result, not an unsafe fallback. Keep [recovery](operations-and-recovery.md) and [installation warnings](installation-and-removal.md) distinct from permission grants.

These are implementation boundaries, not a penetration-test result, security certification or guarantee against all threats. See [source status](source-and-release-status.md).

