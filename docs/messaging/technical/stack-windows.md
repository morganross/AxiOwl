---
title: "Windows implementation stack"
slug: /messaging/technical/stack-windows
description: "Win32 application, WebView2 interface, native workers, IPC and MSI packaging."
---

# Windows implementation stack

The Windows Messaging application uses C++20, Win32 APIs and CMake/MSVC. Its Settings interface is HTML, CSS and JavaScript hosted inside a native WebView2 shell.

| Layer | Implementation | Operational boundary |
| --- | --- | --- |
| Application and CLI | Native C++ executables | Runs with the selected user's identity and filesystem access |
| Settings interface | Local HTML/JavaScript with a native request bridge | UI actions call native handlers; page content is not a provider |
| Web rendering | Separately installed system Evergreen WebView2 | The release does not redistribute the WebView2 runtime |
| Provider packages | Native workers plus declared plugin/extension/bridge assets | Installed and versioned per provider |
| Shared host runtime | Native Core, Transport and provider components | Local runtime and remote enablement are distinct |
| Local control | Owner-scoped Windows IPC; applicable loopback interfaces | A listening port alone is not authorization |
| Account protection | Windows protected account state and native helpers | AxiOwl identity is separate from provider identity |
| Distribution | Signed MSI and required companion media | Platform signing and per-component outcomes have separate meanings |

## User and service contexts

A Windows service may run outside the interactive provider user's environment. Provider delivery must preserve that user's profile, native account, graphical session and conversation. Elevation or a service account does not make another user's provider session interchangeable.

The Settings network view reads local service state. Installation, configured service enablement and actual running state are separate columns; an unavailable configuration read must not fabricate a service result.

## Optional network features

The November 1 source defaults new A2A selections off and preserves existing explicit choices. Remote Connections and Relay are separately selected/enabled. The local IPC runtime can be necessary without a Relay internet connection. These source changes require matching built media; see [release status](source-and-release-status.md).

## Failure and recovery

Installation attempts every selected integration, preserves verified siblings and reports incomplete integrations as warnings. Required media, signature/identity admission, elevation refusal, package-engine failure and cancellation remain blocking failures.

A provider hot update closes its selected application and confirms exit before changing owned assets. It retains signature/hash/descriptor checks. Provider login, extension activation and successful delivery are not proved by MSI completion.

Related references: [local IPC](protocols-and-ipc.md), [installation](installation-and-removal.md), [credential storage](credential-storage.md), [network inventory](network-connections.md).

