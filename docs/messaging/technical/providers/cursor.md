---
title: "Cursor desktop and Agent CLI"
slug: /messaging/technical/providers/cursor
description: "Editor bridge activation, native session context and separate CLI management."
---

# Cursor desktop and Agent CLI

Cursor desktop Agent/Composer conversations and Cursor Agent CLI conversations are separate surfaces, even when opened in the same project.

| Surface | Reviewed integration |
| --- | --- |
| Cursor desktop | Native worker plus editor bridge extension/MCP configuration |
| Cursor Agent CLI | Separate provider-owned CLI manager, discovery, metadata and worker |

## Editor extension stack

The reviewed Cursor extension is JavaScript in the editor extension host, packaged with a manifest and generated VSIX. Its declared activation and bridge-command paths connect the editor environment to the selected native worker.

Extension registration, extension-host activation, workspace context and actual conversation identity are different states. Installing a VSIX does not prove the current window loaded the bridge.

The native delivery target must remain the intended Agent/Composer conversation. A focused editor widget is not a substitute for exact native session identity.

## CLI manager

The CLI provider has its own inventory, installed executable/topology, MCP configuration and native session metadata. Its repair/install controls are mutations, not steps to insert before every ordinary Send.

A CLI manager status row describes that provider's configuration/contract. It does not validate all desktop routes or all source-to-target combinations.

## Operations and data

The desktop inventory describes discovery, delivery, Create/Rename and lifecycle capabilities under its worker protocol; CLI declares its own Send/Create/Rename/discovery set. The installed adapter and provider commands determine actual availability.

Project paths, conversation names and native identifiers can enter local discovery/operation records. Authored content is delivered into the selected provider account and can be processed under that provider's policies.

## Updates and diagnosis

An independent update must close the exact selected Cursor application or CLI process scope before changing declared integration assets. Preserve unrelated workspaces, extensions, provider settings and profile/login state.

For a missing destination, inspect correct window/profile/surface and bridge activation. For uncertainty after admission, retain the same operation reference and pinned destination rather than selecting whichever Cursor chat is now newest.

See [provider catalog](../provider-integrations.md), [conversation management](../conversation-management.md), [Send](../send-contract.md) and [compatibility](../compatibility.md).

