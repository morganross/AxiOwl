---
title: "Network installation and startup defaults"
slug: /messaging/technical/network-defaults
description: "Separate installed components, local startup, opt-in remote routes and historical releases."
---

# Network installation and startup defaults

This page describes the **November 1 reviewed source defaults**, including changes not yet established as built or deployed. See [source status](source-and-release-status.md) before applying the table to an installed release.

| Component/choice | Fresh-install source behavior | Existing installations |
| --- | --- | --- |
| Windows shared runtime media | Required media accompany the application package | Keep the runtime/consumer ownership contract |
| Windows Remote Connections | Separate optional selection | Preserve explicit installed selection |
| Mac/Linux shared runtime | Required local package with existing local startup wiring | Preserve installed user-service/launch configuration |
| Hosted Relay connection | Disabled by default in native source | Persist explicit choice; do not silently re-enable |
| Windows A2A Server/Client selections | Default off in updated installer source | Preserve existing installed choices |
| Account sign-in | Account access only | Does not newly enable Relay or enroll devices |
| Connect my devices | Explicit additional choice | Compatible legacy enrollment can be retained; explicit false wins |
| SSH receiver/remote deployment | Explicit configuration/action | Existing independently configured SSH services are separate |
| Provider model services | Provider-controlled | Not governed by AxiOwl Relay preference |
| Mobile notifications | Build, permission and subscription dependent | Not established as a universal off/default-on policy |

## Why a local runtime can still run

The local runtime serves IPC/loopback and shared host responsibilities. A process running locally does not establish an outbound internet connection. Conversely, switching off Relay does not stop provider applications, configured SSH work or every other application sharing a component.

Keep these facts separate: package installed; service enabled; process running; listener bound; Relay preference enabled; connection established; remote work authorized.

## Account background behavior

The updated source removes idle 30-second account/profile discovery polling. With device connection consent, initial/reconnect/change notices and a five-minute fallback reconcile authority. Failures back off. A signed-in account without device-connect consent does not enable periodic device discovery.

Unfinished login or sign-out recovery is different from idle discovery and can require account requests. The fixed five-minute authorization limit continues to refuse stale account-only new work during an outage.

## What is not proved

The source defaults do not retroactively describe every previously published package. An old install may retain an enabled preference or older polling loop. A website source update does not update those binaries.

Use [network connections](network-connections.md) for destinations and data and [observability](observability.md) for the limits of passive status. A status page is not a packet capture.

