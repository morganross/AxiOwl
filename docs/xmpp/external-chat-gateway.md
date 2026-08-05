---
sidebar_position: 3
---

# External XMPP Chat Gateway

The external gateway lets an ordinary XMPP application communicate with AxiOwl-managed provider chats.

## User Model

Each AxiOwl account can have a normal XMPP user account. Registered same-account AxiOwl chats appear as roster contacts in an `AxiOwl Chats` group.

Sending a normal chat message to one of those contacts creates an AxiOwl delivery envelope at the server and routes it to the installation that owns the provider session.

## Replies

The first external message creates an account-scoped virtual AxiOwl route representing the external XMPP user. A provider chat can reply to that route through the normal AxiOwl MCP tool. The gateway turns the reply into a normal XMPP chat message.

The external user receives plain reply text. Provider-facing AxiOwl helper instructions are not copied into the external XMPP reply.

## Current Limits

- no federation;
- no cross-account contacts;
- no offline delivery queue;
- no OMEMO or other end-to-end encryption;
- transport protection is TLS only;
- the target install must be online to receive the message.

These are feature-branch limits, not promises made by the current-main A2A service.
