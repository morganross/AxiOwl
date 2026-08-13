---
sidebar_position: 4
---

# Discovery And The Registry

Discovery finds provider sessions. The registry turns those sessions into a shared AxiOwl address book.

## Provider-Aware Discovery

Each provider surface stores sessions differently. AxiOwl uses the discovery method declared by that provider package, such as provider state, a local database, session files, a bridge registry, or a CLI-owned session list.

The discovery result is normalized into common fields while retaining provider-specific identity.

## The Registry Record

A useful registry record can include:

- display name and aliases;
- provider and surface;
- provider session identity;
- local or remote node ownership;
- supported operations;
- current sendable state;
- last observation and reply information.

## Why A Shared Registry Helps

The workflow no longer needs to remember how every product stores a chat. It can ask for a target by name, inspect the provider and surface, and let the destination package perform the exact delivery method.

The registry also makes cross-provider workflows readable. A project can have a Builder, Reviewer, and Researcher even when those roles live in different products.

## Refresh As Work Evolves

Discovery can refresh the address book as sessions are created, renamed, or moved. Provider-owned session identity remains the stable routing anchor while friendly names can evolve with the project.

See [Provider Packages](provider-packages.md) for the integration boundary behind discovery.
