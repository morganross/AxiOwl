---
title: "Local storage and record formats"
slug: /messaging/technical/storage-and-file-layout
description: "State-root ownership, native Send records, registry formats and safe backup boundaries."
---

# Local storage and record formats

There is no single universal state directory or database for the whole Messaging project. Paths differ by product/consumer, OS user, configured overrides and legacy migration.

## Root families

| Area | Reviewed source convention |
| --- | --- |
| Windows application | Per-user local application state; an explicit state-root override can apply |
| Mac application | User Application Support/AxiOwl family; native daemon state is a separate child/context |
| Linux CLI/application | Explicit state-root override, otherwise XDG state home/axiowl or the user's .local/state/axiowl |
| Native host | Private configured runtime state, with platform package layouts and identity-preserving relocation rules |
| Provider | Native provider profile/history plus exact owned integration assets |
| Mobile/connected client | Application settings/cache storage and the build's protected credential mechanism |

Do not derive a runtime root by blindly appending a Windows subdirectory to a Linux/Mac profile. Inspect the installed consumer's effective configuration without printing secrets.

## Important record families

| Record | Representative structure | Why it matters |
| --- | --- | --- |
| Native MCP Send | mcp-send-requests / operation ID / body.txt, request.json and dispatch/launch/result records | Authored content, source binding and deferred target selection |
| Delivery ownership | Durable operation ID, fingerprint, sender/target identity and receipt | Prevents a second owner treating uncertainty as fresh dispatch |
| Conversation registry | Windows shared registry tables and native platform JSON/registry variants | Names, aliases, native sessions, route/source/recency |
| Native account/trust | Account-session/device-pairing state and platform-protected credentials | Enrollment, revocation, public identity and independent trust provenance |
| Runtime persistence | SQLite and private state/identity files, depending on component | Sessions, migrations and host lifecycle |
| Update state | Verified package store, active/previous selection and transaction records | Activation and recovery are not merely downloaded bytes |
| Network observations | Small fixed local JSON records by service | Origin/destination, timestamps, reason and outcome only where recorded |
| Diagnostics | JSONL/text/native reports | Can expose paths, identifiers and message content |

These are record families, not a stable public database schema or permission to edit state by hand. Unknown fields and identity relationships may need preservation across migrations.

## Safety and retention

Private-path checks distinguish opening an existing profile from initializing a new host. A malformed/partial profile is not a fresh install. Copying one file can break the relationship among identity, trust, database, credentials and recovery journals.

Back up with the supported component mechanism and retain exact ownership. Encrypt/protect backups according to their contents. A message-body file can be plaintext even when its associated account token uses OS protection.

Removing a request directory to clear a status can destroy duplicate-prevention evidence. Removing a local cache does not erase provider/cloud history or server data.

See [data lifecycle](data-lifecycle.md), [credentials](credential-storage.md), [configuration](configuration.md) and [recovery](operations-and-recovery.md).

