---
title: "Linux implementation stack"
slug: /messaging/technical/stack-linux
description: "Native C++ CLI and settings interface, systemd user runtime and Debian media."
---

# Linux implementation stack

The Linux application uses native C++ with CMake/Ninja. Its graphical Settings interface uses GTK/WebKitGTK and a local native request bridge. The reviewed package family targets amd64 Debian-compatible environments.

| Layer | Role and dependency boundary |
| --- | --- |
| Native CLI and provider worker | Dispatch, discovery and per-surface integration |
| Settings | Local HTML/JavaScript displayed through GTK/WebKitGTK |
| Shared utility code | JSON, process control, registry and formatting helpers |
| Account component | Separately built native helper; not a requirement to run all Core/provider processes for sign-in |
| Shared runtime | Required local runtime package and user-service integration |
| Cryptographic libraries | OpenSSL and, in the applicable native transport adapter, libsodium |
| Packaging | Application/runtime Debian media with release signature and source/identity checks |

## Graphical environment and ownership

An SSH shell does not imply that the provider-owning desktop session exists or has the required login state. Desktop integrations use the intended user's display/session and provider profile. CLI surfaces have their own histories and authentication.

Source presence is not proof of an official publisher Linux application for every provider. An integration may use a managed desktop or compatibility method. The [provider catalog](provider-integrations.md) describes these boundaries without asserting universal availability.

## Local runtime and remote access

The required runtime can be installed and started locally while Relay remains disabled. The reviewed native source's local loopback interface defaults to port 6768. Explicit SSH or external endpoints are separate features.

Linux registry and GUI state use platform-specific data/state roots. Do not assume Windows paths or move a private daemon directory without preserving ownership, native identity and the supported migration contract.

## Installing and diagnosing

Keep all release-listed media together. Signature and source-admission requirements can make an incomplete download unsuitable for installation. Follow the release's actual supported helper rather than substituting a different product's script.

Selected integration problems produce warning completion and per-component records. A systemd service being active does not prove a provider extension loaded or a message arrived.

The GUI's service status is a fixed local user-service read. New passive network views do not authorize peer probes or update checks.

Related: [installation](installation-and-removal.md), [credentials](credential-storage.md), [network defaults](network-defaults.md), [compatibility](compatibility.md).

