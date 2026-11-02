---
title: "List, create, rename and session management"
slug: /messaging/technical/conversation-management
description: "Administrative operations and their separate ownership, side effects and outcomes."
---

# List, create, rename and session management

Conversation administration is separate from Send. Use only operations advertised by the installed provider/surface; a worker's capability declaration is not universal platform support.

| Operation | Primary effect | Required evidence boundary |
| --- | --- | --- |
| List | Reads indexed/discovered sessions | An address exists in that view |
| Discover/refresh | Updates native or imported session information | Selected provider sources were inspected |
| Create | Opens/enrolls a new native conversation where supported | Actual native identity and resulting registration |
| Rename | Changes an exact provider title and/or explicit registry alias under its contract | Which native record or alias changed |
| Status | Reads integration or earlier-operation state | The stated observation, not a new Send |
| Archive/delete in a connected host | Applies that host's session/workspace lifecycle | Not universal provider-history erasure |
| Install/repair | Changes declared integration assets/configuration | Not provider login or message-delivery proof |

## Create semantics

A create request needs a selected provider/surface and applicable project/workspace context. Some integrations perform a provider-specific warm-up before enrolling/renaming the native identity. If authored initial content is supplied, preserve it and its intended native endpoint.

A new title alone is not a newly created real conversation. Do not synthesize session UUIDs or register an invented recipient to satisfy an operation result.

## Rename semantics

Retain the native identity while changing the intended title/alias. A rename must not switch account or surface, create a second chat or retarget an admitted Send.

Provider capabilities can differ. For example, a native editor extension may expose rename while a particular worker descriptor or build does not advertise it. Inspect the actual installed contract rather than assuming every naming layer is equivalent.

## Session views and System Map

The desktop Sessions view and System Map project available registry, provider, device and service information. These are useful ownership/route views, not evidence that every visual connection has delivered content.

A session can be discoverable while its integration is inactive. A provider can be installed while its account is signed out. Display these separately.

## Safe automation

Administrative tools are not mandatory preflight steps for a supplied-name Send. Do not insert create, identity inspection, discovery or rename merely because a Send was requested.

When an operation is uncertain, retain the exact native ID and durable reference. A fresh independent administration request must not accidentally replay a prior creation or dispatch.

See [identity](identity-and-resolution.md), [registry](registry-and-discovery.md) and the [provider catalog](provider-integrations.md).

