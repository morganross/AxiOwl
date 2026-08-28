---
sidebar_position: 5
---

# The AxiOwl Daemon

The daemon is the host-side runtime for AxiOwl mobile and connected-client experiences.

## What It Owns

- the stable host identity;
- paired mobile identities;
- relay and direct client connections;
- provider discovery and provider processes;
- projects, workspaces, and worktrees;
- agent creation, import, resume, and lifecycle;
- authoritative timelines and reconnect state;
- provider permissions and results.

## Windows Runtime Choices

The Windows installer offers three choices:

| Choice | Description |
|---|---|
| AxiOwl Node daemon | Recommended broad runtime using an installed Node.js environment |
| AxiOwl native C++ daemon | Native multi-process Windows implementation with isolated service, transport, core, and provider runtimes |
| No mobile daemon | Installs the selected local AxiOwl features without a mobile host runtime |

Only one daemon runtime is selected for an installation.

## Linux And macOS

Linux and macOS packages include an AxiOwl-branded daemon runtime with platform-specific launch and service integration. The connected protocol remains centered on the same host, provider, agent, and timeline concepts.

## Local Service Boundary

On Windows, the service host starts the daemon in the interactive user's environment so it can work with that user's providers, projects, and credentials. The service role manages lifecycle; provider execution remains in the user context.

## A Product Runtime, Not A Network Relay

The daemon owns agents and sessions. The hosted relay only carries encrypted frames between an approved client and that daemon.
