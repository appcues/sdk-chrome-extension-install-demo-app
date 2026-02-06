// Appcues SDK Integration
// This module provides helpers for initializing and interacting with Appcues

// we inject the custom-element polyfill since content scripts from extensions
// don't support for custom elements.
// without it the preview mode stop working
// since we inject the open-builder instance as a saga context field
// and open-builder injects the appcues-container webcomponent.
import '@webcomponents/custom-elements';

import Appcues from '@appcues/web-sdk';
import { APPCUES_ACCOUNT_ID, DEFAULT_USER } from './config.js';

/**
 * Initialize Appcues SDK with account setup and user identification
 * Call this once when your application loads
 */
export async function initAppcues() {
  try {
    // await Appcues.setup(APPCUES_ACCOUNT_ID, {
    //   assetsPath: chrome.runtime.getURL('static/appcues')
    // });

    // Identify the user (in production, use real user data)
    // window.Appcues.identify(DEFAULT_USER.userId, DEFAULT_USER.properties);
    // window.Appcues.anonymous();

    // Enable debug mode for development
    // window.Appcues.debug();

    console.log('Appcues: Initialized');
  } catch (error) {
    console.error('Appcues: Initialization failed', error);
  }
}

/**
 * Track a custom event in Appcues
 * @param {string} eventName - Name of the event to track
 * @param {Object} [properties={}] - Optional event properties
 */
export function trackEvent(eventName, properties = {}) {
  if (window.Appcues) {
    window.Appcues.track(eventName, properties);
  }
}

/**
 * Update the current user's properties
 * @param {Object} properties - Properties to update
 */
export function updateUserProperties(properties) {
  if (window.Appcues) {
    window.Appcues.identify(DEFAULT_USER.userId, properties);
  }
}
