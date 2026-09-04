---
sidebar_position: 8
slug: /platforms
---

# Platforms

AxiOwl uses native platform packaging around a shared product model of providers, daemon hosts, mobile clients, A2A agents, and explicit routes.

## Windows

Windows x64 is the primary packaged desktop. The MSI can install:

- core runtime, CLI, MCP, mailbox, and discovery;
- eleven local provider packages;
- A2A Server and A2A Client;
- SSH Command Dispatch;
- the recommended Node daemon, native C++ daemon, or no mobile daemon.

The desktop **Mobile App** area displays a daemon-generated pairing QR/link and pending-device approval. Provider runtimes operate in the interactive user's environment.

## Linux

Linux x86-64 combines a native desktop/CLI, provider integration assets, Debian packaging, and an AxiOwl-branded daemon service. It can act as a local coordination environment and a host for connected clients.

## macOS

macOS uses a native Swift desktop and CLI around a bundled AxiOwl daemon. It includes provider discovery and configuration, MCP operations, mailbox/local coordination, daemon lifecycle, connected-client status, and platform package publication.

## Android

The Android application uses the shared AxiOwl mobile product. It can scan or import pairing offers, maintain host profiles, use relay or direct routes, browse providers/projects/workspaces/agents, open timelines, send turns, answer permissions, and reconnect.

## iPhone

The iPhone application packages the shared mobile experience for iOS. It connects to the same daemon protocol and host registry model as Android rather than implementing a separate provider runtime on the phone.

## Hosted Relay

The relay joins paired client and daemon connections and forwards encrypted application frames. It provides reachability across networks without becoming the provider or agent host.

## Shared Rules

- desktop systems own provider processes and project files;
- mobile systems are clients of a paired daemon;
- host, client, agent, and provider-session identities remain distinct;
- A2A and SSH retain separate protocol roles;
- packaging and protected storage follow platform conventions.
