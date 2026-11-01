---
title: "How messaging works"
slug: /messaging/how-it-works
description: "Understand conversation identity, routing, acceptance and target delivery."
---

import MessageFlow from '@site/src/components/MessageFlow';

# How messaging works

A conversation has more than a title. Its provider, desktop or CLI surface, account environment, computer and native identity determine where work belongs.

<MessageFlow />

## 1. Author one message

Choose the destination and write the text you want delivered. A provider agent uses its installed AxiOwl tool; a person can use the desktop Send interface.

The native integration supplies the executing conversation's identity. The agent does not need to invent a sender ID or inspect another conversation to work out who it is.

## 2. Resolve the destination

AxiOwl resolves the supplied name within the selected provider and computer route. It can discover a conversation missing from its local registry.

When names collide within that scope, selection follows actual recent conversation use when the destination is resolved. Discovery time is not conversation-use time. Clear, unique titles make the choice easier to understand.

After resolving the destination, the operation retains its exact conversation identity. A later title or recency change does not authorize switching that operation to another chat.

## 3. Use the selected integration

A provider worker, plugin or bridge performs the handoff appropriate to that surface. A remote route first reaches the authorized destination computer; its local integration handles the provider.

AxiOwl records the logical operation so repeated observation can be distinguished from a new dispatch. An operation reference identifies earlier work; it is not permission to repeat it.

## 4. Read the result accurately

| Observation | Meaning |
| --- | --- |
| Conversation is listed | Discovery found an addressable entry |
| Send is accepted | AxiOwl admitted the operation |
| Integration reports delivery | That integration reports its handoff outcome |
| Authored text appears in the intended native conversation | Visible evidence of target delivery |
| The destination agent completes its task | A separate result of the work requested |

An agent's statement that it sent something is not, by itself, target-delivery evidence.

After its tool returns, an agent handling only a Send reports the result and finishes. It does not automatically wait for the destination model, poll status or start another messaging operation.

A timeout leaves the outcome uncertain. It does not cancel an accepted operation. Preserve its reference and inspect that same operation or target when needed; do not submit another copy to resolve uncertainty.

Read [Sending messages](sending-messages.md) for the everyday workflow.
