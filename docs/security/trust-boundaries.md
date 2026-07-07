# AxiOwl Security And Trust Docs

AxiOwl is a local coordinator. Users should know what it reads, writes, patches, and sends.

## What AxiOwl Reads

AxiOwl may read:

- local provider session metadata;
- local provider config files;
- provider chat/session indexes or databases needed for discovery;
- AxiOwl registry/log/runtime files;
- selected provider install paths;
- license activation state;
- installer payload manifest/provenance.

Provider-specific discovery should read only what is needed to find and address sessions.

## What AxiOwl Writes

AxiOwl may write:

- `%LOCALAPPDATA%\AxiOwl\bin\axiowl.exe`;
- `%LOCALAPPDATA%\AxiOwl\manifest.json`;
- `%LOCALAPPDATA%\AxiOwl\logs`;
- `%LOCALAPPDATA%\AxiOwl\registry`;
- `%LOCALAPPDATA%\AxiOwl\runtime`;
- selected provider MCP config;
- selected provider bridge extension files;
- selected provider patch changes;
- selected provider AxiOwl-owned config entries.

## What AxiOwl Patches

Some provider surfaces require patches because the provider does not expose a stable public API for the required behavior.

Patch-sensitive surfaces:

- VS Code native/Copilot integration where selected;
- Cursor Agent Window / Glass submit integration;
- future CLI metadata support where provider metadata is not available natively.

Patching should be selected-feature-specific and should fail loudly when unsafe.

## What AxiOwl Should Not Touch

AxiOwl should not modify:

- unrelated provider extensions;
- user auth tokens;
- unrelated provider settings;
- unrelated workspace files;
- provider chats except by sending user-requested messages;
- unchecked provider surfaces;
- remote configuration unless explicitly selected.

## Metadata Sent

AxiOwl messages can include:

- sender display name;
- sender provider/session id;
- target display name;
- target provider/session id;
- run id;
- receipt/message id;
- reply instructions;
- license activation reminder text where configured.

Provider replies through MCP must include provider/session metadata so AxiOwl can route replies correctly.

## Local And Remote

Local provider support should remain local unless a remote feature is explicitly selected. Remote must not be used to hide local delivery failures.

## License Activation

License activation state is local unless activation is explicitly performed. The installer and status output may report activation state. Users should expect unactivated installs to show activation reminders.

## User Expectations

Users should expect:

- selected provider integrations only;
- clear logs;
- loud failure when patch/config/install steps cannot be completed;
- no silent fallback that makes unsupported paths look supported;
- receipts that distinguish AxiOwl handoff from provider delivery proof.
