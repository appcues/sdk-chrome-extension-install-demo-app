// Styles module - aggregates all CSS

import { baseStyles } from './base.css.js';
import { modalStyles } from './modal.css.js';
import { homeStyles } from './home.css.js';
import { dashboardStyles } from './dashboard.css.js';
import { widgetsStyles } from './widgets.css.js';

/**
 * Returns all styles combined into a single string
 * @returns {string} Combined CSS styles
 */
export function getAllStyles() {
  return baseStyles + modalStyles + homeStyles + dashboardStyles + widgetsStyles;
}
