---
title: AxiCode And Provider Connections
---

# AxiCode And Provider Connections

AxiCode is the local agent runtime inside AxiOwl IDE. The current implementation uses Goose to run the working loop: send context to the selected model, interpret its response, invoke available tools, and continue the task.

It lets you choose a model connection while keeping the agent loop on your computer.

## Local Agent Loop, Selected Model Location

Local execution of the agent loop does not necessarily mean local model inference. If the chosen provider is a cloud service, model requests still go to that service. A local model connection has its own requirements and must be configured as such.

The IDE shows the model and account used by the route. Use those fields to understand where inference happens and how access is billed.

## Direct Provider Connections

A direct connection uses a provider configured in Goose. Its available models come from the live configured provider inventory. Connect the account using the method offered for that provider, then choose a compatible model in the IDE.

Different providers use different authentication: API keys, browser authorization, subscription routes, local services, or gateways. A provider name alone does not identify which account method is in use.

## Local Proxy Connections

The local AxiCode proxy handles supported provider authentication and request translation. Goose remains the agent loop; the proxy is the connection component.

The documented AxiOwl-specific methods are Codex CLI credential transfer into the proxy and Claude subscription browser authorization. Each has its own explicit setup and model discovery. Other providers in third-party dependencies do not automatically become selectable AxiOwl proxy connections.

A loopback proxy runs on the computer. It should not be exposed as an unauthenticated network service.

## AxiCode And External CLIs

| Question | AxiCode | External provider CLI |
|---|---|---|
| What runs the loop? | Local Goose runtime | The provider CLI |
| Where is authentication configured? | The selected direct or proxy connection | The provider CLI's account environment |
| What owns the conversation? | Goose-owned local session storage | The provider's session storage |
| Where do tools run? | In the local runtime's configured environment | According to that provider CLI's behavior |

Both can use a remote model service. Choose the brain for its tool behavior and connection options, not simply because two routes display a similar model name.

## Make A Connection Usable

Configure the account in Settings, allow its model catalog to load, and choose the actual account/model/brain combination in the conversation. Keep credentials out of chat messages and project files; use the dedicated authentication controls.

When changing the brain of an existing conversation, follow the IDE's confirmation and context-transfer flow. [Models and accounts](models-and-accounts.md) explains what changes and what remains with the original session.
