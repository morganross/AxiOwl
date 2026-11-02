---
title: "Configuration, precedence and environment ownership"
slug: /messaging/technical/configuration
description: "Saved preferences, account endpoints, provider settings and runtime observations."
---

# Configuration, precedence and environment ownership

Configuration belongs to a specific product, OS user, provider surface and component. There is no safe universal instruction to copy one machine's whole configuration into another environment.

## Configuration domains

| Domain | Examples | Ownership |
| --- | --- | --- |
| Application preferences | Views, selected providers, literal formatting | Per-user application |
| Native runtime | Local interface, service wiring, Relay choice | Runtime/consumer policy and private owner state |
| Account authority | HTTPS site/endpoints and client identity | Native account component; deployment overrides can apply |
| Provider integration | MCP registration, plugin, extension, managed profile | Exact declared provider-owned scopes |
| SSH | Alias/user/port/key selection and host keys | OpenSSH/user configuration |
| A2A | Endpoint/card, authentication, bind/TLS/public origin | Selected service/client configuration |
| Update | Channel, verified active/previous worker state | Signed updater/producer contract |
| Connected-client UI | Theme, language, terminal/history preferences | Selected mobile/client application |

## Requested versus active state

A saved setting is not necessarily active behavior. A runtime status can report a requested configuration while its feature owner remains inactive. The reviewed native Core explicitly distinguishes requested MCP/browser-tools configuration from active host-service ownership.

Do not infer that browser automation, a public listener or provider access is enabled merely because a JSON field exists. Use authoritative feature/capability and installed status.

## Overrides and persistence

The Windows Relay preference is persisted in native state; POSIX runtime configuration retains its own saved choice. Explicit false must not be replaced by an automatic “recovery” enablement.

Account deployment environment overrides can take precedence over local account settings. Report the effective source of configuration without exposing credentials.

Paths differ between Windows profile state, Mac Application Support and Linux state/data roots. Supported overrides and identity-preserving relocation are not permission to bypass private-path or owner admission.

## Change safety

Read a preference locally when inspecting status. Account refresh, peer verification, update checking, migration and installation can have network or mutation side effects and should not be mislabeled as passive reads.

Before changing configuration, identify the existing value, intended effective value, affected consumer and recovery scope. Preserve unknown extension fields where the state contract requires them.

Do not edit a whole provider configuration to remove one owned entry, copy passwords into environment variables for a UI flow or rerun uncertain operations to regenerate a receipt.

See [network defaults](network-defaults.md), [credentials](credential-storage.md), [observability](observability.md) and [recovery](operations-and-recovery.md).

