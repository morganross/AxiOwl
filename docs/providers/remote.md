# Remote

Status: `unsupported` for local-provider remediation builds

See [Provider Support Matrix](../reference/provider-support-matrix.md).

## Surface

Remote AxiOwl nodes and remote provider routing.

## Delivery Method

Current local provider builds intentionally treat remote delivery as out of scope. Remote should not be used as a fallback to hide local provider failures.

## Installer Action

Remote install options may exist, but they should be unchecked by default and only used when explicitly selected.

## Requirements

| Requirement | Needed |
|---|---|
| Patch | No local provider patch. |
| Extension | No local provider extension. |
| MCP | Remote node contract required before support. |
| Config | Remote node config only when explicitly selected. |

## Test Status

Not part of local provider support.

## Known Risks

- Remote fallback can mask local install/delivery failures.
- Remote support needs its own explicit contract and validation.
