# Appcues Extension Demo App

## What This Is

A Chrome extension (Manifest v3) that injects a sidebar overlay on web pages when the user clicks the extension icon. The sidebar displays a static, Cognism-style UI with contact cards, data tables, and search/filter elements. This is a visual demo — the UI looks functional but doesn't connect to real data or services.

## Core Value

A polished, professional-looking sidebar UI that demonstrates what a sales intelligence tool could look like — visual fidelity is everything.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Extension installs in Chrome via Manifest v3
- [ ] Clicking extension icon injects sidebar on current page
- [ ] Clicking extension icon again (or X button) hides sidebar
- [ ] Sidebar appears on right side of page (~400px wide)
- [ ] Sidebar has search bar and filter dropdowns
- [ ] Sidebar displays contact cards with name, title, company, photo placeholder
- [ ] Sidebar displays data table/list with multiple contact rows
- [ ] UI looks professional and polished (Cognism-style aesthetic)

### Out of Scope

- Real data fetching or API integration — static mock data only
- LinkedIn or any website-specific integrations
- User authentication or accounts
- CRM exports or data sync
- Backend services

## Context

**Reference UI:** Cognism Chrome Extension — a sales intelligence sidebar that overlays on LinkedIn and company websites. Known for clean, data-rich UI with contact info, filters, and professional styling.

**Tech stack chosen:**
- React for component-based UI
- Tailwind CSS for styling
- Chrome Extension Manifest v3

**Injection approach:** Content script injects a container div, React app mounts into it. Sidebar overlays page content (doesn't push it).

## Constraints

- **Browser API**: Must use Manifest v3 (service workers, no background pages)
- **Styling isolation**: Sidebar CSS must not leak into host page or be affected by it
- **Scope**: Static UI only — no real functionality beyond show/hide

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| React + Tailwind | Modern DX, component reuse, fast styling | — Pending |
| Right-side sidebar | Standard pattern for overlay tools | — Pending |
| ~400px width | Balances content space with page visibility | — Pending |
| Static mock data | Demo purposes only, keeps scope minimal | — Pending |

---
*Last updated: 2026-01-29 after initialization*
