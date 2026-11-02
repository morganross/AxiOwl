---
title: "Codex desktop, CLI and Remote"
slug: /messaging/technical/providers/codex
description: "Native plugin metadata, separate CLI configuration and provider-owned remote sessions."
---

# Codex desktop, CLI and Remote

Codex has three reviewed integration entries. They must not be collapsed into one address space.

| Surface | Integration |
| --- | --- |
| Codex desktop | Native plugin, MCP configuration, skill and provider worker; Windows package ID codex, native catalog codex_desktop |
| Codex CLI | Separate MCP configuration/session integration; codex_cli |
| Codex Remote | Codex-owned remote project/session integration; codex_remote |

## Desktop plugin stack

The plugin declares its MCP server using the native executable and host/provider context. Host-supplied thread metadata is important: an arbitrary terminal process may not possess the same executing conversation identity.

The installed skill/plugin guidance should preserve explicit Send behavior. It must not insert an identity query, discovery loop or automatic wait after a supplied-name Send.

Plugin registration, plugin-cache activation and provider worker version are distinct. Copying a plugin folder does not by itself establish that the running host loaded it.

## CLI and Remote boundaries

CLI configuration belongs to the selected user and CLI history. It is not proof of desktop plugin availability.

Codex Remote additionally identifies the provider's remote project/host/session context. A provider-owned remote conversation is not automatically an AxiOwl Relay peer, an SSH host or a local chat with a matching name. Retain the native remote project/session qualifiers.

The reviewed inventory declares discovery, Send, Create, Rename and lifecycle operations across applicable entries; exact release/OS support must still be checked.

## Data and failures

The selected Codex surface sees the body and uses its own account, model and tool policies. AxiOwl identity/operation records and provider session history remain separate data stores.

If target selection is deferred for a cache miss, use the most-recent scoped native chat when discovery finishes, then pin the selected identity. Never derive the sender from that recency decision.

A timeout or IPC failure does not authorize another dispatch. Preserve the accepted request and operation reference even when the GUI or host plugin cannot immediately show a final provider outcome.

See [identity](../identity-and-resolution.md), [protocols](../protocols-and-ipc.md), [registry](../registry-and-discovery.md) and [hot updates](../provider-hot-updates.md).

