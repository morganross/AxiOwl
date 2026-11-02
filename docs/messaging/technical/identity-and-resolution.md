---
title: "Native identity and recipient resolution"
slug: /messaging/technical/identity-and-resolution
description: "Sender provenance, surface scope, name collisions and asynchronous target pinning."
---

# Native identity and recipient resolution

A conversation address combines more than its visible title. Relevant fields include provider family, desktop/CLI surface, account/profile, native conversation ID, node and route.

## Sender identity

The executing native conversation is the sender. MCP host metadata and the installed integration bind that identity. An administrative identity tool can help inspect a problem when requested, but it is not a prerequisite to sending a supplied name and body.

Do not replace a missing native sender context with an unrelated recent chat, fabricated UUID, account name or generic shell identity. A valid target does not repair an invalid source context.

## Initial recipient selection

A human-readable name is resolved within the selected provider/node/surface scope using the established most-recently-used rule. For deferred discovery, selection occurs when discovery finishes.

Once resolved, the durable operation binds the native destination identity. The dispatcher must not repeatedly re-resolve the title while waiting or silently change providers to find a similarly named chat.

| Situation | Required interpretation |
| --- | --- |
| Same title in two provider surfaces | Distinct addresses |
| Same title on local and SSH computer | Distinct routes and ownership |
| Rename after admission | Already pinned work keeps its destination |
| Recency changes during deferred discovery | Use recency at selection, then pin |
| Provider profile/account differs | Do not substitute that profile's chat |
| Desktop and CLI share a brand | Separate native histories and integrations |
| Existing operation reference reused with different body | Conflicting request, not another legitimate dispatch |

## Remote identities

A Relay peer binds node ID and public key. An SSH alias resolves through the configured remote OS user/host policy. A2A service/task IDs belong to their endpoint's contract. A provider-owned remote session can have yet another project/session identity.

Keep the complete remote qualifier shown by the product. A friendly node label, IP address or Agent Card name is not a substitute for authenticated native identity.

## Data and diagnostics

Identity records can contain conversation titles, workspace paths and public routing metadata. Share only the fields needed for support. Preserve source and target evidence before repairing an index.

A registry refresh can change the candidate set. It does not authorize replaying an admitted operation, merging unrelated chats or regenerating device keys.

See [registry](registry-and-discovery.md), [Send](send-contract.md), [providers](provider-integrations.md) and [security](security-model.md).

