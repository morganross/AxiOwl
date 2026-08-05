---
sidebar_position: 2
---

# Session Routing And Delivery

One installed AxiOwl instance authenticates with one install identity. Individual provider chats remain the addressable objects.

## Addresses

An install JID represents the account, installation, and node. A registered chat receives a hidden route address under the routes domain.

The hidden route UUID and provider-native session address are deliberately separate:

- the route UUID is the server-side lookup key;
- the provider session address is used only after the destination registry verifies the route;
- account identity is derived from the authenticated JID rather than trusted from message payload text.

## Delivery Flow

```text
friendly AxiOwl target
  -> remote registry row selects XMPP
  -> source session is registered
  -> XMPP deliver stanza sent to hidden route
  -> Prosody verifies account and route ownership
  -> destination receiver resolves local provider session
  -> normal provider delivery worker runs
  -> destination sends delivery result
```

The first sender response proves central routing or a known duplicate. Destination provider completion is a later state and must not be confused with broker acceptance.

## No Silent Transport Change

An XMPP route either uses XMPP or fails. It does not silently switch to SSH. This preserves diagnostic clarity and prevents duplicate sends across unrelated transports.

## Receiver Behavior

Receiving uses an optional interactive-user agent with a persistent XMPP connection. Sending can open a transient connection when no local receiver connection exists.

The branch implements reconnect classification and bounded backoff. It does not make the primary A2A runtime depend on XMPP.
