---
title: "Source, release and verification status"
slug: /messaging/technical/source-and-release-status
description: "What this handbook reviewed, what remains source-only and what was not executed."
---

# Source, release and verification status

This handbook was prepared on November 1, 2026 from the Messaging application, separate native producer and public documentation source.

| Source | Reviewed revision |
| --- | --- |
| Messaging application | a228a21fc59775213844b576b572233242127036 |
| Native daemon/account producer | e8a2247fb87aea277aa5e527c7b236832dcaadcc |
| Public documentation before this handbook | b3ebb243b3e51fae3e010514198a6ea0e3a7547f |

These identify source snapshots, not new binary release versions. Sources were read for their relevant contracts; the work does not claim every historical document or every line of source was reviewed.

## Source basis by subject

| Subject | Implementation material used |
| --- | --- |
| Desktop stacks | Native Windows/Linux CMake manifests, Mac Package.swift, desktop Settings/native bridge sources |
| Send and identity | Native MCP request store, delivery-operation store interfaces, MCP/CLI implementation and current Send contract |
| Provider families | Provider package inventory, editor plugin/extension manifests, VS Code package contract, OpenCode compatibility descriptor and native adapter excerpts |
| Data and credentials | Native Send/state-store APIs, platform account credential adapter/helper, application state-root helpers |
| Accounts and network | Account authority plugin/README, native account/Core/transport code and dated source-change records |
| Updates and installation | Native update verifier/transaction code, provider exit gate and installer outcome policy |
| Connected clients | Mobile app manifests, client/protocol exports, capability schemas, file/terminal APIs, settings/push/dictation implementation |
| Documentation delivery | Docusaurus package/configuration, sidebar, repository publication guidance and existing public guides |

These public references describe responsibilities and contracts without publishing signing secrets, private deployment identifiers or authentication implementation recipes.

## Recent source-only network changes

| Change | Implemented source | Deployment/verification limit |
| --- | --- | --- |
| Remote opt-in defaults | Relay off by default; explicit choices persisted; new Windows A2A selections off | Older installed packages may retain older defaults/preferences |
| Separate sign-in and device consent | Explicit Connect my devices | Not inferred from a website login |
| Relay client account-change hints | Negotiated client control event and HTTPS reconciliation | Requires supported capability on the current connection |
| Membership freshness | Five-minute account-only lease and request-time admission checks | Runtime behavior not established by documentation |
| Passive network status | Windows/Linux components view and Mac Provider Setup; local observations | Rendering and installation not exercised here |

The source changes above were not built, installed or deployed by this documentation task. Do not tell users their current installation already contains them without matching artifact/installation evidence.

## Other feature descriptions

The handbook describes installation/update, provider, SDK and native host contracts found in reviewed source. Those descriptions do not add compatibility results. A descriptor declaring an operation is not a functional pass.

Use the installed product's versions, advertised capabilities and actual outcomes. Unknown observed state remains unknown.

## Work performed and withheld

This task read implementation/manifests/guidance and authored Markdown/navigation. It did not run tests, security scans, linters, syntax/compiler checks, builds, installers, provider operations, live service probes or website deployment.

No new security certification, performance benchmark, no-traffic guarantee or universal provider matrix is claimed.

## Publication boundary

GitHub documentation source and the live website are separately delivered. The source link can be shared before the website is rebuilt, but published website appearance and current backend operation need their own evidence.

For the evidence vocabulary see [compatibility](compatibility.md), [observability](observability.md) and [release engineering](release-and-supply-chain.md).

