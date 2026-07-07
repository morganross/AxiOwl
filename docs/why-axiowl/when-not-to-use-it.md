---
sidebar_position: 5
---

# When Not To Use AxiOwl

AxiOwl is useful, but it is not the right tool for every situation.

## Do Not Use It If You Only Need One Chat

If you use one AI provider in one window and never need another session to respond, AxiOwl may be unnecessary.

## Do Not Use It If You Want Zero Local Integration

AxiOwl works by installing local runtime files and selected provider integrations. Some providers need MCP config, extensions, or patches. If you do not want local integration, AxiOwl is not the right fit.

## Do Not Use Unsupported Surfaces As If They Are Supported

If the provider matrix says a surface is `target` or `unsupported`, do not depend on it for important work. Target means “we want this” or “part of this exists,” not “this is ready.”

## Do Not Use It To Hide Provider Failures

Remote routing or fallback paths should not make local provider failures look successful. If Cursor delivery fails, the correct response is to diagnose Cursor delivery, not hide it behind another path.

## Do Use It When Coordination Matters

AxiOwl is worth using when you care about:

- multiple provider sessions;
- explicit message routing;
- provider replies;
- local logs;
- repeatable tests;
- knowing which session actually responded.

That is the core use case.
