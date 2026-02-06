# Appcues SDK Integration for Chrome Extensions

This guide explains how to integrate the Appcues SDK into a Chrome Extension using Manifest V3.

## Can Appcues Support Chrome Extensions?

**Yes!** This is a working example that proves Appcues SDK can be integrated into Chrome extensions.

However, there is one important limitation:

**Extensions do not have URLs.** They run on top of other web pages, so you cannot use URL-based targeting to qualify users for flows. URL-based conditions will fail.

**The solution:** Use user properties or events instead. Send a custom property (e.g., `currentView`, `extensionScreen`, `feature`) and qualify users based on that property in your flow targeting conditions. Or if you are okay with having flows to show on all urls which basically ignores URLs qualification, that is also an option.

```javascript
// Option 1: Use properties for targeting
window.Appcues.identify('user-123', {
  currentView: 'contact-list',    // Use this for targeting instead of URL
  extensionVersion: '1.0.0',
  plan: 'Professional'
});

// Update when the view changes
window.Appcues.identify('user-123', {
  currentView: 'contact-detail'
});

// Option 2: Use events for targeting
// Track events and use event-based qualification in your flows
window.Appcues.track('Viewed Contact List');
window.Appcues.track('Created New Contact', {
  contactType: 'lead',
  source: 'extension'
});

// Option 3: Manually show experiences
// Trigger a specific flow directly by its ID
window.Appcues.show('flow-id');
```

You can also manually trigger experiences using `window.Appcues.show('flow-id')`. This is useful when you want full control over when a flow appears, such as showing an onboarding flow when a user clicks a button or navigates to a specific view in your extension.

## Overview

Chrome extensions have unique requirements for third-party SDK integration:

1. **Content Scripts** run in an isolated world but share the DOM with web pages
2. **NPM modules** need to be bundled for use in content scripts
3. **CSP (Content Security Policy)** of host pages can block external requests
4. **Manifest V3** requires specific permissions to allow external connections

## Step-by-Step Integration

### Step 1: Install Dependencies

```bash
npm install @appcues/web-sdk @webcomponents/custom-elements --save
```

**Why the custom-elements polyfill?** Content scripts in Chrome extensions run in an isolated world that doesn't support Custom Elements. The Appcues SDK uses web components (like `<appcues-container>`) for rendering flows. Without this polyfill, rendering some of Appcues's experience types like Pins will fail.

### Step 2: Initialize Appcues in Content Script

In your content script, import the polyfill first, then initialize Appcues. See [src/appcues/index.js](src/appcues/index.js) for a working example:

```javascript
// IMPORTANT: Import polyfill BEFORE Appcues SDK
// Content scripts don't support Custom Elements natively
import '@webcomponents/custom-elements';

import Appcues from '@appcues/web-sdk';

async function initAppcues() {
  try {
    // Setup with assetsPath pointing to extension's static folder
    await Appcues.setup('YOUR_ACCOUNT_ID', {
      assetsPath: chrome.runtime.getURL('static/appcues')
    });

    // Option 1: Identify a known user
    window.Appcues.identify('unique-user-id', {
      createdAt: Date.now(),
      role: 'User',
      firstName: 'John',
      email: 'john@example.com',
      plan: 'Professional'
    });

    // Option 2: Anonymous user (for testing or unauthenticated users)
    // window.Appcues.anonymous();

    // Enable debug mode for development (shows Appcues debugger panel)
    window.Appcues.debug();

    console.log('Appcues: Initialized');
  } catch (error) {
    console.error('Appcues: Initialization failed', error);
  }
}

initAppcues();
```

**Important notes:**
- The polyfill must be imported **before** the Appcues SDK
- `assetsPath` tells the SDK where to load CSS/themes from (see Step 4)
- Use `window.Appcues.debug()` during development to see the debugger panel
- You can manually trigger flows with `window.Appcues.show('flow-id')`

### Step 3: Configure Manifest V3 Permissions

Update `manifest.json` with required permissions for Appcues:

```json
{
  "manifest_version": 3,
  "name": "Your Extension",
  "version": "1.0.0",
  "description": "Extension with Appcues integration",

  "action": {
    "default_title": "Your Extension"
  },

  "background": {
    "service_worker": "service-worker.js"
  },

  "permissions": [
    "activeTab",
    "scripting"
  ],

  "host_permissions": [
    "https://*.appcues.com/*",
    "https://*.appcues.net/*",
    "wss://*.appcues.com/*",
    "wss://*.appcues.net/*",
    "https://fonts.googleapis.com/*",
    "https://fonts.google.com/*",
    "https://fonts.gstatic.com/*",
    "https://res.cloudinary.com/*",
    "https://cdn.jsdelivr.net/*"
  ]
}
```

#### Host Permissions Explained

| Domain | Purpose |
|--------|---------|
| `*.appcues.com` | SDK assets, API, images |
| `*.appcues.net` | Alternative API endpoints |
| `wss://*.appcues.com` | WebSocket for real-time updates |
| `wss://*.appcues.net` | WebSocket fallback |
| `fonts.googleapis.com` | Google Fonts API (only if using custom fonts from themes) |
| `fonts.google.com` | Google Fonts (only if using custom fonts from themes) |
| `fonts.gstatic.com` | Font files (only if using custom fonts from themes) |
| `res.cloudinary.com` | Image hosting for flows |
| `cdn.jsdelivr.net` | CDN assets |

These permissions allow the extension to bypass host page CSP restrictions.

### Step 4: Set Up Static Assets

Chrome extensions can host static files that are accessible via the `chrome-extension://` protocol. The Appcues SDK supports an `assetsPath` option that tells it where to load CSS and theme files from.

#### 4.1 Create the Static Folder Structure

Create a folder in your extension to host assets. You can use any path that makes sense for your project (e.g., `static/appcues`, `assets/appcues-sdk`, `vendor/appcues`). The only requirement is that it contains `styles/` and `themes/` subfolders:

```
your-extension/
├── static/
│   └── appcues/              # Can be any path you choose
│       ├── styles/           # Required: CSS files go here
│       │   ├── checklist.css
│       │   ├── container.css
│       │   ├── debugger.css
│       │   ├── modal.css
│       │   ├── modal-step-legacy-render.css
│       │   ├── satisfaction-survey.css
│       │   ├── test-mode.css
│       │   └── tooltip.css
│       └── themes/           # Required: Theme JSON files go here
│           └── {theme-id}.json
├── manifest.json
└── ...
```

#### 4.2 Copy CSS Files from the SDK

Copy all CSS files from the Appcues SDK package to your static folder:

```bash
mkdir -p static/appcues/styles static/appcues/themes
cp node_modules/@appcues/web-sdk/build/*.css static/appcues/styles/
```

**Note:** Re-run this command when you upgrade the SDK to get updated CSS files.

#### 4.3 Save Your Theme Files

To include your Appcues themes locally, you need to download them from the Appcues API:

1. **Get your theme ID** - Open your theme in Appcues Studio:
   ```
   https://studio.appcues.com/themes/{THEME_ID}/edit/general
   ```
   Copy the `{THEME_ID}` from the URL (e.g., `-MVNJiUNUGwd0XpFplN4`)

2. **Download the theme JSON** - Open this URL in your browser (replace `{ACCOUNT_ID}` and `{THEME_ID}`):
   ```
   https://fast.appcues.com/v1/accounts/{ACCOUNT_ID}/styles/{THEME_ID}
   ```

3. **Save the theme** - Copy the JSON response and save it to your themes folder:
   ```
   static/appcues/themes/{THEME_ID}.json
   ```

**Example:**
```bash
# For theme ID: -MVNJiUNUGwd0XpFplN4
curl "https://fast.appcues.com/v1/accounts/YOUR_ACCOUNT_ID/styles/-MVNJiUNUGwd0XpFplN4" \
  > static/appcues/themes/-MVNJiUNUGwd0XpFplN4.json
```

Repeat this for each theme used by your flows.

#### 4.4 Configure Web Accessible Resources

Add `web_accessible_resources` to your `manifest.json` to expose the static files:

```json
{
  "manifest_version": 3,
  // ... other config ...
  "web_accessible_resources": [
    {
      "resources": ["static/*"],
      "matches": ["<all_urls>"]
    }
  ]
}
```

#### 4.5 Configure the SDK to Use Static Assets

When initializing Appcues, pass the `assetsPath` option pointing to your static folder:

```javascript
import Appcues from '@appcues/web-sdk';

await Appcues.setup('YOUR_ACCOUNT_ID', {
  // Use whatever path you created - just ensure it has styles/ and themes/ subfolders
  assetsPath: chrome.runtime.getURL('static/appcues')
});
```

#### 4.6 How It Works

The `assetsPath` option tells the SDK to load its CSS and theme files from your extension instead of from remote CDN URLs. This:

1. **Bypasses CSP restrictions** - Files are served from the extension, not blocked external domains
2. **Works offline** - Assets are bundled with your extension
3. **Ensures version consistency** - CSS matches your SDK version

The SDK will automatically look for:
- CSS files in `{assetsPath}/styles/`
- Theme files in `{assetsPath}/themes/`

You can use any folder structure you prefer, as long as these two subfolders exist within your chosen `assetsPath`.

## Troubleshooting

### Custom Elements / Preview Mode Not Working

If flows don't render or preview mode fails:

1. Ensure `@webcomponents/custom-elements` is installed
2. Import the polyfill **before** the Appcues SDK in your content script
3. Check for errors like "customElements is not defined" in the console

### Can't Access window.Appcues in Browser Console

This is expected! Content scripts run in an **isolated world** - they share the DOM with the page but have a separate JavaScript context.

- `window.Appcues` in your content script ✓ works
- `window.Appcues` in browser console ✗ undefined

**To debug:** Use `console.log(window.Appcues)` in your code, or switch the console context dropdown (top of DevTools Console) to your extension's content script.

### CSP Errors

If you see CSP-related errors in the console:

1. Verify all `host_permissions` are correctly set in manifest.json
2. Reload the extension after manifest changes
3. Check if the host page has additional CSP restrictions

### Appcues Not Loading

1. Verify your Account ID is correct
2. Ensure your bundled content script includes the Appcues SDK
3. Ensure `assetsPath` is correctly set to `chrome.runtime.getURL('static/appcues')`
4. Look for errors in DevTools Console

### User Not Identified

1. Ensure `Appcues.identify()` is called after `Appcues.setup()` completes
2. Verify the user ID is unique and consistent
3. Check the Appcues dashboard for user activity

## Appcues CSP Requirements Reference

From [Appcues CSP Documentation](https://docs.appcues.com/install-appcues-web/faq-content-security-policies):

| Directive | Required Domains |
|-----------|------------------|
| `script-src` | `https://*.appcues.com` `https://*.appcues.net` |
| `style-src` | `https://*.appcues.com` `https://*.appcues.net` `https://fonts.googleapis.com` `'unsafe-inline'` |
| `img-src` | `https://*.appcues.com` `https://*.appcues.net` `res.cloudinary.com` `cdn.jsdelivr.net` |
| `font-src` | `https://fonts.gstatic.com` |
| `connect-src` | `https://*.appcues.com` `https://*.appcues.net` `wss://*.appcues.net` |
| `frame-src` | `https://*.appcues.com` |

## Resources

- [Appcues Web SDK Documentation](https://docs.appcues.com/en_US/install-appcues-web/installation-overview-for-developers)
- [Appcues NPM Installation](https://docs.appcues.com/en_US/install-appcues-web/installation-overview-for-developers#installing-from-npm-11)
- [Appcues CSP FAQ](https://docs.appcues.com/install-appcues-web/faq-content-security-policies)
- [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
