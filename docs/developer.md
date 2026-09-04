---
sidebar_position: 12
slug: /developer
---

# Developer Guide

AxiOwl is a monorepo with a local coordination core, provider packages, daemon runtimes, mobile clients, A2A, SSH transports, installers, and release services.

## Repository Map

| Area | Responsibility |
|---|---|
| `apps/windows-desktop` | Windows GUI, CLI, MCP, mailbox, discovery, provider orchestration, A2A, pairing UI, and installer integration |
| `apps/linux-desktop` | Linux desktop/CLI, provider assets, Debian packaging, and bundled daemon |
| `apps/macos-desktop` | Swift desktop/CLI, provider integration, bundled daemon, and package publication |
| `apps/mobile_shared` | Shared mobile application, host registry, pairing, relay/direct connections, agent UI, and timelines |
| `apps/android-copper-wombat` | Android packaging and platform integration |
| `apps/iphone` | iOS/Xcode packaging for the shared mobile product |
| `providers` | Local provider manifests, workers, assets, and package contracts |
| `remote_transport/axiowl/node_daemon` | TypeScript daemon, protocol, client, CLI, provider runtimes, pairing, persistence, and service host |
| `remote_transport/axiowl/windows_daemon` | Native C++ service, transport, core, pairing, persistence, timeline, and provider runtimes |
| `remote_transport/axiowl/prelay_server` | Hosted relay service |
| `remote_transport/a2a` | Standards-based A2A client and server |
| `remote_transport/ssh` | SSH transport |
| `services/activation` | Optional licensing capability |
| `services/update` | Release/channel metadata and update publication |
| `installer/windows` | WiX feature graph, daemon payloads, build, signing, and publication |
| `release` | Release identities, artifacts, manifests, and lifecycle scripts |

## Main Flows

### Local Provider

```text
caller -> registry target -> provider package -> provider session -> receipt/reply
```

### Daemon Client

```text
client -> relay/direct transport -> host handshake -> agent command -> provider runtime -> timeline
```

### A2A

```text
A2A client -> Agent Card -> authenticated message/task -> destination agent -> result/artifacts
```

## Daemon Ownership

The daemon owns host identity, paired devices, projects, workspaces, worktrees, provider catalog, provider processes, agents, timeline sequencing, permissions, acknowledgements, and reconnect state.

The Node daemon is the broad recommended Windows implementation. The native C++ daemon uses separate service, transport, core, and provider processes. Linux and macOS package branded daemon runtimes through their platform lifecycle.

## Windows Feature IDs

- `FeatureNodeAxiOwlDaemon` for the Node daemon;
- `FeatureAxiOwlDaemon` for the native daemon;
- `FeatureA2AServer` and `FeatureA2AClient` for A2A;
- `FeatureSshCommandDispatch` for SSH command routes;
- one feature per provider package.

`AXIOWL_DAEMON_RUNTIME` selects `NODE`, `NATIVE`, or `NONE`.

## Identity Rules

Keep provider session ID, local registry target, host ID, mobile client ID, connection ID, project/workspace ID, agent ID, timeline sequence, A2A task ID, run ID, and receipt ID distinct.

## Provider Boundaries

Local provider packages and daemon provider runtimes are related but separate catalogs. A local package supports AxiOwl messaging to an existing provider surface. The daemon catalog describes provider agents available for host-client creation and control.

## Packaging

Windows release entry points live under `installer/windows` and `release`. Linux packaging lives under `apps/linux-desktop/installer`. macOS packaging and publication live under `apps/macos-desktop/installer` and `release`.

The whole-product lifecycle remains Uninstall and Uninstall-install. Provider applications, accounts, conversations, and user projects remain outside AxiOwl ownership.
