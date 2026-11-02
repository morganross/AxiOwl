---
title: "Release tooling and documentation delivery stack"
slug: /messaging/technical/stack-release-documentation
description: "PowerShell, Bash, Python, Git, native packaging and Docusaurus publication."
---

# Release tooling and documentation delivery stack

The project uses scripting for build/publication orchestration and native code for the application/runtime. A Python release helper does not mean end-user Send runs through a general Python web service.

| Tooling layer | Reviewed role |
| --- | --- |
| Git | Canonical source revisions and main-branch delivery |
| PowerShell | Windows/Linux canonical release orchestration and native packaging coordination |
| Bash | Mac canonical release/install scripting and Unix lifecycle steps |
| Python | Provider update verification/migration, publication/package helpers and selected native integration helpers |
| CMake/native compilers | Native application, worker, account and runtime production |
| Swift Package Manager/Apple tools | Mac targets, package/sign/notarization flow |
| Platform package engines | MSI, PKG and Debian installation/media behavior |
| Signed HTTPS/object storage | Verified channel metadata, releases and artifacts |
| Markdown/MDX, React, Docusaurus | Technical/product guides, navigation and rendered documentation |
| WordPress website shell | Production global navigation/theme/footer and separately deployed account plugin |

## Source ownership

The Messaging application, shared native producer and public docs have separate source/release boundaries. A generated private-runtime projection in an application checkout is not another independent implementation.

Do not transplant a build command from the separate IDE repository into Messaging. The reviewed canonical native application workflows are platform-specific and can publish artifacts as part of their normal operation.

## Side effects

A build can commit/merge/push source, contact package/signing services, publish artifacts and invoke packaging. An install can close applications, change owned configuration, start services or request elevation.

A documentation source edit is not authorization to perform those operations. The present handbook ran no builds, tests or deployments.

## Documentation site

Markdown files retain established public slugs. Sidebar categories provide technical reading paths. The embedded production profile lets WordPress own the surrounding website shell; source publication does not deploy that profile by itself.

The docs repository has its own JavaScript development/test scripts. Their presence is not evidence they were run or that the new pages were rendered successfully.

## Provenance

Record source revision, producer identity, channel/artifact signatures and actual installation outcomes separately. Do not edit a signed lock/receipt merely to make an unbuilt source change appear published.

See [supply chain](release-and-supply-chain.md), [installation](installation-and-removal.md), [source status](source-and-release-status.md) and [provider hot updates](provider-hot-updates.md).

