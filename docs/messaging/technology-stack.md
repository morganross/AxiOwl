---
title: "Technology stack"
slug: /messaging/technology-stack
description: "The main implementation technologies and the responsibilities they serve."
---

# Technology stack

The project uses native desktop code, provider-specific integrations and a shared connected-client stack. It is not one identical application runtime on every platform.

## Desktop and native services

| Area | Technologies | Responsibility |
| --- | --- | --- |
| Windows desktop/CLI | C++20, Win32 APIs, CMake/MSVC; HTML/CSS/JavaScript hosted by WebView2 | Native commands, Settings interface and Windows integration |
| macOS desktop/CLI | Swift, SwiftUI/AppKit, Swift Package Manager, C++ interoperability | Native application, provider orchestration and platform integration |
| Linux desktop/CLI | C++, GTK/WebKitGTK, CMake/Ninja | Native commands, graphical settings and Linux adapters |
| Shared native runtime | C++20 with platform-specific APIs | Host connections, shared native capabilities and service boundaries |
| Structured data and local state | JSON, SQLite and operation/state files | Configuration, registry/session metadata and durable operation information |

The Windows interface uses the separately installed system Evergreen WebView2 Runtime. The product package does not redistribute that runtime.

## Provider integration

JavaScript and TypeScript are used for applicable editor extensions, plugins and bridges. Native workers and provider-specific configuration connect those assets to each provider surface.

MCP uses a JSON-RPC tool interface. Its role is agent-to-tool integration; A2A provides a different agent-service endpoint/task contract.

A JavaScript bridge in one provider does not mean the whole desktop application or shared native runtime runs on Node.js.

## Connected clients and Relay client

The original shared connected-mobile workspace uses TypeScript, React Native and Expo, with native platform modules. Native phone applications elsewhere in the product family have separate implementation stacks; they should not be inferred from this workspace.

Connected-client libraries include WebSocket and NaCl-family encryption support. Native builds also use platform cryptography/TLS facilities and dependencies such as OpenSSL, with additional libraries varying by platform and route.

These technology names are not a claim of an independent cryptographic audit or identical security behavior on every connection.

## Packaging and delivery

PowerShell, Bash and Python orchestrate native builds, packaging, signing and component publication. End-user media includes Windows MSI, macOS PKG and Linux Debian packages in the offered platform download.

Signing uses the applicable platform/publisher mechanisms, including Windows Authenticode, Apple Developer ID/notarization and signed Linux release material.

## Documentation

The public guides are Markdown/MDX in Docusaurus and React, embedded in the WordPress-owned website shell. That website delivery stack is separate from the Messaging runtime.

Package dependencies evolve. Match implementation details to the installed release rather than treating a dependency list as a platform-support promise.

Detailed references: [Windows](technical/stack-windows.md), [Mac](technical/stack-macos.md), [Linux](technical/stack-linux.md), [shared runtime](technical/stack-runtime.md), [mobile/SDK](technical/stack-mobile-sdk.md), [provider integrations](technical/provider-integrations.md), [Relay client](technical/relay.md), [account/web](technical/stack-account-web.md) and [release/docs tooling](technical/stack-release-documentation.md).
