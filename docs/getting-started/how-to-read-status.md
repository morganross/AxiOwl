---
sidebar_position: 4
---

# Follow A Message Through AxiOwl

AxiOwl status is designed to show where a handoff is in its journey.

## The Main Stages

| Stage | What it tells you |
|---|---|
| Accepted | AxiOwl created the operation and assigned correlation identity |
| Target resolved | The registry selected the concrete provider, agent, node, or device |
| Route selected | The operation chose local provider, A2A, SSH, or secure XMPP |
| Destination accepted | The provider boundary, task service, or approved endpoint received the handoff |
| Result returned | A provider reply, task result, or protected terminal result came back |

## Use The Correlation Identity

A message ID, task ID, receipt ID, or run ID ties the stages together. Keep it with the project record when several agents are working at once.

## Read Status In Plain English

Ask three questions:

1. Which target did AxiOwl resolve?
2. Which route carried the request?
3. Which destination result came back?

Those questions provide a clear mental model for local provider messages, A2A tasks, and approved-device actions.

## A Useful Project Record

```text
Target:
Provider or protocol:
Request ID:
Receipt:
Reply or result:
Next decision:
```

For the detailed evidence vocabulary, read [Receipts And Observability](../how-it-works/receipts-and-observability.md).
