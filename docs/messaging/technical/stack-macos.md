---
title: "macOS implementation stack"
slug: /messaging/technical/stack-macos
description: "Swift desktop and CLI, C++ helpers, account ownership and signed package boundaries."
---

# macOS implementation stack

The macOS application uses Swift, SwiftUI and AppKit through Swift Package Manager. The reviewed package declares macOS 14 or later and C++17 interoperability for its native bridge targets. The separately produced shared runtime uses C++20.

| Target or component | Role |
| --- | --- |
| Native application | Provider setup, sessions, accounts and applicable connection controls |
| CLI | Native command entrypoints in the user environment |
| Provider worker | Independent provider execution boundary |
| Core library | Shared Swift application and CLI behavior |
| C++ bridges | Selected native sequencing, formatting and SSH integration |
| Native account helper | Private account session operations through inherited local IPC |
| Shared runtime | Local host/device services and advertised capabilities |
| Signed PKG | Application/runtime installation and integration attempts |

The reviewed distribution is Apple Silicon. The existence of portable Swift or C++ code does not establish an Intel Mac release.

## Publisher applications and managed copies

Applicable integrations prepare a local managed copy from the user's installed publisher application. AxiOwl packages must not redistribute complete provider applications. The publisher original, managed bundle, bundle identity and managed profile are distinct.

Routine updates should preserve healthy managed applications and profiles. An identical path or display name does not prove that credential access identity survived a rebuild. Treat changed application identity and renewed provider sign-in as separate operational events.

## Credentials and OS permissions

Native account helpers use platform-specific credential protection and signed helper admission. A GUI session, filesystem ownership, signing identity and credential-store access each matter. If a machine policy makes a required credential mechanism unavailable, report that limitation; do not reset unrelated credentials to conceal it.

Release signing/notarization credentials are separate from end-user account credentials. A dedicated signing exception on a development machine is not a general product permission to recreate user credential stores.

## Installation and updates

The canonical workflow produces signed/notarized package media. Core runtime, application and provider package versions remain separate. A provider-only update must preserve signed package verification and handle its declared configuration migration automatically after verified shutdown.

The technical pages describe source behavior, not an observed installation on every Mac. See [source status](source-and-release-status.md), [provider integrations](provider-integrations.md) and [data lifecycle](data-lifecycle.md).

