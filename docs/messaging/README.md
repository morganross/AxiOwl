---
title: "AxiOwl Messaging"
slug: /messaging
description: "Connect real AI conversations across provider applications and computers."
---

# AxiOwl Messaging

AxiOwl Messaging lets you send an authored message to a real conversation in another supported AI application. You keep working in the provider tools you already use. Some installed interfaces label the product **AxiMessage**; these guides use its website name, **AxiOwl Messaging**.

For example, a developer working in Cursor can send a focused review request to a Codex conversation. AxiOwl identifies the destination and uses its integration to put the message into that conversation. The destination keeps its own account, project context and permissions.

## What you can do

- Find conversations exposed by installed provider integrations.
- Send a message from an integrated agent or the desktop interface.
- Create or rename provider conversations where that integration advertises the operation.
- Address conversations on configured remote computers.
- Manage provider components and available signed integration updates.

Messaging gives work an address. It does not supply a model subscription, copy a project to another computer, or grant an agent new filesystem permissions.

## Start with your question

| What you need | Read |
| --- | --- |
| Understand the product and whether it fits your work | [Who it is for](who-its-for.md) |
| Understand the path a message takes | [How messaging works](how-it-works.md) |
| Install and send your first message | [Get started](../getting-started.md) |
| Choose a desktop or CLI integration | [Providers and surfaces](../providers.md) |
| Connect computers or a phone | [Remote and mobile access](mobile-and-remote.md) |
| Integrate an agent | [Agent-tool reference](integrating-agents.md) |
| Evaluate the implementation | [Architecture](architecture.md) and [technology stack](technology-stack.md) |
| Inspect implementation contracts by feature | [Technical handbook](technical/README.md) and [feature coverage](technical/feature-reference.md) |
| Operate a deployment | [Administration](administration.md) and [security](security-and-privacy.md) |

## One explicit Send

The messaging operation is **Send** to a selected conversation. AxiOwl preserves the authored body, with permitted sender information, saved formatting or license notices.

A Send does not automatically instruct the destination to initiate another message. Delivery, the destination agent's subsequent work and any separately authorized message are distinct events.

Installing an integration establishes setup, not universal compatibility. Provider version, operating system, selected surface, authentication and permissions all matter. Use the capabilities and release information for the software you actually installed.
