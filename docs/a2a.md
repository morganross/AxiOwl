---
sidebar_position: 7
slug: /a2a
title: Connected Computers And A2A
---

# Connected Computers And A2A

AxiOwl can reach work beyond the current computer. Choose the connection according to what the destination is: another enrolled computer, a provider-owned remote session, or a standards-based agent endpoint.

## Choose A Route

| You want to reach | Use |
|---|---|
| A paired computer's interactive agent sessions from a phone | AxiOwl Mobile with relay or direct connection |
| Agents enrolled on another AxiOwl computer | The configured AxiOwl Relay or [SSH Messaging](ssh.md) route |
| Chats on a computer accessible through your SSH setup | AxiOwl SSH registry synchronization and Messaging |
| An A2A service reached over SSH | A2A-over-SSH, with its own task interface |
| A standards-based agent service | A2A Client and its Agent Card |
| Codex's remote projects and conversations | The Codex Remote provider integration |

These routes retain their own authentication and target identity. Select the route explicitly rather than treating every remote destination as the same type of host.

## Computer-To-Computer Messaging

AxiOwl Relay and configured SSH connections support registry synchronization and messaging between AxiOwl installations. Each computer retains its local provider sessions. The source resolves a remote target, and the destination uses its local integration to deliver the message.

Choose the full remote chat name and its intended route. For SSH, retain the computer qualifier and `(SSH)` ending. AxiOwl supplies the return destination automatically and retains the selected chat's exact identity for the exchange.

Relay supplies reachability for the relay route; SSH uses the configured SSH connection. The destination still needs the appropriate provider, account, session, and workspace. A message naming a source file does not transfer the repository to the other computer.

## What A2A Adds

A2A, or Agent2Agent, gives agent services a standard interface. An **Agent Card** describes the endpoint, capabilities, and authentication requirements. A request can return a message, start a task, or produce an artifact.

Use it when you want a specialist service to participate without requiring the caller to know its internal provider runtime. The returned result can then become input to another agent.

## Expose A Local Agent

Enable the A2A components appropriate to the computer, then expose the intended registered target. Provider-backed work crosses into the user session that owns the provider environment. A machine service does not automatically gain access to every signed-in user's provider state.

Limit exposure to the endpoints you intend to offer, and configure their authentication. Publishing an Agent Card makes the service discoverable; it does not grant permission to call it.

## Call An External Agent

Import the endpoint's actual Agent Card, review its supported operations, and configure the required credentials. Address that registered A2A target when sending work.

The endpoint controls task semantics. Follow its state and results rather than interpreting the initial request receipt as completed work. Artifacts can include files or structured results returned by the service.

## Follow Tasks And Results

A task has its own identifier and can report working, input required, completed, canceled, rejected, or failed states. If more information is requested, continue the same task through the endpoint's supported interaction.

Keep an A2A task ID separate from any provider session used behind it. This avoids losing the relationship between the external request and the internal conversation.

## SSH Connections

SSH routes use the host, user, key configuration, and permissions selected by the operator. AxiOwl can exchange chat registries and deliver ordinary chat messages over that connection. **SSH Command Dispatch** also invokes explicit AxiOwl commands remotely. **A2A-over-SSH** retains a separate A2A task interface.

The remote user must have access to the intended AxiOwl installation and provider environment. Windows delivery into the provider-owning user's environment requires that user's existing signed-in desktop session. Credentials and project access follow the remote account, rather than the friendly computer name.

For a chat and its answer to travel over SSH, configure both directions and keep both network paths available. A registry-sync receipt alone is not a completed conversation. Follow [Messaging over SSH](ssh.md) for setup, exact CLI commands, observed CLI exchanges, and the current Windows Copilot reply limitation.

## Network And Data Ownership

An encrypted connection protects traffic along that path. The receiving agent still needs access to the content you send and may use its own model provider. Consider the destination's permissions and provider policy when sharing private project material.

Read [Security and privacy](security.md) and [Messaging workflows](messaging-workflows.md) before connecting a broader agent team.
