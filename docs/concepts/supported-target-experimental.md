---
sidebar_position: 2
---

# Supported, Target, Experimental, And Unsupported

AxiOwl applies status to a specific provider surface or protocol capability, not to a brand name as a whole. `codex:agents` and `codex:cli` are separate claims because they have different discovery, install, identity, and delivery paths.

## Status Definitions

| Status | Meaning |
|---|---|
| Supported | The current release path has repeatable installation or configuration, discovery, send, provider receipt, correlated reply, correct sender identity, and release evidence on the claimed platforms. |
| Target | The product intends to support the path and may contain code, but current release proof is incomplete or blocked. |
| Experimental | A usable path exists, but it depends on fragile/private integration, has limited machine coverage, or has known operational risk that prevents the ordinary supported claim. |
| Unsupported | AxiOwl does not provide or claim the complete path. The installer should not select it as working. |
| Branch-only | Implementation exists outside current main and is not part of the released main-branch product. |

## Status Can Change

Historical success is valuable evidence for selecting a method, but it is not permanent certification. Provider software, AxiOwl code, installers, and clean-machine behavior change. A status is upgraded only after the current implementation passes the current release checklist. A regression lowers the current claim without erasing the historical method report.

## Current Truth

Use the [Provider Support Matrix](../reference/provider-support-matrix.md), [Protocol Support Matrix](../reference/protocol-support-matrix.md), and [Platform Support Matrix](../reference/platform-support-matrix.md). Provider pages explain the mechanism and risks; the matrices decide the current label.
