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
| Agents enrolled on another AxiOwl computer | The configured AxiOwl Relay messaging route |
| An AxiOwl node accessible through your SSH setup | SSH Command Dispatch or A2A-over-SSH, as configured |
| A standards-based agent service | A2A Client and its Agent Card |
| Codex's remote projects and conversations | The Codex Remote provider integration |

These routes retain their own authentication and target identity. Select the route explicitly rather than treating every remote destination as the same type of host.

## Computer-To-Computer Messaging

AxiOwl Relay supports reciprocal registry synchronization and messaging between configured AxiOwl installations. Each computer retains its local provider sessions. The source resolves a remote target, and the destination uses its local integration to deliver the message.

The relay supplies reachability. The destination still needs the appropriate provider, account, session, and workspace. A message naming a source file does not transfer the repository to the other computer.

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

SSH routes use the host, user, key configuration, and permissions selected by the operator. **SSH Command Dispatch** invokes explicit AxiOwl commands remotely. **A2A-over-SSH** retains the A2A task interface while using SSH for the connection.

The remote user must have access to the intended AxiOwl installation and provider environment. Credentials and project access follow that remote account, not the friendly name shown in the registry.

## Network And Data Ownership

An encrypted connection protects traffic along that path. The receiving agent still needs access to the content you send and may use its own model provider. Consider the destination's permissions and provider policy when sharing private project material.

Read [Security and privacy](security.md) and [Messaging workflows](messaging-workflows.md) before connecting a broader agent team.
