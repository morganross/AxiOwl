---
sidebar_position: 6
---

# Practical Examples

These examples show how AxiOwl fits into real workflows.

## Ask Another Provider For Review

You implemented a change with one provider and want another provider to review it.

```text
Send to: Codebase review
Message: Please review the current implementation and respond over AxiOwl MCP with risks and status.
```

Why AxiOwl helps:

- target is explicit;
- reply comes back through MCP;
- logs show the path.

## Check Provider Health

You want to know which provider surfaces are currently working.

```text
AxiOwl provider response test. Please respond over AxiOwl MCP with your current status and include: AXIOWL_PROVIDER_OK <run-id>
```

Why AxiOwl helps:

- one run id ties the test together;
- failures can be grouped by provider surface;
- supported and target providers are not confused.

## Coordinate CLI And Editor Work

You have one provider running in an editor and another running as a CLI. AxiOwl treats them as separate surfaces.

Why this matters:

- editor integrations may need extensions;
- CLI integrations may need cwd, auth, and metadata;
- a passing editor test does not prove CLI support.

## Diagnose A Failed Install

The installer finished, but a provider does not reply.

AxiOwl gives you places to look:

- installer logs;
- registry rows;
- runtime handoff files;
- provider bridge logs;
- MCP reply logs.

The diagnosis becomes a sequence instead of a guess.
