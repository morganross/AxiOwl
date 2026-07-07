---
sidebar_position: 2
---

# Install And First Run

This guide explains what should happen when a user installs AxiOwl for the first time.

## Before You Install

Know which provider apps or CLIs are actually installed on the machine. The installer should discover them and preselect only provider features that appear present and eligible.

Examples:

- VS Code installed: VS Code-related checkbox may be selected.
- Cursor installed: Cursor-related checkbox may be selected.
- Claude Code CLI missing: Claude CLI should not be preselected.
- Remote features: should not be selected by default.

## During Install

The MSI installs the core AxiOwl runtime and selected provider integrations.

Core install usually includes:

- local `axiowl.exe`;
- manifest/provenance file;
- runtime directories;
- logs;
- registry directories.

Provider install may include:

- MCP config;
- bridge extension;
- provider patch;
- CLI config;
- provider discovery.

## Checkbox Rule

Unchecked provider features should be left alone.

This rule is simple but important. If Cursor is unchecked, the installer should not patch Cursor. If Claude is unchecked, the installer should not install Claude MCP config. If VS Code is unchecked, the installer should not close VS Code just because it was discovered.

## After Install

Run:

```powershell
axiowl status
```

Then run discovery or use the installed UI/workflow that triggers discovery. The registry should contain current provider sessions that were discovered.

## What Install Success Means

Install success means selected install actions completed. It does not prove every provider can receive and reply.

The provider proof comes later:

1. discover a target;
2. send a message;
3. receive a provider reply over AxiOwl MCP;
4. confirm the reply has the correct sender identity.

## First Diagnostic Question

When something fails, ask:

```text
Did install fail, discovery fail, send fail, provider receive fail, or MCP reply fail?
```

That question prevents chasing the wrong part of the system.
