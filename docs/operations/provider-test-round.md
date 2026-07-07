---
sidebar_position: 1
---

# Provider Test Round

A provider test round proves which provider surfaces can respond through AxiOwl.

## Setup

1. Generate a unique run id.
2. List current discovered targets.
3. Pick one fresh/current target per supported provider surface.
4. Avoid stale historical chats.

## Send Prompt

```text
AxiOwl provider response test. Please respond over AxiOwl MCP with your current status and include exactly: AXIOWL_PROVIDER_OK <run-id>
```

Use provider-specific markers when testing many surfaces:

```text
AXIOWL_PROVIDER_CURSOR_OK <run-id>
AXIOWL_PROVIDER_CODEX_OK <run-id>
AXIOWL_PROVIDER_VSCODE_OK <run-id>
```

## Record

For each provider:

- target name;
- provider surface;
- send receipt;
- provider result;
- reply text;
- sender identity;
- failure text if any.

## Pass Criteria

The provider passes when it replies over AxiOwl MCP with the expected run id and correct sender identity.
