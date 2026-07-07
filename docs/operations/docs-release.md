---
sidebar_position: 3
---

# Docs Release

The Docusaurus docs site is published with GitHub Pages.

## Local Build

Run:

```powershell
npm run build
```

The build must pass before pushing.

## GitHub Pages

The Pages workflow builds and deploys the `build` output on pushes to `main`.

Live site:

```text
https://morganross.github.io/AxiOwl/
```

## Docs Rules

- Put current product truth in `docs/reference`.
- Put beginner explanations in `docs/getting-started` and `docs/concepts`.
- Put provider-specific details in `docs/providers`.
- Put diagnosis instructions in `docs/troubleshooting` and `docs/support`.
- Do not publish historical reports as current docs unless clearly marked historical.

## After Push

Check:

- GitHub Actions workflow passed;
- live URL returns HTTP 200;
- changed page contains expected new content;
- no stale product names or demo Docusaurus text appear.
