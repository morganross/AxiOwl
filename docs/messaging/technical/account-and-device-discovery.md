---
title: "Account sessions and device discovery"
slug: /messaging/technical/account-and-device-discovery
description: "Sign-in, explicit connection consent, membership authority and event-driven reconciliation."
---

# Account sessions and device discovery

AxiOwl account sign-in and connecting devices are separate decisions. The account authority is not a registry of provider passwords or a server-side archive of your chats.

## Enrollment flow

1. The native account component starts browser authorization against the configured HTTPS authority.
2. The user signs in on the website and approves the PKCE-bound application authorization.
3. The native component exchanges the one-time code and retains its protected session.
4. The user separately enables Relay where needed and chooses **Connect my devices**.
5. The authority registers the existing host's public identity and membership state.
6. Approved compatible devices obtain the short-lived routing information needed to establish their exact native relationship.

The server can bootstrap a first approved device when no approved device remains. Later devices need the applicable approval policy. A successful website login alone does not grant every host capability or provider account.

## What the authority knows

Account/device identifiers, display names, public keys/fingerprints, approval/revocation states, membership/route revisions, short-lived offers and token-family/security metadata are account data. Provider credentials, native conversation bodies and complete imported session registries are not intended account-authority payloads.

## Refresh and invalidation

The latest source replaces idle profile polling with reconciliation on initial connection, reconnect and authenticated Relay hints, plus a five-minute healthy fallback. Desktop refresh failures back off from 30 seconds to fifteen minutes.

A received hint invalidates the current observation; it does not approve anything. A generation captured before the HTTPS request prevents an older response from reversing a newer invalidation. Account-only new work needs a fresh authority decision within five minutes.

Offline clients refresh after reconnect or fallback. New client source does not establish that notifications are available on the current connection.

## Sign-out and independence

New authorization and sign-out clear new device-connect consent. Compatible existing enrollment is retained only under the documented migration rules. Independent manual pairing/SSH relationships remain distinct.

Local sign-out and confirmed server token-family revocation can finish at different times. Display unfinished revocation accurately instead of treating an unavailable server as confirmed cleanup.

See [pairing and revocation](pairing-and-revocation.md), [credentials](credential-storage.md), [Relay](relay.md) and [source status](source-and-release-status.md).

