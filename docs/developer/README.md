# AxiOwl Developer Docs

This document describes the current implementation for developers and future agents. The architecture source of truth is [Architecture Overview](../reference/architecture-overview.md).

## Architecture

AxiOwl is built around a local C++ executable, provider-specific delivery modules, a durable registry, and provider bridge extensions/configs.

Important directories:

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

## Registry Model

The registry is durable local state, not a cache-only convenience. It maps names and aliases to provider sessions.

Developer rule: do not mark a row sendable unless discovery or direct proof justifies it. Do not allow stale paths or stale display names to become stronger than provider-owned session ids.

## MCP Metadata Requirements

Provider replies must include enough metadata for AxiOwl to identify the sender session. The MCP server should fail loudly when metadata is missing.

For final CLI support, do not rely on environment-only identity injection. Add provider-owned metadata through native MCP metadata, provider patching, or an equivalent provider-supported mechanism.

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
- remote out-of-scope.

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
