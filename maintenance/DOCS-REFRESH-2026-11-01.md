# Documentation refresh and delivery repairs

## Evidence and scope

The owner requested the best combination of the new eighteen Messaging guides
and the existing Docusaurus documentation. Production used docs commit 7f9ab26
from October 6. Main subsequently included the new guides at b0af719; the server
checkout was clean and fast-forwarded to preserve that work. No provider calls,
native application builds, account changes or installations are in this scope.

The old bridge discarded generated head metadata, returned no docs sitemap,
and exposed assets only through the current build. The public IDE page initially
had title AxiOwl/social title Untitled. Its preview image and docs sitemap returned
404. The website sitemap contained only the docs homepage. Retained older JS
was no longer publicly addressable. Mobile navigation occupied a large scrolling
panel and a decorative fixed owl overlaid the reading area.

## Changes and compatibility

Preserve existing document slugs and all IDE, Mobile, Usage Meter and family
guides. Reuse the imported eighteen-guide Messaging structure, retain precise
Claude Desktop Code scope and provider/Windows-feature reference detail. Keep
explicit Send separate from task completion and any later authorized message.
Add guide search from actual Docusaurus metadata and published Markdown text
with no external search service or account data, and a compact mobile browse control. Search failure
is visible, not replaced with invented results. Keep the existing site palette.

The website-owned companion repair supplies generated route metadata, safe
static sitemap/images/search delivery, normalized public URLs, valid skip target,
and non-obstructing mobile decoration. Publication retains old hashed assets
for older pages; no external build dependencies or new services are installed.
Browser delivery is shared by Windows/macOS/Linux/phone readers; native product
adapters, credentials, releases and WebView2 packaging are untouched.

## Sources actually read

- Owner's supplied current instructions and explicit Send contract.
- All eighteen new Markdown guides, index and diagram in the November 1 export.
- Existing deployed docs, sidebars.js, README and build manifest.
- src/embedded profile, plugin, manifest, CSS scoping and chrome helpers;
  DocSidebar, TOCItems, Layout provider, homepage and embedded CSS.
- Installed plugin-content-docs LoadedVersion/DocMetadata types and lifecycle.
- Website bridge PHP classes, template, Apache configuration and production CSS.
- Installed SEO Framework meta-render filter definition.

## Actual results

Implementation/publication observations will be recorded after the focused docs
build and public browser readback. No native provider compatibility is claimed.

The first documentation-only build passed in the already-installed Node 22
container, with no network or dependency installation. Public initial metadata,
new Messaging pages, other product guides and the retained older script worked.
The website's exact sitemap/search alias permission required a follow-up repair.
Title/summary search returned the SSH guide, but a body-only query such as timeout
returned no matches. The follow-up indexes actual public Markdown as well, ranks
title/summary matches first, exposes more results, and versions the fetch URL by
source commit so an older cached index does not hide newly published content.

The embedded search component is explicitly gated by the existing embedded
profile. Standalone/dev does not request a post-build-only website index, and
standalone compilation does not acquire a new Git-HEAD requirement from the
search version token. No additional standalone build is claimed here.
