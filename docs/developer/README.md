# AxiOwl Developer Guide

AxiOwl is a monorepo with a local coordination core, provider packages, daemon runtimes, mobile clients, A2A, SSH transports, installers, and release services.

The public [Architecture Overview](../reference/architecture-overview.md) describes the product. This page maps that model to the repository.

## Monorepo Map

| Repository area | Responsibility |
|---|---|
| `apps/windows-desktop` | Main C++ Windows runtime, GUI, CLI, MCP, mailbox, discovery, provider orchestration, A2A client/server, pairing UI, and installer integration |
| `apps/linux-desktop` | Native Linux desktop, provider assets, Debian packaging, and vendored AxiOwl daemon |
| `apps/macos-desktop` | Native Swift desktop, provider integration, bundled daemon, and macOS release pipeline |
| `apps/mobile_shared` | Shared Android/iPhone application, host registry, pairing links, relay/direct connections, agent UI, and timelines |
| `apps/android-copper-wombat` | Android application workspace and platform packaging |
| `apps/iphone` | Native iPhone application and Xcode project |
| `providers` | Local provider package manifests, workers, assets, and package contracts |
| `remote_transport/paseo/node_daemon` | Broad TypeScript daemon, protocol, client, CLI, provider runtimes, relay support, persistence, pairing, and service host |
| `remote_transport/paseo/windows_daemon` | Native C++ Windows service, transport, core, persistence, pairing, and isolated provider runtimes |
| `remote_transport/paseo/prelay_server` | Hosted relay service for paired client-to-daemon connections |
| `remote_transport/ssh` | SSH transport implementation |
| `services/activation` | Purpose-separated licensing and optional licensed feature authority |
| `services/update` | Pull-update schemas, publication tools, and release/channel metadata |
| `installer/windows` | WiX source, feature map, daemon payloads, build, signing, and publication scripts |
| `release` | Release identities, signed artifacts, manifests, receipts, and lifecycle scripts |

## Local Provider Flow

```text
CLI, mailbox, or MCP request
  -> resolve exact registry target
  -> invoke provider package
  -> record normalized handoff
  -> correlate provider reply
```

## Daemon Client Flow

```text
mobile or desktop client
  -> relay or direct daemon connection
  -> host/session handshake
  -> provider/project/workspace/agent discovery
  -> agent turn and timeline commands
  -> provider runtime
  -> ordered events back to client
```

The daemon owns host identity, paired devices, projects, workspaces, agents, provider processes, timeline sequencing, acknowledgements, and reconnect state.

## Pairing Flow

The Node daemon exposes a pairing-offer request through its local daemon session. Creating an offer opens a bounded approval window and returns a host identity, daemon public identity, challenge, relay route, expiry, and QR representation.

The mobile client imports the offer, establishes the encrypted relay session, presents its stable client ID, and waits for local desktop approval. Approved clients are persisted individually, and more than one device can be trusted.

## Daemon Runtime Choices

The Windows feature map uses `AXIOWL_DAEMON_RUNTIME`:

- `NODE` selects `FeatureNodePaseoDaemon` and the `AxiOwlDaemon` service host.
- `NATIVE` selects `FeaturePaseoDaemon` and the `AxiOwlService` native process family.
- `NONE` installs neither daemon runtime.

The Node daemon is the recommended broad implementation. The native daemon is a separate C++ architecture with service, transport, core, and provider runtime boundaries.

## A2A And SSH

A2A remains separate from the daemon client protocol. `AxiOwlApi` exposes machine-scoped A2A routes, and the interactive broker crosses into user-owned provider state. A2A-over-SSH retains A2A semantics through an SSH connection. SSH Command Dispatch is an independently selected installer feature.

## Identity

Preserve these values as distinct:

- provider and provider session ID;
- local registry target;
- daemon host ID and friendly label;
- mobile client ID;
- relay route and live connection ID;
- project, workspace, and agent ID;
- timeline sequence and acknowledgement state;
- A2A node, agent, message, and task IDs;
- run, message, and receipt IDs.

## Installer Ownership

The current Windows MSI has:

- required core, mailbox, CLI, PATH, and discovery features;
- eleven isolated provider features;
- A2A Server and A2A Client;
- SSH Command Dispatch;
- one daemon-runtime selection of Node, native, or none.

The build entry point is:

```powershell
installer\windows\build-windows-msi.ps1
```

Linux packaging is under `apps/linux-desktop/installer`. macOS package and OCI publication scripts are under `apps/macos-desktop/installer` and `release`.

## Documentation Discipline

When behavior changes, update:

- [Provider Support Matrix](../reference/provider-support-matrix.md)
- [Platform Support Matrix](../reference/platform-support-matrix.md)
- [Protocol Support Matrix](../reference/protocol-support-matrix.md)
- [Installer Behavior Matrix](../reference/installer-behavior-matrix.md)
- [Product Capabilities](../reference/current-product-status.md)
- [Mobile And Connected Hosts](../mobile/README.md)
