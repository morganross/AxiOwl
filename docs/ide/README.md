---
title: AxiOwl IDE
slug: /ide
---

# AxiOwl IDE

AxiOwl IDE is a desktop workspace for conversations with software agents. It brings the active conversation, session list, and project files into one application, with explicit choices for the model, account, and software that runs the agent.

Use it when you want to stay close to both the conversation and the work it produces. You can follow a response, inspect the project, continue an existing session, and choose a different execution route when the task calls for it.

## Find Your Way Around

The session area helps you return to conversations and their working context. The center holds the active transcript and composer. The workspace area provides the files and tools associated with that project.

The selected provider and session remain meaningful. Reading a saved transcript, attaching to an available session, and starting a new conversation are different actions. Choose the action that matches whether you want to inspect previous work or continue it.

## The Three Choices In A Chat

| Choice | Meaning |
|---|---|
| **Billed to** | The signed-in account or configured connection that supplies model access |
| **Model** | The model available through that account |
| **Brain** | The agent runtime or provider client that runs the working loop |

The brain is the software that interprets the model's requests, uses tools, and continues the task. It can be a provider CLI or AxiCode, the IDE's local agent runtime.

The account and model catalogs determine the combinations you can choose. A provider subscription, a metered API connection, and a locally configured model have different access and billing arrangements.

## AxiCode

AxiCode supplies a local agent loop through the bundled Goose runtime. It can use a configured provider directly or one of the supported local proxy connections. The proxy handles the connection to a provider; the agent loop remains AxiCode's job.

Choosing AxiCode does not mean the model runs offline. Where inference happens depends on the selected provider. [The AxiCode guide](axicode.md) explains that distinction.

## Keep Conversations Useful

Provider-owned sessions remain attached to their original provider identity. AxiOwl-owned AxiCode sessions use the local runtime's session storage.

Changing the brain can create a destination session containing transferred conversation context. The IDE asks you to confirm the destination account, model, and brain. This is different from simply changing a display label or picking another model within the same supported route.

## Start Using The IDE

1. [Install and start a conversation](getting-started.md).
2. [Choose models, brains, and accounts](models-and-accounts.md).
3. [Manage sessions and project work](sessions-and-workspaces.md).
4. [Use AxiCode](axicode.md).
5. [Understand privacy and permissions](security-and-privacy.md).

Use [Messaging](../getting-started.md) when you want agents in existing applications to exchange work. Use [Usage Meter](../usage-meter/README.md) when you want a separate view of subscription allowances and cloud costs.
