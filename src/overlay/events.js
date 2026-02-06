// Event handling for overlay views
import { experiences } from '../appcues/experiences.js';

function showExperience(experienceId) {
  if (window.Appcues) {
    window.Appcues.show(experienceId);
  } else {
    window.parent.postMessage({ type: 'show-experience', experienceId }, '*');
  }
}

function trackEvent(eventName) {
  if (window.Appcues) {
    window.Appcues.track(eventName);
  } else {
    window.parent.postMessage({ type: 'track-event', event: eventName }, '*');
  }
}

/**
 * Valid view names for the application
 */
export const VALID_VIEWS = ['home', 'dashboard'];

/**
 * Navigates to a specific view
 * @param {string} view - The view to navigate to ('home' | 'dashboard')
 * @param {Object} state - The overlay state object
 * @param {Function} renderCurrentView - Function to render the current view
 */
export function navigateTo(view, state, renderCurrentView) {
  if (!VALID_VIEWS.includes(view)) {
    console.warn(`Democues: Invalid view "${view}", defaulting to home`);
    view = 'home';
  }
  state.currentView = view;
  renderCurrentView();
}

/**
 * Attaches event listeners for the current view
 * @param {ShadowRoot} shadowRoot - The shadow root reference
 * @param {Object} state - The overlay state object
 * @param {Function} navigateToFn - Bound navigateTo function
 */
export function attachViewEventListeners(shadowRoot, state, navigateToFn) {
  if (state.currentView === 'home') {
    const cards = shadowRoot.querySelectorAll('.use-case-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const useCaseId = card.dataset.usecase;
        state.selectedUseCase = useCaseId;

        const entry = experiences[useCaseId];
        if (entry?.type === 'track') {
          trackEvent(entry.event);
        } else if (typeof entry === 'string') {
          showExperience(entry);
        }

        navigateToFn('dashboard');
      });
    });
  } else if (state.currentView === 'dashboard') {
    // Breadcrumb "Home" link
    const homeLink = shadowRoot.querySelector('[data-action="go-home"]');
    if (homeLink) {
      homeLink.addEventListener('click', () => navigateToFn('home'));
    }

    // Sidebar nav items (visual feedback - active state toggle)
    const navItemElements = shadowRoot.querySelectorAll('.nav-item');
    navItemElements.forEach(item => {
      item.addEventListener('click', () => {
        // Remove active from all, add to clicked
        navItemElements.forEach(n => n.classList.remove('active'));
        item.classList.add('active');

        if (item.dataset.nav === 'expenses') {
          showExperience(experiences.freeTrialConversion);
        }
      });
    });

    // Task item checkbox toggle
    const taskItems = shadowRoot.querySelectorAll('.task-item');
    taskItems.forEach(item => {
      item.addEventListener('click', () => {
        const checkbox = item.querySelector('.task-checkbox');
        checkbox.classList.toggle('checked');
        item.classList.toggle('completed');
      });
    });
  }
}
