---
sidebar_position: 3
---

# Receipts, Delivery, And Completion

One request can cross several boundaries. AxiOwl reports those boundaries separately so the workflow can follow the real destination result.

| Evidence | What it establishes |
|---|---|
| AxiOwl acceptance receipt | The local coordination request was accepted for processing |
| Provider delivery state | The provider-specific integration accepted the operation |
| Provider MCP reply | A provider session returned a correlated response |
| A2A task state | The external A2A endpoint reported task progress |
| Completed A2A result | The task returned its final result and artifacts |
| Daemon connection state | The phone is connected to the intended AxiOwl host through a selected route |
| Agent timeline result | The host daemon returned ordered provider events for the selected agent |

## Correlation

Run IDs, receipt IDs, task IDs, host IDs, agent IDs, and provider session IDs connect later events to the original operation. These identifiers let several agents work at once without confusing their results.

## Reading A Mobile Result

The mobile app follows the host daemon's authoritative agent timeline. A turn is complete when the timeline reports the provider's terminal state, not merely when the phone transmitted the text.

Use acceptance receipts to describe the beginning of a route. Use provider replies, completed A2A tasks, or the host daemon's agent timeline to describe completion.
