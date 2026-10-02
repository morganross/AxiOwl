---
title: Sessions And Workspaces
---

# Sessions And Workspaces

A conversation has a history and an owner. A workspace has files and a location. The IDE keeps both visible so you can return to the right task and understand what an agent is allowed to work on.

## Open The Right Session

Use the session list to choose a conversation by provider, title, and project context. The provider session ID remains its durable address. Two matching titles do not make two sessions the same.

History can be readable even when the provider is not ready to accept another turn. Reopening a transcript and resuming a live agent are separate operations.

A provider-owned conversation stays in that provider's native storage. AxiOwl maintains the metadata needed to find and open it. AxiCode conversations use the local Goose-owned session store.

## Work Beside The Conversation

Keep the relevant project open in the workspace pane. Inspect files and available edits or diffs alongside the request that produced them. Use the selected build's file and terminal controls to follow the actual working environment.

File paths are local to the chosen workspace or remote environment. Confirm the location before asking the agent to modify a file, especially when several projects have similar names.

A second conversation pointed at the same working tree sees the same underlying files. Separate session histories do not isolate filesystem changes.

## Follow A Turn

The transcript shows the user message and the provider events available for that route. Those events can include streamed text, tool work, permission requests, and completion.

Keep the provider's completion state distinct from the arrival of the first response text. A tool can still be running after the assistant begins speaking. Use the visible stop control when you need to cancel, and follow the returned state before giving overlapping instructions.

## Move Work To Another Brain

Use the chat header to choose the destination account, model, and brain. When the change requires another session, the IDE presents a confirmation and transfers the available conversation context.

The source conversation remains a separate conversation. The destination obtains its own session identity. The transfer carries supported history, not a live process or universal provider state.

Private reasoning, provider-specific tools, permissions, attachments, and runtime settings may have different representations. Use the destination's visible history to orient the next instruction and restate constraints that need to remain explicit.

## Continue After A Move

Wait for the destination conversation to open with its transferred context, then send the next instruction there. Keep the original available when you need to revisit how a decision was made.

Moving back is another directed transfer. It does not merge two providers' histories into one shared session or make future edits synchronize between them.

## Organize Long-Running Work

Use clear titles for ongoing responsibilities. Archive conversations when you want them out of the active list, and follow the product's deletion controls when you intend to remove state.

Registry organization and provider-side deletion are different actions. Read the action's scope before removing a conversation that belongs to an external provider.

For a request to another existing specialist, [Messaging](../messaging-workflows.md) may be more useful than transferring the current conversation.
