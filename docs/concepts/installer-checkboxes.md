---
sidebar_position: 6
---

# Installer Choices

The Windows MSI is a feature selector. Each choice owns a concrete set of AxiOwl files and configuration.

## Provider Features

The package has one feature for each packaged provider surface. A selected provider feature can install an MCP definition, skill, extension, bridge, metadata integration, worker, discovery support, or a combination of those items.

Provider discovery runs before defaults are chosen. A detected product can be recommended, and the user confirms the final selection.

## Connected Features

The MSI also has independent choices for:

- **A2A Server:** the machine-scoped standards-based agent service;
- **A2A Client:** the interactive-user broker for provider-backed A2A work;
- **SSH Command Dispatch:** optional command-line node routes;
- **AxiOwl Node daemon:** the recommended mobile host runtime using the computer's Node environment;
- **AxiOwl native C++ daemon:** the native multi-process Windows mobile host runtime;
- **No mobile daemon:** local provider, A2A, and SSH features without a mobile host runtime;
- core runtime, mailbox, command-line, PATH, and discovery support.

Only one mobile daemon choice is active for an installation.

## Selected Means Owned

When checked, a feature authorizes the installer to apply that feature's AxiOwl-owned files and configuration. It may need to close and restart the exact provider application it changes.

When unchecked, the installer leaves that provider integration outside the selected scope. Provider conversations, accounts, and unrelated extensions remain owned by the provider and user.

See the [Installer Behavior Matrix](../reference/installer-behavior-matrix.md) for the complete feature inventory.
