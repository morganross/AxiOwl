---
title: "Feature coverage reference"
slug: /messaging/technical/feature-reference
description: "A map from every reviewed feature family to its technical contract and limits."
---

# Feature coverage reference

Use this map to find the technical contract for each reviewed feature family. It is a documentation coverage map, not a functionality PASS table. Host, provider, platform and release conditions still apply.

## Messaging and conversation operations

| Feature | Technical reference | Key boundary |
| --- | --- | --- |
| Native Send | [Send](send-contract.md) | Explicit authored message; caller finishes after tool result |
| Fire-and-forget admission | [Send](send-contract.md) | Admission is separate from delivery |
| Cache-miss discovery | [Identity](identity-and-resolution.md) | Selection at discovery completion, then pinned |
| Same-name selection | [Identity](identity-and-resolution.md) | Scoped most-recent use; sender never inferred from recency |
| Executing sender identity | [Identity](identity-and-resolution.md) | Native provider/account/surface/session |
| Durable deduplication | [Send](send-contract.md), [storage](storage-and-file-layout.md) | No replay of uncertainty |
| Optional earlier-Send status | [Interfaces](interfaces-and-errors.md) | Observation only; installed host may omit it |
| List and discovery refresh | [Registry](registry-and-discovery.md) | Real native sessions, not delivery proof |
| Imported peer registry | [Registry](registry-and-discovery.md), [SSH](ssh.md) | Routing metadata and exact remote ownership |
| Conversation Create | [Conversation management](conversation-management.md) | Actual new native identity, supported surface |
| Conversation Rename/alias | [Conversation management](conversation-management.md) | Native title versus local alias; retain target identity |
| Session views/System Map | [Conversation management](conversation-management.md) | Projection of observed state |
| Native MCP tool integration | [Protocols](protocols-and-ipc.md) | Host metadata and advertised schema |
| CLI administration | [Interfaces](interfaces-and-errors.md) | OS/version-specific help, not MCP arguments |

## Providers and components

| Feature | Technical reference | Key boundary |
| --- | --- | --- |
| All 13 reviewed provider entries | [Catalog](provider-integrations.md) | Desktop/CLI/Remote distinction |
| Claude surfaces | [Claude](providers/claude.md) | Desktop Code versus Code CLI |
| Codex surfaces | [Codex](providers/codex.md) | Desktop plugin, CLI and provider Remote |
| Cursor surfaces/CLI manager | [Cursor](providers/cursor.md) | Editor bridge versus CLI topology/configuration |
| OpenCode v1/v2 | [OpenCode](providers/opencode.md) | Existing native service and automatic migration |
| VS Code Copilot Agent | [Copilot](providers/copilot.md) | Not every ordinary Copilot Chat surface |
| Standalone Copilot CLI | [Copilot](providers/copilot.md) | Separate worker/configuration/native sessions |
| Antigravity surfaces | [Antigravity](providers/antigravity.md) | Provider sign-in and desktop/CLI scope |
| Detection and enablement | [Catalog](provider-integrations.md), [configuration](configuration.md) | Requested versus installed/active |
| Integration install/repair/uninstall | [Installation](installation-and-removal.md) | Explicit owned scopes and warning completion |
| Independent provider builds/publication | [Supply chain](release-and-supply-chain.md) | Producer/source/protocol and signing identity |
| Availability/download button | [Hot updates](provider-hot-updates.md) | Explicit network action, signed channel |
| Close provider before update | [Hot updates](provider-hot-updates.md) | Exact process identity and verified exit |
| Automatic owned migration | [Hot updates](provider-hot-updates.md) | Transaction before activation, no separate routine repair |
| Full application/runtime upgrade | [Supply chain](release-and-supply-chain.md) | Separate signed component versions |
| Installer completion/warnings | [Installation](installation-and-removal.md) | Incomplete integration is not verified success |

## Accounts, connections and network controls

| Feature | Technical reference | Key boundary |
| --- | --- | --- |
| Browser account sign-in | [Account](account-and-device-discovery.md) | Website PKCE flow, not provider login |
| Account configuration/profile | [Configuration](configuration.md), [interfaces](interfaces-and-errors.md) | Effective endpoints/overrides |
| Connect my devices | [Account](account-and-device-discovery.md) | Explicit consent separate from sign-in |
| First-device bootstrap and later approvals | [Account](account-and-device-discovery.md) | Actual membership/approval state |
| Approve/reject/rename/revoke device | [Pairing](pairing-and-revocation.md) | Exact native identity and grant type |
| Account security history/website management | [Account](account-and-device-discovery.md), [interfaces](interfaces-and-errors.md) | Bounded account observations and browser identity |
| Sign-out and revocation recovery | [Credentials](credential-storage.md), [recovery](operations-and-recovery.md) | Local sign-out versus confirmed server revocation |
| Independent manual pairing | [Pairing](pairing-and-revocation.md) | Separate trust from account membership |
| Relay enable/disable | [Defaults](network-defaults.md), [Relay](relay.md) | Persisted opt-in, not a global network kill switch |
| Account-change hints/fallback | [Account](account-and-device-discovery.md), [Relay](relay.md) | Invalidations, HTTPS authority, source-only rollout |
| Account-only freshness | [Pairing](pairing-and-revocation.md) | Five-minute limit for new work |
| SSH node configuration/removal | [SSH](ssh.md) | Selected OS user/host key and independent route |
| SSH refresh/dispatch | [SSH](ssh.md) | Native remote identity; no uncertain replay |
| Remote SSH inspection/deployment | [SSH](ssh.md) | Explicit mutation and remote result |
| A2A client/card import | [A2A](a2a.md) | Actual endpoint authentication/task contract |
| A2A server/exposure | [A2A](a2a.md), [network inventory](network-connections.md) | Explicit service/bind/authentication |
| Temporary login callback/local IPC | [Protocols](protocols-and-ipc.md), [network inventory](network-connections.md) | Local owner authentication |
| Passive network-status view | [Observability](observability.md) | Metadata coverage is not a packet ledger |

## Connected host and client facilities

| Feature | Technical reference | Key boundary |
| --- | --- | --- |
| Connected phone/SDK | [Client stack](stack-mobile-sdk.md) | Separate iPhone/Android build families |
| Agents/timelines/subscriptions | [Connected workspaces](connected-workspaces.md) | Advertised host and subscribed session |
| Projects/workspaces | [Connected workspaces](connected-workspaces.md) | Authoritative host context |
| Files/uploads/downloads | [Connected workspaces](connected-workspaces.md) | Current authorization and token scope |
| Terminals/scrollback | [Connected workspaces](connected-workspaces.md) | OS-user command execution |
| Browser-host commands | [Connected workspaces](connected-workspaces.md) | Actual active capability; requested setting is insufficient |
| Change/source-control views | [Connected workspaces](connected-workspaces.md) | Host/workspace capability |
| Dictation/audio | [Connected workspaces](connected-workspaces.md) | Permission and backend/data destination |
| Push notifications | [Client stack](stack-mobile-sdk.md), [network inventory](network-connections.md) | Expo/OS subscription and permission |
| Themes/fonts/language/display | [Accessibility/localization](accessibility-and-localization.md) | Client-specific controls, not platform-wide parity |

## Cross-cutting considerations

| Consideration | Technical reference |
| --- | --- |
| Activation/offline entitlement | [Activation and formatting](activation-and-formatting.md) |
| Body Builder/provenance | [Activation and formatting](activation-and-formatting.md), [Send](send-contract.md) |
| Security and prompt/tool permissions | [Security model](security-model.md) |
| Local/server/provider data | [Data lifecycle](data-lifecycle.md), [storage](storage-and-file-layout.md) |
| Credentials and protected helpers | [Credential storage](credential-storage.md) |
| Default install/start/network state | [Network defaults](network-defaults.md) |
| Ingress/egress destinations | [Network inventory](network-connections.md) |
| Performance/concurrency/timeouts | [Reliability](performance-and-reliability.md) |
| Logs and support evidence | [Observability](observability.md) |
| Backup, removal, outage recovery | [Recovery](operations-and-recovery.md) |
| Signing/update/third-party review | [Supply chain](release-and-supply-chain.md) |
| OS/provider/protocol support | [Compatibility](compatibility.md) |
| Windows/Mac/Linux stacks | [Windows](stack-windows.md), [Mac](stack-macos.md), [Linux](stack-linux.md) |
| Shared runtime, web and tooling stacks | [Runtime](stack-runtime.md), [web](stack-account-web.md), [tooling](stack-release-documentation.md) |
| Source-only versus released behavior | [Source status](source-and-release-status.md) |

Out of scope: other AxiOwl products' independent on-device-agent, IDE and usage-meter implementations; internal signing secrets/infrastructure; a stable exhaustive low-level wire schema; audited/compliance or all-pairs functionality claims. Those omissions are boundaries, not implied capabilities.

