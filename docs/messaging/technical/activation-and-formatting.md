---
title: "Activation and literal message formatting"
slug: /messaging/technical/activation-and-formatting
description: "Offline feature entitlement and Body Builder without changing the Send contract."
---

# Activation and literal message formatting

Activation controls an AxiOwl feature entitlement. It does not authenticate a provider, connect devices or authorize SSH.

The reviewed desktop Activation UI describes an offline body-append entitlement. The Linux interface exposes machine-bound request/response handling, signed claim verification, expiration/machine checks and a request nonce tied to the exported request.

## Entitlement boundaries

A website login, application license, provider model subscription and device approval are different facts. Installing a valid entitlement must not invent a provider account or disable package verification.

Offline verification does not require a recurring authority connection simply to inspect a stored signed entitlement. An explicit online licensing action, where offered, has its own endpoint/data contract. Do not infer every licensing path is offline.

## Body Builder

The literal settings model separates:

| Setting scope | Text fields |
| --- | --- |
| Global Send | Prepend and append |
| Global Create | Prepend and append |
| Enabled provider-specific settings | Separate Send/Create prepend and append |

The reviewed parser accepts supported settings schemas, bounds literal field sizes and does not render arbitrary unrecognized fields into the provider payload. Saved text is configuration data, not a dynamically interpreted workflow program.

The authored body remains the user's message. Informational sender provenance, explicitly saved literal formatting and existing license notices may be shown under their contracts. Product-generated text must not direct the recipient to initiate another messaging operation.

## Operational considerations

Review literal formatting before enabling it: saved project text or private instructions can be added to future messages. A provider override can differ from a global setting, so support evidence should identify both.

Changing formatting does not retarget an admitted Send or authorize resubmitting its body. A configuration parse/entitlement problem should be reported accurately rather than silently substituting another body.

The existence of a settings control on Windows does not establish identical GUI placement or every format override on Mac/Linux. Match the installed consumer's offered controls; preserve the shared message-content contract.

See [Send](send-contract.md), [configuration](configuration.md), [data lifecycle](data-lifecycle.md) and [network connections](network-connections.md).

