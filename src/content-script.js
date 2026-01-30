// Content script for Democues extension
// Handles overlay injection and toggle logic with Shadow DOM isolation

import Appcues from '@appcues/web-sdk';

// Navigation items for dashboard sidebar
const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',
    active: true
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>'
  },
  {
    id: 'tasks',
    label: 'Tasks',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
  },
  {
    id: 'transactions',
    label: 'Transactions',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>'
  },
  {
    id: 'payroll',
    label: 'Payroll',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" /></svg>'
  },
  {
    id: 'sales',
    label: 'Sales',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>'
  },
  {
    id: 'expenses',
    label: 'Expenses',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>'
  },
  {
    id: 'support',
    label: 'Support',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>'
  },
  {
    id: 'subscription',
    label: 'Subscription',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>'
  }
];

// Upload button icon
const uploadIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>';

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
  let selectedUseCase = null; // Tracks which use case the user clicked

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
    const useCaseTitle = useCases.find(uc => uc.id === selectedUseCase)?.title || 'Dashboard';
    return `
      <div class="dashboard-view">
        <div class="dashboard-sidebar">
          <div class="sidebar-header">
            <div class="sidebar-logo">
              <div class="sidebar-logo-icon">D</div>
              Democues
            </div>
          </div>
          <nav class="sidebar-nav">
            ${navItems.map(item => `
              <div class="nav-item ${item.active ? 'active' : ''}" data-nav="${item.id}">
                ${item.icon}
                ${item.label}
              </div>
            `).join('')}
          </nav>
        </div>
        <div class="dashboard-main">
          <div class="dashboard-header">
            <div class="dashboard-breadcrumb">
              <span class="breadcrumb-link" data-action="go-home">Home</span>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-current">${useCaseTitle}</span>
            </div>
            <div class="dashboard-actions">
              <button class="upload-btn">
                ${uploadIcon}
                Upload my data
              </button>
            </div>
          </div>
          <div class="dashboard-content">
            <div class="content-grid">
              <!-- Widgets will be added in next plan -->
              <div style="grid-column: span 4; text-align: center; color: #9CA3AF; padding: 40px;">
                Dashboard widgets coming in next plan...
              </div>
            </div>
          </div>
        </div>
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
   * Handles clicks on use-case cards, navigation items, etc.
   */
  function attachViewEventListeners() {
    if (currentView === 'home') {
      const cards = shadowRootRef.querySelectorAll('.use-case-card');
      cards.forEach(card => {
        card.addEventListener('click', () => {
          const useCaseId = card.dataset.usecase;
          selectedUseCase = useCaseId;
          navigateTo('dashboard');
        });
      });
    } else if (currentView === 'dashboard') {
      const backBtn = shadowRootRef.querySelector('.back-to-home-btn');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          navigateTo('home');
        });
      }
    }
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
        overflow: hidden;
        padding: 0;
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

      /* Dashboard Layout */
      .dashboard-view {
        display: flex;
        height: 100%;
        overflow: hidden;
      }
      .dashboard-sidebar {
        width: 240px;
        background: #FFFFFF;
        border-right: 1px solid #E5E7EB;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        overflow-y: auto;
      }
      .sidebar-header {
        padding: 20px 16px;
        border-bottom: 1px solid #E5E7EB;
      }
      .sidebar-logo {
        font-size: 18px;
        font-weight: 600;
        color: #111827;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .sidebar-logo-icon {
        width: 28px;
        height: 28px;
        background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 14px;
        font-weight: 700;
      }
      .sidebar-nav {
        padding: 12px 8px;
        flex: 1;
      }
      .nav-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 12px;
        border-radius: 8px;
        color: #4B5563;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.15s ease;
        margin-bottom: 2px;
      }
      .nav-item:hover {
        background: #F3F4F6;
        color: #111827;
      }
      .nav-item.active {
        background: #EEF2FF;
        color: #6366F1;
      }
      .nav-item svg {
        width: 20px;
        height: 20px;
        flex-shrink: 0;
      }
      .nav-section-title {
        font-size: 11px;
        font-weight: 600;
        color: #9CA3AF;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 16px 12px 8px;
      }

      /* Dashboard Main Area */
      .dashboard-main {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        background: #F9FAFB;
      }
      .dashboard-header {
        padding: 16px 24px;
        background: #FFFFFF;
        border-bottom: 1px solid #E5E7EB;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .dashboard-breadcrumb {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
      }
      .breadcrumb-link {
        color: #6366F1;
        cursor: pointer;
        text-decoration: none;
      }
      .breadcrumb-link:hover {
        text-decoration: underline;
      }
      .breadcrumb-separator {
        color: #D1D5DB;
      }
      .breadcrumb-current {
        color: #111827;
        font-weight: 500;
      }
      .dashboard-actions {
        display: flex;
        gap: 12px;
      }
      .upload-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: #6366F1;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .upload-btn:hover {
        background: #4F46E5;
      }
      .upload-btn svg {
        width: 16px;
        height: 16px;
      }

      /* Dashboard Content Area */
      .dashboard-content {
        flex: 1;
        padding: 24px;
        overflow-y: auto;
      }
      .content-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
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
