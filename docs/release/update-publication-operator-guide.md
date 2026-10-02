---
sidebar_position: 1
slug: /release
title: Releases And Updates
---

# Releases And Updates

AxiOwl products have independent versions, platform packages, and channels. Choose the product you are updating before comparing version numbers.

## Use The Product's Download Entry

The [Downloads page](https://axiowl.com/downloads/) identifies the product, platform, and available channel. Messaging, IDE, Mobile, Usage Meter, and a Usage Meter companion are different artifacts.

Keep the application identity and distribution method in view. Installing a Usage Meter companion does not update AxiOwl Mobile. A Messaging provider-package revision does not update the provider's own account or model subscription.

## Preview And Stable

**Preview** makes a product revision available through its Preview channel. **Stable** is selected through a separate promotion decision.

Publication and promotion are distinct. A newly uploaded artifact does not automatically replace Stable, and a platform's Preview availability does not imply another platform has the same release.

Windows provider hot updates also use an **Internal** channel for that component path. Internal provider-package metadata is separate from public platform Preview distribution.

## What A Release Identifies

A release record ties together the product, version, platform, source revision, artifact, size, digest, and signing information. The published bytes remain identifiable after a channel selects them.

Operating-system signatures and package metadata help establish publisher and artifact identity. They do not authorize a new device, grant provider access, or prove that every configured account is signed in.

## Provider Integrations

Messaging provider packages have their own IDs and revisions. A provider update changes the integration's owned files and assets, independently of unrelated provider packages.

When update code uses the word **generation**, it means an installed package revision. It does not refer to AI-generated content.

Update status, discovery, download, staging, and application are separate steps. A downloaded package is not necessarily applied.

## Messaging Update Commands

The installed Messaging CLI exposes update status and provider-package operations. The non-mutating starting commands are:

```text
axiowl update status
axiowl update check
```

Use the installed command's help for its provider ID, channel, endpoint, and package-root arguments. Select values from the actual installed provider and published channel rather than reusing another computer's private paths.

Common Create and Send workflows can trigger a one-shot update lookup when local channel information is old. That lookup retains the provider operation's own result; it does not repeat the user request or automatically apply a new package.

## Installation And State

Messaging's whole-product lifecycle is **Uninstall** or **Uninstall-install**. Its ownership is separate from provider conversations, provider accounts, and user repositories.

Usage Meter has its own update and state-preservation behavior for account cards, cloud bindings, and device pairings. Mobile package identity and signer continuity also matter when retaining an existing app's state.

Follow the product's supported installation path. Removing an app to work around a signing or package mismatch can remove local state, so use the release's distribution instructions.

## Apple And Android Delivery

Android distribution can provide a signed APK through the release catalog. Apple delivery can use a registered-device IPA, TestFlight, or a store release. These are distinct channels with different device requirements.

A registered-device package is not a universal public installer. An App Store Connect upload is an Apple delivery action, not the publication of a raw IPA for arbitrary devices.

## Documentation Releases

The docs are self-hosted at **axiowl.com/docs/** through the website's Docusaurus bridge. GitHub stores the Markdown and application source.

Publishing the docs means producing the embedded documentation build and selecting it on the website. A push to the documentation repository alone is not proof that the public site changed. The former GitHub Pages workflow is no longer the current publishing route.

## Keep A Useful Record

For support, retain the product name, platform, version, channel, and artifact identity shown by the release. Keep private credentials, signing material, and internal infrastructure configuration outside public reports.
