---
sidebar_position: 3
---

# Stale State

Stale state means old provider or AxiOwl information is being reused after it should no longer be trusted.

## Common Sources

- old registry rows;
- old provider workspace path;
- old MCP config;
- old extension folder;
- old bridge id;
- old chat/session name;
- old MSI artifact;
- old provider process that was not restarted.

## Why Stale State Is Confusing

Stale state can make the wrong thing look broken.

Example: a newly created provider chat starts in an old missing workspace. That can be a provider workspace default, not necessarily AxiOwl send failure.

## Diagnosis

Ask:

1. Where did the stale value appear?
2. Which component wrote it?
3. Is it in AxiOwl registry, provider config, provider session metadata, or installer payload?
4. Did the stale value exist before the latest install?
5. Did the provider restart after install?

## Fix Strategy

Fix the owner of the stale value. Do not blindly delete broad folders. Broad cleanup can destroy useful evidence or break another provider.
