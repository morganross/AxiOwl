---
sidebar_position: 2
---

# Supported, Target, Experimental, Unsupported

AxiOwl uses support words carefully.

## Supported

Supported means the current code and installer can perform the full path:

1. discover the provider session;
2. install/configure required integration;
3. send to the target;
4. provider receives the message;
5. provider replies through AxiOwl MCP;
6. sender identity is correct.

## Target

Target means the provider is intended or partially implemented, but it has not met the current support bar.

A target provider may have old successful experiments. That does not automatically make it supported now.

## Experimental

Experimental means the path exists but is fragile or proof is limited. Cursor-style private patching can be experimental or supported depending on current test proof and release confidence.

## Unsupported

Unsupported means AxiOwl should not claim the path works. It should not be preselected by the installer.

## Why This Matters

Support labels protect users. A broad claim feels good until another machine exposes the gap. A precise claim makes testing and support possible.
