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
| Messaging and its shared native host infrastructure | Maintained access-controlled application/runtime sources | Native clients, provider adapters, connection services and packaging |
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

Messaging's public developer entrypoints are described in [Agent-tool integration](messaging/integrating-agents.md). Native Send takes the selected conversation and authored body; its host supplies the executing identity.

Target resolution, operation admission and provider handoff remain distinct. The operation binds the resolved native conversation and preserves its route. A timeout is uncertainty, not authorization to repeat it.

Provider workers and integration packages have OS- and surface-specific capabilities. Source declarations, installation and actual target delivery are different evidence boundaries.

The [Messaging architecture](messaging/architecture.md) and [technology stack](messaging/technology-stack.md) describe the current native application/runtime boundary without exposing private deployment information.

## SSH Messaging Boundaries

[SSH Messaging](ssh.md) uses the selected SSH identity, remote user and complete conversation label. Registry synchronization does not prove target delivery or grant a different provider account.

The destination computer performs its local integration work. An explicit new message in another direction has its own route and operation. Native Send does not append instructions for an automatic messaging exchange.

Do not promote old transport observations or worker-start receipts into current compatibility claims.

## Connected Host And Mobile

The native host runtime owns the capabilities it advertises to an approved client. The provider or attached application retains its own account, session and tool permissions.

AxiOwl Mobile's connected-host interface and its separate phone-local modes must not be confused. See [Messaging remote/mobile access](messaging/mobile-and-remote.md) and the [Mobile guide](mobile/README.md).

Shared native components, provider packages and consuming applications have separate source, version and installation boundaries. A relay provides reachability; it is not a provider brain or tool-authorization service. Native Windows, macOS and Linux adapters remain platform-specific.

The original shared connected-client workspace uses React Native/Expo and TypeScript. Current native desktop shared infrastructure is C++; older Node-host implementation notes do not describe every current desktop package.

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
