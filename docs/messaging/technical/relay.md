---
title: "Relay client connections"
slug: /messaging/technical/relay
description: "Client connection settings, encrypted paired transport, account refresh and reconnection."
---

# Relay client connections

The Relay client connects authorized endpoints for remote work. A transport connection is separate from account membership, device approval and provider login.

## Client transport

The native client uses a secure WebSocket endpoint. Control and data connections have distinct roles. Application content uses the paired encrypted channel; routing identifiers, connection times and network metadata are not concealed by that content encryption.

## Account refresh

Updated version-2 control clients explicitly negotiate the account-notification capability before using it. New client source alone does not establish that this capability is available on a current connection.

A received hint invalidates the client's cached account observation. It does not grant device membership, provider authentication or permission to execute. The client reconciles against the HTTPS account authority.

## Failure model

An offline client can miss immediate hints and must reconcile on reconnect. A connected transport alone does not prove current account authorization or remote task completion.

The native client retains a five-minute HTTPS membership fallback and a five-minute account-only authorization age limit. Provider Sends do not become retryable merely because Relay reconnects. Keep transport reconnection and logical-operation deduplication separate.

## Client settings

The client Relay preference is independently persisted. Installing a required runtime does not authorize Relay startup. Disabling Relay does not disable external providers or independently configured SSH routes.

This page describes reviewed client source, not a verified availability promise or independent cryptographic audit. See [network inventory](network-connections.md), [supply chain](release-and-supply-chain.md) and [source status](source-and-release-status.md).

