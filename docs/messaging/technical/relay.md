---
title: "Hosted Relay architecture and deployment boundaries"
slug: /messaging/technical/relay
description: "Elixir routing service, encrypted endpoints, negotiated notices and fallback."
---

# Hosted Relay architecture and deployment boundaries

The Relay supplies reachability between authorized endpoints. It does not run the provider model or replace the account authority.

## Service stack

The reviewed server uses Elixir/OTP, Cowboy, Jason, Syn and optional DNS-based cluster discovery. OTP owners coordinate per-server connection/routing state and bounded writers handle control/data delivery.

The native transport defaults to a secure WebSocket endpoint. A control connection and data connections have distinct roles. Endpoint application content uses the paired encrypted channel; the Relay can still observe routing identifiers, connection times and network metadata.

## Account-change capability

The new server accepts authenticated publisher hints from the account authority and forwards them only to an existing connected owner. Updated version-2 control clients explicitly negotiate the account-notification capability. Old clients are not sent an unfamiliar control type by default.

A hint contains bounded routing identifiers and a revision. It is an invalidation signal, not device membership, chat content, provider authentication or permission to execute.

Server-to-server publisher credentials must be separately provisioned and protected. The publication route remains disabled without the required configuration. Do not expose publisher credentials in desktop packages, browser JavaScript or public documentation.

## Failure model

Offline nodes are not created by publication. The client must reconcile on reconnect. Hints may be delayed, coalesced or retried; an accepted backend publication is not proof every desktop received it.

The native client retains a five-minute HTTPS membership fallback and a five-minute account-only authorization age limit. Provider Sends do not become retryable merely because Relay reconnects. Keep transport reconnection and logical-operation deduplication separate.

## Deployment considerations

Terminate TLS correctly, protect service configuration, account for proxy WebSocket behavior, constrain operational logs and preserve the deployment's clustering/ownership design. Configuration affects availability and metadata retention.

The client Relay preference is independently persisted. Installing a required runtime does not authorize Relay startup. Disabling Relay does not disable external providers or independently configured SSH routes.

This page records architecture and source behavior. It is not a verified production capacity benchmark, availability promise or independent cryptographic audit. See [network inventory](network-connections.md), [supply chain](release-and-supply-chain.md) and [source status](source-and-release-status.md).

