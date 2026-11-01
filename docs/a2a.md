---
title: "Connected computers and A2A"
slug: /a2a
description: "Choose the right remote route and keep its authorization and task model explicit."
---

# Connected computers and A2A

A remote destination can be another AxiOwl computer, a provider-specific remote conversation or an agent-service endpoint. Choose the route that matches the destination.

| Destination | Connection |
| --- | --- |
| Conversations on an enrolled AxiOwl computer | Authorized relay-peer or SSH route |
| A computer already accessible through your SSH setup | [SSH Messaging](ssh.md) |
| A provider's own remote conversations | That provider's remote integration, where offered |
| A standards-based agent service | A2A endpoint and its actual Agent Card |
| Computer-owned sessions from a phone | [AxiOwl Mobile](messaging/mobile-and-remote.md) |

## Computer-to-computer routing

AxiOwl exchanges the registry information needed to address a remote conversation. The destination computer retains its own provider/account/session context.

Approval and a network connection do not automatically authenticate the provider. Use the complete remote target label and keep the selected route. A message containing a project path does not copy its files.

## A2A and MCP have different jobs

MCP exposes tools to an agent inside its host application. A2A connects agent-service endpoints.

An A2A Agent Card describes an endpoint, capabilities and authentication. The endpoint can have its own task/result lifecycle. That service interface is not an automatic continuation of the native conversation Send operation.

## Call an external endpoint

Import or register the intended endpoint's actual Agent Card using the available A2A controls. Review its advertised operations and configure the required authentication.

Interpret its result under that endpoint's contract. An accepted task is not proof of completed work. Keep an external task identifier separate from the native conversation identity used behind a provider-backed endpoint.

## Expose a local endpoint

Enable only the server features and agents you intend to expose. Protect the bind address, network reachability and authentication.

Publishing an Agent Card does not grant permission to execute tools. Provider-backed work still crosses into the user context that owns the provider.

## Approvals do not transfer between routes

A website account, mobile pairing, relay-peer approval, SSH identity and A2A credential are separate relationships. One does not authorize the others.

Keep the receiving endpoint's provider and data policies in mind. It necessarily sees content delivered to it and can use the tools permitted by that environment.

Read [Administration](messaging/administration.md) and [Security and privacy](messaging/security-and-privacy.md) before enabling broader access.
