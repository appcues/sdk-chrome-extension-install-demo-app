// Content script for Democues extension
// Handles overlay injection and toggle logic with Shadow DOM isolation

import Appcues from '@appcues/web-sdk';

// Initialize Appcues SDK
async function initAppcues() {
  try {
    await Appcues.setup('88539');

    // Identify a demo user (in production, use real user data)
    window.Appcues.identify('demo-user-001', {
      createdAt: Date.now(),
      role: 'Sales Rep',
      firstName: 'Demo',
      email: 'demo@example.com',
      plan: 'Professional'
    });

    window.Appcues.debug()

    console.log('Democues: Appcues initialized');
  } catch (error) {
    console.error('Democues: Appcues initialization failed', error);
  }
}

// Initialize Appcues on load
initAppcues();

// Guard against multiple injections
if (typeof window.democuesOverlayInitialized === 'undefined') {
  window.democuesOverlayInitialized = true;

  // State variables
  let overlayVisible = false;
  let hostElement = null;
  let backdropElement = null;
  let modalElement = null;
  let shadowRootRef = null;

  // View state
  let currentView = 'home'; // 'home' | 'dashboard'

  /**
   * Renders the Home view content
   * @returns {string} HTML string for home view
   */
  function renderHomeView() {
    return `
      <div class="view home-view">
        <h2 class="view-title">Home View - Choose a use case</h2>
        <p class="view-description">Select one of the options below to get started.</p>
      </div>
    `;
  }

  /**
   * Renders the Dashboard view content
   * @returns {string} HTML string for dashboard view
   */
  function renderDashboardView() {
    return `
      <div class="view dashboard-view">
        <h2 class="view-title">Dashboard View</h2>
        <p class="view-description">Dashboard content will be implemented in future plans.</p>
      </div>
    `;
  }

  /**
   * Renders the current view into the modal content area
   */
  function renderCurrentView() {
    if (!shadowRootRef) return;
    const contentArea = shadowRootRef.querySelector('.modal-content');
    if (!contentArea) return;

    if (currentView === 'home') {
      contentArea.innerHTML = renderHomeView();
    } else if (currentView === 'dashboard') {
      contentArea.innerHTML = renderDashboardView();
    }
    attachViewEventListeners();
  }

  /**
   * Valid view names for the application
   */
  const VALID_VIEWS = ['home', 'dashboard'];

  /**
   * Navigates to a specific view
   * @param {string} view - The view to navigate to ('home' | 'dashboard')
   */
  function navigateTo(view) {
    if (!VALID_VIEWS.includes(view)) {
      console.warn(`Democues: Invalid view "${view}", defaulting to home`);
      view = 'home';
    }
    currentView = view;
    renderCurrentView();
  }

  /**
   * Attaches event listeners for the current view
   * Will be populated in future plans for use-case cards, navigation, etc.
   */
  function attachViewEventListeners() {
    // Will be populated in future plans
    // Handles clicks on use-case cards, navigation items, etc.
  }

  /**
   * Creates the overlay host element with Shadow DOM encapsulation
   * @returns {HTMLElement} The host element containing the shadow root
   */
  function createOverlayHost() {
    const host = document.createElement('div');
    host.id = 'democues-overlay-host';

    const shadowRoot = host.attachShadow({ mode: 'open' });
    shadowRootRef = shadowRoot;

    const style = document.createElement('style');
    style.textContent = `
      /* Reset & Base */
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      /* Backdrop */
      .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2147483646;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .backdrop.visible {
        opacity: 1;
      }

      /* Modal Container */
      .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.95);
        width: 90vw;
        max-width: 1200px;
        height: 85vh;
        max-height: 800px;
        background: linear-gradient(180deg, #FAFBFC 0%, #F3F4F6 100%);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
        z-index: 2147483647;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        opacity: 0;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        line-height: 1.5;
        color: #1F2937;
        border-radius: 16px;
        overflow: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .modal.open {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }

      /* Modal Header */
      .modal-header {
        padding: 16px 24px;
        background: #FFFFFF;
        border-bottom: 1px solid #E5E7EB;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
      }
      .header-left {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .logo {
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #A855F7 100%);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
      }
      .logo svg {
        width: 18px;
        height: 18px;
        fill: white;
      }
      .header-title {
        display: flex;
        flex-direction: column;
      }
      .title {
        font-weight: 600;
        font-size: 16px;
        color: #111827;
        letter-spacing: -0.01em;
      }
      .close-btn {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        color: #9CA3AF;
        transition: all 0.15s ease;
      }
      .close-btn:hover {
        color: #374151;
        background: #F3F4F6;
      }
      .close-btn svg {
        width: 20px;
        height: 20px;
      }

      /* Modal Content */
      .modal-content {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 24px;
      }
      .modal-content::-webkit-scrollbar {
        width: 6px;
      }
      .modal-content::-webkit-scrollbar-track {
        background: transparent;
      }
      .modal-content::-webkit-scrollbar-thumb {
        background: #D1D5DB;
        border-radius: 3px;
      }
      .modal-content::-webkit-scrollbar-thumb:hover {
        background: #9CA3AF;
      }

      /* View Styles */
      .view {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 200px;
        text-align: center;
      }
      .view-title {
        font-size: 24px;
        font-weight: 600;
        color: #111827;
        margin-bottom: 8px;
      }
      .view-description {
        font-size: 16px;
        color: #6B7280;
      }
    `;

    // Create backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    backdrop.addEventListener('click', hideOverlay);
    backdropElement = backdrop;

    // Create modal structure
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.addEventListener('click', (e) => e.stopPropagation());

    // Modal Header
    const header = document.createElement('div');
    header.className = 'modal-header';

    const headerLeft = document.createElement('div');
    headerLeft.className = 'header-left';

    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`;

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
    closeButton.addEventListener('click', hideOverlay);

    header.appendChild(headerLeft);
    header.appendChild(closeButton);

    // Modal Content Area
    const content = document.createElement('div');
    content.className = 'modal-content';

    // Assemble modal
    modal.appendChild(header);
    modal.appendChild(content);

    modalElement = modal;

    shadowRoot.appendChild(style);
    shadowRoot.appendChild(backdrop);
    shadowRoot.appendChild(modal);

    return host;
  }

  /**
   * Shows the overlay with scale-fade animation
   */
  function showOverlay() {
    if (!hostElement) {
      hostElement = createOverlayHost();
    }
    document.body.appendChild(hostElement);

    // Reset view to home when opening
    currentView = 'home';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        backdropElement.classList.add('visible');
        modalElement.classList.add('open');
        renderCurrentView();
      });
    });

    overlayVisible = true;
    console.log('Democues: Overlay shown');
  }

  /**
   * Hides the overlay with scale-fade animation
   */
  function hideOverlay() {
    if (modalElement) {
      backdropElement.classList.remove('visible');
      modalElement.classList.remove('open');

      setTimeout(() => {
        if (hostElement && hostElement.parentNode) {
          hostElement.parentNode.removeChild(hostElement);
        }
        hostElement = null;
        backdropElement = null;
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
  function toggleOverlay() {
    if (overlayVisible) {
      hideOverlay();
    } else {
      showOverlay();
    }
  }

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'toggle-sidebar') {
      toggleOverlay();
    }
    return true;
  });

  console.log('Democues: Content script initialized');
}
