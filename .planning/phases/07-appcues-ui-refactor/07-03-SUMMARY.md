---
phase: 07-appcues-ui-refactor
plan: 03
subsystem: ui-views
tags: [dashboard-layout, sidebar-navigation, breadcrumb, heroicons]

dependency-graph:
  requires:
    - 07-02 (home view with use-case cards, navigation state)
  provides:
    - dashboard-sidebar
    - sidebar-nav-items
    - breadcrumb-navigation
    - dashboard-layout-structure
  affects:
    - 07-04 (view navigation polish, dashboard widgets)

tech-stack:
  added: []
  patterns:
    - data-driven-nav-items
    - sidebar-main-layout
    - breadcrumb-navigation

key-files:
  created: []
  modified:
    - src/content-script.js

decisions:
  - id: nav-items-data-structure
    choice: "Array of objects with id, label, icon, active properties"
    rationale: "Consistent with useCases pattern, easy to render via .map()"
  - id: sidebar-width
    choice: "240px fixed width"
    rationale: "Standard sidebar width, matches Appcues demo site"
  - id: modal-content-padding
    choice: "Removed padding, let views handle own spacing"
    rationale: "Dashboard needs full-bleed layout, home-view has own padding"

metrics:
  duration: ~5m
  completed: 2026-01-30
---

# Phase 07 Plan 03: Dashboard View Layout Summary

**Dashboard layout with 240px left sidebar (9 nav items), header breadcrumb with Home link, and grid-based content area.**

## Performance

- **Duration:** ~5 min
- **Started:** 2026-01-30
- **Completed:** 2026-01-30
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments

- Dashboard layout with sidebar (240px) and main content area
- 9 navigation items with Heroicons: Dashboard, Reports, Tasks, Transactions, Payroll, Sales, Expenses, Support, Subscription
- Header with breadcrumb navigation (Home / [Use Case]) and "Upload my data" button
- Interactive nav items with active state toggle on click
- Breadcrumb Home link returns to Home view
- Independent scrolling for sidebar and main content

## Task Commits

Each task was committed atomically:

1. **Task 1: Create Dashboard layout structure with sidebar** - `421fd40` (feat)
2. **Task 2: Wire up navigation interactions** - `ae7d39e` (feat)

## Files Created/Modified

- `src/content-script.js` - Added navItems array, uploadIcon, dashboard CSS, updated renderDashboardView() and attachViewEventListeners()

## Technical Implementation

### Data Structure
```javascript
const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '<svg>...</svg>', active: true },
  { id: 'reports', label: 'Reports', icon: '<svg>...</svg>' },
  // ... 7 more items
];
```

### Layout Structure
```
.dashboard-view (flex, 100% height)
  .dashboard-sidebar (240px, flex-column)
    .sidebar-header
      .sidebar-logo
    .sidebar-nav
      .nav-item[data-nav="..."] (x9)
  .dashboard-main (flex: 1, column)
    .dashboard-header
      .dashboard-breadcrumb
        .breadcrumb-link[data-action="go-home"]
        .breadcrumb-separator
        .breadcrumb-current
      .dashboard-actions
        .upload-btn
    .dashboard-content
      .content-grid
```

### Event Handling
```javascript
// Breadcrumb Home link -> navigateTo('home')
// Nav item click -> toggle active class
```

## Decisions Made

1. **Modal-content padding removed** - Set to 0 so dashboard can use full-bleed layout. Home view has its own 48px 40px padding.

2. **Sidebar logo uses "D"** - Simple letter instead of icon for brand consistency with "Democues"

3. **Nav items visual-only active state** - Clicking nav items toggles visual feedback but doesn't change content (demo purposes)

## Deviations from Plan

None - plan executed exactly as written.

## Verification Results

| Check | Status |
|-------|--------|
| npm run build completes | PASS |
| Dashboard layout has sidebar (240px) and main area | PASS |
| Sidebar shows 9 navigation items with icons | PASS |
| Dashboard nav item is active by default | PASS |
| Clicking nav items updates active state visually | PASS |
| Header shows "Home / [Use Case Title]" breadcrumb | PASS |
| "Upload my data" button is visible in header | PASS |
| Clicking "Home" breadcrumb returns to Home view | PASS |
| Main content area has placeholder for widgets | PASS |

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

Foundation complete for:
- **07-04:** View navigation polish, dashboard widgets (metric cards, tasks, transactions)

The dashboard layout structure is ready. Content area has placeholder text indicating widgets will be added in the next plan.

---
*Phase: 07-appcues-ui-refactor*
*Completed: 2026-01-30*
