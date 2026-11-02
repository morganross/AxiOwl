---
title: "SSH routing and remote deployment"
slug: /messaging/technical/ssh
description: "Remote user ownership, host-key verification, registry synchronization and explicit installation."
---

# SSH routing and remote deployment

SSH Messaging uses the configured OpenSSH relationship to reach a remote OS user and that user's installed AxiOwl/provider environment. It is independent of account-derived Relay trust.

## Route and identity

A route includes a host alias, selected SSH user and applicable port/key configuration. The remote native provider/session identity remains part of the destination. Do not shorten a qualified recipient into a similarly named local conversation.

The reviewed adapters use noninteractive authentication, strict host-key checking and bounded connection/process handling. A rejected host key or unavailable identity is not permission to disable verification or try unrelated accounts.

## Registry synchronization

An explicit refresh or configured synchronization exchanges the owned session registry needed for remote addressing. Public node/agent identifiers, names and recency can be imported locally. It is not a full transcript backup or authorization to copy arbitrary files.

Content-hash caching can avoid redundant registry work. Account freshness checks remain a separate responsibility. Turning off Relay does not disable independently configured SSH synchronization.

## Send and uncertainty

The SSH route carries a single requested operation to the exact remote provider environment. Provider account availability, graphical session and native delivery result remain remote requirements.

A local SSH timeout can occur after the remote command accepted work. Retain operation IDs and records; do not replay the Send or infer that a timeout cancelled it.

Passive SSH observations record destination alias/port and operation timing/outcome, not command arguments, usernames, key paths or message bodies. A successful command is a contact observation, not proof of every downstream provider action.

## Remote installation/deployment

Where offered, Remote SSH controls separate inspection from deployment. Deployment is an explicit mutation that may install selected components or receiver/service integration and affect remote restart requirements. It is not a side effect of listing a host.

Read the exact inspected target, selected package/platform, verification requirements, operation result and any uncertain remote-install state. Reinspect uncertainty before a fresh deployment; do not claim a successful local command proves remote readiness.

## Scope of an SSH server

A separately installed system SSH service can accept connections independently of Messaging. Its bind/firewall, authentication and account policies are OS administration concerns. Messaging's Relay toggle is not an SSH-server shutdown control.

See [network inventory](network-connections.md), [credentials](credential-storage.md), [installation](installation-and-removal.md) and [recovery](operations-and-recovery.md).

