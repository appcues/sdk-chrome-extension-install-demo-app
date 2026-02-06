# Appcues Extension Demo App

A Chrome extension demonstrating Appcues SDK integration. This codebase serves as a reference implementation for customers learning to integrate Appcues into their web applications.

## Quick Start

```bash
npm install
npm run build    # Outputs to dist/content-script.js
```

Load the extension in Chrome at `chrome://extensions` (enable Developer mode, click "Load unpacked", select project root).

## Architecture Overview

The codebase follows a modular structure where `src/content-script.js` is the clean entry point (~37 lines) that customers should read first.

```
src/
├── content-script.js    # Entry point - READ FIRST
├── appcues/             # Appcues SDK integration
├── data/                # Static data (navigation, metrics, tasks, etc.)
├── icons/               # SVG icon definitions
├── views/               # UI rendering functions
├── overlay/             # Overlay state and DOM management
└── styles/              # CSS-in-JS style modules
```

## Module Reference

### `src/appcues/` - SDK Integration
The customer-facing module showing how to integrate Appcues.

| File | Purpose |
|------|---------|
| `config.js` | `APPCUES_ACCOUNT_ID` and `DEFAULT_USER` configuration |
| `index.js` | `initAppcues()`, `trackEvent()`, `updateUserProperties()` |

### `src/data/` - Static Data
Mock data for the demo UI. Each file exports a single data structure.

| File | Export | Description |
|------|--------|-------------|
| `navigation.js` | `navItems` | 9 sidebar navigation items with icons |
| `metrics.js` | `dashboardMetrics` | 4 KPI cards (sales, expenses, payroll, daily sales) |
| `tasks.js` | `mockTasks` | 4 task items with priority levels |
| `transactions.js` | `mockTransactions` | 3 transaction records |
| `use-cases.js` | `useCases` | 5 use-case cards for home view |
| `index.js` | Re-exports all above |

### `src/icons/` - SVG Icons
All SVG icon strings exported as constants.

| Export | Description |
|--------|-------------|
| `uploadIcon` | Upload button icon |
| `metricIcons` | Object with `sales`, `expenses`, `payroll`, `dailySales` |
| `trendUpIcon`, `trendDownIcon` | Change indicator arrows |
| `checkIcon` | Task completion checkmark |
| `transactionIcons` | Object with `income`, `expense`, `software` |

### `src/views/` - UI Rendering
Pure functions that return HTML strings.

| File | Function | Description |
|------|----------|-------------|
| `home.js` | `renderHomeView()` | Use-case selection grid |
| `dashboard.js` | `renderDashboardView(selectedUseCase)` | Full dashboard with sidebar |
| `widgets/metrics-row.js` | `renderMetricsRow()` | 4-card metrics grid |
| `widgets/tasks-panel.js` | `renderTasksPanel()` | Task list widget |
| `widgets/transactions.js` | `renderTransactionsWidget()` | Transaction list widget |

### `src/overlay/` - Overlay Management
Handles Shadow DOM creation, state, and event handling.

| File | Exports | Description |
|------|---------|-------------|
| `index.js` | `showOverlay()`, `hideOverlay()`, `toggleOverlay()` | Main overlay controls |
| `shadow-dom.js` | `createOverlayHost(hideOverlay)` | Creates Shadow DOM structure |
| `events.js` | `navigateTo()`, `attachViewEventListeners()` | View navigation and click handlers |

### `src/styles/` - CSS Modules
CSS-in-JS modules exporting style strings.

| File | Export | Description |
|------|--------|-------------|
| `base.css.js` | `baseStyles` | Reset and box-sizing |
| `modal.css.js` | `modalStyles` | Modal container, header, close button |
| `home.css.js` | `homeStyles` | Home view and use-case cards |
| `dashboard.css.js` | `dashboardStyles` | Dashboard layout, sidebar, breadcrumbs |
| `widgets.css.js` | `widgetsStyles` | Metrics, tasks, transactions styling |
| `index.js` | `getAllStyles()` | Combines all styles |

## Data Flow

```
content-script.js
    │
    ├─► initAppcues()          # Initialize SDK
    │
    └─► chrome.runtime.onMessage
            │
            └─► toggleOverlay()
                    │
                    ├─► createOverlayHost()   # Creates Shadow DOM
                    │       └─► getAllStyles()
                    │
                    └─► renderCurrentView()
                            │
                            ├─► renderHomeView()
                            │       └─► useCases data
                            │
                            └─► renderDashboardView()
                                    ├─► navItems data
                                    ├─► renderMetricsRow()
                                    ├─► renderTasksPanel()
                                    └─► renderTransactionsWidget()
```

## View State

The overlay maintains two pieces of state in `src/overlay/index.js`:
- `currentView`: `'home'` or `'dashboard'`
- `selectedUseCase`: ID of the selected use-case card (e.g., `'onboarding'`)

Navigation happens via `navigateTo(view, state, renderCurrentView)` in `events.js`.

## Common Tasks

**Add a new use case card**: Edit `src/data/use-cases.js`

**Add a new dashboard metric**: Edit `src/data/metrics.js` (and add icon to `src/icons/index.js` if needed)

**Modify Appcues user properties**: Edit `DEFAULT_USER` in `src/appcues/config.js`

**Change sidebar width**: Edit `.modal` width in `src/styles/modal.css.js`

**Add a new view**:
1. Create `src/views/newview.js` with `renderNewView()` function
2. Add to `VALID_VIEWS` in `src/overlay/events.js`
3. Add render case in `renderCurrentView()` in `src/overlay/index.js`

## Build Output

The build bundles everything into a single IIFE at `dist/content-script.js` (~930KB, includes Appcues SDK).
