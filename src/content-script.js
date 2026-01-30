// Content script for Democues extension
// Handles overlay injection and toggle logic with Shadow DOM isolation

import Appcues from '@appcues/web-sdk';

// Use case data for home view
const useCases = [
  {
    id: 'free-trial',
    title: 'Free Trial Conversion',
    description: 'Engage trial users with targeted experiences to drive paid conversions',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>'
  },
  {
    id: 'onboarding',
    title: 'User Onboarding',
    description: 'Get users to value from the start with guided onboarding flows',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>'
  },
  {
    id: 'adoption',
    title: 'Product Adoption',
    description: 'Create stickier users by driving awareness of features',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>'
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Provide proactive and just-in-time guidance to users',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>'
  },
  {
    id: 'feedback',
    title: 'Collect User Feedback',
    description: 'Get closer to your customers with in-app surveys and feedback',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>'
  }
];

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
      <div class="home-view">
        <h1 class="home-heading">Choose a use case</h1>
        <p class="home-subheading">Select what you'd like to explore</p>
        <div class="use-cases-grid">
          ${useCases.map(uc => `
            <div class="use-case-card" data-usecase="${uc.id}">
              <div class="use-case-icon">${uc.icon}</div>
              <div class="use-case-title">${uc.title}</div>
              <div class="use-case-description">${uc.description}</div>
            </div>
          `).join('')}
        </div>
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

      /* Home View */
      .home-view {
        padding: 48px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        overflow-y: auto;
      }
      .home-heading {
        font-size: 28px;
        font-weight: 600;
        color: #1F2937;
        margin-bottom: 8px;
        text-align: center;
      }
      .home-subheading {
        font-size: 16px;
        color: #6B7280;
        margin-bottom: 40px;
        text-align: center;
      }
      .use-cases-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        width: 100%;
        max-width: 900px;
      }
      .use-case-card {
        background: #FFFFFF;
        border: 1px solid #E5E7EB;
        border-radius: 12px;
        padding: 24px;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .use-case-card:hover {
        border-color: #6366F1;
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
        transform: translateY(-2px);
      }
      .use-case-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6366F1;
      }
      .use-case-icon svg {
        width: 24px;
        height: 24px;
      }
      .use-case-title {
        font-size: 16px;
        font-weight: 600;
        color: #111827;
      }
      .use-case-description {
        font-size: 14px;
        color: #6B7280;
        line-height: 1.5;
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
