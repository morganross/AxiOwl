---
title: "Native Send contract and lifecycle"
slug: /messaging/technical/send-contract
description: "Fire-and-forget tool behavior, authored content, deferred discovery and durable outcomes."
---

# Native Send contract and lifecycle

Messaging exposes one product messaging operation: an explicit **Send** to the selected conversation. The native tool accepts the recipient name and authored body. A later user-directed action in the destination is a separate operation.

~~~json
{
  "to": "API review",
  "body": "Inspect the proposed authorization change and record your findings here."
}
~~~

This is a native tool argument example, not a universal terminal invocation. Hosts may namespace tool names differently.

## Admission and delivery

| Stage | Meaning | What it does not prove |
| --- | --- | --- |
| Request admitted | Durable request accepted in the executing native context | Target provider has displayed the body |
| Target selected | Scoped native identity resolved and pinned | Provider is currently available |
| Dispatch started | Worker owns the logical operation | Model completed or authored another message |
| Provider result recorded | Actual observed integration outcome | More than that result's evidence |
| Target delivery observed | Intended native conversation shows the authored content | A return message, target task completion or all-pair compatibility |

The caller should finish its Send-only instruction when the native tool returns. Do not add automatic status polling, destination-model waiting or another messaging operation. Fire-and-forget caller behavior and durable execution records are compatible: returning promptly does not erase the delivery task.

## Cache misses and target binding

When an authorized recipient name is absent from the registry, discovery can occur after Send admission. If multiple native chats share that name, use scoped most-recent use when discovery finishes. After selecting a native identity, pin it; later recency or title changes must not redirect the admitted request.

Sender identity comes from the executing host's native conversation metadata. It is not guessed from the newest discovered session, a typed alias or a previous administrative identity query.

## Content and formatting

Preserve the authored body. Informational provenance, explicitly saved literal formatting and existing license notices may be applied under their contracts. Product-generated text must not instruct the target to initiate an additional Send.

Use [formatting](activation-and-formatting.md) for saved prefixes/suffixes and [identity](identity-and-resolution.md) for surface/node scope.

## Uncertainty and deduplication

A timeout is uncertainty, not cancellation or permission to repeat. Retain the operation reference, request fingerprint and target identity. The durable store assigns dispatch ownership and records results; observing that record does not dispatch again.

Do not promise exactly-once delivery across every external provider or erase records to make retries possible. Report admission, provider outcome and visible delivery separately. See [operations](operations-and-recovery.md).

