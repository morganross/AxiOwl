---
sidebar_position: 5
---

# Provider Packages

Every provider surface gets its own AxiOwl package because every surface has its own way of discovering sessions, carrying identity, and delivering work.

## What A Package Can Contain

Depending on the provider, a package can include:

- an isolated provider worker;
- MCP configuration;
- a provider plugin or skill;
- a VSIX bridge extension;
- a narrow session-metadata integration;
- discovery and delivery logic;
- installer ownership and cleanup rules.

The package contains only the pieces required for that provider surface.

## Why Packages Stay Separate

Separation gives the product several useful properties:

- selecting one provider does not configure every provider;
- each integration can evolve with its upstream product;
- discovery and delivery stay provider-aware;
- removal can target AxiOwl-owned files for one surface;
- one provider update does not require redefining the others.

## Provider Revisions

A provider package can be versioned independently from the AxiOwl core. An installed package revision is sometimes called a generation. It means a concrete installed revision of that provider integration, not AI-generated content.

The updater can discover an available provider revision, verify it, stage it, and make it current for that provider while preserving the ownership boundary.

## The Provider Still Owns Authentication

AxiOwl installs integration assets. The provider application continues to own the user's provider account, sign-in, conversation data, and model access.

See [Provider Surfaces](../providers/README.md) for the current package list.
