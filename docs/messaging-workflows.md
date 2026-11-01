---
title: "Work with agents"
slug: /messaging/workflows
description: "Use focused handoffs while preserving conversation, project and permission boundaries."
---

# Work with agents

Messaging connects participants with different context or capabilities. Plan the work around those differences.

## Implementation and independent review

Keep the implementation conversation responsible for the change. Send a reviewer an accessible commit or change description, the review objective and whether editing is allowed.

For example:

> Review the authorization change described in docs/change-note.md. Identify concerns and record them in this conversation. Do not modify files.

Read the review in that conversation or explicitly authorize a separate Send of the findings when needed. A delivery operation does not automatically start an exchange between agents.

## Focused investigation

Give an investigator the question, relevant evidence and the boundary between investigation and repair. An instruction to inspect a failure should not silently become permission to change code, install software or run tests.

Include the operating system and application/provider versions when they matter.

## Coordination across several conversations

Assign an owner to each file or decision before parallel work. Messaging does not prevent conflicting edits or merge changes automatically.

Keep durable decisions in the project and send accessible references. A coordinator can retain the objective and selected results while specialists keep their detailed exploration.

This can reduce manual copying. Actual model cost and completion time still depend on the task, providers and workflow.

## Continue or create

Continue an existing conversation when its accumulated context matters. Use Create only on a surface advertising that operation and when the user wants a new conversation.

Creation, renaming and browsing are administrative operations. They do not add an automatic messaging step to Send.

## Across computers

Use the complete target label and intended route. A remote file path refers to the recipient's computer; it is not a file transfer.

For [SSH](ssh.md), retain the computer and transport qualifier displayed by AxiOwl. A separate message in the other direction needs its own authorized route and operation.

## Finish at the right boundary

For Send, distinguish admission from delivery at the target. For the requested task, inspect its actual work or native history. For an additional message, obtain explicit authorization rather than relying on generated instructions.

See [How messaging works](messaging/how-it-works.md) and [Agent-tool reference](messaging/integrating-agents.md).
