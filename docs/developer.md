---
sidebar_position: 12
slug: /developer
title: Architecture And Source Guide
---

# Architecture And Source Guide

AxiOwl is now a product family with several source repositories. Messaging and Mobile share substantial host infrastructure, while Usage Meter and the platform IDE projects have their own application code and product contracts.

This guide is a map for contributors and integrators. The product guides explain what users do; the source determines the exact behavior of a component.

## Repository Map

| Product or service | Repository | Principal source areas |
|---|---|---|
| Messaging, host runtimes, original connected Mobile client, A2A, and SSH | `morganross/Axiowl4` | `apps`, `core`, `providers`, `remote_transport`, `installer`, `release` |
| Usage Meter and its platform apps/companions | `morganross/axiowl-usage-meter` | `src`, `platforms/windows`, `platforms/linux`, `platforms/apple`, `platforms/android-companion` |
| macOS IDE | `morganross/AxiOwl-IDE-macOS` | React interface in `src`; Rust/Tauri host in `src-tauri` |
| Linux IDE | `morganross/AxiOwl-IDE-Linux` | Platform IDE source and its product specification |
| Native Android agent app | `morganross/goose-android` | Kotlin app/core and bundled local command environment |
| Native iPhone agent app | `morganross/goose-ios` | SwiftUI, in-process Goose bridge, and connected desktop session controls |
| Shared native phone Goose engine | `morganross/goose-android-core`, branch `android` | Android JNI and iOS C bridge alongside shared Goose engine source |
| Public documentation | `morganross/AxiOwl` | Markdown in `docs`, navigation in `sidebars.js`, embedded Docusaurus profile |
| Main website | `morganross/axiowl-website` | WordPress presentation, product/download catalog, and docs bridge |

Some application repositories require repository access. The public [documentation repository](https://github.com/morganross/AxiOwl) contains the guides served here.

Axiom is a website product title. The source references above describe the concrete implementations used by these guides; they should not be read as evidence of a separate Axiom repository.

The product inventory is thirteen platform targets, not thirteen developers or thirteen independent infrastructure stacks. Messaging and IDE each have three desktop targets; Mobile has Android and iPhone targets; Usage Meter has three desktop and two phone targets. Shared daemon, relay, proxy, and helpers have component responsibilities rather than additional product/platform rows.

Linux Usage Meter has its own release and signing source under `platforms/linux/release`, independently of Linux Messaging. Product ownership and artifact publication should not be inferred from a neighboring application's release.

## Messaging Boundaries

The CLI, mailbox, and MCP interface resolve a registry target before invoking a provider package. A package owns its integration assets and worker. The provider owns account authentication, model access, and its session semantics.

`providers/provider-package-inventory.json` describes Windows package ownership and declared operations. Capability declarations guide routing; they are not a universal cross-platform provider matrix.

Core workflows preserve the distinction between accepted request, integration handoff, and correlated response. Keep provider/surface/session identity separate from user-facing aliases.

## Connected Host And Mobile

The host runtime owns agents, workspaces, provider processes, pairing, and timeline state. The mobile client displays and controls the capabilities it advertises.

The original shared connected client is under `apps/mobile_shared`. The native Goose Android and iPhone applications have their own repositories and interfaces; their local engine bridges share the Goose fork rather than becoming another copy of the original client. Connected host operations still follow the shared desktop contract.

The current Windows connection implementation is under `remote_transport/axiowl/windows_daemon`. POSIX connected-host source includes `remote_transport/axiowl/node_daemon` and platform-consumer trees. The exact component included in a release follows that consumer's package contract, not a generic assertion that every product uses the same daemon implementation.

The relay routes encrypted frames. It does not implement provider logic or authorize a tool request. Terminal and file operations belong to the authenticated host boundary.

The native Windows producer's current [Consumer build contract](https://github.com/morganross/Axiowl4/blob/main/release/shared-daemon/CONSUMER-BUILD-CONTRACT.md) describes a binary ZIP with inventory, manifest, signing evidence, and build receipt. It does not produce a separate end-user MSI. Consuming applications own installation, uninstallation, and service integration. Historical shared-MSI sections are explicitly superseded for that producer output.

The [POSIX IDE handoff](https://github.com/morganross/Axiowl4/blob/main/release/shared-daemon/POSIX-IDE-HANDOFF.md) keeps the local IDE server distinct from its encrypted remote bridge. A connected daemon does not establish an IDE attachment or grant by itself.

## IDE Execution

The platform IDE product specification is `docs/PRODUCT-SPEC.md`. Key implementation areas include:

- `src/lib/providerCapabilities.js`: provider route declarations.
- `src/lib/executionRouteChoices.js`: compatible billing/model/brain choices.
- `src/components/ThreadView/ThreadView.jsx`: conversation selection and execution UI.
- `src-tauri/src/process.rs`: external provider process integration.
- `src-tauri/src/goose_backend.rs`: AxiCode's local Goose runtime.
- `src-tauri/src/subscription_proxy.rs`: supported local proxy connections.
- `src-tauri/src/session_registry.rs` and `session_migrate.rs`: session metadata and conversation transfer.

A route change must preserve the visible account, model, and brain relationship. A transcript copy does not establish ownership of the source provider's live session.

Read the [macOS IDE product specification](https://github.com/morganross/AxiOwl-IDE-macOS/blob/main/docs/PRODUCT-SPEC.md) and [Linux IDE product specification](https://github.com/morganross/AxiOwl-IDE-Linux/blob/main/docs/PRODUCT-SPEC.md) alongside their current source. Dated shared-lineage specs can still name an earlier source directory or migration implementation. Current platform integration determines the shipped conversion engine; do not infer that every platform uses the same historical Python path or that a shared Rust engine is already installed everywhere.

On macOS, account initialization and `codex_runtime::codex_command` resolve the external Codex CLI's configured profile. The October 6 owner record distinguishes the permanent source correction from the older installed application's existing-account route. That distinction belongs in release evidence, not in a claim that source publication replaced an installed image.

## Native Phone Boundaries

[Android app source](https://github.com/morganross/goose-android) owns its Kotlin interface/core and local command environment. [iPhone app source](https://github.com/morganross/goose-ios) owns SwiftUI, Keychain-backed setup, its in-process engine boundary, and remote host views. The [engine fork](https://github.com/morganross/goose-android-core/tree/android) supplies the native bridges.

The iPhone [desktop-session adapter](https://github.com/morganross/goose-ios/blob/main/Goose/Remote/DesktopSessions.swift) keeps host/provider/native handle together, distinguishes existing attachment from import, and does not automatically repeat an ambiguous import. Local phone sessions, provider-owned desktop sessions, and IDE sessions retain separate identity and ownership.

## Usage Meter Data Flow

A collector reads the selected provider account, produces an observation, and publishes it to the local dashboard. Cloud-cost collection uses separate account bindings and monetary snapshots.

The companion boundary exports allowed display fields over a product-specific approved connection. Account identity, method, observed time, source desktop, and snapshot ordering remain distinct. The phone must not become a provider credential store or reinterpret receipt time as collection time.

Read `docs/DATA_CONTRACT.md`, `docs/SHARED_CONTRACT.md`, `docs/MACOS_CLOUD_COSTS.md`, and the companion documentation alongside the current collector/export source. Dated implementation reports describe their own revisions, not every later package.

Current source references, which may require repository access:

- [Usage data contract](https://github.com/morganross/axiowl-usage-meter/blob/main/docs/DATA_CONTRACT.md) and [Shared contract](https://github.com/morganross/axiowl-usage-meter/blob/main/docs/SHARED_CONTRACT.md).
- [Windows cloud provider catalog](https://github.com/morganross/axiowl-usage-meter/blob/main/platforms/windows/src/cloud/providers.mjs): OCI, AWS, Azure, Google Cloud, and Scaleway.
- [Cloud scheduler](https://github.com/morganross/axiowl-usage-meter/blob/main/platforms/windows/src/cloud/scheduler.mjs): enabled-account scheduling and separate automatic billable-query consent.
- [Scaleway collection](https://github.com/morganross/axiowl-usage-meter/blob/main/platforms/windows/src/cloud/scaleway.mjs): organization identity, interval allocation, separate monthly consumption, and retained currency/cost basis.
- [Android companion guide](https://github.com/morganross/axiowl-usage-meter/blob/main/platforms/android-companion/README.md): display-only companion and current chart capabilities.
- [Apple companion development](https://github.com/morganross/axiowl-usage-meter/blob/main/docs/APPLE_COMPANION_DEVELOPMENT.md): desktop collection, Apple pairing, and platform snapshot scope. Historical install notes do not establish current physical-device state.

The October 6 Windows 1.0.32 / Android 0.5.3 owner record establishes a scoped physical-device reading, refresh, and reconnect flow. It does not establish every provider, every cloud-account path, or Apple-device delivery. Source availability and account availability remain separate.

## Self-Hosted Documentation

Docusaurus produces the documentation routes and assets. The website's WordPress bridge supplies the main site header, footer, and theme while embedding the matching documentation route under `/docs/`.

The documentation repository has an embedded production profile. Content remains Markdown; it is not copied into an Elementor page for each publication. GitHub is source history, while publication of the built docs to the website is a separate operation.

## Keeping Public Guides Accurate

Use the current product specification, executable route declarations, installer ownership, and published platform information together. Keep setup instructions tied to the product and version they describe.

Public docs should explain account and security behavior without publishing credentials, private network details, or low-level encryption implementation recipes. Historical reports remain useful engineering references but should not be copied wholesale into user guides.
