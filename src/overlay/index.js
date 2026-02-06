// Overlay module - main entry point for overlay functionality

import { createOverlayHost } from './shadow-dom.js';
import { navigateTo, attachViewEventListeners } from './events.js';
import { renderHomeView, renderDashboardView } from '../views/index.js';

// State variables
let overlayVisible = false;
let hostElement = null;
let modalElement = null;
let shadowRootRef = null;

// View state
let state = {
  currentView: 'home',
  selectedUseCase: null
};

/**
 * Renders the current view into the modal content area
 */
function renderCurrentView() {
  if (!shadowRootRef) return;
  const contentArea = shadowRootRef.querySelector('.modal-content');
  if (!contentArea) return;

  if (state.currentView === 'home') {
    contentArea.innerHTML = renderHomeView();
  } else if (state.currentView === 'dashboard') {
    contentArea.innerHTML = renderDashboardView(state.selectedUseCase);
  }

  // Bind navigateTo with current state and render function
  const navigateToFn = (view) => navigateTo(view, state, renderCurrentView);
  attachViewEventListeners(shadowRootRef, state, navigateToFn);
}

/**
 * Shows the overlay with slide-in animation
 */
export function showOverlay() {
  if (!hostElement) {
    const result = createOverlayHost(hideOverlay);
    hostElement = result.host;
    shadowRootRef = result.shadowRoot;
    modalElement = result.modal;
  }
  document.body.appendChild(hostElement);

  // Reset view to home when opening
  state.currentView = 'home';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      modalElement.classList.add('open');
      renderCurrentView();
    });
  });

  overlayVisible = true;
  console.log('Democues: Overlay shown');
}

/**
 * Hides the overlay with slide-out animation
 */
export function hideOverlay() {
  if (modalElement) {
    modalElement.classList.remove('open');

    setTimeout(() => {
      if (hostElement && hostElement.parentNode) {
        hostElement.parentNode.removeChild(hostElement);
      }
      hostElement = null;
      modalElement = null;
      shadowRootRef = null;
    }, 300);
  }
  overlayVisible = false;
  console.log('Democues: Overlay hidden');
}

/**
 * Toggles overlay visibility
 */
export function toggleOverlay() {
  if (overlayVisible) {
    hideOverlay();
  } else {
    showOverlay();
  }
}
