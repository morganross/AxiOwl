---
title: "Shared native runtime stack"
slug: /messaging/technical/stack-runtime
description: "Native host processes, persistence, crypto adapters and capability boundaries."
---

# Shared native runtime stack

The shared runtime is native C++20 built with CMake and platform adapters for Windows, macOS and Linux. It has a separate source/release owner from the Messaging application.

## Component responsibilities

Core coordinates persistence, providers, authorized clients and work admission. Transport handles configured network connectivity. Provider execution remains in declared provider processes. Account functionality can also be packaged as an application component without requiring every host service to run.

The runtime contains host facilities for sessions/timelines, workspace files, terminals and related connected-client operations. Their presence in shared source does not advertise all facilities in every Messaging consumer. The connected host must expose the capability and authorize the client.

## Dependencies and state

The reviewed native build uses JSON contracts, thread support, SQLite/state files, TLS/cryptography adapters and platform process/IPC APIs. POSIX transport uses OpenSSL and libsodium where selected; Windows uses native Windows facilities and its native transport/crypto implementation. Dependency details belong to the exact producer build, not a universal list for every executable.

Persistence stores identity, trust, sessions and operation-related state. POSIX state APIs distinguish opening an existing profile from initializing a new identity. Malformed or partial identity state is not an empty profile that can be silently replaced.

## Local versus remote responsibilities

A required runtime installation is not a requirement to connect to hosted services. Local IPC and loopback can operate without Relay enabled. Runtime presence, service startup, Relay preference, actual connection and client authorization are independently observable facts.

The new account-aware admission callback uses cached authority. It does not perform HTTPS under bridge, store or file-operation locks. An expired account grant refuses new work and requests asynchronous reconciliation.

## Consumer compatibility

A runtime version, protocol generation and application version are not interchangeable. Consumers must acquire a compatible, verified producer release and report capability mismatches accurately. Copying a newer binary into an older installation is not a supported substitute for the release contract.

For state migration, preserve host keys, device records, unknown extension fields and ownership. Do not turn migration into a provider restart or identity regeneration.

See [protocols](protocols-and-ipc.md), [data lifecycle](data-lifecycle.md), [connected capabilities](connected-workspaces.md) and [supply chain](release-and-supply-chain.md).

