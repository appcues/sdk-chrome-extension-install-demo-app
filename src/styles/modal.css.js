// Modal container and header styles

export const modalStyles = `
  /* Modal Container (Right-side Sidebar) */
  .modal {
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #FAFBFC 0%, #F3F4F6 100%);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 1.5;
    color: #1F2937;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Modal Header */
  .modal-header {
    padding: 16px 24px;
    background: #FFFFFF;
    border-bottom: 1px solid #E5E7EB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
  }
  .header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .logo {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .logo svg {
    width: 100%;
    height: 100%;
  }
  .header-title {
    display: flex;
    flex-direction: column;
  }
  .title {
    font-weight: 600;
    font-size: 16px;
    color: #111827;
    letter-spacing: -0.01em;
  }
  .close-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: #9CA3AF;
    transition: all 0.15s ease;
  }
  .close-btn:hover {
    color: #374151;
    background: #F3F4F6;
  }
  .close-btn svg {
    width: 20px;
    height: 20px;
  }

  /* Modal Content */
  .modal-content {
    flex: 1;
    overflow: hidden;
    padding: 0;
  }
  .modal-content::-webkit-scrollbar {
    width: 6px;
  }
  .modal-content::-webkit-scrollbar-track {
    background: transparent;
  }
  .modal-content::-webkit-scrollbar-thumb {
    background: #D1D5DB;
    border-radius: 3px;
  }
  .modal-content::-webkit-scrollbar-thumb:hover {
    background: #9CA3AF;
  }
`;
