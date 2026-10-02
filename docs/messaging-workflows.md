---
title: Work With Agents
slug: /messaging/workflows
---

# Work With Agents

Messaging is most useful when a second conversation can contribute something the first one does not have: another part of the repository, a different model, a specialized tool, or an independent perspective.

## Make The Handoff Small And Complete

A useful message gives the recipient enough information to act without repeating the entire history. State the objective, point to the relevant files or material, name decisions that should remain in place, and say what should come back.

For a review, identify the exact change and ask for findings. For implementation, identify the allowed files and intended behavior. For research, explain the question and the evidence you need. This keeps the recipient's work aligned with the request and makes its answer easier to use.

The token benefit comes from reducing repeated context. A coordinator can retain the decisions and results while specialists keep their own detailed command output and exploration. AxiOwl does not change a provider's token price or guarantee a fixed percentage saving.

## Continue Or Create

Continue an existing session when it owns relevant context. A long-running specialist can remember why a decision was made and where the corresponding code lives.

Create a separate session when the task needs an independent starting point or a different workspace. Select the provider surface deliberately. A CLI session, editor conversation, and desktop agent can expose different tools even when they use the same model brand.

## Coordinate Several Participants

Agree which participant owns each file or decision before sending parallel work. Messaging can carry the handoffs, but it does not make overlapping edits safe by itself. Keep implementation assignments distinct and use replies to report completed changes, unresolved questions, and the next decision.

A coordinator can collect the answers and reconcile them. A human can occupy the same role through the mailbox. Both benefit from keeping the exact session identity behind each friendly title.

## Keep Replies Attached To The Request

Ask the recipient to answer through AxiOwl MCP. Reply metadata lets AxiOwl identify the responding session and relate the answer to the original message. Preserve the correlation supplied by the tools when continuing the exchange.

A delivery receipt alone does not tell you whether the agent finished. Read the returned response or the provider's own task state before treating the requested work as complete.

## Rename Without Losing The Destination

Where the selected provider supports Rename, use AxiOwl to update the conversation's title. The title is for navigation; the provider session ID remains the address. Rename support is specific to the surface, so use the operations advertised for that target.

## Work Across Computers

Choose a registered computer and its explicit route. The destination computer owns provider authentication and delivery into its local sessions. Relay messaging, SSH dispatch, and A2A each retain their own connection model.

Remote work still needs real files at the destination. A message can refer to a repository or artifact, but mentioning a local path does not copy that file to another computer. Include a location the recipient can access or arrange the transfer through your normal project tools.

Continue with [Providers](providers.md), [Connected systems](a2a.md), and [Security and privacy](security.md).
