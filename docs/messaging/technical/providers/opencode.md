---
title: "OpenCode Desktop v1/v2 and CLI"
slug: /messaging/technical/providers/opencode
description: "Version-specific native service integration and automatic hot-update migration."
---

# OpenCode Desktop v1/v2 and CLI

OpenCode Desktop and OpenCode CLI are distinct integrations. The reviewed Desktop compatibility descriptor explicitly declares publisher major versions 1 and 2, version-specific native service handling and automatic configuration migration before worker activation.

This is a **source compatibility contract**, not proof that every current v2 build has passed on Windows, Mac and Linux.

## Version and surface boundaries

| Surface | Required distinction |
| --- | --- |
| Desktop v1 | Applicable Desktop plugin/bridge and native session |
| Desktop v2 | Publisher-authenticated existing native service and version-specific plugin/helper |
| CLI | Separate configuration, session discovery and worker |
| Managed/publisher profile | Preserve the actual selected application/profile ownership |

The source includes separate Desktop v1/v2 plugin resources. Linux additionally resolves its packaged v2 helper and treats an indeterminate dispatch as non-retryable. Do not silently route a failed Desktop request through standalone CLI.

## Send behavior

The declared v2 finish line is acknowledgement of the exact native user message. It is not an automatic wait for model output or another message to the source.

Preserve session identity, authored body, operation deduplication and no automatic resend. A service discovery or authentication failure cannot be converted into delivery success by finding another session.

## Automatic migration

The provider hot-update package must carry the declared migration resources. The updater verifies package identity, minimum core/worker compatibility and target shutdown, then applies the owned configuration transaction before activating the worker.

There is no separate repair action required as the normal way to complete a hot update. An incomplete migration blocks successful activation and reports its real outcome. Preserve unrelated user configuration, provider history and recovery records.

The reviewed descriptor names different Windows package/worker requirements and Mac/Linux native core protocol requirements. A compatible source declaration is not a reason to install a mismatched artifact.

## Diagnose by boundary

Record publisher major version, selected Desktop/CLI surface, profile, worker/core version, service availability, configuration migration and actual native acknowledgement. Keep installation outcome, authentication, dispatch and delivery separate.

Do not claim v2 compatibility from v1 evidence, a package signature or historical provider results. See [hot updates](../provider-hot-updates.md), [compatibility](../compatibility.md), [recovery](../operations-and-recovery.md) and [source status](../source-and-release-status.md).

