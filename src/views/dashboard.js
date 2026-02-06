// Dashboard view

import { navItems, useCases } from '../data/index.js';
import { uploadIcon } from '../icons/index.js';
import { renderMetricsRow } from './widgets/metrics-row.js';
import { renderTasksPanel } from './widgets/tasks-panel.js';
import { renderTransactionsWidget } from './widgets/transactions.js';

/**
 * Renders the Dashboard view content
 * @param {string|null} selectedUseCase - The selected use case ID
 * @returns {string} HTML string for dashboard view
 */
export function renderDashboardView(selectedUseCase) {
  const useCaseTitle = useCases.find(uc => uc.id === selectedUseCase)?.title || 'Dashboard';
  return `
    <div class="dashboard-view">
      <div class="dashboard-sidebar">
        <nav class="sidebar-nav">
          ${navItems.map(item => `
            <div class="nav-item ${item.active ? 'active' : ''}" data-nav="${item.id}">
              ${item.icon}
              ${item.label}
            </div>
          `).join('')}
        </nav>
      </div>
      <div class="dashboard-main">
        <div class="dashboard-header">
          <div class="dashboard-breadcrumb">
            <span class="breadcrumb-link" data-action="go-home">Home</span>
            <span class="breadcrumb-separator">/</span>
            <span class="breadcrumb-current">${useCaseTitle}</span>
          </div>
          <div class="dashboard-actions">
            <button class="upload-btn">
              ${uploadIcon}
              Upload my data
            </button>
          </div>
        </div>
        <div class="dashboard-content">
          ${renderMetricsRow()}
          <div class="widgets-row">
            ${renderTasksPanel()}
            ${renderTransactionsWidget()}
          </div>
        </div>
      </div>
    </div>
  `;
}
