# OpenCode CLI

OpenCode CLI is addressed through its native session ID and resume/create commands.

## Capabilities

| Operation | Status |
|---|---|
| Discovery | implemented |
| Send | implemented |
| Create | implemented |
| Rename | unsupported |
| MCP reply | implemented |

## Installer

The primary MSI does not currently expose a dedicated OpenCode provider contract. It therefore does not guarantee installation of a native OpenCode executable or MCP configuration on another computer.

## Multiline Safety

Current code refuses a Windows batch shim for multiline provider delivery. Earlier `%*` reparsing could truncate the message. Failing before dispatch is safer than sending corrupted content and reporting success.

## Evidence

OpenCode CLI has produced a response-backed AxiOwl reply in earlier testing. The July 12 full round failed because only an unsafe batch shim was available and no native executable passed the transport requirements. Rename is unsupported.

## Risks

- npm `.cmd` shims can alter quoting and multiline arguments;
- runtime support currently exceeds MSI provisioning;
- an imported session is not sendable without a content-preserving executable path.
