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

## Final observed publication

The final code commit is 15f2d8020d64a4fb0bc182aacabbd2d46b3e1f3a, preserved
on remote main and built as 15f2d8020d64a4fb0bc182aacabbd2d46b3e1f3a-20261101T235226Z.
Three focused embedded builds passed in the existing Node 22 container with
network disabled, no dependency installation and bounded CPU/memory. No native
application build or provider test was performed.

The website's tracked atomic publisher selected this build and retained 110 old
hashed assets. The separate website issue record documents metadata, Apache
static delivery, typography and selector fixes. Public search has 46 actual
guides; the sitemap has 47 URLs including the landing page. The timeout query
returned seven guides, and send returned 33 with More results increasing the
rendered list from eight to sixteen. Search links and the mobile browse control
opened the intended guides. The vertical diagram loaded without horizontal page
overflow at a measured 389x843 CSS-pixel viewport. Website-scoped title/body sizes
were 32px/16px on mobile and the desktop title was 44px at 1280x913.

The initial title/description/canonical and image delivery defects were corrected
by the companion bridge change. The inspected browser had a single title and
social-title tag and returned no captured console warnings/errors. Actual final
desktop/mobile screenshots and public route results are retained in the
controller's output/docs-refresh-20261101 directory. These observations do not
qualify provider compatibility, all browsers/OSes/palettes or current native
installer behavior. Existing product claims retain their stated scope.
Final HEAD readback after publication returned 200 for all 46 indexed guides.

The server checkout lacked GitHub push credentials; source commits were pushed
through the controller's existing authenticated Git workflow using a bare bundle
transfer. No new credential, access grant, branch or second Git working checkout
was created. Temporary edit staging held selected files only; the canonical
docs Git source remains on the website node.
