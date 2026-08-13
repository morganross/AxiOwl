# Release Review Guide

The [Release Evidence Checklist](../reference/release-validation-checklist.md) defines the public evidence vocabulary. This page explains how to read a release candidate without confusing stages.

## A Release Is A Chain

```text
source identity
  -> built components
  -> signed components
  -> platform package
  -> signed package
  -> immutable publication
  -> signed channel promotion
  -> installed or deployed runtime
  -> demonstrated user journey
```

Each arrow can fail independently. A later artifact should carry enough provenance to identify the earlier bytes it contains.

## Windows Review

The Windows release scripts produce the MSI, signing proof, build record, signed-component export, and provider-package exports. Review those records together.

The MSI should describe current feature ownership:

- eleven provider packages;
- A2A Server and A2A Client;
- XMPP Client and XMPP Server;
- core CLI, mailbox, PATH, and discovery support.

Use a complete Uninstall followed by Uninstall-install when replacing a prior AxiOwl version. Do not call that process repair, upgrade, downgrade, or rollback.

## Provider Review

Use one current session per claimed provider surface. Record the exact provider ID, provider session ID, request, receipt, provider-visible result, and correlated MCP reply where applicable. A chat title is not sufficient identity, and one surface does not prove another surface under the same brand.

## A2A Review

Review AxiOwl as both:

- an A2A server exposing scoped Agent Cards and tasks;
- an A2A client importing and calling external Agent Cards.

Keep service acceptance, user-broker handoff, provider effect, task completion, and push delivery separate.

## XMPP Review

Review the exact XMPP client/server roles involved and follow the protected path from endpoint selection through transport authentication, decryption, authorization, replay decision, provider effect, and protected receipt.

For a release that presents the complete five-role experience, record the exact installed-artifact journey across those roles.

## Update Review

An immutable release can exist before a channel points to it. Internal promotion and stable promotion are separate. Client check, package download, staging, and apply are also separate.

Opportunistic Create/Send checks are detached one-shot checks. They do not delay or retry the provider operation and do not auto-apply an update.

## Public Release Record

Retain a public-safe record of:

- release identity and source revision;
- artifact names, sizes, and digests;
- publisher/signature identity without credentials;
- package feature inventory;
- publication and channel state;
- exact platform/provider/protocol claims;
- known limitations.

Private cloud identifiers, tokens, keys, internal addresses, and unredacted provider content do not belong in public release documentation.
