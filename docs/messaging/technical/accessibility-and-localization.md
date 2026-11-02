---
title: "Interface, accessibility and localization considerations"
slug: /messaging/technical/accessibility-and-localization
description: "Native and web surfaces, status semantics, selectable evidence and client preferences."
---

# Interface, accessibility and localization considerations

Messaging has different native interfaces on Windows, Mac and Linux, plus connected mobile interfaces. A shared feature contract does not make their navigation, keyboard behavior or accessibility identical.

## Reviewed interface surfaces

| Surface | Implementation considerations |
| --- | --- |
| Windows Settings | Native shell and WebView2-hosted controls/tables |
| Mac application | SwiftUI/AppKit controls and native text/status views |
| Linux Settings | GTK/WebKitGTK-hosted controls/tables |
| Connected clients | React Native/Expo views, native modules and platform permissions |
| CLI/MCP | Structured/text outcomes and host-specific tool names |

The new network views include explicit text for installed/enabled/running and unknown outcomes. Status meaning should not depend solely on a colored dot. Tables can require scrolling; labels and selected text matter when sharing narrow evidence.

## Client preferences

The reviewed mobile settings code includes language/theme, UI/content/code font sizes, syntax theme, terminal renderer/scrollback and sidebar/display preferences. Those preferences belong to that client; their presence does not establish identical desktop controls or complete localization coverage.

Terminal reflow/snapshot behavior is capability negotiated. A client that lacks a new field must not crash merely because another client supports it.

## Operational clarity

Keep warning completion readable: name the incomplete integration and its reason rather than displaying only a success color. Distinguish no observation from disabled, and configured enablement from an active connection.

For destructive or interrupting operations such as provider hot update, explain which application will close and preserve the actual result. A hidden background status update must not silently become a network check or installation.

## Limits and reporting

No accessibility audit, keyboard/screen-reader validation, translation review or rendered-website check was run in this documentation task. No accessibility conformance certification or fully localized-platform claim is made.

Report the exact OS/client build, control/view, input method, expected action and observed result. Screenshots can contain sensitive data; reduce/redact the capture while retaining the relevant label/state.

See [observability](observability.md), [installation](installation-and-removal.md), [configuration](configuration.md) and [compatibility](compatibility.md).

