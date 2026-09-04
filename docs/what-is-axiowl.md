---
sidebar_position: 1
slug: /intro
---

# What Is AxiOwl? What Is AxiOwl Mobile?

AxiOwl and AxiOwl Mobile are closely connected products with different jobs.

**AxiOwl** runs on your computers and coordinates AI providers, sessions, agents, messages, A2A endpoints, and remote nodes.

**AxiOwl Mobile** runs on Android and iPhone and connects to the AxiOwl daemon on those computers. It gives you a focused mobile interface for the projects and agents that continue running on the host.

## AxiOwl

AxiOwl is the desktop, command-line, and host-side product. It provides:

- provider discovery and a normalized local registry;
- provider-specific messaging and MCP replies;
- a mailbox and desktop interface;
- local CLI operations;
- provider plugins, bridges, extensions, metadata integrations, and workers;
- standards-based A2A client and server roles;
- A2A-over-SSH and SSH Command Dispatch;
- the AxiOwl daemon that hosts projects, workspaces, agents, and connected clients;
- platform packaging and signed pull updates.

AxiOwl integrates with provider products while leaving provider accounts, model access, credentials, and conversation data under provider ownership.

## AxiOwl Mobile

AxiOwl Mobile is the connected client product. It provides:

- QR-code and pairing-link setup;
- a registry of paired AxiOwl hosts;
- encrypted relay connections across networks;
- direct connections through local, VPN, Tailscale, or managed routes;
- provider, model, project, and workspace browsing;
- existing and newly created agent sessions;
- live agent timelines;
- user turns, tool output, permission requests, usage, and terminal results;
- reconnect behavior tied to the same host and agent identities.

The shared mobile application is packaged for Android and iPhone. Both platforms use the same host, connection, agent, and timeline model.

## How They Work Together

```text
AxiOwl Mobile
  -> paired relay or direct connection
  -> AxiOwl daemon on a computer
  -> project and provider agent
  -> live timeline back to mobile
```

The phone does not replace the desktop provider or move the repository onto the phone. The host remains authoritative for project files, provider processes, provider credentials, agent sessions, and timeline state.

## What Runs Where

| Responsibility | AxiOwl host | AxiOwl Mobile |
|---|---:|---:|
| Provider account and process | Yes | No |
| Repository and working directory | Yes | No |
| Provider discovery and local registry | Yes | Reads host state |
| Agent creation and lifecycle | Owns | Controls through daemon |
| Authoritative timeline | Owns | Displays and interacts |
| Pairing approval | Owns | Requests |
| Mobile client identity | Records | Owns |
| Relay/direct connection | Participates | Participates |
| A2A service role | Optional | Separate client capability |

## AxiOwl Daemon

The daemon is the bridge between the products. It owns the stable host identity, paired clients, provider catalog, projects, workspaces, agents, provider processes, permissions, timelines, and reconnect state.

On Windows, the installer offers the recommended Node daemon, the native C++ daemon, or no mobile daemon. Linux and macOS packages include an AxiOwl-branded daemon through their platform lifecycle.

## When You Need Each Product

Use AxiOwl by itself when all coordination happens on computers, provider sessions, A2A endpoints, or SSH nodes.

Add AxiOwl Mobile when you want to open and control those host-owned agents from a phone without using a full remote desktop.

Continue with [Getting Started](getting-started.md) for desktop setup or [AxiOwl Mobile](mobile/README.md) for mobile setup and use.
