---
sidebar_position: 4
---

# Inter-node Operations

## Enrollment And Inspection

The CLI provides node add, enroll, list, show, verify, disable, enable, and removal operations. Verification checks the selected transport's actual boundary, such as an A2A Agent Card or relay health endpoint.

## Failure Diagnosis

Read evidence in this order:

1. node lookup and enabled state;
2. selected transport plan;
3. required address and credential availability;
4. Agent Card or relay preflight;
5. network response;
6. remote A2A task result;
7. destination provider delivery evidence;
8. correlated provider reply.

This ordering distinguishes DNS, TLS, authentication, node routing, target discovery, provider delivery, and reply failures.

## Linux Remote Boundary

The current Linux remote package is a narrow Codex CLI deployment target. The Linux desktop tree contains labs and parked reference code, not a general released desktop product. Do not describe all Windows provider surfaces as remotely supported on Linux.

## Legacy Transports

Legacy API and legacy SSH paths remain migration tools. They are explicit modes or tightly guarded fallbacks, not the product's primary network architecture.
