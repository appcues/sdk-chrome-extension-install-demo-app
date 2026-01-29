// Service worker for Sales Intelligence Demo extension
// This file runs as the extension's background process in Manifest v3

console.log('Sales Intelligence Demo: Service worker initialized');

// Listen for extension install
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed:', details.reason);
});

// Placeholder for future message handling (Phase 2)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received:', message);
  return false;
});
