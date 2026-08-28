---
sidebar_position: 2
---

# Inter-Node Operations

## A2A Node Operations

An operator registers a remote AxiOwl node with either a direct A2A endpoint or an A2A-over-SSH route. Agent Cards describe the agents that node exposes. Messages and tasks retain A2A task identity and results.

Useful status includes:

- node identity and selected transport;
- Agent Card discovery;
- authentication state;
- task ID and lifecycle state;
- destination agent result or artifact.

## Mobile Host Operations

A mobile client pairs to a daemon host rather than registering an A2A node. Operational status includes:

- host ID and friendly label;
- daemon availability;
- relay and direct connection routes;
- paired and pending devices;
- provider catalog;
- projects, workspaces, and agents;
- timeline connection and acknowledgement state.

## Linux And macOS Hosts

Linux and macOS packages include AxiOwl-branded daemon runtimes. They participate in the same host/client model while using their platform-specific service and package lifecycle.

## Keep Credentials In Their Boundary

A2A access tokens belong to A2A endpoints. SSH keys belong to SSH routes. Mobile pairing state belongs to the daemon and phone. Provider credentials stay on the host.
