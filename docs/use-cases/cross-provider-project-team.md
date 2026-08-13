---
sidebar_position: 3
---

# Create A Cross-Provider Project Team

Different AI products are good at different kinds of work. AxiOwl lets you keep those differences and still coordinate them as one project team.

## Build Around Strengths

A project might use:

- a desktop coding agent with direct repository context;
- a CLI agent for focused terminal work;
- an editor-backed chat for code navigation and local diagnostics;
- an external A2A agent for a specialized service;
- an AxiOwl mailbox or coordinator session for routing and synthesis.

AxiOwl does not replace those products. It gives the workflow a normalized way to identify their sessions and exchange work.

## A Shared Project Rhythm

```text
Plan -> delegate -> reply -> compare -> decide -> act -> report
```

Each step can go to the provider surface best suited to it. Replies return through the same AxiOwl vocabulary, so the coordinator can reason about provider, surface, session identity, receipt, and result without pretending the providers store chats the same way.

## Keep Roles Stable

Stable roles make a cross-provider team easier to operate:

| Role | Typical responsibility |
|---|---|
| Coordinator | Break down work, route requests, and track decisions |
| Builder | Produce code, content, or an operational change |
| Reviewer | Challenge assumptions and inspect quality |
| Researcher | Gather source-backed context |
| Recorder | Preserve the final decision and next actions |

The provider behind a role can change while the project vocabulary remains familiar.

## Keep Provider Identity Intact

A friendly name such as "Reviewer" is convenient, but the registry also retains the concrete provider surface and provider-owned session identity. That lets the workflow stay readable without losing the address that actually reaches the intended session.

Explore the available surfaces in the [Provider Support Matrix](../reference/provider-support-matrix.md).
