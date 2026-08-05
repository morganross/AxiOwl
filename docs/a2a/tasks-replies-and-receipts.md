---
sidebar_position: 4
---

# Tasks, Replies, And Receipts

A2A is task-oriented, while desktop provider communication is conversation-oriented. AxiOwl connects the two without pretending that dispatch and completion are the same event.

## Task Lifecycle

An inbound request starts in a submitted state. Target resolution or validation can reject it. Provider dispatch can leave it working, fail it, or produce an immediate result. A later provider reply can complete it.

Terminal states include completed, failed, canceled, and rejected.

Task records retain identifiers, requester identity, target identity, message receipt, state events, errors, and any correlated provider reply.

## MCP Reply Correlation

Messages delivered to a provider include the original AxiOwl message receipt. When the provider calls `axiowl_send_message`, it can return `receiptForMessageId`.

AxiOwl then verifies:

1. the receipt identifies a known non-terminal A2A task;
2. the reply target matches the task's original requester;
3. the replying provider identity matches the task target;
4. the reply has a real sender identity and body.

Only then does AxiOwl store the result and complete the A2A task. A mismatched receipt or reply target is rejected before ordinary target discovery.

## Push Notifications

Completed task updates can be sent to stored callback configurations. Callback validation rejects unsafe schemes and local/private destinations where policy forbids them. Failed callbacks can be persisted for bounded retry and dead-letter handling.

This is event-driven work. A permanent polling daemon is not required; pending callbacks can be drained explicitly.

## What Each Receipt Proves

| Evidence | Proves | Does not prove |
|---|---|---|
| HTTP request accepted | The A2A boundary parsed and accepted the request. | The provider received it. |
| AxiOwl delivery receipt | The local routing pipeline accepted or rejected delivery. | The provider answered. |
| Provider result | The selected provider edge reported its outcome. | A useful response was returned. |
| Correlated MCP reply | The addressed provider session replied through AxiOwl with matching identity. | Future sessions will behave identically. |
| Completed A2A task | A matching result was attached to the task. | Every advertised optional capability is implemented. |
