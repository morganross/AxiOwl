---
sidebar_position: 4
---

# Agents, Sessions, And Timelines

Once connected, the mobile app becomes a client of the host daemon's agent workspace.

## Browse The Host

The daemon can publish:

- available providers and models;
- projects and workspaces on that computer;
- running and imported agent sessions;
- provider-specific modes and capabilities;
- current connection and daemon status.

The phone displays that state without becoming the owner of the underlying repository or provider installation.

## Open An Existing Session

Select an agent to open its authoritative timeline. The daemon can return the existing conversation history and continue streaming new events from the provider runtime.

Timeline events can include:

- user and assistant text;
- reasoning or progress information exposed by the provider;
- tool calls and tool output;
- permission requests and responses;
- usage information;
- completion, cancellation, and error states.

## Send A Turn

Text entered on the phone is sent as an ordinary provider turn to the selected agent session. The daemon keeps the session identity, process, model, mode, and working directory on the host.

## Reconnect Without Losing The Conversation

The protocol uses stable host and agent identities plus ordered timeline state. When the phone reconnects, it can resume the current host view and reconcile events instead of treating the connection as a new conversation.

## Provider Permissions Stay Visible

When a provider needs approval for a tool or action, the request can appear in the mobile timeline. The decision returns to the provider runtime that owns the session.
