# AxiOwl User Docs

AxiOwl lets supported AI provider sessions send messages to each other through a local Windows coordinator. It is designed for local provider-to-provider messaging, not for replacing the providers themselves.

## What AxiOwl Does

AxiOwl:

- discovers provider sessions and chats on your machine;
- records them in a local registry;
- sends messages to selected provider sessions;
- exposes an MCP tool so providers can reply through AxiOwl;
- records receipts, logs, and delivery evidence;
- installs provider-specific integration pieces such as MCP config, extensions, or patches.

## Install

Use the Windows MSI built by the project. During install, choose provider checkboxes for the provider surfaces you want to integrate.

Checkboxes should be preselected only for providers discovered on the machine. You can manually select a provider feature, but a selected provider may still fail if the provider app, CLI, auth, or required version is missing.

See [Installer Docs](../installer/README.md) and [Installer Behavior Matrix](../reference/installer-behavior-matrix.md).

## Send Messages

The common command form is:

```powershell
axiowl send --to "Target chat name" --body "Message text"
```

Provider sessions can also send through MCP using the `axiowl_send_message` tool. MCP sends are preferred for provider replies because they include provider/session identity metadata.

## Provider Replies

When a provider receives a message, AxiOwl asks it to reply over MCP. A correct reply proves more than a local send receipt:

1. AxiOwl accepted the request.
2. The provider received the message.
3. The provider had AxiOwl MCP available.
4. The provider sent a reply through AxiOwl.
5. AxiOwl could identify the provider session that replied.

## What A Receipt Means

`accepted_by_axiowl` means AxiOwl accepted the message and handed it to the delivery layer. It does not prove the target provider displayed or processed the message.

End-to-end proof is a provider reply through AxiOwl MCP with correct sender identity.

## Supported Provider Meaning

A provider is supported only when the full path works:

- discovery;
- install/config;
- send;
- provider receive;
- provider MCP reply;
- correct sender identity.

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Current Supported Provider Surfaces

Current status lives in [Provider Support Matrix](../reference/provider-support-matrix.md). Do not rely on old reports or historical plans for current status.
