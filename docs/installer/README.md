# AxiOwl Windows Installer

The Windows MSI is one user experience composed of independently owned core, provider, A2A, and XMPP features. The [Installer Behavior Matrix](../reference/installer-behavior-matrix.md) is the canonical feature list.

## Before Installation

The UI discovers installed provider products and uses that information only to recommend provider checkboxes. Review the selections. Detection means "this integration may be relevant," not "the provider is authenticated" or "a sendable chat exists."

Network features are separate choices:

- A2A Server;
- A2A Client/user broker;
- XMPP Client;
- XMPP Server.

## What The MSI Installs

The core installation includes the local runtime, MCP server, discovery, logs, manifest, and selected mailbox UI. Each provider feature adds its isolated worker and declared plugin, extension, MCP config, or patch assets.

The current MSI graph includes all eleven provider packages listed in the [Provider Support Matrix](../reference/provider-support-matrix.md). This replaces the older design in which several CLI integrations had runtime code but no dedicated MSI ownership.

## A2A Features

The A2A Server installs the machine service. The A2A Client installs the interactive user broker required to reach provider state owned by the signed-in user. The old public limitation that the broker existed in CMake but was absent from the MSI has been resolved in current source.

The current package does not present the old general relay executable as part of the normal A2A feature payload. A2A-over-SSH remains a separate command/protocol path.

## XMPP Features

The XMPP Client and XMPP Server are current MSI features, not a separate feature-branch product.

- XMPP Client installs the per-user client payload and trust/TLS support files. It does not create credentials during machine installation.
- XMPP Server installs the optional native Windows self-host service and administration tool.

Installing either feature is not proof that a device has been admitted or that a protected message journey is complete.

## Patches And Extensions

Provider integrations may install:

- a Codex plugin and skill;
- a VS Code or Cursor VSIX bridge;
- provider MCP configuration;
- narrowly targeted metadata or delivery patches for Copilot, Cursor, or VS Code surfaces.

Patch-sensitive providers can change private implementation details in an upstream update. AxiOwl should refuse an ambiguous patch rather than guess. Successful patch installation is weaker evidence than a provider-owned response.

## App Shutdown

The MSI closes only processes required by selected features and file replacement. Discovery alone does not authorize process shutdown. VS Code, Cursor, Codex, A2A services, and XMPP components have separate scopes.

## Supported Lifecycle

Use complete **Uninstall** or **Uninstall-install**. The public product does not promise a separate repair, in-place upgrade, downgrade, or rollback mode.

Unchecked provider features and provider-owned data must remain untouched. Uninstall removes AxiOwl-owned integrations, not provider accounts or conversations.

## Logs

Capture a verbose MSI log:

```powershell
msiexec /i path\to\axiowl-installer.msi /l*v install.log
```

Useful AxiOwl locations include:

```text
%LOCALAPPDATA%\AxiOwl\logs
%PROGRAMDATA%\AxiOwl\logs
%LOCALAPPDATA%\AxiOwl\registry
%LOCALAPPDATA%\AxiOwl\runtime
```

Do not post an entire unredacted log publicly. Preserve correlation IDs and status boundaries while removing tokens, credentials, private paths, and message content.

## Interpreting Success

MSI success means Windows Installer completed the selected actions. It does not prove provider authentication, chat discovery, message delivery, XMPP admission, A2A interoperability, or a provider reply. Test the exact selected path after installation.
