---
sidebar_position: 2
---

# Logs And Evidence

Logs are useful only when they answer a concrete question.

## Core Locations

```text
%LOCALAPPDATA%\AxiOwl\logs
%LOCALAPPDATA%\AxiOwl\registry
%LOCALAPPDATA%\AxiOwl\runtime
```

## Provider Logs

| Provider | Where to look |
|---|---|
| VS Code | AxiOwl Bridge output channel and VS Code extension logs. |
| Cursor | AxiOwl Cursor Bridge output channel, command/result files, patch logs. |
| Codex | Codex plugin/MCP logs and AxiOwl MCP logs. |
| CLI providers | CLI stdout/stderr, generated MCP config, session files. |

## Evidence Levels

| Evidence | Strength |
|---|---|
| MSI exit code | Install action finished or failed. |
| Manifest hash | Installed binary matches artifact. |
| Registry row | Discovery found or recorded a target. |
| Send receipt | AxiOwl accepted the message. |
| Provider result file | Provider edge reported result. |
| MCP reply | End-to-end response proof. |

## What To Save In Reports

- machine name;
- AxiOwl version;
- MSI path;
- selected checkboxes;
- run id;
- target name;
- provider surface;
- exact error text;
- relevant log excerpts;
- final conclusion.
