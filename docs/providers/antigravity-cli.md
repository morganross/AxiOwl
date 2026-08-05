# Antigravity CLI

Antigravity CLI is a separate provider edge from the Antigravity agent window.

## Capabilities

| Operation | Status |
|---|---|
| Discovery | implemented |
| Send | implemented |
| Create | implemented |
| Rename | unsupported |
| MCP reply | implemented |

## Installer

The runtime contains `antigravity_cli` discovery and provider code, but the primary MSI does not expose a dedicated Antigravity CLI provider contract. The Antigravity checkbox configures the agent surface MCP integration.

## Evidence

Antigravity CLI has produced a response-backed AxiOwl reply in earlier testing. The July 12 full suite declared CLI rename unsupported before dispatch. That is an intentional capability result, not a failed rename attempt.

## Risks

- installer support and runtime support are different;
- provider authentication and CLI availability must be checked on each machine;
- rename must remain visibly unsupported until a real provider contract exists.
