# AxiOwl Installer Docs

The Windows MSI installs the AxiOwl local runtime and selected provider integrations. Each provider checkbox should behave like a separate feature even though the features are packaged together.

The source of truth is the [Installer Behavior Matrix](../reference/installer-behavior-matrix.md). Provider status is maintained separately in the [Provider Support Matrix](../reference/provider-support-matrix.md).

## Plain English summary

The installer should do three things well:

1. Install the AxiOwl runtime.
2. Install only the provider integrations the user selected or discovery safely preselected.
3. Leave enough status and provenance evidence to explain what happened.

It should not close or change provider apps just because they exist. It should not uninstall one provider because another provider is being installed. It should not preselect a provider merely because AxiOwl contains code for it.

## MSI checkboxes

Provider checkboxes should be selected from discovery and user choice:

- the provider application or CLI is detected;
- the required installation location is usable;
- the provider-specific support status allows the feature;
- the feature is not remote-only or unsupported by default.

Unchecked provider features should not be installed, patched, closed, restarted, or uninstalled as collateral damage.

## What gets installed

The core feature places the AxiOwl runtime, its provenance information, runtime state, logs, and registry data in the user or machine scope required by that feature. Provider features may install:

- MCP configuration;
- a provider bridge extension;
- a provider-specific patch;
- CLI configuration;
- discovery records;
- AxiOwl-owned wrapper or configuration files.

The installer should label the feature and action so the user can tell what each selected item does.

## What gets patched

Patches are provider-specific and selected-feature-specific. VS Code and Cursor integrations can require private provider implementation changes. Those paths are more fragile than a documented MCP configuration and should be treated as experimental when their stability depends on provider internals.

The important rule is that a patch needs both a reason and evidence. The reason is a missing stable provider API. The evidence is a working post-install provider path, not merely a log line saying that patch code ran.

## What gets configured

Depending on selected features, the installer can configure AxiOwl MCP entries, provider bridge definitions, editor integration, agent integration, CLI integration, and discovery state. Configuration must stay within the selected provider boundary.

## What gets removed

The installer may remove stale AxiOwl-owned files, such as old bridge folders, obsolete AxiOwl configuration entries, and stale runtime artifacts. It should not remove unrelated provider files, user chats, provider auth tokens, unrelated extensions, or unrelated settings.

Replacing an installation uses the documented **Uninstall** and **Uninstall-install** lifecycle. The public product docs do not promise a hidden repair, downgrade, or broad modify mode.

## App shutdown behavior

The installer should close provider apps only when a selected install action requires exclusive access to a loaded file. Discovery alone is not permission to interrupt a provider session. A selected app should be restarted only when the selected feature requires it and the installer can report that action clearly.

## Security boundaries

The installer does not replace provider authentication, copy provider credentials, or decide device authorization. It installs integration components. Device trust, message protection, and action authorization are separate runtime boundaries described in [Security And Trust](../security/README.md).

## Logs

During diagnosis, collect:

- the AxiOwl installer and runtime log;
- the MSI verbose log if one was enabled;
- the selected feature list and discovery result;
- the provider's bridge or MCP output when relevant.

Redact credentials, tokens, keys, private message content, and personal paths before sharing logs publicly.

For MSI-level diagnosis, Windows Installer can create a verbose log:

```powershell
msiexec /i path\to\axiowl-installer.msi /l*v install.log
```

## Common installer problems

| Symptom | Likely meaning |
|---|---|
| Checkbox preselected for a missing provider | Discovery or default-selection problem. |
| Provider app closed while unchecked | Feature isolation problem. |
| Extension not found warning | Stale extension identity, stale path, or an unnecessary URI fallback. |
| Install succeeds but provider cannot reply | Install success is not provider delivery proof. |
| New chat starts in an old folder | Provider workspace or session state is stale; diagnose the provider context before blaming delivery. |

## Success criteria

An installer run is successful when the selected actions complete, the result is understandable, and the installed provenance is available. Provider support is a separate claim that requires current discovery and a response-backed provider path.
