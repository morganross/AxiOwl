---
sidebar_position: 3
---

# Receipts Versus Proof

AxiOwl has several success boundaries. They are deliberately different because a system that calls every handoff a success is difficult to troubleshoot and unsafe to trust.

## Receipt

`accepted_by_axiowl` means AxiOwl accepted the request and handed it to the delivery layer. It does not mean the provider read the message.

## Provider acceptance

Provider acceptance means the provider edge reported that its delivery method accepted the message. This is stronger than an AxiOwl receipt, but it still may not prove that the provider displayed the message or sent a reply.

## MCP reply

An MCP reply is the strongest normal proof for a provider conversation. It means a provider session called back into AxiOwl and supplied sender metadata that can be compared with the expected target and session.

## Security limits

A receipt does not grant authorization, reveal the content of an encrypted message, or prove that a provider performed an action. A reply proves more about the provider path, but it still does not prove that the endpoint computer or provider account was uncompromised.

## Practical rule

Use receipts to locate the pipeline boundary. Use provider-owned replies to support a delivery claim. Use device and authorization state to decide whether an action was allowed in the first place.
