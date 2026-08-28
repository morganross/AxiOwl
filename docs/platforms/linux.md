---
sidebar_position: 3
---

# Linux

AxiOwl for Linux x86-64 combines a native desktop application, Debian packaging, provider integrations, and an AxiOwl-branded daemon host.

## Native Desktop Experience

The Linux package can provide:

- the native AxiOwl application and CLI;
- provider package management and MCP configuration;
- provider integration assets;
- an installed daemon runtime and service unit;
- per-user configuration and local state;
- AxiOwl-owned uninstall lifecycle.

## Daemon Host

Linux now uses the same broad daemon-centered model as the connected product family. The daemon owns projects, workspaces, provider agents, timelines, permissions, and client connections.

The package stages the AxiOwl-branded daemon under the normal AxiOwl installation root and runs it through the platform service lifecycle.

## Connected Use

A mobile client can pair to a Linux host and access the provider agents made available by that daemon. Direct and relay connectivity use the same host-profile model as other platforms.

Linux is a natural fit for development workstations, build machines, and long-running agent hosts.
