# Antigravity Agents

Antigravity agents are sessions in the Antigravity/Gemini agent surface. They are distinct from Antigravity CLI sessions.

## Capabilities

| Operation | Status | Method |
|---|---|---|
| Discovery | supported | Antigravity session metadata |
| Send | supported | Antigravity provider edge |
| Create | implemented | Provider create workflow |
| Rename | implemented | Provider request plus native verification |
| MCP reply | supported | Antigravity MCP configuration and sender metadata |

## Installer

The Antigravity checkbox installs MCP configuration. The current Windows installer contract does not install an Antigravity editor patch or extension.

## Evidence

Response-backed sends have passed. In the July 12 create round, the correct session received the request, but the provider planned rather than executed its MCP reply. The create path is therefore implemented but not promoted to supported by that run.

## Risks

- agent and CLI identities can be confused;
- planning text is not an executed MCP tool call;
- native title verification can fail even after the provider receives a rename prompt.
