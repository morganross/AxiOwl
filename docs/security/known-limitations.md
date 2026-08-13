---
sidebar_position: 7
---

# Shared Security Responsibilities

AxiOwl provides security boundaries for coordination, and the surrounding products and operators each keep an important role.

## The User

The user chooses which provider integrations to install, which sessions to address, which devices to approve, and which results to trust. Device approval and provider sign-in remain deliberate user actions.

## The Provider

Each AI provider owns its account authentication, model access, conversation store, and provider-side behavior. AxiOwl uses the selected integration around that boundary.

## The Endpoint

The AxiOwl endpoint owns local keys, trusted-device state, authorization policy, replay state, the provider registry, and the final provider handoff decision.

## The Routing Service

An XMPP routing service authenticates provisioned connections and moves protected envelopes to exact resources. An A2A service exposes declared agent capabilities and task operations. Each service stays within its selected protocol role.

## The Operator

An operator who runs network services owns domain configuration, TLS certificates, host access, firewall policy, credential rotation, service availability, and appropriate log retention.

## The Installer And Updater

The installer owns AxiOwl files and selected integrations. Signed update metadata and artifact verification help users understand the origin and intended channel of an update.

## The Shared Goal

Security works best when each boundary keeps its own authority:

- a provider login remains provider authority;
- a license remains entitlement authority;
- a device identity remains device authority;
- a routing service remains transport authority;
- a receiver policy remains action authority;
- a receipt remains evidence for the stage that produced it.

This separation gives AxiOwl a clear and durable trust model as the product expands across providers and platforms.
