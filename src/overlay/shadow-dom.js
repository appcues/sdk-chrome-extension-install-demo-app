// Shadow DOM creation for overlay

import { getAllStyles } from "../styles/index.js";

/**
 * Creates the overlay host element with Shadow DOM encapsulation
 * @param {Function} hideOverlay - Function to hide the overlay
 * @returns {{ host: HTMLElement, shadowRoot: ShadowRoot, modal: HTMLElement }}
 */
export function createOverlayHost(hideOverlay) {
  const host = document.createElement("div");
  host.id = "democues-overlay-host";

  const shadowRoot = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = getAllStyles();

  // Create modal structure
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.addEventListener("click", (e) => e.stopPropagation());

  // Modal Header
  const header = document.createElement("div");
  header.className = "modal-header";

  const headerLeft = document.createElement("div");
  headerLeft.className = "header-left";

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.51 43.6"><path fill="#c3d7ff" d="M34.2,34.1h0c-5.2,5.2-13.7,5.2-18.8,0L3.9,22.7C-1.3,17.5-1.3,9.1,3.9,3.9h0c5.2-5.2,13.7-5.2,18.8,0l11.5,11.5c5.2,5.1,5.2,13.5,0,18.7Z"/><path fill="#2d71ff" d="M45.6,3.9h0c-5.2-5.2-13.7-5.2-18.8,0l-12,11.9c-4.2,4.2-5.2,10.6-2.3,15.5h0l2.3,2.3,1.1,1.1,8.9,8.9.5-.5,8.4-8.4,3.5-3.5,8.5-8.5c5.1-5.2,5.1-13.6-.1-18.8Z"/></svg>`;

  const headerTitle = document.createElement("div");
  headerTitle.className = "header-title";

  const title = document.createElement("span");
  title.className = "title";
  title.textContent = "Democues";

  headerTitle.appendChild(title);
  headerLeft.appendChild(logo);
  headerLeft.appendChild(headerTitle);

  const closeButton = document.createElement("button");
  closeButton.className = "close-btn";
  closeButton.setAttribute("aria-label", "Close overlay");
  closeButton.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  closeButton.addEventListener("click", hideOverlay);

  header.appendChild(headerLeft);
  header.appendChild(closeButton);

  // Modal Content Area
  const content = document.createElement("div");
  content.className = "modal-content";

  // Assemble modal
  modal.appendChild(header);
  modal.appendChild(content);

  shadowRoot.appendChild(style);
  shadowRoot.appendChild(modal);

  return { host, shadowRoot, modal };
}
