---
title: IDE Privacy And Permissions
---

# IDE Privacy And Permissions

The IDE works close to your source tree and provider accounts. Its security model depends on keeping the selected account, agent runtime, workspace, and permissions clear.

## Know Where A Request Goes

Read **Billed to**, **Model**, and **Brain** together. An external CLI uses that provider's account environment. AxiCode uses its selected direct or proxy connection. A cloud model receives the context sent to it under that provider's data policy.

Changing the model or account can change which service receives future context. Review the destination before confirming a route change.

## Keep Credentials In Their Account Controls

Use the provider or IDE's dedicated login and connection settings. Do not paste tokens, passwords, or private keys into a conversation merely to connect a provider.

The provider account registry describes accounts and routes; it is not itself a universal credential store. Explicit credential transfer exists only for named connection methods, such as the supported Codex-to-proxy setup.

The local proxy is a separate component from the model and the agent loop. Its local endpoint and account state should remain private to the intended computer and user.

## Workspace Access

An agent can operate on the files and tools made available by its runtime and permissions. Choose the intended working directory before starting a task, and use the available permission profile for the level of access you mean to grant.

A workspace selection is useful context, but it should not be mistaken for an operating-system sandbox. The runtime's actual permissions determine filesystem and command access.

## Permission Requests

Review the requested action, its target, and the session asking for it. Approvals belong to the operation and provider that issued them. Broader access should be a deliberate choice.

Read cancellation and completion states before issuing another action against the same files. Stopping a turn does not erase filesystem changes already made by a tool.

## Conversation History And Transfers

Provider-owned history stays under that provider's storage model. AxiCode maintains its own local sessions. Transferring a conversation makes supported context available to the destination provider, which may have a different privacy policy.

A transfer does not share all credentials or make the destination inherit the source's permissions. Review the destination account and available history before continuing sensitive work.

## Support Information

When requesting help, share the product version, selected route, visible status, and relevant redacted message. Avoid full credential directories, browser profiles, raw account files, and private project transcripts.

For connected-device security, read [Mobile privacy](../mobile/security-and-privacy.md). For a separate usage-reading companion, read [Usage Meter privacy](../usage-meter/security-and-privacy.md).
