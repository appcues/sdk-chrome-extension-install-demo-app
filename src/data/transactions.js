// Mock transactions data
import { transactionIcons } from '../icons/index.js';

export const mockTransactions = [
  { id: 1, name: 'Client Payment', date: 'Today', amount: '+$4,500', type: 'income', icon: transactionIcons.income },
  { id: 2, name: 'Office Supplies', date: 'Yesterday', amount: '-$245', type: 'expense', icon: transactionIcons.expense },
  { id: 3, name: 'Software License', date: 'Mar 15', amount: '-$99', type: 'expense', icon: transactionIcons.software }
];
