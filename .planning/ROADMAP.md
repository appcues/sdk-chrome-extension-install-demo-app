# Roadmap: Appcues Extension Demo App

## Overview

This roadmap delivers a polished Chrome extension sidebar that demonstrates a sales intelligence tool UI. Starting with extension infrastructure, we build the toggle mechanism, container positioning, UI components, data display, and finally apply visual polish to achieve Cognism-style aesthetics.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [x] **Phase 1: Extension Foundation** - Chrome extension that installs with Manifest v3 and service worker
- [x] **Phase 2: Toggle Behavior** - Click extension icon to show/hide sidebar
- [x] **Phase 3: Sidebar Container** - Positioned, isolated, animated sidebar shell
- [x] **Phase 4: UI Structure** - Header, search bar, and filter dropdowns
- [x] **Phase 5: Data Display** - Contact cards and data table with mock data
- [x] **Phase 6: Visual Polish** - Professional Cognism-style aesthetic
- [ ] **Phase 7: Appcues UI Refactor** - Top overlay with Home and Dashboard views

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
- [x] 02-01-PLAN.md — Content script injection, message passing, and toggle logic

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
**Plans**: 1 plan

Plans:
- [x] 03-01-PLAN.md — Shadow DOM isolation and open/close animations

### Phase 4: UI Structure
**Goal**: Sidebar has header with close button, search input, and filter controls
**Depends on**: Phase 3
**Requirements**: UI-01, UI-02, UI-03
**Success Criteria** (what must be TRUE):
  1. Sidebar displays header with logo/title and X close button
  2. Search input with search icon is visible and styled
  3. 2-3 filter dropdown controls are present and look interactive
**Plans**: 1 plan

Plans:
- [x] 04-01-PLAN.md — Header with logo, search bar, and filter dropdowns

### Phase 5: Data Display
**Goal**: Sidebar displays contact cards and data table populated with mock data
**Depends on**: Phase 4
**Requirements**: UI-04, UI-05, UI-07
**Success Criteria** (what must be TRUE):
  1. Contact cards display avatar placeholder, name, title, company
  2. Data table/list shows multiple contact rows with varied data
  3. All displayed data comes from static mock data
  4. Cards and table render correctly in the sidebar
**Plans**: 1 plan

Plans:
- [x] 05-01-PLAN.md — Contact cards, data table, and view toggle with mock data

### Phase 6: Visual Polish
**Goal**: UI achieves professional, clean Cognism-style aesthetic
**Depends on**: Phase 5
**Requirements**: UI-06
**Success Criteria** (what must be TRUE):
  1. Color scheme is professional and cohesive
  2. Typography is clean and readable
  3. Spacing and alignment are consistent throughout
  4. Overall aesthetic matches reference Cognism style
**Plans**: 1 plan

Plans:
- [x] 06-01-PLAN.md — Final styling and visual polish

### Phase 7: Appcues UI Refactor
**Goal**: Refactor extension to match Appcues demo website - top overlay menu with multiple dashboard views
**Depends on**: Phase 6
**Requirements**: APPCUES-01 through APPCUES-10
**Success Criteria** (what must be TRUE):
  1. Extension opens as top overlay/modal instead of sidebar
  2. Home view shows "Choose a use case" with 5 clickable use-case cards
  3. Dashboard view with left sidebar navigation and main content area
  4. Dashboard displays metric cards (Sales, Expenses, Payroll, Daily Sales)
  5. Sidebar navigation: Dashboard, Reports, Tasks, Transactions, Payroll, Sales, Expenses, Support, Subscription
  6. Tasks panel with 4 task items
  7. Transactions widget showing balance
  8. Visual style matches Appcues: Streamline icons, modern typography, clean card design
  9. Client-side view navigation (no real pages, just view switching)
  10. Existing client-side filters remain functional
**Plans**: 4 plans

Plans:
- [ ] 07-01-PLAN.md — Convert sidebar to centered overlay modal with view state management
- [ ] 07-02-PLAN.md — Home view with 5 use-case cards and navigation
- [ ] 07-03-PLAN.md — Dashboard layout with sidebar navigation structure
- [ ] 07-04-PLAN.md — Dashboard widgets: metric cards, tasks panel, transactions widget

**Reference:** https://democues.appcues.com/
**Views to implement:**
- Home: "Choose a use case" with 5 cards (Free Trial Conversion, User Onboarding, Product Adoption, Support, Collect User Feedback)
- Dashboard: Left sidebar + main content with metric cards, tasks, transactions, expenses panels
- Each use case navigates to dashboard view (same structure, different context label)

**UI Components:**
- Top modal/overlay (replaces sidebar)
- Use-case cards with Streamline SVG icons
- Collapsible sidebar navigation with sub-items
- Metric cards (4-column grid) with percentage indicators
- Tasks list panel
- Transactions widget
- Expenses/Mileage sections
- "Upload my data" toggle button

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Extension Foundation | 1/1 | Complete | 2026-01-29 |
| 2. Toggle Behavior | 1/1 | Complete | 2026-01-29 |
| 3. Sidebar Container | 1/1 | Complete | 2026-01-29 |
| 4. UI Structure | 1/1 | Complete | 2026-01-29 |
| 5. Data Display | 1/1 | Complete | 2026-01-29 |
| 6. Visual Polish | 1/1 | Complete | 2026-01-29 |
| 7. Appcues UI Refactor | 0/4 | Not Started | - |

---
*Roadmap created: 2026-01-29*
*Last updated: 2026-01-30 - Phase 7 planned with 4 plans*
