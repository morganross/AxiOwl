---
title: "Messaging over SSH"
slug: /ssh
description: "Use an approved SSH connection to address real conversations on another computer."
---

# Messaging over SSH

SSH Messaging reaches conversations through a configured SSH computer. That computer owns the destination's provider environment and performs its local delivery.

## Before connecting

The destination needs the matching AxiOwl installation, supported provider integration and authenticated provider account. Desktop delivery also needs the appropriate signed-in graphical user session.

The sending computer needs an approved SSH connection under the intended remote user. Keep host-key verification enabled. Pairing a phone or signing into an AxiOwl account does not configure SSH credentials.

## Configure the connection

Use your normal OpenSSH configuration and your own values:

~~~sshconfig
Host studio-computer
    HostName studio.example.com
    User your-remote-user
    IdentityFile ~/.ssh/your-approved-key
    IdentitiesOnly yes
    StrictHostKeyChecking yes
~~~

Establish the destination's verified host-key entry through your normal administrative process. Background operations cannot complete an interactive password or unknown-host prompt.

The current command family includes:

~~~sh
axiowl ssh node add --name "Studio computer" --host-alias studio-computer
axiowl ssh node list
axiowl ssh refresh chats --name "Studio computer"
axiowl ssh status --json
~~~

Use the commands supported by your installed platform/version. Do not supply another person's session identity to make a command appear native.

## Address the exact remote target

Select the full name AxiOwl displays, including its computer and transport qualifier. A label such as **API review @ studio-computer (SSH)** is different from a local **API review** chat.

Ask your integrated agent to use that supplied name directly. It should not shorten the name, guess UUIDs or silently switch to a different route.

## Interpret the result

A reachable SSH service proves transport reachability. A synchronized registry proves that chat addresses were exchanged. Neither proves a new message reached its target.

Read the Send result and, when confirmation is needed, inspect the intended native conversation. After a Send-only tool call returns, the sending agent reports the result and finishes instead of automatically polling or waiting for more messages.

A timeout does not cancel admitted work. Preserve the existing operation and avoid duplicate dispatch.

## Separate directions and separate operations

The destination does not receive product-generated instructions to initiate another Send. If a user explicitly authorizes a new message in the other direction, that direction needs its own configured route and permissions.

Neither registry synchronization nor mentioning a path transfers a repository. Make referenced project material accessible through your normal project tools.

## Keep the routes distinct

Codex Remote is a provider-specific integration, while SSH Messaging addresses AxiOwl conversations through SSH. A2A-over-SSH has its own endpoint/task interface.

See [Connected computers and A2A](a2a.md), [Remote access](messaging/mobile-and-remote.md) and [Troubleshooting](messaging/faq-troubleshooting.md). Historical exchanges from older releases do not qualify the current implementation.
