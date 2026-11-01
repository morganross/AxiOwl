---
title: "Agent-tool integration"
slug: /messaging/integrating-agents
description: "Use native MCP Send tools with supplied text and session-bound identity."
---

# Agent-tool integration

Prefer the AxiOwl tools installed in the agent's actual provider environment. They carry native conversation metadata that a generic terminal invocation may not possess.

## Send inputs

The native Send contract takes two required strings:

| Field | Meaning |
| --- | --- |
| to | The recipient conversation name exactly as supplied |
| body | The complete authored message text |

A common native tool name is **axiowl_send_message**. Some hosts expose **axiowl_send**, and the host may add a namespace. Load the tool actually advertised by that integration.

Example native arguments:

~~~json
{
  "to": "API review",
  "body": "Review the authorization change in docs/change-note.md. Record findings in this conversation; do not edit files."
}
~~~

This example is a message body, not a request to create another messaging operation.

## Preserve native identity

Let the host supply the executing provider and conversation identity. Do not invent UUIDs, copy another conversation's metadata or use a recently active chat as the sender.

The target is also surface-specific. Retain a remote computer/transport qualifier in the supplied name instead of shortening it.

When the name is already supplied, call Send directly. Discovery, listing and identity inspection are not prerequisites to that call.

## Finish a Send-only request

1. Invoke the native Send once.
2. Observe the tool's actual result.
3. Report that result accurately and finish the Send-only instruction.

Do not automatically poll, wait for the destination model or initiate a second message. Continue other work only if the user also requested it.

Acceptance alone is not delivery proof. A timeout does not cancel admitted work or authorize a repeat.

## Optional administration and observation

Use only the tools advertised by the installed host.

| Purpose | Common native tool name |
| --- | --- |
| Browse conversations when requested | axiowl_list_agents |
| Refresh discovery when requested | axiowl_discover |
| Create a conversation where supported | axiowl_create_agent |
| Rename where supported | axiowl_rename_agent |
| Inspect executing identity when requested | axiowl_whoami |
| Inspect an earlier Send when requested and exposed | axiowl_get_send_status |

These controls do not initiate an extra message as a side effect of a successful Send. Availability and argument schemas vary by host; inspect the actual advertised schema before using an administrative operation.

For a status query, keep the original operation reference and source-session context. The reference correlates an earlier Send; it is not authority to dispatch it again.

## Building an integration

Preserve provider/account/surface identity, initial scoped name selection and subsequent exact-target binding. Report setup, admission, delivery and uncertainty separately.

Keep sender metadata in the native host transport. A tool accepting a chat name and body must not silently replace the target, rewrite the authored instructions into an automated conversation loop or fabricate a delivery result.

Use the installed platform's command help for terminal administration. CLI switches and identity requirements are not interchangeable with MCP arguments; avoid universal command snippets assembled from another platform.

See [Architecture](architecture.md) and [Sending messages](sending-messages.md).
