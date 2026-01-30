# Requirements: Appcues Extension Demo App

**Defined:** 2026-01-29
**Core Value:** A polished, professional-looking sidebar UI that demonstrates what a sales intelligence tool could look like

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Extension Core

- [x] **EXT-01**: Extension installs in Chrome using Manifest v3
- [x] **EXT-02**: Extension uses service worker (not background page)
- [x] **EXT-03**: Clicking extension icon injects sidebar into current page
- [x] **EXT-04**: Clicking extension icon again hides the sidebar
- [x] **EXT-05**: Sidebar has X button in header that closes it

### Sidebar Container

- [x] **SIDE-01**: Sidebar appears fixed on right side of viewport
- [x] **SIDE-02**: Sidebar is approximately 400px wide
- [x] **SIDE-03**: Sidebar overlays page content (doesn't push it)
- [x] **SIDE-04**: Sidebar styles are isolated from host page CSS
- [x] **SIDE-05**: Sidebar has smooth open/close animation

### UI Components

- [x] **UI-01**: Sidebar has a header with logo/title and close button
- [x] **UI-02**: Sidebar has search input with search icon
- [x] **UI-03**: Sidebar has 2-3 filter dropdown controls
- [x] **UI-04**: Sidebar displays contact cards with avatar, name, title, company
- [x] **UI-05**: Sidebar displays data table/list with multiple contact rows
- [x] **UI-06**: UI uses professional, clean styling (Cognism-style aesthetic)
- [x] **UI-07**: All UI elements use static mock data

### Appcues UI (Phase 7)

- [x] **APPCUES-01**: Extension opens as top overlay/modal instead of sidebar
- [x] **APPCUES-02**: Home view shows "Choose a use case" with 5 clickable use-case cards
- [x] **APPCUES-03**: Dashboard view with left sidebar navigation and main content area
- [x] **APPCUES-04**: Dashboard displays metric cards (Sales, Expenses, Payroll, Daily Sales)
- [x] **APPCUES-05**: Sidebar navigation includes all 9 required items
- [x] **APPCUES-06**: Tasks panel with 4 task items
- [x] **APPCUES-07**: Transactions widget showing balance
- [x] **APPCUES-08**: Visual style matches Appcues: modern icons, typography, clean cards
- [x] **APPCUES-09**: Client-side view navigation (state-based, no real pages)
- [x] **APPCUES-10**: Old sidebar UI replaced by Appcues-style UI

### Sidebar Layout (Phase 8)

- [x] **LAYOUT-01**: Extension opens as fixed right-side sidebar instead of centered modal
- [x] **LAYOUT-02**: Sidebar width is 600px
- [x] **LAYOUT-03**: Sidebar overlays page content without pushing it
- [x] **LAYOUT-04**: All Appcues-style UI (Home view, Dashboard view, widgets) is preserved
- [x] **LAYOUT-05**: Smooth open/close slide animation from right side

## v2 Requirements

Deferred to future release. Not in current roadmap.

- **FUNC-01**: Real data fetching from API
- **FUNC-02**: LinkedIn page detection and context awareness
- **FUNC-03**: Export functionality
- **FUNC-04**: User authentication

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Real API integration | Static demo only, keeps scope minimal |
| LinkedIn/site-specific features | Not needed for UI demo |
| User accounts/auth | Not needed for UI demo |
| Data persistence | Static mock data sufficient |
| Backend services | Frontend-only demo |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| EXT-01 | Phase 1 | Complete |
| EXT-02 | Phase 1 | Complete |
| EXT-03 | Phase 2 | Complete |
| EXT-04 | Phase 2 | Complete |
| EXT-05 | Phase 2 | Complete |
| SIDE-01 | Phase 3 | Complete |
| SIDE-02 | Phase 3 | Complete |
| SIDE-03 | Phase 3 | Complete |
| SIDE-04 | Phase 3 | Complete |
| SIDE-05 | Phase 3 | Complete |
| UI-01 | Phase 4 | Complete |
| UI-02 | Phase 4 | Complete |
| UI-03 | Phase 4 | Complete |
| UI-04 | Phase 5 | Complete |
| UI-05 | Phase 5 | Complete |
| UI-06 | Phase 6 | Complete |
| UI-07 | Phase 5 | Complete |
| APPCUES-01 | Phase 7 | Complete |
| APPCUES-02 | Phase 7 | Complete |
| APPCUES-03 | Phase 7 | Complete |
| APPCUES-04 | Phase 7 | Complete |
| APPCUES-05 | Phase 7 | Complete |
| APPCUES-06 | Phase 7 | Complete |
| APPCUES-07 | Phase 7 | Complete |
| APPCUES-08 | Phase 7 | Complete |
| APPCUES-09 | Phase 7 | Complete |
| APPCUES-10 | Phase 7 | Complete |
| LAYOUT-01 | Phase 8 | Complete |
| LAYOUT-02 | Phase 8 | Complete |
| LAYOUT-03 | Phase 8 | Complete |
| LAYOUT-04 | Phase 8 | Complete |
| LAYOUT-05 | Phase 8 | Complete |

**Coverage:**
- v1 requirements: 32 total
- Mapped to phases: 32
- Unmapped: 0

---
*Requirements defined: 2026-01-29*
*Last updated: 2026-01-30 - MILESTONE COMPLETE - All 32 requirements satisfied*
