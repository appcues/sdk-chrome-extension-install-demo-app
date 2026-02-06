// Tasks panel widget

import { mockTasks } from "../../data/index.js";
import { checkIcon } from "../../icons/index.js";

/**
 * Renders the Tasks panel widget
 * @returns {string} HTML string for tasks panel
 */
export function renderTasksPanel() {
  return `
    <div class="widget-panel">
      <div class="widget-header">
        <span class="widget-title">Tasks</span>
        <span class="widget-action">View all</span>
      </div>
      <div class="tasks-list">
        ${mockTasks
          .map(
            (task) => `
          <div class="task-item ${task.completed ? "completed" : ""}" data-task-id="${task.id}">
            <div class="task-checkbox ${task.completed ? "checked" : ""}">
              ${checkIcon}
            </div>
            <div class="task-content">
              <div class="task-title">${task.title}</div>
              <div class="task-meta">${task.meta}</div>
            </div>
            <span class="task-priority ${task.priority}">${task.priority}</span>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `;
}
