// Transactions widget

import { mockTransactions } from '../../data/index.js';

/**
 * Renders the Transactions widget
 * @returns {string} HTML string for transactions widget
 */
export function renderTransactionsWidget() {
  return `
    <div class="widget-panel">
      <div class="widget-header">
        <span class="widget-title">Transactions</span>
        <span class="widget-action">View all</span>
      </div>
      <div class="transactions-balance">
        <div class="balance-label">Current Balance</div>
        <div class="balance-value">$32,450</div>
      </div>
      <div class="transactions-list">
        ${mockTransactions.map(tx => `
          <div class="transaction-item">
            <div class="transaction-info">
              <div class="transaction-icon">${tx.icon}</div>
              <div>
                <div class="transaction-name">${tx.name}</div>
                <div class="transaction-date">${tx.date}</div>
              </div>
            </div>
            <div class="transaction-amount ${tx.type}">${tx.amount}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
