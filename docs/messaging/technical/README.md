---
title: "Messaging technical handbook"
slug: /messaging/technical
description: "Technical references for the Messaging application, native runtime, integrations and connected services."
---

# Messaging technical handbook

This handbook is for engineers integrating Messaging, administrators deploying it, and reviewers evaluating how it handles identities, permissions, content and network access. It complements the [product guides](../README.md).

## Reading paths

| Task | Start here |
| --- | --- |
| Understand the components | [System architecture](system-architecture.md), then the stack reference for your OS |
| Integrate an agent | [Send contract](send-contract.md), [identity](identity-and-resolution.md), [MCP and IPC](protocols-and-ipc.md) |
| Evaluate privacy | [Data lifecycle](data-lifecycle.md), [credentials](credential-storage.md), [network connections](network-connections.md) |
| Evaluate security | [Trust boundaries](security-model.md), [pairing and revocation](pairing-and-revocation.md), [supply chain](release-and-supply-chain.md) |
| Operate connected machines | [Account discovery](account-and-device-discovery.md), [Relay client](relay.md), [SSH](ssh.md), [A2A](a2a.md) |
| Install or update | [Installation](installation-and-removal.md), [hot updates](provider-hot-updates.md), [recovery](operations-and-recovery.md) |
| Find an individual feature | [Feature reference](feature-reference.md) and [provider catalog](provider-integrations.md) |

Stack references: [Windows](stack-windows.md), [Mac](stack-macos.md), [Linux](stack-linux.md), [native runtime](stack-runtime.md), [mobile/SDK](stack-mobile-sdk.md), [account/web](stack-account-web.md), [provider integrations](provider-integrations.md) and [release/documentation tooling](stack-release-documentation.md).

## What this handbook establishes

It describes reviewed implementation contracts and their platform boundaries. A declared capability, a signed artifact, an installed component and an observed operation are different kinds of evidence. The [source and release status](source-and-release-status.md) page identifies the source snapshot and recent source-only changes.

There is no universal provider-pair PASS claim here. This documentation update ran no provider operations, tests, scans, compilers, builds, installers or website deployments.

The scope is **the Messaging project and its connected components**. IDE and Usage Meter are separate products even when they consume the same native runtime. Connected-client files, terminals and workspace capabilities are documented as conditional host features, not automatically enabled desktop Messaging features.

## Reference conventions

“Default” means the reviewed source's fresh-install default unless a page says otherwise. Existing installations may retain explicit selections and migrated preferences. “Unknown” means no sufficient observation, not that a connection or stored record does not exist.

A feature mentioned in a protocol or source manifest may still require a matching host, provider version, account, OS permission and installed component. Follow [compatibility](compatibility.md) when evaluating a particular release.

