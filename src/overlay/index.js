// Overlay module - iframe-based sidebar injection

let overlayVisible = false;
let wrapperElement = null;
let iframeElement = null;

/**
 * Creates the wrapper div + iframe that hosts the sidebar UI
 */
function createIframeHost() {
  const wrapper = document.createElement("div");
  wrapper.id = "democues-overlay-host";
  wrapper.style.cssText = `
    position: fixed;
    top: 0;
    right: 0;
    width: 600px;
    height: 100vh;
    z-index: 2147483500;
    transform: translateX(100%);
    opacity: 0;
    transition: transform 0.3s ease-out, opacity 0.3s ease;
    border: none;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05);
  `;

  const iframe = document.createElement("iframe");
  iframe.srcdoc = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <div id="app"></div>
  <script src="${chrome.runtime.getURL("dist/sidebar.js")}"></script>
</body>
</html>`;
  iframe.style.cssText = `
    width: 100%;
    height: 100%;
    border: none;
  `;
  iframe.setAttribute("allow", "");

  wrapper.appendChild(iframe);

  return { wrapper, iframe };
}

/**
 * Shows the overlay with slide-in animation
 */
export function showOverlay() {
  if (!wrapperElement) {
    const result = createIframeHost();
    wrapperElement = result.wrapper;
    iframeElement = result.iframe;

    // Listen for messages from iframe
    window.addEventListener("message", handleIframeMessage);
  }

  document.body.appendChild(wrapperElement);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      wrapperElement.style.transform = "translateX(0)";
      wrapperElement.style.opacity = "1";

      // Notify iframe to reset to home view
      if (iframeElement.contentWindow) {
        iframeElement.contentWindow.postMessage({ type: "show" }, "*");
      }
    });
  });

  overlayVisible = true;
  console.log("Democues: Overlay shown");
}

/**
 * Hides the overlay with slide-out animation
 */
export function hideOverlay() {
  if (wrapperElement) {
    wrapperElement.style.transform = "translateX(100%)";
    wrapperElement.style.opacity = "0";

    setTimeout(() => {
      if (wrapperElement && wrapperElement.parentNode) {
        wrapperElement.parentNode.removeChild(wrapperElement);
      }
      wrapperElement = null;
      iframeElement = null;
      window.removeEventListener("message", handleIframeMessage);
    }, 300);
  }
  overlayVisible = false;
  console.log("Democues: Overlay hidden");
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

/**
 * Handles postMessage events from the iframe
 */
function handleIframeMessage(event) {
  if (!event.data || !event.data.type) return;

  switch (event.data.type) {
    case "close-sidebar":
      hideOverlay();
      break;
    case "track-event":
      if (window.Appcues) {
        window.Appcues.track(event.data.event, event.data.properties || {});
      }
      break;
    case "update-user":
      if (window.Appcues) {
        window.Appcues.identify(event.data.userId, event.data.properties || {});
      }
      break;
    case "show-experience":
      if (window.Appcues && event.data.experienceId) {
        window.Appcues.show(event.data.experienceId);
      }
      break;
  }
}
