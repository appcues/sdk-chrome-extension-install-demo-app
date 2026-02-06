/**
 * Sidebar iframe entry point
 *
 * This script runs inside the chrome-extension:// iframe.
 * It renders the UI and communicates with the content script
 * via postMessage for actions like closing the sidebar.
 */

import { getAllStyles } from './styles/index.js';
import { renderHomeView, renderDashboardView } from './views/index.js';
import { VALID_VIEWS, attachViewEventListeners } from './overlay/events.js';

// View state
const state = {
  currentView: 'home',
  selectedUseCase: null
};

let modalElement = null;

/**
 * Renders the current view into the modal content area
 */
function renderCurrentView() {
  const contentArea = document.querySelector('.modal-content');
  if (!contentArea) return;

  if (state.currentView === 'home') {
    contentArea.innerHTML = renderHomeView();
  } else if (state.currentView === 'dashboard') {
    contentArea.innerHTML = renderDashboardView(state.selectedUseCase);
  }

  const navigateToFn = (view) => {
    if (!VALID_VIEWS.includes(view)) {
      console.warn(`Democues: Invalid view "${view}", defaulting to home`);
      view = 'home';
    }
    state.currentView = view;
    renderCurrentView();
  };

  attachViewEventListeners(document, state, navigateToFn);
}

/**
 * Builds the modal DOM structure inside #app
 */
function init() {
  const app = document.getElementById('app');

  // Inject styles
  const style = document.createElement('style');
  style.textContent = getAllStyles();
  document.head.appendChild(style);

  // Create modal structure
  const modal = document.createElement('div');
  modal.className = 'modal open';
  modalElement = modal;

  // Modal Header
  const header = document.createElement('div');
  header.className = 'modal-header';

  const headerLeft = document.createElement('div');
  headerLeft.className = 'header-left';

  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.51 43.6"><path fill="#c3d7ff" d="M34.2,34.1h0c-5.2,5.2-13.7,5.2-18.8,0L3.9,22.7C-1.3,17.5-1.3,9.1,3.9,3.9h0c5.2-5.2,13.7-5.2,18.8,0l11.5,11.5c5.2,5.1,5.2,13.5,0,18.7Z"/><path fill="#2d71ff" d="M45.6,3.9h0c-5.2-5.2-13.7-5.2-18.8,0l-12,11.9c-4.2,4.2-5.2,10.6-2.3,15.5h0l2.3,2.3,1.1,1.1,8.9,8.9.5-.5,8.4-8.4,3.5-3.5,8.5-8.5c5.1-5.2,5.1-13.6-.1-18.8Z"/></svg>`;

  const headerTitle = document.createElement('div');
  headerTitle.className = 'header-title';

  const title = document.createElement('span');
  title.className = 'title';
  title.textContent = 'Democues';

  headerTitle.appendChild(title);
  headerLeft.appendChild(logo);
  headerLeft.appendChild(headerTitle);

  const closeButton = document.createElement('button');
  closeButton.className = 'close-btn';
  closeButton.setAttribute('aria-label', 'Close overlay');
  closeButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  closeButton.addEventListener('click', () => {
    window.parent.postMessage({ type: 'close-sidebar' }, '*');
  });

  header.appendChild(headerLeft);
  header.appendChild(closeButton);

  // Modal Content Area
  const content = document.createElement('div');
  content.className = 'modal-content';

  // Assemble modal
  modal.appendChild(header);
  modal.appendChild(content);
  app.appendChild(modal);

  // Render initial view
  renderCurrentView();
}

// Listen for messages from content script
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'show') {
    state.currentView = 'home';
    state.selectedUseCase = null;
    renderCurrentView();
  }
});

// Initialize when DOM is ready
init();
