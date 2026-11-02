---
title: "Claude Desktop and Claude Code CLI"
slug: /messaging/technical/providers/claude
description: "Separate Claude surfaces, managed bridges, MCP configuration and native identity."
---

# Claude Desktop and Claude Code CLI

Claude Desktop and Claude Code CLI are distinct targets. The reviewed desktop integration addresses **Claude Desktop Code conversations**, not every Claude web or ordinary desktop conversation.

| Surface | Reviewed integration boundary |
| --- | --- |
| Claude Desktop Code | claude_desktop worker, desktop MCP registration and managed bridge assets |
| Claude Code CLI | claude_code_cli worker and user MCP configuration |
| Shared brand/account | Does not merge the two native session histories |

## Stack and assets

The desktop package inventory includes native worker code and JavaScript bridge/session-MCP/transport assets. CLI installation is configuration-oriented and has its own discovery and sender parsing.

Desktop operation can require the applicable managed application/profile. A publisher application's presence does not establish that the managed bridge is installed or loaded. On Linux, distinguish the actual supported desktop/compatibility route from an assumed official native publisher application.

## Identity and capabilities

Retain the executing native conversation as sender, and the exact selected Code or CLI session as target. Listing discovers real native sessions. The reviewed inventory declares Send, Create, Rename, discovery and lifecycle operations, but actual availability still depends on provider version and the installed OS adapter.

A newly created display title is not delivery evidence. A CLI chat with the same name must not be used as a fallback for an unavailable desktop target.

## Security and data

The selected Claude environment sees the authored content and can process/store it under the chosen provider account. AxiOwl's operation body/receipt records are an additional local data copy.

The bridge's identity, provider profile, tool permission and provider login are separate from AxiOwl account/activation state. Do not reset a whole profile or login store to remove one integration.

## Updates and diagnosis

The hot update owns only its declared worker/configuration/bridge assets and must close the selected target before replacement. Verify the actual installed result independently from component discovery.

When a Send is uncertain, preserve its operation ID and native target. Investigate whether admission, bridge activation, provider submission or visible delivery is missing; do not replay the same request.

See [provider catalog](../provider-integrations.md), [Send](../send-contract.md), [installation](../installation-and-removal.md) and [source status](../source-and-release-status.md).

