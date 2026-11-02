---
title: "VS Code Copilot Agent and standalone Copilot CLI"
slug: /messaging/technical/providers/copilot
description: "Exact editor Agent Host surface, extension/package boundaries and CLI separation."
---

# VS Code Copilot Agent and standalone Copilot CLI

**VS Code in the Messaging provider catalog means the VS Code-hosted Copilot Agent surface.** It does not mean standalone Copilot CLI, every ordinary Copilot Chat conversation or every VS Code extension.

| Surface | Reviewed identity |
| --- | --- |
| VS Code Copilot Agent Host | vscode_copilot_backed package with an explicit editor-agent surface |
| Standalone Copilot CLI | copilot_cli, with separate configuration and session state |

## Editor integration

The reviewed package contains a native worker, bridge extension/VSIX, extension manifest/runtime and provider-owned MCP registration. Extension installation uses the detected editor product's registration path rather than treating copied folders as activated extensions.

The editor profile, exact visible chat resource and underlying provider session can have different native IDs. The integration must preserve their actual association; a backing SDK UUID is not automatically the editor chat UUID.

## Capability granularity

The native bridge can advertise snapshot, create, rename and exact-session Send commands. The package contract distinguishes these internal commands from separately exposed worker operations. Do not infer that every bridge command is available as a universal public tool.

Some create paths use provider-specific setup, exact returned-session binding, title application and the authored initial prompt. That create transaction is not the ordinary fire-and-forget Send contract.

The installed core, package descriptor, editor/Copilot version and actual loaded commands determine what can run.

## Data and security

The provider-owned MCP entry for the VS Code surface is separate from Copilot CLI configuration. Installing/removing one must not edit the other's registration.

The integration can read exact native session metadata needed to identify the target. Content then enters the selected Copilot environment under its provider account and policies. Do not switch to a focused-widget, generic chat or standalone CLI route merely to obtain an apparent success.

## Failure and update behavior

Distinguish extension registration, activation, available native commands, discovered identity, request admission and visible target delivery. Preserve uncertain operations; no automatic resend is permitted.

Hot updates retain closed-world payload, signature/hash, protocol, ownership and verified-shutdown requirements. An installation warning remains an incomplete integration, even if other providers installed successfully.

See [provider catalog](../provider-integrations.md), [protocols](../protocols-and-ipc.md), [Send](../send-contract.md) and [source status](../source-and-release-status.md).

