# Codex Agents

Codex agents are Codex Desktop conversations discovered from provider-owned state and addressed through the local Codex provider edge.

See the canonical [Provider Support Matrix](../reference/provider-support-matrix.md).

## Capabilities

| Operation | Status | Method |
|---|---|---|
| Discovery | supported | Codex thread/session state |
| Send | supported | Local Codex desktop transport |
| Create | unsupported | Previous app-server spawn path was disabled as unreliable |
| Rename | supported | Codex app-server rename plus provider-native verification |
| MCP reply | supported | Codex plugin/MCP metadata |

## Installer

The Codex checkbox installs the AxiOwl Codex plugin, MCP configuration, marketplace entry, and skill. It does not patch an editor binary.

## Identity

The thread/session ID is the routing identity. A display title is not sufficient because multiple threads can share similar titles and titles can change.

## Evidence

Response-backed delivery has worked. Provider-visible rename has also been proven through Codex app-server notification and native session-index persistence. Desktop create remains deliberately rejected rather than reporting a fragile spawn as success.

## Risks

- an already-open Codex session can retain a stale MCP transport until restarted;
- plugin installation and active-session MCP initialization are separate boundaries;
- AxiOwl acceptance does not prove Codex completed the turn.
