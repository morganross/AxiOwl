---
sidebar_position: 6
---

# Installer Checkboxes

The Windows MSI is a feature selector, not a list of hard drives and not a promise that every integration uses the same technique. Each checkbox owns a concrete set of AxiOwl files and configuration.

## Provider Features

The current package has one feature for each packaged provider surface. A selected provider feature can install an MCP definition, skill, extension, bridge, patch, worker, discovery support, or a combination of those items. The label should say what the provider needs; it should not hide every integration behind the word "support."

Provider discovery runs before defaults are chosen. A detected product can be recommended, while an undetected product should normally remain unchecked. Discovery is evidence about an installed provider product, not proof that a usable chat already exists.

## Network And Runtime Features

The MSI also has independent features for:

- **A2A Server:** the LocalSystem HTTP service;
- **A2A Client:** the interactive-user broker used to reach user-owned provider state;
- **XMPP Client:** the per-user protected remote-action receiver;
- **XMPP Server:** the self-hosted Windows XMPP service and administration tool;
- core runtime, mailbox, command-line, PATH, and discovery support.

These are not provider checkboxes. Selecting Cursor, for example, does not silently enable a network listener.

## Selected Means Owned

When checked, a feature authorizes the installer to apply that feature's AxiOwl-owned files and configuration. It may need to close and restart the exact provider application it changes.

When unchecked, the installer should not patch, configure, close, restart, or remove that provider merely because it was discovered. Uninstall removes AxiOwl-owned state for installed features; it does not own provider conversations, accounts, or unrelated extensions.

## Why This Matters

Different providers require different integration methods, and some methods are sensitive to provider version changes. Granular ownership makes failures diagnosable and lets users install A2A or XMPP independently of local provider integrations.

See the [Installer Behavior Matrix](../reference/installer-behavior-matrix.md) for the current feature inventory.
