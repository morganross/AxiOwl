# VS Code Native Compatibility Label

Older AxiOwl documentation described "VS Code native" and "VS Code Copilot-backed" as two separately installed providers. Current package inventory has one packaged provider: `vscode_copilot_backed`.

Native bridge snapshots, `vscode` command aliases, and exact-window ownership logic still exist. They support the current VS Code/Copilot package rather than defining a second provider worker, VSIX, or MSI checkbox.

Use [VS Code Copilot-Backed Sessions](vscode-copilot.md) for current installation and capability status. Existing registry aliases may continue to resolve for compatibility, but documentation and new configuration should use the canonical packaged provider identity.
