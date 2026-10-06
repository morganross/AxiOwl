---
title: On-Device Agents And Desktop Sessions
---

# On-Device Agents And Desktop Sessions

AxiOwl's native Goose phone applications bring an agent runtime into the app itself. They also contain connected-host work for reaching desktop sessions. These are two distinct ways of working, with different accounts, files, and permissions.

This guide describes that division. Use the capabilities visible in your installed release; source for a feature is not a promise that every distributed phone build exposes it.

## Local Phone Mode

The agent loop runs inside the phone application. The app selects a configured provider and discovers its models through the runtime. Model requests follow that connection; an on-device agent loop does not mean the model itself runs offline.

Configure the provider through the app's setup. Keep API keys and account material in the dedicated controls, not in a chat prompt. A desktop pairing does not fill these settings for you.

Local conversations belong to the phone runtime. They are not automatically desktop provider sessions, and their tools do not automatically have access to a computer's filesystem.

## Android's Local Environment

The Android implementation runs Goose natively inside the app and includes a bundled command environment and toolset. Its command execution belongs to that application environment.

When a task needs files, identify whether they are phone-local or on a connected computer. Installing the phone app does not create a copy of your desktop repository or its provider logins.

Local Android tool availability should not be used as a description of iPhone tooling.

## iPhone's Local Environment

The iPhone implementation uses a native SwiftUI interface around an in-process Goose engine. Provider configuration and secrets use the app's Apple-specific storage.

The runtime and model connection are distinct from a complete desktop shell. Use the local capabilities actually presented by the iPhone release, and use a connected host when the job belongs to its tools and workspace.

An in-app model proxy, where offered, is a separate connection path. Its presence does not imply every provider subscription or sign-in method is available. Use only the account methods exposed by that app.

## Connected Desktop Mode

Pair the phone with the intended host through the approved connection flow. The host exposes its real provider catalog, workspaces, sessions, and supported operations.

An imported desktop conversation keeps its exact host, provider, and native session identity. Opening it is different from copying its visible messages into a new local phone chat.

The source keeps import and attachment operations identity-bound. If the app cannot establish the exact destination, it should show the state rather than silently choose a similarly named conversation.

Read [Hosts and connections](hosts-and-connections.md) for relay and direct routes.

## Reading And Continuing Are Different

Reading a transcript does not necessarily attach a live process. Attaching a provider session does not necessarily make the provider ready for another turn. Continuing means the selected provider received the instruction and returned its actual output.

Review the connection and session state before sending, especially after a network interruption. Do not submit the same task repeatedly while the first request's result is unknown.

Use the existing attachment when returning to the same native conversation. Creating another local chat is a different action with separate ownership.

## IDE Sessions Need An IDE Connection

The shared host runtime can expose an IDE integration when the IDE is attached and the phone has the appropriate grant. A phone pairing alone does not create that attachment or grant.

A connected daemon and a connected IDE are different states. Select an IDE session only when the host reports that capability as available.

## Permissions Follow The Work

A local phone agent uses the phone app's permitted tools and model connection. A remote provider uses the host's environment and permissions. A remote terminal runs on the selected host, not on the phone.

Inspect the mode, host, workspace, and operation before approving a request. Switching views must not silently change which environment owns the work.

## Keep Apps And Pairings Distinct

The original AxiOwl Mobile connected client, native Goose applications, and Usage Meter companions have different distribution identities and product roles. Use the exact download entry rather than treating similarly named packages as interchangeable updates.

A Usage Meter pairing grants access to readings only. It cannot authorize an agent session in the native Goose app.

## A Practical Choice

Choose a local phone conversation when the task fits its configured model connection and local capabilities. Choose the connected desktop when the task depends on a repository, provider session, credentials, or tools already on that computer.

The useful continuity is not that every screen becomes the same machine. It is that you can deliberately reach the environment that owns the work.
