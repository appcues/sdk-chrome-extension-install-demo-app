// Home view

import { useCases } from '../data/index.js';

/**
 * Renders the Home view content
 * @returns {string} HTML string for home view
 */
export function renderHomeView() {
  return `
    <div class="home-view">
      <h1 class="home-heading">Choose a use case</h1>
      <p class="home-subheading">Select what you'd like to explore</p>
      <div class="use-cases-grid">
        ${useCases.map(uc => `
          <div class="use-case-card" data-usecase="${uc.id}">
            <div class="use-case-icon">${uc.icon}</div>
            <div class="use-case-title">${uc.title}</div>
            <div class="use-case-description">${uc.description}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
