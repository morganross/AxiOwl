---
sidebar_position: 1
---

# Why Use AxiOwl

AxiOwl is for people who work across more than one AI tool and want those tools to coordinate instead of living in separate boxes. It is useful as a messaging layer, and it is also useful as a normalization layer.

Messaging means sending a message from one place to another. Normalization means giving different tools a shared vocabulary: provider, surface, session, target, receipt, reply, metadata, and proof.

## The Problem

Modern AI work often spreads across several places:

- one conversation in Codex;
- another in Cursor;
- another in VS Code Copilot;
- a Claude Code CLI session;
- an Antigravity agent;
- an OpenCode or Copilot CLI experiment.

Each tool can be useful on its own. The problem is that the work becomes scattered. One tool has context that another tool does not. One provider finds a useful answer, but you have to manually copy it to another provider. One session is ready to review something, but another session has no direct way to ask for that review.

AxiOwl exists to reduce that manual handoff and make the scattered pieces easier to reason about.

## The Simple Idea

AxiOwl gives your local AI sessions a shared message layer and a shared naming layer.

Instead of thinking:

```text
I need to copy this from app A to app B.
```

You can think:

```text
Send this to the right provider session and ask it to reply.
```

That is the core value. AxiOwl is not trying to replace the providers. It is trying to make the providers easier to coordinate.

It also makes them easier to compare. A Cursor composer, a VS Code chat session, a Codex CLI thread, and a Claude Code CLI session are different things internally. AxiOwl lets the workflow treat them as addressable provider sessions while still preserving their provider-specific details.

## Why This Matters

AI workflows are often iterative. You ask one tool to implement, another to review, another to test, another to summarize, another to compare. Without a shared message layer, the human becomes the message bus.

AxiOwl moves some of that coordination into software.

It also moves some of the interpretation into software. Instead of every provider having a completely separate mental model, AxiOwl gives the workflow common questions: what provider surface is this, what session id identifies it, can it receive messages, did it reply, and what proof do we have?

## What You Gain

You gain:

- named provider targets;
- local session discovery;
- a repeatable way to send messages;
- provider replies through MCP;
- receipts and logs;
- a clearer difference between “sent,” “received,” and “replied.”
- normalized provider/session language across different tools.

## What You Do Not Gain

AxiOwl does not make unsupported providers work. It does not remove the need to verify replies. It does not make every provider surface equally reliable.

It gives you a structured local coordination and normalization layer. That layer is useful because it makes AI collaboration more observable, less manual, and easier to diagnose.
