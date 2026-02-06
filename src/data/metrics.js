// Dashboard metrics data
import { metricIcons } from "../icons/index.js";

export const dashboardMetrics = [
  {
    id: "sales",
    label: "Sales",
    value: "$24,780",
    change: "+12.5%",
    positive: true,
    icon: metricIcons.sales,
  },
  {
    id: "expenses",
    label: "Expenses",
    value: "$8,450",
    change: "-3.2%",
    positive: true, // expenses down is good
    icon: metricIcons.expenses,
  },
  {
    id: "payroll",
    label: "Payroll",
    value: "$12,300",
    change: "+2.1%",
    positive: false, // payroll up is neutral/negative
    icon: metricIcons.payroll,
  },
  {
    id: "daily-sales",
    label: "Daily Sales",
    value: "$1,892",
    change: "+8.7%",
    positive: true,
    icon: metricIcons.dailySales,
  },
];
