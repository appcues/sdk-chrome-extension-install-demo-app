// Service worker for Sales Intelligence Demo extension
// This file runs as the extension's background process in Manifest v3

console.log('Sales Intelligence Demo: Service worker initialized');

// Listen for extension install
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details.reason);
});

// Handle extension icon click
chrome.action.onClicked.addListener(async (tab) => {
  // First, inject the content script (if not already injected)
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['dist/content-script.js']
    });
  } catch (err) {
    // Script may already be injected, that's OK
    console.log('Script injection:', err.message);
  }

  // Then send toggle message
  chrome.tabs.sendMessage(tab.id, { action: 'toggle-sidebar' });
});

// Placeholder for future message handling
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received:', message);
  return false;
});
