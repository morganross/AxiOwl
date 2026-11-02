---
title: "Antigravity desktop and CLI"
slug: /messaging/technical/providers/antigravity
description: "Separate application/CLI surfaces, provider login and declared integration scopes."
---

# Antigravity desktop and CLI

Antigravity desktop and Antigravity CLI have separate native sessions, configuration and workers. The Windows desktop inventory uses antigravity; native Mac/Linux catalogs can use antigravity_desktop. The CLI entry is antigravity_cli.

## Integration stack

The desktop worker installs declared AxiOwl-owned configuration/runtime assets for the selected provider environment. Its inventory identifies applicable main/helper process and MCP configuration scopes. The CLI has its own executable/configuration and native-state scopes.

A platform alias is a catalog mapping, not authority to substitute a CLI session for a desktop target. An application window with a matching title is not sufficient native conversation identity.

## Provider authentication

Antigravity sign-in, browser authorization, model entitlement and tool permissions are provider-owned. An AxiOwl account, Relay approval or application activation does not sign into that provider.

A denied browser launch, missing callback, unavailable model or explicit tool rejection is a separate failure boundary. Do not route around it through another account or repeat a denied credential action as an integration recovery technique.

## Operations

The reviewed entries declare discovery, Send, Create, Rename, status and installation/lifecycle operations, with exact operation naming varying by worker contract. Actual availability depends on installed OS adapter and publisher version.

Use host-provided executing-session identity for native tools. When the user supplies a name and body, do not insert identity inspection or discovery as a mandatory precondition. If deferred discovery is needed internally, it remains bound to the logical Send and its eventual pinned native target.

## Data, updates and evidence

Authored content is exposed to the selected native provider environment and may be processed/stored under that account's policies. Local registry/operation records are additional copies of names, IDs and message content.

Before provider replacement, the updater identifies and closes the exact selected process scope. It must not kill unrelated language-server or user processes solely because a name resembles a declared helper.

A historical successful source Send does not establish current authentication or target compatibility. Preserve accepted/uncertain operation records and report whether failure was admission, provider permission, dispatch or missing native delivery evidence.

See [identity](../identity-and-resolution.md), [hot updates](../provider-hot-updates.md), [credentials](../credential-storage.md) and [compatibility](../compatibility.md).

