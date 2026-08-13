# Codex Agents

Codex agents are Codex Desktop conversations discovered from provider-owned thread state.

## Current Package Contract

| Operation | Source status | Method |
|---|---|---|
| Discover | Implemented | Codex thread/session state |
| Send | Implemented | Exact-session Codex desktop transport |
| Create | Implemented | Native thread creation, exact UUID enrollment, rename, then initial send |
| Rename | Implemented | Native rename with provider-state readback |
| MCP reply | Implemented | Codex plugin and session metadata |

The Windows feature installs the AxiOwl Codex plugin, MCP configuration, marketplace entry, skill, and isolated provider worker. It does not patch a general editor binary.

Historical response and rename evidence exists. The current source now implements native create; older documentation that called desktop create deliberately unsupported is superseded.

The thread ID is routing identity. A title is a mutable label and cannot distinguish two same-name conversations.
