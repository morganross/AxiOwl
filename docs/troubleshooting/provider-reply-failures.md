---
sidebar_position: 4
---

# Provider Reply Failures

Provider reply failure means AxiOwl may have sent a message, but the target did not reply over AxiOwl MCP.

## Failure Types

| Failure | Meaning |
|---|---|
| No provider receive proof | Delivery path may have failed. |
| Provider received but no MCP tools | Provider config/startup problem. |
| Provider replies manually but not through MCP | Tool availability or instruction problem. |
| Provider replies with wrong sender | Metadata or registry problem. |
| Provider replies from old chat | Discovery/targeting problem. |

## Questions To Ask

1. Did AxiOwl return `accepted_by_axiowl`?
2. Did provider edge report `accepted_by_provider`?
3. Did the provider UI/session show the message?
4. Did the provider have AxiOwl MCP tools?
5. Did the provider call `axiowl_send_message`?
6. Did the MCP call include provider metadata?
7. Did AxiOwl resolve sender identity correctly?

## Good Test Prompt

```text
AxiOwl provider response test. Please respond over AxiOwl MCP with your current status and include: AXIOWL_TEST_OK <run-id>
```

This gives the investigator a stable phrase and run id.
