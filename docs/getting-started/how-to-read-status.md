---
sidebar_position: 4
---

# How To Read Status And Logs

AxiOwl status and logs are meant to answer what happened, not just whether something failed.

## Status

Run:

```powershell
axiowl status
```

Useful status details include:

- installed executable path;
- manifest/provenance;
- package version;
- activation state;
- registry counts;
- runtime role;
- installed binary hash proof when available.

## Logs

Common locations:

```text
%LOCALAPPDATA%\AxiOwl\logs
%LOCALAPPDATA%\AxiOwl\registry
%LOCALAPPDATA%\AxiOwl\runtime
```

## What To Look For

| Question | Evidence |
|---|---|
| Was the right MSI installed? | Manifest/provenance/hash logs. |
| Was the provider selected? | MSI log and installer helper logs. |
| Was the provider discovered? | Discovery logs and registry row. |
| Was the target sendable? | Registry `sendable` state. |
| Did AxiOwl accept the message? | Send receipt. |
| Did provider receive it? | Provider result, session proof, or provider reply. |
| Did provider reply over MCP? | Incoming MCP message and sender metadata. |

## Plain English Rule

Logs should let you tell a story:

```text
This build installed these files.
These provider features were selected.
These sessions were discovered.
This message was accepted.
This provider did or did not reply.
```

If the logs cannot tell that story, the logging needs improvement.
