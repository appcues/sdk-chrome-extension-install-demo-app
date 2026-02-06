/**
 * Democues Extension - Content Script
 *
 * This is the entry point for the Appcues demo extension.
 * It demonstrates how to integrate the Appcues SDK into a web application.
 *
 * How to read this code:
 * 1. Appcues SDK is initialized with your account ID
 * 2. A demo user is identified for personalization
 * 3. The overlay UI responds to extension toggle messages
 */

// Step 1: Import Appcues SDK helpers
import { initAppcues } from './appcues/index.js';

// Step 2: Import overlay UI
import { toggleOverlay } from './overlay/index.js';

// Step 3: Initialize Appcues SDK
// This sets up Appcues and identifies the current user
initAppcues();

// Step 4: Handle extension messages
// Guard against multiple injections
if (!window.democuesOverlayInitialized) {
  window.democuesOverlayInitialized = true;

  // Listen for toggle messages from the extension popup/service worker
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'toggle-sidebar') {
      toggleOverlay();
    }
    return true;
  });

  console.log('Democues: Content script initialized');
}
