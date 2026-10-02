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
| Messaging, host runtimes, Mobile, A2A, and SSH | `morganross/Axiowl4` | `apps`, `core`, `providers`, `remote_transport`, `installer`, `release` |
| Usage Meter and its platform apps/companions | `morganross/axiowl-usage-meter` | `src`, `platforms/windows`, `platforms/linux`, `platforms/apple`, `platforms/android-companion` |
| macOS IDE | `morganross/AxiOwl-IDE-macOS` | React interface in `src`; Rust/Tauri host in `src-tauri` |
| Linux IDE | `morganross/AxiOwl-IDE-Linux` | Platform IDE source and its product specification |
| Public documentation | `morganross/AxiOwl` | Markdown in `docs`, navigation in `sidebars.js`, embedded Docusaurus profile |
| Main website | `morganross/axiowl-website` | WordPress presentation, product/download catalog, and docs bridge |

Some application repositories require repository access. The public [documentation repository](https://github.com/morganross/AxiOwl) contains the guides served here.

Axiom is a website product title. The source references above describe the concrete implementations used by these guides; they should not be read as evidence of a separate Axiom repository.

## Messaging Boundaries

The CLI, mailbox, and MCP interface resolve a registry target before invoking a provider package. A package owns its integration assets and worker. The provider owns account authentication, model access, and its session semantics.

`providers/provider-package-inventory.json` describes Windows package ownership and declared operations. Capability declarations guide routing; they are not a universal cross-platform provider matrix.

Core workflows preserve the distinction between accepted request, integration handoff, and correlated response. Keep provider/surface/session identity separate from user-facing aliases.

## Connected Host And Mobile

The host runtime owns agents, workspaces, provider processes, pairing, and timeline state. The mobile client displays and controls the capabilities it advertises.

Shared mobile source is under `apps/mobile_shared`; Android and iPhone packaging have their own directories. The current Windows connection implementation is under `remote_transport/axiowl/windows_daemon`. Other daemon source remains relevant to platform-specific products and existing deployments.

The relay routes encrypted frames. It does not implement provider logic or authorize a tool request. Terminal and file operations belong to the authenticated host boundary.

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

## Usage Meter Data Flow

A collector reads the selected provider account, produces an observation, and publishes it to the local dashboard. Cloud-cost collection uses separate account bindings and monetary snapshots.

The companion boundary exports allowed display fields over a product-specific approved connection. Account identity, method, observed time, source desktop, and snapshot ordering remain distinct. The phone must not become a provider credential store or reinterpret receipt time as collection time.

Read `docs/DATA_CONTRACT.md`, `docs/SHARED_CONTRACT.md`, `docs/MACOS_CLOUD_COSTS.md`, and the companion documentation alongside the current collector/export source. Dated implementation reports describe their own revisions, not every later package.

## Self-Hosted Documentation

Docusaurus produces the documentation routes and assets. The website's WordPress bridge supplies the main site header, footer, and theme while embedding the matching documentation route under `/docs/`.

The documentation repository has an embedded production profile. Content remains Markdown; it is not copied into an Elementor page for each publication. GitHub is source history, while publication of the built docs to the website is a separate operation.

## Keeping Public Guides Accurate

Use the current product specification, executable route declarations, installer ownership, and published platform information together. Keep setup instructions tied to the product and version they describe.

Public docs should explain account and security behavior without publishing credentials, private network details, or low-level encryption implementation recipes. Historical reports remain useful engineering references but should not be copied wholesale into user guides.
