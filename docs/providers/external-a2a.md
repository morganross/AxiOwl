# External A2A Endpoints

An external A2A endpoint is a protocol provider rather than a branded desktop product.

## Capabilities

| Operation | Status |
|---|---|
| Agent Card discovery | implemented |
| Registry import | implemented |
| Send | implemented |
| Task persistence | implemented |
| Bearer auth | implemented |
| OAuth client credentials | implemented |
| Interactive OIDC login | unsupported in send path |

The imported service becomes a `provider=a2a` registry record. Normal AxiOwl send commands can address its local name.

See [Calling External A2A Endpoints](../a2a/external-endpoints.md).
