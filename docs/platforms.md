---
sidebar_position: 8
slug: /platforms
title: Products And Platforms
---

# Products And Platforms

Choose both the product and operating system on [Downloads](https://axiowl.com/downloads/). AxiOwl's applications have separate packaging and release channels, even when they share provider names or connection components.

## Thirteen Product And Platform Targets

The product map has thirteen platform targets. These rows identify the application boundaries, not thirteen interchangeable installers or a promise of identical provider capabilities. Release availability belongs to each target independently.

| Product | Platform | Application role |
|---|---|---|
| AxiOwl Messaging | Windows | Desktop mailbox, CLI/MCP, provider integrations, and connected host features |
| AxiOwl Messaging | macOS | Native desktop/CLI coordination and platform provider preparation |
| AxiOwl Messaging | Linux | Desktop/CLI coordination and platform provider integration |
| AxiOwl IDE | Windows | Conversation, workspace, model/account selection, and agent runtimes |
| AxiOwl IDE | macOS | Platform IDE with provider routes and native account/session integration |
| AxiOwl IDE | Linux | Linux IDE and its desktop/runtime integration |
| AxiOwl Mobile | Android | Native Goose agent app and connected-host capabilities |
| AxiOwl Mobile | iPhone | Native Goose agent app and connected-host capabilities |
| AxiOwl Usage Meter | Windows | Desktop subscription collection, cloud accounts, and companion source |
| AxiOwl Usage Meter | macOS | Desktop collection and Apple companion source |
| AxiOwl Usage Meter | Linux | Linux desktop meter with its own package and release path |
| AxiOwl Usage Meter | Android | Phone product; distinguish the current desktop-reading companion from the earlier standalone collector |
| AxiOwl Usage Meter | iPhone | Apple companion for compatible desktop readings |

Linux Usage Meter remains a distinct platform target with its own release and signing policy. Messaging's Linux package is not its installer. The native phone apps and older connected-client distributions also retain distinct app identities.

Use the release actually offered on [Downloads](https://axiowl.com/downloads/). Source, a built artifact, an installed application, and a working account connection describe different stages. A source update does not change an already installed app.

## Shared Roles Are Not Additional Products

The host daemon, relay, provider workers, local proxy, and installer helpers support the applications above. They are not additional platform rows. Their purpose and permissions are described in the [Product guide](product-guide.md).

Axiom Messaging is a website product title for agent coordination, not an additional implementation or installer in this platform inventory.

## Windows Messaging

The MSI combines core components with selected provider integrations. The current catalog includes thirteen provider packages, and connected features include AxiOwl Remote Connections, relay messaging, A2A, and SSH.

Provider processes use the intended user's environment. Open and authenticate the provider there before asking AxiOwl to deliver into its sessions.

## macOS Messaging

The native application provides provider setup, discovery, registry, mailbox, and daemon controls. Managed provider integrations prepare local copies from user-installed publisher applications where required.

Routine package behavior follows the platform's ownership rules. Provider sign-in and managed-app identity matter independently of an application's visible name or path. Use the supported preparation and update flow for that provider.

## Linux Messaging

Linux has its own native desktop/CLI, provider integration, package lifecycle, and connected runtime. Desktop-provider operations require the corresponding graphical user environment; CLI availability alone does not create a desktop session.

Use the architecture and package format listed for the release and the capabilities exposed by the installed provider.

## Mobile Distribution

Android and iPhone use a shared connected-host contract while their native interfaces, local Goose runtime, packaging, protected storage, and tool environments differ. Read [On-device agents](mobile/on-device-agents.md) for local versus remote work.

Android downloads can be direct packages. Apple releases can use registered-device delivery, TestFlight, or store distribution as identified by the release. A signed registered-device IPA is usable only under that distribution's device rules.

The website's Android-and-Windows connected workflow is a concrete starting path. Other host/client combinations should use their matching published releases and advertised capabilities. A desktop IDE also needs to attach to the shared runtime before its phone controls become available.

## Usage Meter Platforms

Desktop meters collect locally. Phone companions receive readings from an approved desktop source. The earlier standalone Android collector is a different application from the newer companion.

The Windows/Android and Mac/iPhone companion paths have distinct snapshot capabilities. Use the combination documented by the specific release, especially for cloud-cost views. Windows Usage Meter 1.0.32 and Android companion 0.5.3 have a recorded physical-device flow for fresh quota delivery, OCI and Scaleway daily readings, and reconnect after reopening. That scoped result does not describe every cloud provider or every phone distribution.

Apple phone distribution follows its own delivery and device requirements. Use the currently offered package and setup instructions; the presence of Apple source or a signed IPA is not a claim about an installation on your device.

## Choose A Matching Connection

The relevant compatibility is application plus component plus capability. A phone's saved pairing can remain valid while a desktop application is not currently attached or a provider is signed out. A shared runtime version does not select the provider account for you.

Keep the product version and connection status visible when following a guide. If a control is not advertised by that installed host, use its available operations rather than assuming another platform's control exists.

## Updates

Versions belong to products and components. A new Messaging release does not update the IDE or Usage Meter automatically. Provider integration packages can also have revisions separate from the Messaging core.

Read [Releases and updates](release/update-publication-operator-guide.md) for channel and distribution details.
