---
title: Install And Start A Conversation
---

# Install And Start A Conversation

Download **AxiOwl IDE** for your operating system from [Downloads](https://axiowl.com/downloads/). Use the package and channel listed for that platform. Messaging and Usage Meter are separate downloads.

## Prepare Your Provider

Decide whether the conversation will run through a provider client or through AxiCode.

For a provider client, install and sign in to that provider's supported CLI or desktop application. Its account, session storage, and tool behavior remain under that provider's control.

For AxiCode, configure a provider connection through the IDE's account settings. A direct provider connection and a subscription-proxy connection have their own login and billing methods. Use the method named by the app rather than assuming a login from another route is shared.

## Open The Project

Choose the project directory you intend the agent to use. Confirm the workspace before giving it a file-changing task. The conversation can refer to files, commands, and repository state from that working context.

Opening the same directory in several conversations gives them access to the same files. Keep their assignments coordinated when several agents are making changes.

## Select The Execution Route

In the chat header:

1. Select **Billed to**.
2. Choose a **Model** available for that account.
3. Choose a compatible **Brain** if more than one is offered.
4. Review **Options** for the reasoning, speed, or transcript settings exposed by the route.

A sole compatible brain can appear as text instead of another choice. Model catalogs come from configured providers and can change as account access changes.

## Send The First Instruction

Describe the actual task and the desired outcome. Include the relevant files or workspace context and say whether you want an explanation or an edit. The first message starts the new conversation using the selected route.

Follow the streamed response and any tool or permission activity. If the provider requests approval, decide in the context of that operation. A permission choice belongs to the selected runtime; it is not a universal permission for every agent in the app.

## Return To Existing Work

Select a conversation from the session list to read its history and continue where the provider supports continuation. The title helps you find it, while the provider session identity determines which conversation is opened.

For Codex Desktop, the documented route is an existing-conversation integration. Use its existing session rather than treating it as the CLI new-chat route.

## Change Direction Deliberately

For a new conversation, account, model, and brain selection define where the first message goes. For an existing conversation, a change that moves the work to another brain requires a confirmed transition.

Read [Models and accounts](models-and-accounts.md) before changing the route of important work. The confirmation should match the account you intend to use and the session behavior you expect.

## Keep The Product Boundaries Clear

The IDE's own account setup controls its execution routes. A Messaging provider integration or Mobile pairing does not sign you into an IDE provider account. Each product keeps its own purpose and configuration.
