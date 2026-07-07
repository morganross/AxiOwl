---
sidebar_position: 3
---

# Send Your First Message

This guide explains the simplest AxiOwl message test.

## Step 1: Pick A Known Target

Use a current provider chat/session that discovery found. Avoid stale old chats for first tests.

Good target:

```text
Current VS Code chat that is open and recently discovered
```

Weak target:

```text
Old chat name from a previous install with an unknown workspace path
```

## Step 2: Send A Message

Example:

```powershell
axiowl send --to "Experiment hardware setup" --body "Please respond over AxiOwl MCP with your current status."
```

The exact target name depends on what discovery found on the machine.

## Step 3: Read The Receipt

AxiOwl may return a receipt such as `accepted_by_axiowl`.

That means AxiOwl accepted the request. It does not prove the provider received it.

## Step 4: Wait For Provider Reply

The stronger proof is a provider reply over AxiOwl MCP.

The reply should show:

- provider/session identity;
- run id or expected phrase when used;
- message accepted by AxiOwl MCP;
- no stale sender confusion.

## Good Test Message

Use a message that asks for a specific response:

```text
AxiOwl provider response test. Please respond over AxiOwl MCP with your current status and include: AXIOWL_TEST_OK <run-id>
```

This makes the proof easier to audit later.

## What Can Go Wrong

| Symptom | Likely area |
|---|---|
| Target not found | Discovery or registry. |
| `accepted_by_axiowl` but no reply | Provider delivery or provider MCP. |
| Provider says MCP tools are missing | Provider config or session restart. |
| Reply comes from wrong old chat | Registry/discovery stale target. |
| Provider references old cwd | Provider session state or stale config. |

## Beginner Rule

Do not treat the first receipt as the finish line. Treat the provider reply as the finish line.
