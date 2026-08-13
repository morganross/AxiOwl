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
| A2A task result | The task reached the recorded protocol state and result. |
| XMPP routing result | The server accepted or rejected the exact-resource stanza. |
| Protected XMPP receipt | The endpoint returned the correlated protected action result. |

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

For remote paths, also record the selected protocol, endpoint identity without private addresses, and the exact boundary reached. Redact access tokens, transport credentials, private keys, cloud identifiers, and message bodies that are not required for diagnosis.
