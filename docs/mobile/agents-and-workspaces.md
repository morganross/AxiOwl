---
sidebar_position: 4
---

# Agents, Workspaces, And Timelines

AxiOwl Mobile gives you an agent-centered view of the selected host.

## Browse The Host

A connected daemon can publish:

- providers, models, modes, and provider capabilities;
- projects already known to the host;
- workspaces and worktrees;
- active, imported, archived, and completed agents;
- files, branches, and host-supported project actions;
- current daemon and provider status.

The host owns this state. The mobile app requests and presents it.

## Open An Existing Agent

Select an agent to open its authoritative timeline. The daemon can import or resume the provider's underlying session and map it to the AxiOwl agent identity.

The timeline can contain:

- user messages;
- assistant text;
- reasoning or progress exposed by the provider;
- tool calls and tool output;
- permission requests and user decisions;
- usage information;
- completion, cancellation, and error events.

## Create An Agent

Choose the project or workspace, provider, model, mode, and other capabilities offered by the host. Creation happens through the daemon, which owns the provider process and resulting agent identity.

## Send A Turn

Text entered in AxiOwl Mobile is sent as a normal user turn to the selected host-side agent. The daemon preserves provider, model, mode, working directory, process, and underlying provider session.

## Provider Permissions

When a provider requests permission for a tool or action, the request can appear in the timeline. The decision returns to the provider runtime that made the request.

## Timeline Ordering

The daemon sequences timeline events and tracks client acknowledgements. This gives the mobile app one ordered view of user messages, assistant output, tools, permissions, and completion.

## Reconnect

Stable host and agent IDs let the mobile client return to the same session. After reconnecting, the app reconciles timeline state rather than treating the host or conversation as new.

## The Host Remains Authoritative

Project files, repositories, provider authentication, provider processes, and persistent agent state remain on the host. AxiOwl Mobile is a remote control and collaboration surface for that real environment.
