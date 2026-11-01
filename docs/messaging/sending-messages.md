---
title: "Sending messages"
slug: /messaging/sending
description: "Send once, select the right conversation and interpret delivery results."
---

# Sending messages

A useful Send has two inputs: the selected conversation and the complete authored body.

## From an agent

Ask the agent to use its installed AxiOwl Send tool. Supply the actual target name and the text to deliver.

The integration supplies native identity and routing context. Listing conversations is useful when you are choosing a destination; it is not a mandatory step before sending to a name already supplied.

Keep the selected provider, account and permission policy. A tool approval authorizes that operation; it does not authorize changing the provider configuration or using another chat.

## From the desktop interface

Open the provider/message area, select the intended target, enter the body and submit once. Depending on the platform, this area is labelled **Send Message** or **Providers & Messages**.

Use the provider/session list to distinguish a desktop application from its CLI and a local conversation from a remote one.

## Preserve the text

Include the task, relevant accessible material and any limits on editing or tool use. Do not assume the recipient has your conversation history.

AxiOwl's Send contract preserves the authored body. Sender provenance, explicitly saved formatting and license notices can accompany it. The product does not add instructions to initiate another Send.

## End a Send-only request

After the tool returns, report what it actually says and finish. Do not automatically call status, wait for task completion or make a second Send.

The recipient may need to authenticate, approve a tool or continue its own work. Those events are outside the Send finish line.

## When confirmation is needed

Inspect the exact target's native history. If the host exposes a status tool and the user requests it, query the existing operation reference from the appropriate source context.

An accepted request, a process starting and an assistant saying “sent” are weaker evidence than the authored text at the intended target.

## When the result is uncertain

A timeout does not establish non-delivery. Preserve the existing operation and avoid duplicates. A later, genuinely new message needs its own explicit authorization; uncertainty about the old one is not that authorization.

See [Troubleshooting](faq-troubleshooting.md).
