// Dashboard layout and sidebar styles

export const dashboardStyles = `
  /* Dashboard Layout */
  .dashboard-view {
    display: flex;
    height: 100%;
    overflow: hidden;
  }
  .dashboard-sidebar {
    width: 200px;
    background: #FFFFFF;
    border-right: 1px solid #E5E7EB;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    overflow-y: auto;
  }
  .sidebar-header {
    padding: 20px 16px;
    border-bottom: 1px solid #E5E7EB;
  }
  .sidebar-logo {
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .sidebar-logo-icon {
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 14px;
    font-weight: 700;
  }
  .sidebar-nav {
    padding: 12px 8px;
    flex: 1;
  }
  .nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 8px;
    color: #4B5563;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
    margin-bottom: 2px;
  }
  .nav-item:hover {
    background: #F3F4F6;
    color: #111827;
  }
  .nav-item.active {
    background: #EEF2FF;
    color: #6366F1;
  }
  .nav-item svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
  .nav-section-title {
    font-size: 11px;
    font-weight: 600;
    color: #9CA3AF;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 16px 12px 8px;
  }

  /* Dashboard Main Area */
  .dashboard-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: #F9FAFB;
  }
  .dashboard-header {
    padding: 16px 24px;
    background: #FFFFFF;
    border-bottom: 1px solid #E5E7EB;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dashboard-breadcrumb {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }
  .breadcrumb-link {
    color: #6366F1;
    cursor: pointer;
    text-decoration: none;
  }
  .breadcrumb-link:hover {
    text-decoration: underline;
  }
  .breadcrumb-separator {
    color: #D1D5DB;
  }
  .breadcrumb-current {
    color: #111827;
    font-weight: 500;
  }
  .dashboard-actions {
    display: flex;
    gap: 12px;
  }
  .upload-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: #6366F1;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .upload-btn:hover {
    background: #4F46E5;
  }
  .upload-btn svg {
    width: 16px;
    height: 16px;
  }

  /* Dashboard Content Area */
  .dashboard-content {
    flex: 1;
    padding: 24px;
    overflow-y: auto;
  }
  .dashboard-content::-webkit-scrollbar {
    width: 6px;
  }
  .dashboard-content::-webkit-scrollbar-track {
    background: transparent;
  }
  .dashboard-content::-webkit-scrollbar-thumb {
    background: #D1D5DB;
    border-radius: 3px;
  }
  .dashboard-content::-webkit-scrollbar-thumb:hover {
    background: #9CA3AF;
  }
  .dashboard-sidebar::-webkit-scrollbar {
    width: 6px;
  }
  .dashboard-sidebar::-webkit-scrollbar-track {
    background: transparent;
  }
  .dashboard-sidebar::-webkit-scrollbar-thumb {
    background: #D1D5DB;
    border-radius: 3px;
  }
  .dashboard-sidebar::-webkit-scrollbar-thumb:hover {
    background: #9CA3AF;
  }
  .content-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;
