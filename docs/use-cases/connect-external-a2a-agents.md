---
sidebar_position: 5
---

# Connect External A2A Agents

AxiOwl supports standards-based Agent2Agent workflows alongside provider messaging. This lets an AxiOwl workflow call an external agent service, follow its task, and collect its result using A2A concepts.

## When A2A Fits

A2A is a good fit when the destination is an agent service rather than a local chat session. Examples include:

- a research service with a published Agent Card;
- a document-processing agent;
- an internal automation endpoint;
- another AxiOwl node exposing selected registered agents;
- a long-running task that returns artifacts over time.

## Typical Flow

1. Add or select the external endpoint.
2. Read its Agent Card and advertised capabilities.
3. Send a message or create a task.
4. Track the task identifier and state.
5. Collect the final result and artifacts.
6. Route the result to another provider session when useful.

## A2A And Provider Messaging Together

An external A2A agent can contribute one part of a larger provider workflow. For example, an A2A research agent can return a source package, then a local provider session can analyze it, and another session can review the recommendation.

AxiOwl keeps the A2A task identity and the provider session identity distinct while giving the coordinator one place to follow both.

Read [A2A In AxiOwl](../a2a/README.md) for protocol details.
