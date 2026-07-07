# AxiOwl Developer Docs

This document describes the current implementation for developers and future agents. The architecture source of truth is [Architecture Overview](../reference/architecture-overview.md).

## Engineering Model

AxiOwl is intentionally split into a small set of stable core concepts and many provider-specific edges. The core should be boring: validate, resolve, discover, dispatch, log. The provider edges can be weird because provider surfaces are weird.

This is the design tradeoff: isolate provider weirdness so it does not infect the registry, MCP server, installer, or release process.

## Important Directories

| Path | Purpose |
|---|---|
| `apps/windows-desktop/src` | C++ runtime, CLI, MCP server, registry, discovery, provider edges, installer helper. |
| `apps/windows-desktop/extensions/vscode` | VS Code bridge extension source/payload. |
| `apps/windows-desktop/extensions/cursor` | Cursor bridge extension source/payload. |
| `apps/windows-desktop/installer` | MSI build scripts and safety checks. |
| `release` | Built MSI and WiX artifacts. |
| `docs/reference` | Current product source of truth. |

## Message Flow

```text
MCP tool or CLI command
  -> CLI/MCP handler
  -> MessagePipeline
  -> validate target/body/sender
  -> resolve sender identity
  -> resolve target registry row
  -> targeted discovery repair when needed
  -> build final visible body
  -> provider_edges dispatch
  -> provider module
  -> delivery proof/log
```

The central rule is that `MessagePipeline` owns the general send contract, while `provider_*.cpp` owns provider-specific mechanics.

## Registry Model

The registry is durable local state, not a cache-only convenience. It maps names and aliases to provider sessions.

Developer rule: do not mark a row sendable unless discovery or direct proof justifies it. Do not allow stale paths or stale display names to become stronger than provider-owned session ids.

The registry should help humans target chats by name while preserving machine-safe routing through provider session ids.

## MCP Metadata Requirements

Provider replies must include enough metadata for AxiOwl to identify the sender session. The MCP server should fail loudly when metadata is missing.

For final CLI support, do not rely on environment-only identity injection. Add provider-owned metadata through native MCP metadata, provider patching, or an equivalent provider-supported mechanism.

This is not bureaucracy. Without metadata, AxiOwl cannot know whether a reply came from the target session, a stale session, or a caller pretending to be a session.

## Sender Identity Rules

Sender identity should resolve in this order:

1. Provider-owned MCP metadata.
2. Explicit provider session id that matches a registry row.
3. Explicit sender address/alias that maps to a registry row.
4. Targeted discovery repair.

Avoid guessing a sender from a display name that looks like a raw session id.

## Discovery Flow

Discovery modules find provider sessions and merge them into the registry. Discovery is provider-specific and should preserve manual/protected rows.

Discovery can:

- add newly found sessions;
- refresh last-seen fields;
- enrich manual rows;
- downgrade stale auto-discovered rows when proof disappears;
- repair a missing target once during send.

Discovery should not:

- silently convert stale rows into sendable rows;
- delete unrelated provider data;
- hide provider delivery failures.

## Delivery Flow

Provider delivery lives in `provider_*.cpp` and is selected by `provider_edges.cpp`.

Delivery results must distinguish:

- AxiOwl handoff accepted;
- provider accepted;
- provider rejected;
- provider unavailable;
- unsupported provider;
- auth-blocked provider;
- missing patch;
- stale target;
- remote out-of-scope.

## Installer Development Rules

The installer should be feature-isolated. A provider feature owns its install, patch, config, cleanup, and logs. Core install owns only the AxiOwl runtime and shared AxiOwl-owned state.

Do not add wide cleanup because a single provider is failing. Wide cleanup can make a test pass once while deleting user state or breaking another provider.

## Build System

The Windows build uses CMake. The MSI build script validates toolchain dependencies, builds native artifacts, stages payloads, writes provenance, and verifies the generated MSI.

Primary build script:

```text
apps/windows-desktop/installer/build-windows-msi.ps1
```

## MSI Build Process

The MSI build should:

1. build `axiowl.exe`;
2. run tests;
3. stage helper executables and extensions;
4. stage provider payloads;
5. write artifact manifest;
6. compile WiX;
7. verify MSI payload/provenance;
8. leave final artifact under `release`.

## Release Process

Use [Release Validation Checklist](../reference/release-validation-checklist.md). Do not publish a build solely because compilation succeeded.

## Development Opinion

The safest way to work on AxiOwl is to change one boundary at a time and test the boundary you changed. Installer changes need install logs. Provider changes need send/receive proof. Registry changes need stale-row tests. MCP changes need metadata proof. Release changes need clean-machine validation.
