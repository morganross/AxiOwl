---
sidebar_position: 11
slug: /troubleshooting
---

# Troubleshooting

Start by identifying the selected route, then follow its boundaries in order.

## Core Log Locations

```text
%LOCALAPPDATA%\AxiOwl\logs
%LOCALAPPDATA%\AxiOwl\registry
%LOCALAPPDATA%\AxiOwl\runtime
%PROGRAMDATA%\AxiOwl\logs
```

The selected daemon and provider integrations also keep AxiOwl-managed state and logs in their installed user or service scope.

## Local Provider Message

1. Confirm the exact provider surface is installed and selected.
2. Confirm the provider product is signed in and the target session exists.
3. Refresh discovery and inspect the provider-owned session ID.
4. Follow the AxiOwl receipt into the provider worker result.
5. Match any MCP reply to the same run, message, and provider session.

For VS Code and Cursor, also inspect the installed bridge/extension status and the correct application window. For CLI providers, confirm the current provider session and working directory.

## Provider Reply

A send receipt identifies the accepted handoff. A provider reply requires the target session to call back through its configured AxiOwl MCP boundary. Keep the sender provider, surface, session ID, run ID, and receipt ID together.

## Mobile Pairing

1. Confirm the selected Node or native daemon service is running.
2. Confirm the desktop can ask the daemon for a pairing offer.
3. Confirm the offer is current when scanned or imported.
4. Confirm the phone appears in pending devices.
5. Approve the intended client locally.
6. Confirm the client appears in the paired-device list.

Do not publish the pairing link, private device identity material, or complete daemon state.

## Mobile Connection

For the relay route, distinguish relay service reachability, daemon control connection, phone data connection, encrypted session establishment, and daemon protocol readiness.

For a direct route, confirm host, port, network reachability, TLS/private-network policy, and daemon authentication.

Once connected, confirm the daemon publishes providers, projects, workspaces, and agents before diagnosing an individual turn.

## Mobile Agent Timeline

Record the host ID, project, workspace, agent ID, provider, underlying provider session, turn ID, and terminal timeline state. Determine whether the stop occurred while opening history, sending the turn, starting the provider, handling a permission, streaming output, or settling completion.

## A2A

Follow:

1. Agent Card retrieval;
2. advertised endpoint and capability;
3. configured client authentication;
4. message or task acceptance;
5. interactive-user broker handoff when a desktop provider is involved;
6. destination provider result;
7. task completion and artifacts;
8. callback delivery when configured.

## A2A-Over-SSH And SSH Dispatch

Confirm the SSH host, user, key reference, remote AxiOwl command availability, and selected route. A2A-over-SSH retains A2A task semantics; SSH Command Dispatch runs explicit remote CLI operations.

## Stale State

Provider sessions, host routes, and agent records can change. Refresh from the owning system and use provider session IDs, host IDs, client IDs, and agent IDs rather than relying only on display names.

## Evidence To Save

- platform and AxiOwl version;
- exact installer or package identity;
- selected features and daemon runtime;
- route type;
- redacted host, client, provider-session, agent, message, receipt, or task IDs;
- service and process state;
- the first concrete error;
- relevant surrounding log lines;
- final boundary reached.

Redact access tokens, SSH private keys, provider credentials, pairing links, private network addresses, and message content not required for diagnosis.
