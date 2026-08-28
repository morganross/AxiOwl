---
sidebar_position: 2
---

# Logs And Evidence

## Core Locations

```text
%LOCALAPPDATA%\AxiOwl\logs
%LOCALAPPDATA%\AxiOwl\registry
%LOCALAPPDATA%\AxiOwl\runtime
%PROGRAMDATA%\AxiOwl\logs
```

The selected daemon also has its own AxiOwl-managed state and service logs.

## Evidence Levels

| Evidence | What it tells you |
|---|---|
| Installer log | Which features and daemon runtime were selected and installed |
| Provider registry row | Which local provider session was discovered |
| MCP reply | Which provider session returned a correlated response |
| Daemon status | Which host is running and which clients are connected |
| Pairing state | Which devices are pending, approved, connected, or removed |
| Host registry | Which relay and direct routes belong to one host ID |
| Agent timeline | Which provider events and terminal state the daemon reported |
| A2A task result | Which standards-based task state and artifacts were returned |

## What To Save

- machine and platform;
- AxiOwl version and package identity;
- selected installer features and daemon runtime;
- host ID and client ID in redacted form;
- relay or direct route type;
- provider, project, workspace, agent, and session identity;
- relevant timeline or task IDs;
- exact error text and the first boundary that stopped progressing.

Redact access tokens, pairing keys, provider credentials, private network addresses, and message content not needed for diagnosis.
