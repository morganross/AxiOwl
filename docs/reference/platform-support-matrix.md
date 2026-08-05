# Platform Support Matrix

This page distinguishes product support from source portability, remote deployment, and research assets.

| Platform | Current status | What exists | What does not exist |
|---|---|---|---|
| Windows 11 x64 | Primary product | Native runtime, mailbox, MSI, provider integrations, A2A client/server code, optional API service and relay | Complete packaged interactive user broker for service-to-user A2A delivery |
| Windows 10 x64 | Implemented code path, validation required | Same Windows-native code and MSI architecture | Current clean-machine release proof equivalent to Windows 11 |
| Linux remote node | Narrow remote support | Remote payload installer, AxiOwl binary payload, Codex plugin/MCP setup, Codex CLI delivery | General Windows provider set, desktop bridges, remote chaining from Linux |
| Linux desktop | Lab/reference | Provider probes, Antigravity lab, parked CLI reference source, historical snapshots | A current compiled and released general Linux desktop product |
| Ubuntu XMPP server | Feature branch | Prosody, nginx, deployment, backup, health, and route-module assets | Current-main release ownership |
| macOS | Unsupported | No current released implementation | Installer, provider matrix, tested runtime |

## Documentation Rule

Do not infer operating-system support from a portable C++ file or a historical snapshot. Public support requires a build, installer or deployment method, provider behavior, and release validation on that platform.
