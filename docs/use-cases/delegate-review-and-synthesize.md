---
sidebar_position: 2
---

# Delegate, Review, And Synthesize

One of the most useful AxiOwl patterns is a small panel of specialists: one agent produces work, another critiques it, and a third combines the strongest ideas.

## Example Team

```text
Builder       -> creates the first implementation or draft
Reviewer      -> looks for risks, omissions, and alternatives
Synthesizer   -> reconciles the work into one recommendation
Human         -> chooses and approves the next step
```

These roles can live in different provider products. A Codex session might implement, a Claude Code session might review the architecture, and a Cursor or VS Code session might inspect how the change fits the current workspace.

## Suggested Flow

1. Send the builder a bounded objective and the relevant project context.
2. Ask the builder to return a concise result with assumptions.
3. Forward that result to the reviewer with a specific review lens.
4. Ask the synthesizer to resolve disagreements and preserve important minority concerns.
5. Make the final decision yourself or route one final action to the appropriate implementation session.

## Why AxiOwl Helps

Without a shared message layer, the human repeatedly copies prompts and answers between applications. AxiOwl gives each handoff a target, a correlation identity, and a reply path. That makes the workflow easier to repeat and easier to understand later.

## Good Role Prompts

Role prompts work best when they describe responsibility rather than personality:

- "Review this for behavioral regressions and missing edge cases."
- "Compare these two approaches and recommend one with tradeoffs."
- "Turn the approved design into the smallest complete implementation."
- "Summarize the decision, unresolved questions, and next owner."

The result is a practical multi-agent workflow without forcing every provider into the same internal model.

See [From Message To Reply](../how-it-works/from-message-to-reply.md) for the handoff lifecycle.
