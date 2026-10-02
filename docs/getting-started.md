---
sidebar_position: 2
slug: /getting-started
title: Get Started With Messaging
---

# Get Started With AxiOwl Messaging

Start with a provider conversation you already use. Install its AxiOwl integration, discover the session, and send a request through the mailbox or your agent's AxiOwl tools.

## Install The Desktop Product

Choose **AxiOwl Messaging** and your operating system on [Downloads](https://axiowl.com/downloads/). Install the package for that computer, then open the AxiOwl desktop interface.

On Windows, the installer discovers provider applications before recommending checkboxes. Review the list and select the integrations you intend to use. The labels describe whether a provider needs MCP configuration, a plugin, a bridge extension, or session integration. [The installer guide](installer.md) explains the connected features separately.

Keep your provider applications installed and signed in. AxiOwl uses their existing account and project environment; installing an integration does not purchase model access or sign you into the provider.

## Find The Right Conversation

Open the provider session you want to reach. In AxiOwl, refresh discovery and inspect its registry entry. Look at the provider, surface, title, and workspace where those fields are available.

A provider's desktop app and CLI are separate destinations. Two chats with the same title can also be different sessions. Select the concrete target shown in the registry instead of relying on the name alone.

The built-in **AxiOwl Mailbox** is a local destination for messages and results. It can receive a response without a model account of its own.

## Send Work

Select the target and write the actual request you want it to handle. Include the project context and whether you want advice, a file change, or a status update. When you need an answer, explicitly request a response through AxiOwl MCP.

You can also ask a provider agent to list AxiOwl targets and send the message using its installed AxiOwl tools. The integration supplies the session identity used to attribute the call.

Read the returned receipt, then follow the recipient's reply. These are distinct parts of the conversation:

| What you see | What it tells you |
|---|---|
| Registry entry | AxiOwl knows the target's identity and route |
| Acceptance receipt | AxiOwl accepted the messaging request |
| Delivery result | The selected integration reported its handoff outcome |
| Correlated reply | The recipient answered through AxiOwl |

## Create A New Agent

Choose a provider that exposes **Create**, and supply the intended name, project context, and first instruction. Creation uses that provider's own session machinery. The resulting session is registered so later messages can address the same conversation.

Use an existing conversation when its accumulated context matters. Create a new one when the next task should begin with a separate history. [Work with agents](messaging-workflows.md) covers both choices.

## Add Connected Features As Needed

- **AxiOwl Remote Connections** supplies the Windows host runtime used by connected clients.
- **AxiOwl Relay** enables selected computer-to-computer registry and messaging routes.
- **A2A Server and Client** connect standards-based agent endpoints.
- **SSH Command Dispatch** uses a configured SSH node for remote AxiOwl operations.
- **Codex Remote** targets Codex's own remote conversations.

Each route has its own destination and authorization. Use [Mobile setup](mobile/getting-started.md) for a phone, or [Connected systems](a2a.md) for remote agent communication.

## Keep Useful Conversations Findable

Give active specialists meaningful titles and preserve the project context in each request. Refresh discovery after changing provider installations or workspaces. Keep the message and reply together when a decision matters, so you can return to the original participant and continue the work.
