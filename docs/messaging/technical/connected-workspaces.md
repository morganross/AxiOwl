---
title: "Connected sessions, files, terminals, browser and audio"
slug: /messaging/technical/connected-workspaces
description: "Conditional host capabilities and their distinct permissions, data and execution risks."
---

# Connected sessions, files, terminals, browser and audio

The shared client/runtime source includes more than conversation-to-conversation Send. These facilities are **host-capability dependent**. Their existence in a schema or UI package is not a promise that every Messaging installation exposes them.

## Capability reference

| Facility | Data/actions | Required distinction |
| --- | --- | --- |
| Agent sessions/timelines | Prompts, status, tool events and transcripts | Selected host/provider and subscribed session |
| Projects/workspaces | Names, paths, placement and lifecycle | Authoritative workspace versus caller-supplied path |
| Files/uploads/downloads | Selected file bytes, listings and temporary artifacts | Current client/workspace authorization and transfer tokens |
| Terminal | PTY process, input, output and screen/scrollback state | Remote command execution under the host user |
| Browser host | Advertised automation commands and browser state | Separate active browser host/capability, not a config toggle alone |
| Source-control/change views | Workspace change metadata where advertised | Actual repository/workspace authorization |
| Dictation/audio | Microphone data, stream acknowledgements and transcription | Device permission and selected host/backend |
| Notifications | Push token registration and notification delivery | Permission, build support and external notification services |

## Files and terminals

The native file API takes an authenticated client and resolves an authorized workspace. A claimed working directory is not an authority by itself. Queued work rechecks current authority; upload directories are host-owned rather than taken from arbitrary request paths.

Transfer-token expiry, bounded chunks and cleanup are separate from whether a user is allowed to read a file. The protocol's available size controls do not imply every installation has the same upload limit.

A terminal is an execution interface, not a read-only chat view. It inherits the applicable host-user/workspace permissions. Terminal output/scrollback may contain secrets.

## Browser and requested settings

The reviewed native Core distinguishes requested browser-tools configuration from an active browser owner. Do not expose browser controls solely because the setting is saved. Inspect actual host capabilities and the advertised known commands.

## Audio and notifications

Audio can leave the phone/desktop for a configured speech backend. Push registration can involve Expo and OS delivery services. Paired application encryption does not automatically cover every notification/speech provider.

The reviewed mobile settings/cache code also persists UI preferences and replica data. Permission denial, disconnect and feature-version mismatches should produce accurate unavailable states.

A shared runtime can serve other AxiOwl products. Their features are not automatically Messaging features. See [SDK stack](stack-mobile-sdk.md), [security](security-model.md), [network inventory](network-connections.md) and [compatibility](compatibility.md).

