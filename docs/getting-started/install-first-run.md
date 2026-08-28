---
sidebar_position: 2
---

# Install And First Run

This guide takes you from the Windows installer to a discovered provider session.

## 1. Prepare A Provider Session

Install and sign in to at least one supported provider product. Open a current session you would like AxiOwl to address.

Good first choices include Codex Agents, Codex CLI, Claude Code CLI, Cursor Agents, or VS Code Copilot-backed sessions.

## 2. Run The AxiOwl MSI

The installer discovers supported provider products and recommends matching integration checkboxes.

Review the list and choose:

- the provider integrations you want;
- the built-in mailbox experience;
- optional A2A features;
- one mobile daemon choice: recommended Node daemon, native C++ daemon, or no mobile daemon;
- optional A2A and SSH command-dispatch features.

Each provider remains a separate feature, so the selection can match your actual workflow.

## 3. Complete Setup

The MSI installs the core runtime and the integration assets owned by the selected features. Provider features can add MCP configuration, a plugin or skill, a bridge extension, session metadata support, and an isolated provider worker.

## 4. Reopen Selected Provider Products

Open the provider products you selected and return to a current session. This gives the provider a fresh opportunity to load its AxiOwl MCP or bridge integration.

## 5. Discover Sessions

Run discovery through the AxiOwl mailbox, CLI, or provider tools. The registry will show the provider, surface, display name, and exact session identity discovered by each package.

Give important sessions simple project roles such as:

- Builder;
- Reviewer;
- Researcher;
- Release coordinator.

## 6. Send A First Request

Continue to [Send Your First Message](send-your-first-message.md). A small request with an explicit reply phrase is an easy way to learn the receipt and response flow.

## 7. Pair The Mobile App

If you installed a daemon runtime, open the **Mobile App** tab and follow [Pair A Mobile Device](../mobile/pair-a-device.md). The daemon generates the QR code and waits for local approval of the phone.

## Optional Next Steps

- [Connect External A2A Agents](../use-cases/connect-external-a2a-agents.md)
- [Control Desktop Agents From A Phone](../use-cases/secure-work-across-devices.md)
- [Create A Cross-Provider Project Team](../use-cases/cross-provider-project-team.md)
