---
sidebar_position: 1
---

# Common Symptoms

Start with the symptom. Then identify the boundary that failed.

## Symptom Table

| Symptom | Most likely boundary | First thing to check |
|---|---|---|
| Installer checkbox is checked for missing provider | Installer discovery/defaults | MSI log and provider detection proof. |
| Provider app closed even though unchecked | Installer feature isolation | Selected feature list and close-app custom actions. |
| `accepted_by_axiowl` but no reply | Delivery or provider MCP | Delivery logs and provider output channel. |
| Provider says MCP tools are missing | Provider config/startup | MCP config path and provider restart. |
| Message goes to old chat | Registry/discovery | Registry row and provider session id. |
| Provider mentions old cwd | Provider session state | Session metadata and workspace path. |
| Cursor says submit patch missing | Cursor patch | `glass.axiowlSubmitToAgent` availability. |
| VS Code target is wrong | VS Code bridge ownership | Bridge id, workspace, session id. |
| CLI provider is auth-blocked | Provider CLI auth | CLI status/login command. |

## Beginner Diagnosis Flow

1. Did the installer select the right feature?
2. Did the installer install the right files?
3. Did provider restart/load the integration?
4. Did discovery find the right target?
5. Did AxiOwl accept the message?
6. Did provider receive the message?
7. Did provider reply over MCP?
8. Did the reply identify the correct sender?

Stop at the first “no.” That is where the real investigation starts.
