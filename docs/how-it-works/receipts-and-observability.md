---
sidebar_position: 8
---

# Receipts And Observability

Receipts make an AI handoff visible. They tell the workflow which boundary accepted an operation and provide identifiers that connect later events to the original request.

## A Layered View

| Stage | Useful evidence |
|---|---|
| Request accepted | AxiOwl receipt and message identifier |
| Route selected | Provider, A2A, SSH, relay, or direct daemon route identity |
| Destination accepted | Provider handoff, A2A task, or protected endpoint receipt |
| Work completed | Provider reply, completed task result, or protected terminal result |

## Why Correlation Matters

A busy project can have many agents working at once. Correlation identifiers let the coordinator connect a reply to the target, request, and route that produced it.

This supports workflows such as:

- comparing several independent answers;
- waiting for a long-running A2A task;
- reconciling a mobile timeline after the phone reconnects;
- preserving a concise project record;
- diagnosing where a handoff currently sits.

## Human-Readable And Machine-Readable

The user sees friendly target names and clear status. Automation can retain provider session IDs, task IDs, message IDs, and receipt IDs. Both views describe the same operation at different levels.

## Receipts Support Better Decisions

A receipt is most useful when its boundary is clear. The coordinator can distinguish "AxiOwl accepted the request" from "the destination agent completed the work" and choose the next action with the right evidence.

For the detailed evidence vocabulary, read [Receipts, Delivery, And Completion Proof](../concepts/receipts-vs-proof.md).
