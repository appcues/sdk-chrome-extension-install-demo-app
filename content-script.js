// Content script for Sales Intelligence Demo extension
// Handles sidebar injection and toggle logic

// Guard against multiple injections
if (typeof window.salesIntelSidebarInitialized === 'undefined') {
  window.salesIntelSidebarInitialized = true;

  // State variables
  let sidebarVisible = false;
  let sidebarElement = null;

  /**
   * Creates the sidebar DOM element with header and close button
   * @returns {HTMLElement} The sidebar container element
   */
  function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.id = 'sales-intel-sidebar';

    // Apply inline styles (will be replaced with Shadow DOM in Phase 3)
    Object.assign(sidebar.style, {
      position: 'fixed',
      top: '0',
      right: '0',
      width: '400px',
      height: '100vh',
      background: 'white',
      boxShadow: '-2px 0 10px rgba(0,0,0,0.1)',
      zIndex: '2147483647',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      boxSizing: 'border-box'
    });

    // Create header
    const header = document.createElement('div');
    Object.assign(header.style, {
      padding: '16px',
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    });

    // Title
    const title = document.createElement('span');
    title.textContent = 'Sales Intelligence';
    Object.assign(title.style, {
      fontWeight: '600',
      fontSize: '18px',
      color: '#111827'
    });

    // Close button
    const closeButton = document.createElement('button');
    closeButton.textContent = '\u00D7'; // multiplication sign (X)
    closeButton.setAttribute('aria-label', 'Close sidebar');
    Object.assign(closeButton.style, {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: '#6b7280',
      padding: '0',
      lineHeight: '1'
    });

    // Hover effect for close button
    closeButton.addEventListener('mouseenter', () => {
      closeButton.style.color = '#111827';
    });
    closeButton.addEventListener('mouseleave', () => {
      closeButton.style.color = '#6b7280';
    });

    // Close button click handler
    closeButton.addEventListener('click', hideSidebar);

    header.appendChild(title);
    header.appendChild(closeButton);

    // Content area
    const content = document.createElement('div');
    Object.assign(content.style, {
      padding: '16px',
      color: '#6b7280'
    });
    content.textContent = 'Sidebar content coming in Phase 3...';

    sidebar.appendChild(header);
    sidebar.appendChild(content);

    return sidebar;
  }

  /**
   * Shows the sidebar by creating and appending it to the DOM
   */
  function showSidebar() {
    if (!sidebarElement) {
      sidebarElement = createSidebar();
    }
    document.body.appendChild(sidebarElement);
    sidebarVisible = true;
    console.log('Sales Intelligence: Sidebar shown');
  }

  /**
   * Hides the sidebar by removing it from the DOM
   */
  function hideSidebar() {
    if (sidebarElement && sidebarElement.parentNode) {
      sidebarElement.parentNode.removeChild(sidebarElement);
    }
    sidebarElement = null;
    sidebarVisible = false;
    console.log('Sales Intelligence: Sidebar hidden');
  }

  /**
   * Toggles sidebar visibility
   */
  function toggleSidebar() {
    if (sidebarVisible) {
      hideSidebar();
    } else {
      showSidebar();
    }
  }

  // Listen for messages from the service worker
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'toggle-sidebar') {
      toggleSidebar();
    }
    return true; // Indicates async response (best practice)
  });

  console.log('Sales Intelligence: Content script initialized');
}
