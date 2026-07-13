# Copilot CLI

Copilot CLI is the standalone GitHub Copilot command-line product. It is not the Copilot-backed session inside VS Code.

## Capabilities

| Operation | Status |
|---|---|
| Discovery | implemented |
| Send | implemented |
| Create | implemented |
| Rename | unsupported |
| MCP reply | implemented |

## Installer

The Copilot CLI checkbox installs the metadata patch required for provider-owned session identity on MCP calls. The installer does not install Copilot CLI or authenticate GitHub.

## Evidence

The July 12 create and send tests stopped before provider delivery because the installed Copilot CLI had no authentication information. The failure proves the provider edge reached a real auth preflight; it does not prove successful delivery. Rename remains a deliberate unsupported operation.

## Risks

- clean-machine GitHub/Copilot authentication is an external prerequisite;
- local request validation is not provider dispatch;
- the provider patch must survive Copilot CLI updates and continue to attach real session metadata.
