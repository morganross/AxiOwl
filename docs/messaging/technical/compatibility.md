---
title: "Compatibility and capability negotiation"
slug: /messaging/technical/compatibility
description: "Provider versions, native surfaces, protocol generations and actual evidence."
---

# Compatibility and capability negotiation

Compatibility is a tuple, not a provider logo: product, OS/architecture, application version, native runtime, provider package, publisher version, account/profile, surface, route and operation all matter.

## Compatibility layers

| Layer | Required match |
| --- | --- |
| Platform | Actual artifact OS/architecture and native requirements |
| Application/runtime | Verified producer acquisition and supported protocol |
| Provider worker | Descriptor, worker/package version and minimum core |
| Provider publisher | Supported API/configuration/session model and loaded commands |
| Surface | Desktop, CLI, provider-owned remote or A2A service |
| Identity | Native source/target and selected account/profile |
| Connected client | Negotiated server/client features and schema support |
| Operation | Send, Create, Rename, discovery, update and host capabilities separately |

The reviewed desktop package families are Windows x64, Mac Apple Silicon/macOS 14+ and Linux amd64. This does not establish Intel Mac, Linux ARM or every distribution/provider combination.

## Negotiation

The protocol includes feature/capability negotiation so older clients do not receive unsupported messages or fields. Examples in reviewed client source include selective timeline subscription, terminal snapshot/reflow, provider-child descriptors and project updates.

The latest Relay account-change control type also requires explicit capability negotiation. Old servers still require HTTPS fallback; new client source does not prove their publication endpoint is deployed.

A requested configuration field can exist while the feature owner is inactive. Treat advertised supported capabilities as the runtime boundary, not a client UI package's wish list.

## Evidence levels

A manifest declaration establishes intent and installation scope. A successful package verification establishes expected bytes/identity. An installed version establishes local presence. A successful native operation establishes only its recorded scope.

Earlier provider PASS claims cannot qualify the current implementation. No all-pairs matrix is established by this handbook. One-way native delivery, a human-directed multi-message workflow and a complete separately authorized round trip are different evidence.

## Version changes

OpenCode Desktop v1/v2 paths, editor Agent Host commands and provider MCP/plugin behavior can change independently of AxiOwl. Use the correct version adapter and owned migration; do not switch surfaces as a hidden fallback.

If an operation is unsupported, report it. A strict safety/protocol mismatch must not be bypassed merely because another version was once known to work.

See [source status](source-and-release-status.md), [providers](provider-integrations.md), [protocols](protocols-and-ipc.md) and [recovery](operations-and-recovery.md).

