// Home view styles

export const homeStyles = `
  /* Home View */
  .home-view {
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    overflow-y: auto;
  }
  .home-heading {
    font-size: 28px;
    font-weight: 600;
    color: #1F2937;
    margin-bottom: 8px;
    text-align: center;
  }
  .home-subheading {
    font-size: 16px;
    color: #6B7280;
    margin-bottom: 40px;
    text-align: center;
  }
  .use-cases-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 100%;
  }
  .use-case-card {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    padding: 24px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .use-case-card:hover {
    border-color: #6366F1;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
    transform: translateY(-2px);
  }
  .use-case-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #6366F1;
  }
  .use-case-icon svg {
    width: 24px;
    height: 24px;
  }
  .use-case-title {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
  }
  .use-case-description {
    font-size: 14px;
    color: #6B7280;
    line-height: 1.5;
  }
`;
