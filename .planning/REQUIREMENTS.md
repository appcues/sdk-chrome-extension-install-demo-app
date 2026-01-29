# Requirements: Appcues Extension Demo App

**Defined:** 2026-01-29
**Core Value:** A polished, professional-looking sidebar UI that demonstrates what a sales intelligence tool could look like

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Extension Core

- [ ] **EXT-01**: Extension installs in Chrome using Manifest v3
- [ ] **EXT-02**: Extension uses service worker (not background page)
- [ ] **EXT-03**: Clicking extension icon injects sidebar into current page
- [ ] **EXT-04**: Clicking extension icon again hides the sidebar
- [ ] **EXT-05**: Sidebar has X button in header that closes it

### Sidebar Container

- [ ] **SIDE-01**: Sidebar appears fixed on right side of viewport
- [ ] **SIDE-02**: Sidebar is approximately 400px wide
- [ ] **SIDE-03**: Sidebar overlays page content (doesn't push it)
- [ ] **SIDE-04**: Sidebar styles are isolated from host page CSS
- [ ] **SIDE-05**: Sidebar has smooth open/close animation

### UI Components

- [ ] **UI-01**: Sidebar has a header with logo/title and close button
- [ ] **UI-02**: Sidebar has search input with search icon
- [ ] **UI-03**: Sidebar has 2-3 filter dropdown controls
- [ ] **UI-04**: Sidebar displays contact cards with avatar, name, title, company
- [ ] **UI-05**: Sidebar displays data table/list with multiple contact rows
- [ ] **UI-06**: UI uses professional, clean styling (Cognism-style aesthetic)
- [ ] **UI-07**: All UI elements use static mock data

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
| EXT-01 | Phase 1 | Pending |
| EXT-02 | Phase 1 | Pending |
| EXT-03 | Phase 2 | Pending |
| EXT-04 | Phase 2 | Pending |
| EXT-05 | Phase 2 | Pending |
| SIDE-01 | Phase 3 | Pending |
| SIDE-02 | Phase 3 | Pending |
| SIDE-03 | Phase 3 | Pending |
| SIDE-04 | Phase 3 | Pending |
| SIDE-05 | Phase 3 | Pending |
| UI-01 | Phase 4 | Pending |
| UI-02 | Phase 4 | Pending |
| UI-03 | Phase 4 | Pending |
| UI-04 | Phase 5 | Pending |
| UI-05 | Phase 5 | Pending |
| UI-06 | Phase 6 | Pending |
| UI-07 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 17 total
- Mapped to phases: 17
- Unmapped: 0

---
*Requirements defined: 2026-01-29*
*Last updated: 2026-01-29 after roadmap creation*
