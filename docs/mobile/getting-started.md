---
sidebar_position: 2
title: Install, Pair, And Connect
---

# Install, Pair, And Connect

Prepare the computer that will run the agents, then pair the phone you want to use. Keep both devices available during setup so you can approve the intended connection.

## Prepare The Host

Install the appropriate AxiOwl host components on the computer. On Windows, the current connected-runtime selection is **AxiOwl Remote Connections**. Shared-runtime packages own their connection components independently of individual Messaging provider selections.

Open the desktop connection or mobile-device area and confirm the host runtime is available. Use the normal Windows user session that owns the provider tools and project files.

Sign in to the providers you intend to use on that host. AxiOwl pairing does not authenticate a model account or grant access to a repository the host user cannot read.

macOS and Linux packages have their own daemon lifecycle and supported provider catalog. Choose the host release intended for your platform.

## Install The Phone App

Use the **AxiOwl Mobile** download for Android or the listed Apple distribution channel. Keep it distinct from the Usage Meter companion.

The app maintains its own client identity and saved host profiles. Retain that app state when updating through the supported installation path if you want to keep the same pairing relationship.

## Create An Offer On The Computer

Open the host's mobile or connected-device controls and create a fresh pairing offer. The host supplies the QR code or pairing link.

The offer identifies the host connection. It starts setup; approval determines whether the new device may join.

## Import And Approve

1. Scan the offer or paste its pairing link in Mobile.
2. Keep the app open while the host receives the request.
3. Review the pending device on the computer.
4. Approve the phone you intended to connect.
5. Open the saved host in Mobile.

Reject an unexpected request. If you no longer intend to pair, close the offer through the host's controls.

## Open A Session

Select the host, then browse its available projects, workspaces, providers, and agents. Choose an existing conversation when you need its history, or create a new one through a provider that offers that operation.

Read the workspace and provider identity before sending the next instruction. The operation runs on the host, under its provider environment.

## Add A Direct Route

Where the host and client offer direct connections, add the actual daemon address on your controlled network or VPN. Keep it associated with the correct host identity.

The operator is responsible for endpoint exposure and connection protection. A friendly hostname does not authorize a device.

## Return Later

Open the saved host to reconnect. The app and daemon retain the agent identity and reconcile the timeline, so returning to a host does not mean starting a new conversation.

If the computer sleeps or shuts down, its provider sessions are not reachable through the phone until the host is available again. Read [Hosts and connections](hosts-and-connections.md) for network and session behavior.
