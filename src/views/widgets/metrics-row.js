// Metrics row widget

import { dashboardMetrics } from '../../data/index.js';
import { trendUpIcon, trendDownIcon } from '../../icons/index.js';

/**
 * Renders the metrics row with 4 metric cards
 * @returns {string} HTML string for metrics row
 */
export function renderMetricsRow() {
  return `
    <div class="metrics-row">
      ${dashboardMetrics.map(metric => `
        <div class="metric-card">
          <div class="metric-label">
            ${metric.icon}
            ${metric.label}
          </div>
          <div class="metric-value">${metric.value}</div>
          <span class="metric-change ${metric.positive ? 'positive' : 'negative'}">
            ${metric.positive ? trendUpIcon : trendDownIcon}
            ${metric.change}
          </span>
        </div>
      `).join('')}
    </div>
  `;
}
