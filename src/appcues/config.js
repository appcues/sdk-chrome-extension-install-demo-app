// Appcues Configuration
// Customers: Replace these values with your own Appcues account details

export const APPCUES_ACCOUNT_ID = process.env.APPCUES_ACCOUNT_ID;

export const DEFAULT_USER = {
  userId: "demo-user-002",
  properties: {
    createdAt: Date.now(),
    role: "Sales Rep",
    firstName: "Demo",
    email: "demo@example.com",
    plan: "Professional",
  },
};
