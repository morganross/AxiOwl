---
title: "Components and updates"
slug: /messaging/components-and-updates
description: "Understand full application releases, provider hot updates, channels and lifecycle safeguards."
---

# Components and updates

AxiOwl's application and its provider integrations can have separate versions.

## Read the component list

Open **Components & Providers**, or the equivalent setup area for your platform. The provider hot-update panel distinguishes:

- The integration and its installed version.
- The available package version.
- Whether an update is available, current, unavailable or needs review.
- Whether **Download** or **Download and install** is enabled.

A listed integration does not imply that a downloadable package is published for every operating system or channel.

## Install an available provider update

1. Save work in the selected provider.
2. Read the available version, selected channel and any warning.
3. Choose the enabled download/install action.
4. Allow AxiOwl to close the target provider and verify it has exited before installation.
5. Read the actual completion result and reopen the provider when instructed.

If required shutdown or integrity checks cannot be satisfied, the update must not proceed with an unsafe replacement. An unsuccessful or uncertain outcome is not a reason to repeatedly press the action.

## What a hot update changes

A provider hot update replaces the declared integration package rather than reinstalling the whole Messaging application. The package owns a specific worker, configuration or bridge boundary.

It does not install a model subscription, automatically authenticate a provider account or update every other provider application.

## Trust and channels

Use approved signed packages and their normal verification path. Package identity, source/version requirements, hashes, descriptors and publisher checks remain important even when a download is available.

Full application **Stable** and **Preview** releases are distinct from provider **Stable** and **Internal** channels. Internal is for controlled integration delivery, not a synonym for the public Stable release.

A successful build or Internal publication does not automatically promote an artifact to Stable.

## Full application updates

Use the product/platform entry on [Downloads](https://axiowl.com/downloads/) when updating the desktop application itself. Follow that release's installation instructions and component outcomes.

Check the installed version after updating. Source publication, downloadable media, installation and a working provider operation are different stages.
