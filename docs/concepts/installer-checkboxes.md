---
sidebar_position: 6
---

# Installer Checkboxes

Installer checkboxes represent provider features. They are not just labels.

## What A Checkbox Means

When checked, AxiOwl may install, configure, patch, discover, or validate that provider feature.

When unchecked, AxiOwl should leave that provider feature alone.

## Default Selection

Checkboxes should be preselected from discovery. A provider should not be checked merely because AxiOwl has code for it.

## Why This Matters

Provider installs can be invasive. Some features need extension install. Some need app shutdown. Some need patching. Users need checkboxes to mean something.

## Bad Behavior

Bad installer behavior:

- closing Codex when only Cursor is selected;
- patching VS Code when VS Code is unchecked;
- preselecting Claude CLI when Claude is not installed;
- uninstalling unchecked provider config.

## Good Behavior

Good installer behavior:

- detect providers;
- preselect only eligible providers;
- install selected features;
- log skipped features clearly;
- leave unchecked providers untouched.
