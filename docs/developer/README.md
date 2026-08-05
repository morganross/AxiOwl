# AxiOwl Developer Guide

This guide explains how to change AxiOwl without collapsing provider-specific behavior, local runtime behavior, and network protocols into one undiagnosable path. The canonical component inventory is the [Architecture Overview](../reference/architecture-overview.md).

## Engineering Model

AxiOwl has a stable normalization core and a set of deliberately specialized edges.

The core owns addresses, registry records, sender identity, request validation, correlation, receipts, logs, and normalized results. Provider edges own the mechanics of discovering and delivering to one provider surface. Protocol edges own A2A, inter-node, relay, SSH, and branch-only XMPP behavior. Installer features own the files and provider configuration they install and remove.

That separation is the main reliability strategy. A new provider method should not silently change the meaning of a receipt, and a network fallback should not hide a broken local delivery edge.

## Repository Areas

| Area | Responsibility |
|---|---|
| `apps/windows-desktop/src` | C++ CLI, MCP server, message pipeline, registry, discovery, provider edges, A2A server/client, inter-node transport, services, and installer helpers. |
| `apps/windows-desktop/extensions` | Provider bridge and extension payloads. |
| `apps/windows-desktop/installer` | MSI source generation, provider feature actions, safety checks, staging, and provenance. |
| `apps/windows-desktop/tests` | Native unit, integration, protocol, provider, and installer-oriented tests. |
| `release` | Final flat release artifacts and provenance output. |
| `docs/reference` | Product source-of-truth matrices and release checklist. |
| `feature/xmpp-remote-transport` | XMPP implementation currently outside main. |

## Local Message Flow

```text
CLI or MCP request
  -> request validation
  -> sender identity resolution
  -> target registry resolution
  -> targeted discovery repair when justified
  -> normalized message and correlation ids
  -> provider edge selection
  -> provider-specific delivery
  -> explicit result boundary and logs
  -> correlated MCP reply
```

The pipeline should make a missing identity, stale target, unsupported operation, authentication block, and delivery rejection distinguishable. Do not return a generic success merely because the request entered the pipeline.

## A2A Flow

```text
A2A HTTP+JSON or JSON-RPC request
  -> route and authentication
  -> Agent Card / scoped-agent resolution
  -> task creation or lookup
  -> provider factory or external client
  -> local provider, another node, or external endpoint
  -> task state, result, artifacts, push, or MCP-correlated reply
```

Current main supports Agent Cards, scoped agents, send, task get/list/cancel, extended cards, push configuration, retries, and dead letters. Streaming routes are declared but advertise `implemented=false`; do not convert route presence into a support claim.

## Inter-Node Flow

Inter-node delivery resolves node identity and then selects direct HTTPS A2A, relay, or A2A over SSH according to configuration and policy. A guarded legacy fallback exists for compatibility. Every transport decision and fallback must be visible in logs because otherwise an apparent success cannot prove which path worked.

See [Transport Selection](../inter-node/transport-selection-and-fallback.md) and [Node Pairing And Trust](../inter-node/pairing-identity-and-trust.md).

## Service And User Broker Boundary

The optional MSI A2A feature installs `AxiOwlApi` as an automatic LocalSystem service and installs the relay executable. Interactive provider sessions and user-owned provider files are outside that service account.

The source tree compiles `axiowl-user-broker.exe`, but the current build target list, artifact manifest, and WiX package do not install and launch it. Consequently, protected service routes that require interactive provider access can return `503`. Preserve that loud failure until packaging and lifecycle management for the broker are complete.

## XMPP Branch Boundary

`feature/xmpp-remote-transport` contains an XMPP transport with WebSocket/TLS, SCRAM-SHA256, session routing, a receiver agent, Prosody integration, and an external gateway. It is not present in current main and is behind main. Merge work must reconcile current main architecture, run branch-specific tests, and update the protocol matrix; copying old branch docs into current claims is not enough.

## Registry And Identity

The registry is durable routing state. A sendable row needs evidence that the provider session or endpoint can be addressed. Preserve provider-owned session ids, node ids, A2A agent ids, and aliases as distinct fields rather than deriving identity from a display name.

Provider replies should use provider-owned MCP metadata whenever available. Explicit session ids may be resolved against the registry. Discovery may repair a missing row, but it should not invent sender identity from a convenient current process or environment variable.

## Discovery

Discovery is provider- and surface-specific. It may read provider databases, histories, config, processes, extension state, or documented CLI output. Discovery should record evidence, merge without destroying protected/manual rows, and downgrade stale automatic state when evidence disappears.

Installer discovery and runtime chat discovery are related but different. Installer discovery decides which provider features are sensible to preselect. Runtime discovery finds addressable sessions. A detected provider installation does not prove a sendable session exists.

## Provider Operations

Implement `send`, `create`, and `rename` independently. A surface that supports send does not automatically support create or rename. Return an explicit unsupported result for missing operations.

Provider pages and the [Provider Support Matrix](../reference/provider-support-matrix.md) document current operation-level claims.

## Installer Rules

1. Give each provider feature a clear ownership contract.
2. Preselect only discovered provider installations.
3. Close and restart only apps required by selected actions.
4. Perform user configuration as the interactive user, not the elevated MSI account.
5. Validate patches before and after modification and support rollback.
6. Remove only AxiOwl-owned state for installed features.
7. Preserve logs from every custom action and helper phase.
8. Package every executable referenced by a runtime path.
9. Record source commit and payload hashes in artifact provenance.

## Build And MSI

The Windows app uses CMake. The MSI pipeline is driven by:

```text
apps/windows-desktop/installer/build-windows-msi.ps1
```

The pipeline builds native targets, runs tests and safety checks, stages provider payloads, generates WiX input, builds the MSI, writes provenance, and verifies the final payload. A successful CMake compile does not prove the MSI contains the current executable or every service dependency.

## Change Process

1. Identify the exact boundary being changed.
2. Read the current source-of-truth matrix and historical method evidence.
3. Trace callers and ownership before editing.
4. Add focused tests at the changed boundary.
5. Build the artifact users will actually run.
6. Validate on the development machine and a clean machine.
7. Require a correlated reply or completed task for end-to-end claims.
8. Update the source-of-truth matrix and provider/protocol page together.
9. Record a success method after the current artifact passes, not before.

## Definition Of Done

A code path is not complete merely because it exists. Completion requires packaging, configuration, authentication, operation-level tests, failure diagnostics, uninstall ownership where applicable, and current documentation. Use the [Release Validation Checklist](../reference/release-validation-checklist.md) as the final gate.
