---
sidebar_position: 4
title: Agents, Files, And Terminals
---

# Agents, Files, And Terminals

Mobile gives you a view of work happening on the selected computer. Start by choosing the host and workspace, then open the agent session that owns the task.

## Open Or Create An Agent

An existing agent brings its conversation history and provider identity. Open it when you want to follow or continue the same work.

Creating an agent uses the provider, model, mode, and project choices offered by the host. The host launches or connects the provider runtime and records the resulting session identity.

The host's catalog describes real capabilities. A model or operation available on another computer may not be available here.

## Read The Timeline

The timeline can include user messages, assistant text, provider-exposed progress or reasoning, tool calls and output, permission requests, usage information, and terminal turn state.

These are different stages of work. The first assistant text is not necessarily the end of the turn. A permission request can pause progress until you decide.

The daemon orders events and retains the relationship between the agent and provider session. Reconnecting lets the client reconcile that timeline.

## Send Context

Type the next instruction in the selected conversation. Where offered, add an image or file, or use dictation to enter a longer prompt.

Review dictated text before sending, especially file names and commands. Attachment and speech availability depend on the app and host capabilities. Microphone permission alone does not configure a transcription service.

An attachment is content you deliberately send to the session. It should be suitable for the provider that will receive it.

## Inspect Files And Changes

Use the workspace's file and change views to understand the result of an agent's work. They refer to the host project, not a separate copy of the repository on your phone.

When available, add relevant files or changes to the conversation so the next instruction has concrete context. Be deliberate about private material: sending it to an agent can make it part of that provider request.

## Respond To Permissions

Read the action and target before approving. Your response goes back to the provider runtime that asked. Approval for one tool request should not be interpreted as general authority for unrelated sessions.

If you need to stop work, use the control exposed for that agent and follow its reported state. Already completed tool actions remain part of the host's work.

## Use A Host Terminal

A host that advertises terminal support can expose a real terminal in the mobile workspace. Input runs on that computer in the permitted user environment. Output comes from the host process.

Use the terminal as carefully as a terminal at the desk. Confirm the current host and directory before entering a command. Leaving the view or losing the network connection is not necessarily the same as ending the terminal process.

## Continue At The Desk

The provider runtime and files have stayed on the computer throughout the session. Return to the host environment to inspect or continue the work through its available provider surface.

Use [Security and privacy](security-and-privacy.md) to understand what pairing, permissions, and relay encryption protect.
