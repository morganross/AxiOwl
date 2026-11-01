---
title: "Messaging security and privacy"
slug: /messaging/security-and-privacy
description: "Understand local records, provider access, remote routes and signed updates."
---

# Messaging security and privacy

Messaging necessarily handles the conversation identity and content needed to deliver an instruction. Decide which provider, account and computer should see that content before sending it.

This is an implementation guide. The website's [Privacy Policy](https://axiowl.com/privacy-policy/) covers the site's policy and service relationships.

## What is stored locally

AxiOwl keeps routing and registry information, operation records, integration configuration and diagnostics. Native Send records can include the authored message body.

Providers keep their own conversation history. Discovery or delivery may read provider-owned state required by that integration. Local processing is not a promise that no data is stored.

This guide does not promise a universal retention interval, encryption of every local file or automatic deletion of provider history when AxiOwl is removed.

## Who sees a message

The selected destination's provider environment necessarily sees the delivered text. A hosted model provider may process it under that provider's policies and the chosen account.

A remote target also involves the destination computer and its authorized user. Sharing a path does not grant access to a file, but including file contents in the body shares those contents.

## Paired relay connections

The paired relay protocol encrypts application content between its endpoints. The relay provides routing and reachability.

Encryption does not hide all connection/routing metadata, protect a compromised endpoint or prevent an authorized destination from using the content. Do not generalize the paired-relay property into an end-to-end encryption guarantee for every A2A endpoint, SSH command or diagnostic export.

## Direct, SSH and A2A exposure

SSH uses its selected identity, host key and remote account. Keep host-key verification enabled.

Direct and A2A server routes need deliberate bind-address, authentication, TLS and firewall configuration. Enabling a server can expose a network surface; a blanket claim that the product never listens on ports would be misleading.

An A2A Agent Card describes a service. It does not grant permission to call that service.

## Separate credentials and approvals

An AxiOwl account/license, provider account, device pairing, relay-peer relationship, SSH identity and A2A credential have different purposes.

Approve only the intended device or route. Do not paste passwords, API keys or pairing links into conversation messages. Use the controls and protected storage appropriate to that credential.

An integration can configure or modify local provider assets. Review its scope and preserve provider-owned data rather than resetting an entire account to remove one integration.

## Updates and support

Use approved packages and normal signature/hash, descriptor and publisher verification. A valid signature identifies the expected publisher and bytes; it does not prove every provider operation works.

For support, share the product, OS, versions, intended operation and narrowly redacted status/log evidence. Message bodies and diagnostic records can contain confidential project material.

Use [Contact](https://axiowl.com/contact/) for sensitive reports. No compliance certification, zero-logging guarantee or universal security audit is asserted by this guide.
