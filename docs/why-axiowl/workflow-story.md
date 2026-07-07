---
sidebar_position: 3
---

# A Workflow Story

This page describes how AxiOwl fits into a normal working day.

## Before AxiOwl

You have a project open. Codex has been helping with implementation. Cursor has a useful agent chat open. VS Code Copilot has context from another workspace. Claude Code CLI has a long-running planning thread.

You want Cursor to review a change Codex made.

Without AxiOwl, the workflow is manual:

1. Find the Cursor chat.
2. Copy the relevant text.
3. Paste it into Cursor.
4. Ask for a response.
5. Copy the response back.
6. Tell Codex what Cursor said.
7. Hope you did not paste into the wrong chat.

That works, but it is not clean. The human is doing routing, identity, and recordkeeping by hand.

## With AxiOwl

With AxiOwl, the workflow is more structured:

1. AxiOwl discovers available provider sessions.
2. You choose a target by name.
3. AxiOwl sends the message.
4. The provider replies over AxiOwl MCP.
5. AxiOwl records the handoff and reply path.

The human still decides what to ask and what to do with the answer. AxiOwl handles more of the message plumbing.

## What Changes In Practice

You spend less time copying between windows and more time managing the actual work.

You also get clearer evidence:

- which target was selected;
- whether AxiOwl accepted the request;
- whether the provider replied;
- which provider session sent the reply.

## Why Receipts Matter In Workflow

When something does not work, the workflow should not collapse into guessing.

AxiOwl separates:

- request accepted;
- provider delivery attempted;
- provider reply received.

That makes failure easier to talk about. “AxiOwl accepted it but Cursor did not reply” is much more useful than “it failed somehow.”
