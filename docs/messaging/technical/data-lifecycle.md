---
title: "Data inventory, lifecycle and retention"
slug: /messaging/technical/data-lifecycle
description: "Where messages, identities, caches, credentials and diagnostics can persist."
---

# Data inventory, lifecycle and retention

Messaging processes authored text and native conversation identities. “Local integration” must not be read as “no records” or “no provider cloud processing.”

## Data inventory

| Data | Typical location/owner | Persistence and sensitivity |
| --- | --- | --- |
| Authored Send body | Native request/operation files; selected provider | Can persist as plaintext in local records and provider history |
| Source/target identity | Registry, request and result records | Native IDs, surface, route, names and operation correlations |
| Operation result | Durable dispatch/receipt records | Needed to prevent duplicate or conflicting dispatch |
| Discovery cache | Per-user registry/imported peer snapshots | Conversation names, identifiers, recency and routing metadata |
| Provider configuration | Provider-owned and AxiOwl-owned assets | MCP entries, plugins, extensions and managed-profile relationships |
| Account state | Native account component and authority | Session metadata, membership, public device identity and protected credentials |
| Device trust | Private native state | Public keys, approval/revocation and independent/account provenance |
| Network observations | Fixed local metadata records | Destination origin, reason, timestamps and outcome where instrumented |
| Connected-client caches | Mobile/SDK application storage | Host information, settings, workspace/session/timeline data |
| Support/installation records | Local reports, logs and exports | Can reveal paths, accounts, content and operation details |

The native Send request store explicitly writes a body file plus request, launch/dispatch-context and result information. Removing only a visible UI row is therefore not evidence that all copies disappeared.

## Movement through the system

An ordinary local Send moves authored content from the executing environment to the exact selected provider conversation. A remote route adds the destination machine and route-specific services. The provider can then process/store that content under its own policies.

Account discovery exchanges membership/public identity and short-lived routing offers. It is not intended to upload chat bodies or provider credentials to the account database. Relay encryption does not remove the endpoint/provider copies.

Files or audio explicitly selected in a connected client are additional data transfers. A path string in a message does not by itself copy the file.

## Retention and deletion

No universal retention interval or automatic complete erasure is established by this handbook. Operational records, provider histories, backups, website logs and caches have different lifetimes.

Before removal, identify the exact product, OS user, state root, account and data class. Preserve deduplication records for unresolved operations. Do not delete unrelated provider profiles or regenerate host identity to clear a diagnostic.

Backups may contain credentials or message text. Secure the destination, limit access and record retention. Server-side account removal, local sign-out, provider logout and software uninstall are separate actions.

See [credential storage](credential-storage.md), [observability](observability.md), [installation/removal](installation-and-removal.md) and the website Privacy Policy for its separate policy scope.

