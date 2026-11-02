---
title: "Connected mobile and TypeScript SDK stack"
slug: /messaging/technical/stack-mobile-sdk
description: "Separate mobile workspaces, protocol/client libraries and conditional host capabilities."
---

# Connected mobile and TypeScript SDK stack

The connected-client stack includes TypeScript packages for the client API, protocol and Relay transport, together with React Native/Expo application code and native modules.

The reviewed shared app manifest uses Expo 54, React 19 and React Native 0.81-family dependencies. These are source-manifest facts, not a dependency guarantee for every installed mobile release.

## Separate build families

The shared Expo application is consumed by the iPhone native project. The supported Android source/release path is separate and includes its own application workspace/overlay. Do not build Android from an iPhone workspace or infer identical package contents from shared TypeScript.

Other native phone products in the AxiOwl family have different responsibilities and stacks. In particular, a connected desktop client is not the same product as an on-device agent or a usage-reading companion.

## API boundaries

The client package root exposes connection, agent, workspace, provider and event abstractions. Internal package imports are implementation details. The protocol package shares schemas/codecs but is not documented as a stable public low-level wire API.

Capabilities negotiate features such as selective timeline streams, terminal snapshots, provider-child descriptors and project updates. A connected socket is not proof the host supports a requested capability.

High-level SDK run/wait helpers describe agent execution. They must not be substituted for the Messaging native Send-only contract or used to add automatic waiting after an ordinary tool Send.

## Local data and permissions

Client settings and caches can persist in application storage. Pairing/connection credentials require the protected mechanism selected by that build. Transcripts, selected files and audio are sensitive even when transmitted through an encrypted paired connection.

Notification subscription code can request platform permission, obtain an Expo push token and register it with the connected host. Push-enabled builds may therefore involve Expo and operating-system notification services, outside the paired content channel. Permission denial and feature availability matter.

Microphone, camera, file-picker, clipboard and notification permissions must be documented independently of account sign-in. A dependency's presence alone does not mean the feature is enabled or background traffic occurs.

Related: [connected workspaces](connected-workspaces.md), [network inventory](network-connections.md), [credentials](credential-storage.md), [compatibility](compatibility.md).

