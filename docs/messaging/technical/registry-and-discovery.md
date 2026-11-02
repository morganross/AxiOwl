---
title: "Conversation registry and discovery"
slug: /messaging/technical/registry-and-discovery
description: "Native session discovery, imported peer snapshots and the limits of cached names."
---

# Conversation registry and discovery

The registry is a routing/discovery index over real provider conversations. It is not a fabricated mailbox, provider credential store or authority to access arbitrary sessions.

## Registry contents

Entries can include a display name, aliases, provider/surface identity, native session ID, node/host, source, recency and route metadata. Imported remote snapshots add the information needed to select that remote conversation through its configured transport.

Provider history and application storage remain provider-owned. A stale registry entry can outlive a running provider process, loaded extension or usable login.

## Discovery responsibilities

Discovery reads the selected provider's supported native sources and integration metadata. Different surfaces have different stores and loaded-bridge requirements. A desktop registry refresh must not reinterpret a standalone CLI session as desktop delivery.

Listing uses existing information; refreshing discovery can do more work and can involve configured remote synchronization. “List,” “discover,” “verify connection” and “deliver a message” are separate actions.

Registry synchronization exchanges addressable metadata, not a blanket permission to copy every transcript or send to every discovered provider.

## Name and revision handling

Names can collide, change and become stale. Initial selection uses scoped recency; admitted work retains the pinned native target. An imported revision/content hash can avoid redundant registry work but must not suppress independent account-authority freshness checks.

Owned registry snapshots must preserve native names and valid exact identities. An unexportable entry must not be silently relabeled into a different conversation.

## Administrative changes

Where exposed, add/remove/rename commands change specific registry or provider records. They must retain account, surface and node scope. Removing an index entry is not provider-history deletion or a cancellation of an already dispatched message.

An operator should record whether a change affected a display alias, a native title, an imported snapshot or the actual provider conversation.

## Troubleshooting

If a destination cannot be found, inspect the intended surface, user/profile, node and installed integration. After an uncertain Send, preserve the existing operation before refreshing or repairing anything.

A successful discovery entry proves that discovery found an address. It does not prove message delivery. See [conversation management](conversation-management.md), [Send](send-contract.md), [SSH](ssh.md) and [observability](observability.md).

