# Roadmap: Appcues Extension Demo App

## Overview

This roadmap delivers a polished Chrome extension sidebar that demonstrates a sales intelligence tool UI. Starting with extension infrastructure, we build the toggle mechanism, container positioning, UI components, data display, and finally apply visual polish to achieve Cognism-style aesthetics.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [x] **Phase 1: Extension Foundation** - Chrome extension that installs with Manifest v3 and service worker
- [ ] **Phase 2: Toggle Behavior** - Click extension icon to show/hide sidebar
- [ ] **Phase 3: Sidebar Container** - Positioned, isolated, animated sidebar shell
- [ ] **Phase 4: UI Structure** - Header, search bar, and filter dropdowns
- [ ] **Phase 5: Data Display** - Contact cards and data table with mock data
- [ ] **Phase 6: Visual Polish** - Professional Cognism-style aesthetic

## Phase Details

### Phase 1: Extension Foundation
**Goal**: Extension installs in Chrome and is ready for content script injection
**Depends on**: Nothing (first phase)
**Requirements**: EXT-01, EXT-02
**Success Criteria** (what must be TRUE):
  1. Extension loads in Chrome via chrome://extensions in developer mode
  2. Extension icon appears in Chrome toolbar
  3. Service worker runs without errors (no background page)
**Plans**: 1 plan

Plans:
- [x] 01-01-PLAN.md — Manifest v3 setup, service worker, and icons

### Phase 2: Toggle Behavior
**Goal**: User can show and hide the sidebar by clicking extension icon or X button
**Depends on**: Phase 1
**Requirements**: EXT-03, EXT-04, EXT-05
**Success Criteria** (what must be TRUE):
  1. Clicking extension icon injects sidebar into current page
  2. Clicking extension icon again hides the sidebar
  3. Clicking X button in sidebar header closes the sidebar
  4. Toggle works correctly on any webpage
**Plans**: 1 plan

Plans:
- [ ] 02-01-PLAN.md — Content script injection, message passing, and toggle logic

### Phase 3: Sidebar Container
**Goal**: Sidebar appears as a fixed overlay on the right side with proper positioning and style isolation
**Depends on**: Phase 2
**Requirements**: SIDE-01, SIDE-02, SIDE-03, SIDE-04, SIDE-05
**Success Criteria** (what must be TRUE):
  1. Sidebar appears fixed on right side of viewport
  2. Sidebar is approximately 400px wide
  3. Sidebar overlays page content without pushing it
  4. Host page CSS does not affect sidebar appearance
  5. Sidebar has smooth open/close animation
**Plans**: TBD

Plans:
- [ ] 03-01: React mount point and Shadow DOM isolation
- [ ] 03-02: Positioning and animation

### Phase 4: UI Structure
**Goal**: Sidebar has header with close button, search input, and filter controls
**Depends on**: Phase 3
**Requirements**: UI-01, UI-02, UI-03
**Success Criteria** (what must be TRUE):
  1. Sidebar displays header with logo/title and X close button
  2. Search input with search icon is visible and styled
  3. 2-3 filter dropdown controls are present and look interactive
**Plans**: TBD

Plans:
- [ ] 04-01: Header component with close button
- [ ] 04-02: Search and filter components

### Phase 5: Data Display
**Goal**: Sidebar displays contact cards and data table populated with mock data
**Depends on**: Phase 4
**Requirements**: UI-04, UI-05, UI-07
**Success Criteria** (what must be TRUE):
  1. Contact cards display avatar placeholder, name, title, company
  2. Data table/list shows multiple contact rows with varied data
  3. All displayed data comes from static mock data
  4. Cards and table render correctly in the sidebar
**Plans**: TBD

Plans:
- [ ] 05-01: Contact card component with mock data
- [ ] 05-02: Data table component with mock data

### Phase 6: Visual Polish
**Goal**: UI achieves professional, clean Cognism-style aesthetic
**Depends on**: Phase 5
**Requirements**: UI-06
**Success Criteria** (what must be TRUE):
  1. Color scheme is professional and cohesive
  2. Typography is clean and readable
  3. Spacing and alignment are consistent throughout
  4. Overall aesthetic matches reference Cognism style
**Plans**: TBD

Plans:
- [ ] 06-01: Final styling and polish pass

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Extension Foundation | 1/1 | Complete | 2026-01-29 |
| 2. Toggle Behavior | 0/1 | Not started | - |
| 3. Sidebar Container | 0/2 | Not started | - |
| 4. UI Structure | 0/2 | Not started | - |
| 5. Data Display | 0/2 | Not started | - |
| 6. Visual Polish | 0/1 | Not started | - |

---
*Roadmap created: 2026-01-29*
*Last updated: 2026-01-29 after Phase 2 planning*
