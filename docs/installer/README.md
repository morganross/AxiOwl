# AxiOwl Windows Installer

The primary MSI installs the AxiOwl runtime, mailbox, selected provider integrations, and an optional A2A networking feature. It is one package with provider-scoped feature ownership.

The canonical contract is the [Installer Behavior Matrix](../reference/installer-behavior-matrix.md).

## What The MSI Places

The MSI has two storage boundaries:

- a stable machine-owned backend under 64-bit Program Files, containing packaged payloads and MSI-owned components;
- user-scoped runtime, registry, logs, bridge state, and configuration under `%LOCALAPPDATA%\AxiOwl`.

Machine service state and elevated logs live under `%PROGRAMDATA%\AxiOwl`.

## Provider Selection

Checkboxes are real MSI controls. Detection supplies defaults, but the user remains the final selection authority.

The current provider selections cover:

- Codex plugin, MCP, and skill;
- VS Code Copilot bridge, MCP, and patch;
- VS Code native bridge and MCP;
- Antigravity MCP;
- Claude Code CLI MCP;
- Copilot CLI metadata patch;
- Cursor bridge, MCP, patch, and discovery;
- remote enrollment/deployment/discovery, unchecked by default.

Codex CLI, Antigravity CLI, OpenCode CLI, and Cursor Agent CLI have runtime code but do not currently have equivalent dedicated MSI provider contracts.

## A2A Networking Checkbox

`A2A networking` is unchecked by default. Selecting it installs the automatic API Windows service and relay executable.

This feature is not required to call an external A2A endpoint from the normal AxiOwl CLI. It is for hosting machine-scoped API/A2A routes and relay support.

Current limitation: the service expects an interactive user broker for protected provider delivery, while the current MSI does not package or start that broker executable. See [A2A Operations And Security](../a2a/operations-and-security.md).

## Patches And Extensions

Provider-specific actions include:

- VS Code bridge extensions and Copilot metadata patching;
- Cursor bridge extension and adaptive submit patching;
- Copilot CLI metadata patching;
- provider MCP configuration;
- Codex plugin and skill installation.

Patch execution proves only that the installer action ran. Post-install provider behavior is the real test.

## App Shutdown

The installer closes an app only when a selected feature needs exclusive access to its files or loaded extension. Discovery alone must not close an application.

Cursor and VS Code shutdown scopes are separate. Codex is not closed because Cursor was selected. A2A service and relay processes have their own replacement/removal scope.

## Repair, Upgrade, And Uninstall

Repair and upgrade preserve installed A2A state unless the public A2A property explicitly selects or deselects it. Provider cleanup remains scoped to the selected or removed provider feature.

Uninstall removes MSI-owned payloads, AxiOwl services, AxiOwl extension folders, and AxiOwl configuration. It must not remove provider authentication, user chats, unrelated extensions, or unrelated settings.

## Logs

Collect both MSI and helper logs:

```powershell
msiexec /i path\to\axiowl-activation-a2a-windows-installer.msi /l*v install.log
```

Then inspect:

```text
%LOCALAPPDATA%\AxiOwl\logs
%PROGRAMDATA%\AxiOwl\logs
%LOCALAPPDATA%\AxiOwl\registry
%LOCALAPPDATA%\AxiOwl\runtime
```

The release preflight JSON records the build commit, dirty worktree, MSI identity, payload hashes, and validation steps. A verified preflight is artifact proof, not clean-machine or provider-roundtrip proof.

## Common Symptoms

| Symptom | Boundary to inspect |
|---|---|
| Missing provider checkbox default | Provider detection and default-selection evidence |
| Unchecked app was closed | Feature/process-scope isolation |
| Extension not found | Installed extension folder, extension ID, and stale provider cache |
| A2A public card works but send returns `503` | Missing interactive user broker |
| Install succeeded but provider did not answer | Provider discovery, delivery, and MCP reply evidence |
| Repair removed another provider | MSI feature selection and provider uninstall scope |
