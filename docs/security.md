---
sidebar_position: 10
slug: /security
title: Security And Privacy
---

# Security And Privacy

AxiOwl products work with different kinds of sensitive information: provider accounts, project files, conversations, paired devices, and usage readings. Each product gives those relationships a specific purpose and scope.

## Know Which Product Has Access

| Product | What it needs | What the user controls |
|---|---|---|
| Messaging | Session discovery, registry state, message delivery, and MCP replies | Selected integrations, targets, and remote routes |
| IDE | Chosen workspace, provider connection, conversation, and agent tools | Account, model, brain, workspace, and permissions |
| Mobile | Approved connection to a host and its advertised controls | Device approval, host selection, and requested actions |
| Usage Meter | Selected account methods and provider-reported readings | Account binding, refresh, cloud-query consent, and companion access |
| Hosted relay | Routing and connection metadata plus encrypted traffic | Which endpoints are paired and allowed to connect |

Sharing infrastructure does not merge product permissions. A Usage Meter companion is a reader of approved snapshots, not a terminal client.

## Encryption And Device Approval

AxiOwl's encrypted relay connections protect application content between paired endpoints. The relay forwards encrypted traffic so devices on different networks can communicate.

Approval matters as much as encryption. A host identifies the requesting device and requires the intended pairing flow before granting its product capabilities. A pairing code or link starts that relationship; it is sensitive setup material.

The endpoints necessarily see the content they display or act upon. Encryption across the relay does not prevent the selected model provider from receiving context sent to it, or protect data already exposed by a compromised endpoint.

## Credentials Stay With Their Purpose

Provider authentication belongs to the selected provider environment or explicit IDE connection. Mobile pairing does not copy those account tokens to the phone.

Usage Meter collects with the account method assigned to a card. Its companion export excludes provider secrets and raw credential state.

An AxiOwl website login or license has a different purpose from provider authentication, SSH access, or an A2A credential. One should not be treated as permission for the others.

## Project And Tool Access

Agents run with the access supplied by their runtime and host user. A workspace label is context; it is not automatically an operating-system sandbox.

Review provider permissions and the target of an operation. A terminal opened through Mobile operates on the real host. A conversation transferred in the IDE makes supported context available to the destination provider.

## Direct Connections And Remote Agents

Direct routes require deliberate endpoint protection. The operator owns the network exposure, transport security, authentication, and firewall configuration.

SSH routes use the selected SSH identity and remote account. A2A endpoints use their advertised authentication and task semantics. The receiving agent's own provider and data policy still apply to content you send.

## Local State And Retention

Messaging retains registry and mailbox information needed for coordination. Providers retain their own session history. The IDE keeps account/session metadata and AxiCode-owned state. Usage Meter retains account bindings and readings according to its platform behavior.

A product's uninstall or account-removal action has a defined ownership scope. Read that scope rather than assuming uninstalling one app deletes every provider conversation or revokes every remote credential.

## Updates And Downloads

Use the product and platform entries on [Downloads](https://axiowl.com/downloads/). Release identity, publisher signatures, and channel information help distinguish the artifact you intended to install.

A signed package identifies its publisher and bytes. It does not grant model access or approve a new phone. Preview and Stable remain separate release choices.

## Share Less In Support Requests

Start with the product, platform, version, selected operation, and visible status. Add narrow redacted logs when needed.

Keep passwords, access tokens, pairing links, private keys, raw provider account files, and unnecessary billing or project information out of public reports. Report sensitive security concerns privately through [Contact](https://axiowl.com/contact/).

Product detail: [IDE privacy](ide/security-and-privacy.md), [Mobile privacy](mobile/security-and-privacy.md), and [Usage Meter privacy](usage-meter/security-and-privacy.md).
