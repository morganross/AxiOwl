---
sidebar_position: 7
---

# Local Versus Remote

AxiOwl local provider support and remote node support are different boundaries.

## Local

Local provider support means AxiOwl talks to provider apps, extensions, CLIs, and sessions on the same machine.

Local support deals with:

- installed apps;
- local config;
- local session files;
- local registry;
- local provider patches;
- local MCP tools.

## Remote

Remote support means AxiOwl talks across a node/network boundary.

Remote support needs:

- node identity;
- network transport;
- trust contract;
- remote install/update rules;
- remote logs and proof.

## Why Remote Is Not A Fallback

Remote should not hide a local provider bug. If local Cursor delivery fails, remote routing should not make the test look successful. That would make diagnosis worse.
