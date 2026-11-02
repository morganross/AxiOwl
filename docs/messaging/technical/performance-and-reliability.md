---
title: "Performance, concurrency and reliability considerations"
slug: /messaging/technical/performance-and-reliability
description: "Caller latency, durable execution, backpressure, freshness and evidence limits."
---

# Performance, concurrency and reliability considerations

No latency, throughput or capacity benchmark was run for this handbook. The architecture's limits and waiting rules must not be mistaken for an observed service-level guarantee.

## Different clocks and finish lines

A native Send caller returns after admission/result from its tool contract. Deferred discovery and worker execution can continue separately. Provider generation, target task completion and a later user-directed message have independent timing.

Do not extend caller waiting into a new polling workflow merely to obtain a pleasing completion label. Conversely, prompt admission does not prove immediate target delivery.

The account's five-minute source freshness limit is an authorization bound, not a message delivery timeout. Update download, provider-exit and A2A task deadlines belong to their own operations.

## Concurrency and deduplication

Durable request/dispatch ownership prevents two workers from treating one logical operation as two authorized Sends. Target identity is pinned after initial resolution. Shared records must preserve operation fingerprints and results across crashes or UI disconnects.

This is not a universal exactly-once delivery guarantee across external providers. If acknowledgement is lost, the only honest state may be uncertainty.

## Streams and backpressure

The connected stack contains bounded queues/chunks and capability-dependent stream subscriptions. Selective timeline subscription can avoid streaming every session to every client. File-transfer workers and terminal streaming have their own limits and resource ownership.

A file-size field with a zero/default policy is not permission to assume infinite memory or a universal upload cap. Actual transport/install policies and version contracts matter.

Slow provider work should not cause HTTPS authorization calls while file/bridge/store locks are held. The new cached admission gate refuses stale work and requests reconciliation separately.

## Reconnection and retries

Transport reconnection, account refresh backoff and authority-outbox retry are distinct from replaying a user operation. Healthy account fallback is five minutes in updated source; account failures back off. Offline nodes can miss immediate hints.

## Operational evaluation

Measure the exact product, OS, artifact, provider version, surface, payload and route only when authorized. Separate source design, installed resource use and actual workload evidence.

See [Send](send-contract.md), [account discovery](account-and-device-discovery.md), [connected capabilities](connected-workspaces.md), [recovery](operations-and-recovery.md) and [source status](source-and-release-status.md).

