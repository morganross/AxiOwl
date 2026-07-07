---
sidebar_position: 3
---

# Receipts Versus Proof

AxiOwl has multiple success boundaries. They are not the same.

## Receipt

`accepted_by_axiowl` means AxiOwl accepted the request and handed it to the delivery layer.

It does not mean the provider read the message.

## Provider Acceptance

Provider acceptance means the provider edge reported that the message was accepted by its delivery method.

That is stronger than an AxiOwl receipt, but it still may not prove an end-to-end reply.

## MCP Reply

An MCP reply is the strongest normal proof. It means the provider got the message, acted on it, and called back into AxiOwl with identity metadata.

## Example

```text
accepted_by_axiowl
```

This means:

```text
AxiOwl took responsibility for trying delivery.
```

It does not mean:

```text
The target provider displayed the message and replied.
```

## Practical Rule

Use receipts for pipeline debugging. Use provider replies for support claims.
