---
phase: 07-appcues-ui-refactor
plan: 02
subsystem: ui-views
tags: [home-view, use-case-cards, navigation, view-routing]

dependency-graph:
  requires:
    - 07-01 (modal overlay foundation, view state system)
  provides:
    - home-view-ui
    - use-case-cards
    - card-to-dashboard-navigation
    - back-navigation
  affects:
    - 07-03 (dashboard view implementation)
    - 07-04 (view navigation polish)

tech-stack:
  added: []
  patterns:
    - data-driven-cards
    - event-delegation-for-views
    - state-driven-navigation

key-files:
  created: []
  modified:
    - src/content-script.js

decisions:
  - id: use-case-data-structure
    choice: "Array of objects with id, title, description, icon (SVG string)"
    rationale: "Simple, declarative structure for rendering cards"
  - id: card-icons
    choice: "Heroicons SVG inline in data"
    rationale: "No external dependencies, consistent styling"
  - id: selected-usecase-tracking
    choice: "Module-scope selectedUseCase variable"
    rationale: "Simple state for prototype, dashboard can read which use case"

metrics:
  duration: ~2m
  completed: 2026-01-30
---

# Phase 07 Plan 02: Home View with Use-Case Cards Summary

Home view implementation with 5 clickable use-case cards and navigation to dashboard placeholder.

## What Was Built

### Task 1: Create Home view UI with use-case cards
**Commit:** `7300af5`

Implemented the full Home view with use-case cards:
- Added `useCases` data array at module scope with 5 use cases:
  1. Free Trial Conversion
  2. User Onboarding
  3. Product Adoption
  4. Support
  5. Collect User Feedback
- Each use case has id, title, description, and Heroicon SVG
- Implemented `renderHomeView()` with responsive grid layout
- Added comprehensive CSS for home view components

**Key CSS additions:**
```css
.home-view { padding: 48px 40px; flex-direction: column; align-items: center; }
.use-cases-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
.use-case-card:hover { border-color: #6366F1; box-shadow: ...; transform: translateY(-2px); }
```

### Task 2: Wire up card navigation to dashboard
**Commit:** `7cf8da6`

Implemented navigation between Home and Dashboard views:
- Added `selectedUseCase` state variable to track user selection
- Updated `attachViewEventListeners()` with card click handlers
- Cards set `selectedUseCase` and navigate to dashboard on click
- Updated `renderDashboardView()` to show selected use case title
- Added "Back to Home" button with navigation handler
- Added CSS for dashboard placeholder and back button

**Key implementation:**
```javascript
function attachViewEventListeners() {
  if (currentView === 'home') {
    cards.forEach(card => {
      card.addEventListener('click', () => {
        selectedUseCase = card.dataset.usecase;
        navigateTo('dashboard');
      });
    });
  } else if (currentView === 'dashboard') {
    backBtn.addEventListener('click', () => navigateTo('home'));
  }
}
```

## Technical Implementation

### Data Structure
```javascript
const useCases = [
  { id: 'free-trial', title: 'Free Trial Conversion', description: '...', icon: '<svg>...</svg>' },
  // ... 4 more use cases
];
```

### State Flow
```
Home View (cards) --> click card --> selectedUseCase = id --> navigateTo('dashboard')
Dashboard View --> click "Back to Home" --> navigateTo('home')
```

### DOM Structure
```
.modal-content
  .home-view (when currentView === 'home')
    .home-heading
    .home-subheading
    .use-cases-grid
      .use-case-card[data-usecase="free-trial"]
      .use-case-card[data-usecase="onboarding"]
      ...

  .dashboard-view (when currentView === 'dashboard')
    .dashboard-placeholder
      .dashboard-placeholder-title (shows selected use case)
      .dashboard-placeholder-subtitle
      .back-to-home-btn
```

## Deviations from Plan

None - plan executed exactly as written.

## Verification Results

| Check | Status |
|-------|--------|
| npm run build completes | PASS |
| Home view shows "Choose a use case" heading | PASS |
| 5 use-case cards displayed | PASS |
| Each card has icon, title, description | PASS |
| Cards have hover effects | PASS |
| Clicking card navigates to dashboard | PASS |
| Dashboard shows selected use case | PASS |
| Back button returns to home | PASS |

## Decisions Made

1. **Heroicons for card icons** - Used Heroicons SVG inline in data array for consistent styling without external dependencies

2. **Data-driven card rendering** - Cards rendered from `useCases` array using `.map().join('')` for maintainability

3. **Module-scope state** - `selectedUseCase` stored at module scope for simplicity, accessible by dashboard render function

## Next Phase Readiness

Foundation complete for:
- **07-03:** Dashboard view implementation with sidebar nav, metrics, tasks, transactions
- **07-04:** View navigation polish and routing

The home view and basic navigation are functional. Dashboard placeholder shows which use case was selected, ready for full dashboard UI implementation.
