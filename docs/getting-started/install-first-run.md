---
sidebar_position: 2
---

# Install And First Run

## Choose The Right Platform

Windows x64 is the primary packaged desktop. Linux x86-64 has a Debian engineering-preview package. macOS, iPhone, and Android are native previews and are not interchangeable with the Windows MSI.

See the [Platform Support Matrix](../reference/platform-support-matrix.md).

## Windows Feature Selection

The MSI discovers local provider products and recommends matching provider features. Review the checkboxes. The current installer has separate features for:

- eleven provider packages;
- A2A Server;
- A2A Client/user broker;
- XMPP Client;
- XMPP Server;
- mailbox and core local runtime.

An unchecked provider should not be patched, configured, closed, restarted, or removed merely because discovery found it.

## What A Provider Feature May Do

Depending on the provider, a selected feature can install a plugin, skill, MCP entry, VSIX extension, metadata patch, session bridge, and isolated provider worker. It does not install the provider product or authenticate the provider account.

## First Status Check

After installation, start a new terminal and run:

```powershell
axiowl status
```

Then run the appropriate discovery command or use the mailbox/provider UI. A discovered provider installation is not yet a discovered chat, and a discovered chat is not yet a proven send path.

## First Message Check

1. Choose a target whose provider and session identity are visible.
2. Send a harmless request.
3. Confirm the target provider transcript changed.
4. Ask the target to reply over AxiOwl MCP.
5. Confirm the reply carries the expected provider/session identity and correlation.

## Network Features

- A2A Server and A2A Client are separate selections.
- XMPP Client requires device admission and a per-user transport credential before it connects.
- XMPP Server requires server configuration and is not required for a hosted cloud connection.

Installing a network executable is not the same as completing onboarding.

## Lifecycle

The supported replacement flow is complete **Uninstall** followed by **Uninstall-install**. Keep the verbose installer log when investigating a regression.
