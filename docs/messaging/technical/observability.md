---
title: "Status, logs and evidence limits"
slug: /messaging/technical/observability
description: "Passive network metadata, component state, operation records and safe support exports."
---

# Status, logs and evidence limits

Status should report the observation it actually has. A green service indicator, installed package, native tool acknowledgement and screenshot of target delivery establish different facts.

## Status layers

| Observation | Useful conclusion | Limit |
| --- | --- | --- |
| Component inventory | Package/worker/version was found | Does not prove provider loaded it |
| Service state | Local service manager/process observation | Does not prove internet connectivity or provider login |
| Saved enablement | Explicit configured preference | Does not prove a connection exists |
| Relay state | Current/last observed native transport event | Not an account-membership grant |
| Account state | Sign-in/consent, refresh/recovery information | Local sign-out is not confirmed server revocation |
| Operation record | Durable admission, dispatch or outcome for that request | Reference alone cannot dispatch again |
| Target screenshot/transcript | Actual native content at its captured time | Does not qualify all versions or pairs |

## Passive network view

The new Windows/Linux Components and Mac Provider Setup views separate installed, enabled, running, destination, last observed contact/attempt, reason and outcome. Account discovery consent and unfinished sign-out recovery are shown.

The view uses local observations and owner-authorized local control. It does not complete login, retry server revocation, enable Relay, fetch update availability or probe a peer.

HTTP observations record origin/reason/outcome without bodies/tokens; SSH observations omit command text, usernames and key paths. Native update downloads record metadata around the already requested download. Observation failures do not change operation results.

Coverage is incomplete by design: provider-cloud connections, OS services and uninstrumented paths can remain unknown. Relay timestamps reflect connection/control events, not a complete packet log. “No observation” is not “no traffic.”

## Diagnostic sensitivity

Logs, operation directories, screenshots and native transcripts can expose message content, paths, session identifiers or project data. Redact narrowly and retain enough identity/time context to explain the event.

For support, collect product/OS and application/runtime/provider versions; selected route and native source/target; operation ID; actual result; observation time; and the smallest relevant evidence. Do not include credentials or complete unrelated histories.

## Handling unknown outcomes

Keep event time separate from observation time. If dispatch time is unknown, say so. A diagnostic timeout cannot reset the original operation or create another dispatch authorization.

See [data lifecycle](data-lifecycle.md), [Send](send-contract.md), [network inventory](network-connections.md) and [recovery](operations-and-recovery.md).

