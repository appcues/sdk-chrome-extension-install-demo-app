// Shadow DOM creation for overlay

import { getAllStyles } from '../styles/index.js';

/**
 * Creates the overlay host element with Shadow DOM encapsulation
 * @param {Function} hideOverlay - Function to hide the overlay
 * @returns {{ host: HTMLElement, shadowRoot: ShadowRoot, modal: HTMLElement }}
 */
export function createOverlayHost(hideOverlay) {
  const host = document.createElement('div');
  host.id = 'democues-overlay-host';

  const shadowRoot = host.attachShadow({ mode: 'open' });

  const style = document.createElement('style');
  style.textContent = getAllStyles();

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

  shadowRoot.appendChild(style);
  shadowRoot.appendChild(modal);

  return { host, shadowRoot, modal };
}
