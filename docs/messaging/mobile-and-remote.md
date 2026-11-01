---
title: "Mobile and remote access"
slug: /messaging/mobile-and-remote
description: "Reach the right computer without confusing pairing, provider login and message delivery."
---

# Mobile and remote access

The computer running a provider remains the owner of that provider's sessions, project files and tools. A remote connection makes that environment reachable; it does not move it.

## From another computer

Use an enrolled relay-peer route or [SSH Messaging](../ssh.md). The destination needs its own installed integration, authenticated account and usable provider session.

Select the complete remote conversation label. A local chat with a matching title is not the same destination.

## From a phone

In AxiOwl Mobile's connected-host mode:

1. Open the host's device/connection area.
2. Create a fresh pairing offer and import it on the intended phone.
3. Approve the expected device on the host.
4. Connect to that host and select the intended provider session.
5. Use only the controls advertised by the connected host.

Treat pairing links as sensitive setup material. Pairing is an approval relationship, not provider authentication or permission to expose every host operation.

The host must remain running and reachable. A phone reconnect does not prove a new message was delivered, and a powered-off host cannot continue its work.

## Capabilities differ

A connected client can expose conversation views, task activity and controls such as approvals, files or terminals when the host/provider supports them. A terminal operates on the real host.

Do not infer a capability from a provider logo alone. Desktop and CLI surfaces can have different tools and permissions.

Some phone applications also offer a phone-local agent mode. That is separate from controlling a desktop session; it does not inherit the desktop's credentials or guarantee offline model inference.

## Routes and trust

A paired encrypted-relay connection protects content between its endpoints. A direct route needs an operator-controlled network, authentication and transport configuration. SSH uses the selected SSH account and host identity.

An AxiOwl account, device approval, SSH key and provider login each have their own purpose. Review them separately.

The [Mobile guide](../mobile/README.md) covers phone-specific setup. [Administration](administration.md) covers host ownership and [Security](security-and-privacy.md) describes the data boundaries.
