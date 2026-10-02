---
title: Models, Brains, And Accounts
---

# Models, Brains, And Accounts

The model decides what to say or request. The brain runs the agent loop and tools. The account supplies access and determines how that model use is billed. Keeping these choices visible lets you decide how a task should run.

## Billed To

Start with the account or connection you intend to use. A subscription login and an API-key connection may access similar models while charging differently. Read the route label and the provider's own account terms.

AxiOwl does not turn a subscription into unlimited API use. It presents the connections that have been configured and the models available through them.

Account labels are for navigation. They do not replace the identity obtained from the provider's authenticated state.

## Model

The model list is derived from the selected account's catalog. Choosing a model name by itself is not enough: the model must be available through the account and compatible with the chosen brain.

If the same model name appears through several connections, keep the account context in view. A model can be supplied through a provider subscription, an API connection, or another configured service.

Options such as reasoning or speed depend on the selected route. Use the controls exposed by that model and runtime.

## Brain

| Brain or route | Who runs the agent loop? | Account configuration |
|---|---|---|
| External provider CLI | The selected provider CLI | That CLI's own sign-in and model access |
| Provider desktop session | The provider desktop application | The account and session in that application |
| AxiCode direct | Local Goose runtime | A provider connection configured for AxiCode |
| AxiCode through local proxy | Local Goose runtime | A supported proxy connection and its own authorization |

The external route catalog includes Codex CLI, Copilot CLI, Cursor CLI, Gemini CLI, Antigravity CLI, Claude Code CLI, and OpenCode Go CLI. Codex Desktop is an existing-session surface. AxiCode's direct provider choices are discovered from its configured runtime.

The selectable choices in the app are narrower than a list of provider brands: installation, account access, available models, and route compatibility all matter.

## Three Credential Paths

A provider CLI sign-in authorizes that CLI. An AxiCode direct connection uses its configured provider authentication. An AxiCode proxy connection uses the proxy's supported account flow.

The documented proxy methods include an explicit Codex CLI credential-transfer operation and a separate Claude subscription browser login. These are specific routes. The app does not generally copy credentials between every same-brand account.

Use the named connection method and its sign-out controls. Pairing a phone or signing into the AxiOwl website does not supply these provider credentials.

## Changing An Existing Conversation

A model change within a supported route is different from changing the brain. A brain change transfers conversation context into a destination session. Review the confirmation's account, model, and brain before proceeding.

Within AxiCode, a supported billing-connection change can apply to subsequent messages in the current session. That changes where future model requests go; it does not rewrite the billing of previous turns.

A transferred conversation is not a transfer of credentials, live processes, or every provider-specific tool state. Read [Sessions and workspaces](sessions-and-workspaces.md) for continuity expectations.

## Choose According To The Task

Use the provider's own brain when you want its native agent behavior. Use AxiCode when you want a local agent loop with a configured model connection. Use Usage Meter alongside either one to understand provider-reported capacity before starting a long task.
