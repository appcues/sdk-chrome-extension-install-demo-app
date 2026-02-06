// Widget styles - metrics, tasks, transactions

export const widgetsStyles = `
  /* Metric Cards */
  .metrics-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 24px;
  }
  .metric-card {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    padding: 20px;
  }
  .metric-label {
    font-size: 13px;
    color: #6B7280;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .metric-label svg {
    width: 16px;
    height: 16px;
  }
  .metric-value {
    font-size: 28px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 8px;
  }
  .metric-change {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    font-weight: 500;
    padding: 2px 8px;
    border-radius: 100px;
  }
  .metric-change.positive {
    background: #D1FAE5;
    color: #059669;
  }
  .metric-change.negative {
    background: #FEE2E2;
    color: #DC2626;
  }
  .metric-change svg {
    width: 12px;
    height: 12px;
  }

  /* Widget Panels */
  .widgets-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .widget-panel {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    overflow: hidden;
  }
  .widget-header {
    padding: 16px 20px;
    border-bottom: 1px solid #E5E7EB;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .widget-title {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
  }
  .widget-action {
    font-size: 13px;
    color: #6366F1;
    cursor: pointer;
    font-weight: 500;
  }
  .widget-action:hover {
    text-decoration: underline;
  }

  /* Tasks List */
  .tasks-list {
    padding: 8px 0;
  }
  .task-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 20px;
    cursor: pointer;
    transition: background 0.15s ease;
  }
  .task-item:hover {
    background: #F9FAFB;
  }
  .task-checkbox {
    width: 18px;
    height: 18px;
    border: 2px solid #D1D5DB;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.15s ease;
  }
  .task-checkbox.checked {
    background: #6366F1;
    border-color: #6366F1;
  }
  .task-checkbox.checked svg {
    color: white;
  }
  .task-checkbox svg {
    width: 12px;
    height: 12px;
    opacity: 0;
  }
  .task-checkbox.checked svg {
    opacity: 1;
  }
  .task-content {
    flex: 1;
  }
  .task-title {
    font-size: 14px;
    color: #111827;
    margin-bottom: 2px;
  }
  .task-item.completed .task-title {
    color: #9CA3AF;
    text-decoration: line-through;
  }
  .task-meta {
    font-size: 12px;
    color: #9CA3AF;
  }
  .task-priority {
    padding: 2px 8px;
    border-radius: 100px;
    font-size: 11px;
    font-weight: 500;
  }
  .task-priority.high {
    background: #FEE2E2;
    color: #DC2626;
  }
  .task-priority.medium {
    background: #FEF3C7;
    color: #D97706;
  }
  .task-priority.low {
    background: #D1FAE5;
    color: #059669;
  }

  /* Transactions Widget */
  .transactions-balance {
    padding: 24px 20px;
    text-align: center;
    border-bottom: 1px solid #E5E7EB;
  }
  .balance-label {
    font-size: 13px;
    color: #6B7280;
    margin-bottom: 4px;
  }
  .balance-value {
    font-size: 32px;
    font-weight: 600;
    color: #111827;
  }
  .transactions-list {
    padding: 8px 0;
  }
  .transaction-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
  }
  .transaction-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .transaction-icon {
    width: 36px;
    height: 36px;
    background: #F3F4F6;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6B7280;
  }
  .transaction-icon svg {
    width: 18px;
    height: 18px;
  }
  .transaction-name {
    font-size: 14px;
    color: #111827;
    font-weight: 500;
  }
  .transaction-date {
    font-size: 12px;
    color: #9CA3AF;
  }
  .transaction-amount {
    font-size: 14px;
    font-weight: 500;
  }
  .transaction-amount.income {
    color: #059669;
  }
  .transaction-amount.expense {
    color: #DC2626;
  }
`;
