# AxiOwl Developer Guide

AxiOwl is a monorepo with a normalized core and deliberately specialized edges. The safest way to change it is to identify which boundary owns the behavior before editing.

The public [Architecture Overview](../reference/architecture-overview.md) describes the product. This page maps that product model to the current repository.

## Core Engineering Rule

A target name, network connection, provider receipt, and provider answer are different facts.

The core owns normalized addresses, registry records, sender identity, request correlation, receipts, and result vocabulary. Provider packages own one provider surface. A2A owns standards agent/task exchange. Secure XMPP owns protected approved-device delivery. None of those edges may silently reinterpret another edge's authority or failure.

## Monorepo Map

| Repository area | Current responsibility |
|---|---|
| `apps/windows-desktop` | Main C++ Windows runtime, CLI, MCP, mailbox, registry, provider orchestration, A2A client/server, user broker, XMPP client integration, lifecycle helpers, and MSI builder. |
| `apps/linux-desktop/axiowl-linux-x86_64` | Native Linux x86-64 client, provider packages, XMPP client integration, Debian packaging, and user setup. |
| `apps/macos-desktop` | Native Swift macOS application, shared native bridge, provider integration, and `.pkg` authoring. |
| `apps/ios-native` | Join-only SwiftUI iPhone client and Apple native bridge. |
| `apps/android-xmpp-client` | Native Kotlin/Compose Android client and native security bridge. |
| `providers` | Provider package manifests, workers, assets, and shared provider-package contracts. |
| `protocol/xmpp/secure` | Shared protected XMPP profile, OMEMO/SCE codec boundary, signed action authorization, trust projection, replay/dispatch state, and protected receipts. |
| `services/xmpp-windows-server` | Native Windows self-hosted XMPP server core. |
| `server/xmpp` | Linux/OCI Prosody profile, server modules, provisioning wrapper, packaging, and operations material. |
| `services/activation` | Purpose-separated licensing and optional licensed body-append authority. |
| `services/auth-pool` | Website account, provider-pool, and related membership services. |
| `services/device-trust` | Signed device lifecycle event relay/projection; it does not become endpoint action authority. |
| `services/update` | Pull-update schemas, publication tools, and release/channel metadata handling. |
| `release` | Generated release evidence, release identities, signed artifacts, and lifecycle scripts. |

## Local Provider Flow

```text
CLI, mailbox, or MCP request
  -> validate request and sender
  -> resolve exact registry target
  -> invoke the target provider package
  -> record normalized handoff result
  -> correlate any later MCP reply
```

Provider packages implement `discover`, `send`, `create`, and `rename` independently. A manifest entry or source function proves implementation, not support on every provider version. Public provider status must name the exact surface and operation.

## A2A Flow

```text
A2A request
  -> authenticate and resolve scoped Agent Card
  -> create or update durable task
  -> cross the interactive-user broker when required
  -> invoke destination registry/provider package
  -> correlate provider result or MCP reply
  -> update task and optional push delivery
```

`axiowl-api-service.exe` runs as the machine-scoped `AxiOwlApi` service. `axiowl-user-broker.exe` owns the interactive-user crossing. Both are current MSI payloads under separate A2A Server and A2A Client features.

Standards A2A, A2A-over-SSH, local CLI/MCP, secure XMPP, and provider-owned behavior remain distinct integration boundaries.

## Secure XMPP Flow

```text
sender endpoint protects action for exact approved resource
  -> XMPP server authenticates and routes ciphertext
  -> receiver verifies endpoint encryption and signed action
  -> receiver checks device trust, grant, policy, and replay state
  -> one-shot provider handoff
  -> receiver signs and encrypts the resulting receipt
```

The shared code is in `protocol/xmpp/secure` and is consumed by platform clients and both server families. The server owns transport authentication, exact-resource routing, public bundle state, and route limits. It does not grant provider action authority and must not synthesize plaintext actions.

A2A and XMPP are separate transports. Do not tunnel one through the other or add cross-transport fallback.

## Account, License, And Trust Boundaries

Keep these authorities separate:

- website account and pool membership;
- optional licensed body-append entitlement;
- provider login and provider credentials;
- XMPP transport credentials;
- device admission and authorization-domain membership;
- signed action authorization.

The activation service may issue license-derived capability for its narrow feature. It must not become a provider login, device coordinator, XMPP server authority, or old-domain recovery service.

## Registry And Identity

Registry aliases are lookup conveniences. Authorization requires provider-owned or cryptographically verified identity fields.

Preserve these as distinct values:

- provider and surface;
- provider session ID;
- A2A agent and task IDs;
- AxiOwl node ID;
- XMPP bare JID and exact full resource;
- OMEMO device ID;
- authorization domain and admitted action key;
- run, message, and receipt IDs.

Discovery may repair a missing registry row from provider-owned evidence. It must not invent sender identity from a display title, current working directory, or convenient process.

## Provider Packages

The current Windows release inventory contains isolated packages for Codex Agents, Codex Remote, Codex CLI, Antigravity Agents, Antigravity CLI, VS Code Copilot-backed chats, Copilot CLI, Cursor Agents, Cursor Agent/CLI, Claude Code CLI, and OpenCode CLI.

One brand can expose multiple surfaces with different discovery, delivery, patching, and metadata behavior. Do not collapse them into one implementation because their names share a vendor.

## Installer Ownership

The Windows MSI is generated from the current WiX source and provider package inventory. It has independent provider, A2A Server, A2A Client, XMPP Client, and XMPP Server features.

Installer changes must preserve:

1. provider discovery before default selection;
2. selected-feature-only app shutdown and restart;
3. interactive-user configuration at the interactive-user boundary;
4. AxiOwl-owned removal without deleting provider-owned conversations or accounts;
5. one installed version and the documented `Uninstall` / `Uninstall-install` lifecycle;
6. artifact provenance that identifies the bytes actually placed in the package.

The Windows build entry point is:

```powershell
apps\windows-desktop\installer\build-windows-msi.ps1
```

Linux packaging is driven by:

```bash
apps/linux-desktop/installer/build-linux-deb.sh
```

macOS has its own Swift/CMake and package scripts under `apps/macos-desktop`. Android and iOS retain platform-native build systems.

## Release Evidence

Do not infer a release from a version string alone. AxiOwl has several related but separate records:

- source revision and release identity;
- compiled inner components;
- provider package manifests and archives;
- platform installer or package;
- signing evidence;
- publication receipt;
- promoted update channel pointer;
- installed or deployed runtime evidence.

The newest release identity can be newer than a signed installer in a release folder, and a published immutable release can exist before a channel points to it. Public status must describe the exact artifact and boundary.

## Documentation Discipline

When behavior changes, update the smallest applicable source-of-truth pages:

- [Provider Support Matrix](../reference/provider-support-matrix.md)
- [Platform Support Matrix](../reference/platform-support-matrix.md)
- [Protocol Support Matrix](../reference/protocol-support-matrix.md)
- [Installer Behavior Matrix](../reference/installer-behavior-matrix.md)
- [Product Capabilities](../reference/current-product-status.md)

Plans and method reports provide engineering context. The product reference pages define the public vocabulary used by the current documentation.
