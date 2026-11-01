---
title: "Install AxiOwl Messaging"
slug: /installer
description: "Install selected integrations and understand warnings without confusing setup with delivery."
---

# Install AxiOwl Messaging

Choose **AxiOwl Messaging** and the correct platform/channel on [Downloads](https://axiowl.com/downloads/). Keep provider applications and accounts available through their own normal installation and sign-in flows.

## Platform packages

| Platform | Current package family | Setup considerations |
| --- | --- | --- |
| Windows x64 | Signed MSI with required runtime media | Use the provider-owning user session; the system Evergreen WebView2 Runtime is installed separately |
| macOS Apple Silicon | Signed and notarized PKG | The native desktop package targets macOS 14 or later; follow the offered release's requirements |
| Linux amd64 | Debian application/runtime media in the offered download | A desktop session and the package's native GUI dependencies are required for desktop integrations |

This describes the currently reviewed desktop package families. Use the artifact's actual architecture and requirements rather than assuming other architectures are available.

For Linux, keep the application, runtime and signature media together. Use the release-listed verification/installation helper at its recorded revision. Some distributions require access to that helper or authenticated source; check the access instructions on the download before proceeding. Do not substitute an unrelated installer or install only one component from a multi-component download.

Windows packages do not redistribute the WebView2 Runtime. Small SDK loader bindings are different from that separately installed system runtime.

## Select the integrations you intend to use

Review discovery recommendations and select the provider surfaces you want. Discovery may suggest defaults; it does not replace an explicit selection with a smaller set.

Installation attempts each selected integration through its normal path. That can involve configuration, extensions, bridge assets or local managed-copy preparation.

Save work before installation or an integration update. Follow application-close prompts and allow the installer to verify required shutdown before replacing live integration files.

## Read completion with warnings accurately

Independent selected integrations continue when another integration cannot finish. Healthy completed work is retained.

**Completed with warnings** means the installation flow completed while one or more integrations remain incomplete. Read each component's reason and outcome. It does not mean every selected provider is ready.

Required elevation refusal, cancellation, invalid essential media or a native package-engine problem can still prevent the installation from completing. Safety checks are not bypassed to satisfy a selection.

## Open the integrated environment

Use the application or managed copy identified by setup and sign in to the provider normally. Let it load its AxiOwl tools. Refresh the conversation list when you need to choose a destination.

AxiOwl account/licensing status, provider login, installed integration and message delivery are separate facts.

## Updating and removal

Use the installed product's supported lifecycle and component controls. Read the scope of removal before proceeding.

Do not delete an entire provider profile or credential store to remove one AxiOwl integration. Provider accounts, conversations, projects and unrelated extensions have their own ownership.

See [Components and updates](messaging/components-and-updates.md), [Administration](messaging/administration.md) and [First Send](getting-started.md).
