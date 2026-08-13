---
sidebar_position: 3
---

# Receipts, Delivery, And Completion Proof

One request crosses several boundaries. AxiOwl reports those boundaries separately so an early success cannot be mistaken for an end-to-end success.

| Evidence | What it proves | What it does not prove |
|---|---|---|
| AxiOwl acceptance receipt | AxiOwl validated and accepted the request for processing. | The provider received, displayed, or acted on it. |
| Delivery-edge acceptance | The provider-specific transport accepted the operation. | The intended agent completed the work. |
| Provider MCP reply | A provider session called AxiOwl back with correlated identity. | That every claim inside the reply is correct. |
| A2A task state | The remote A2A server reported the task's current lifecycle state. | Completion until the state and result actually say completed. |
| Completed A2A result | The task reached completion and returned its result/artifacts. | Independent validation of the result's content. |
| XMPP routing receipt | The routing boundary accepted or rejected an exact-resource stanza. | Endpoint decryption, authorization, or provider invocation. |
| Protected XMPP receipt | The destination endpoint returned a signed, encrypted result tied to the action. | Independent correctness of provider-generated content. |

## Why Receipts Exist

Receipts make asynchronous work observable. They give support and automation a stable message id or task id to follow through later logs and replies. They are useful evidence, but each receipt names only the boundary that produced it.

## Correlation

A reply should carry the identifiers needed to connect it to the original operation, such as a run id, receipt or message id, sender provider/session id, or A2A task id. Missing correlation turns a plausible reply into weak proof because it could belong to another test or stale session.

## Support Rule

Use acceptance receipts to diagnose the beginning of a route. Use provider replies, completed A2A tasks, or the applicable protected XMPP receipt to describe the later boundary. State exactly what completed instead of calling every receipt an end-to-end success.
