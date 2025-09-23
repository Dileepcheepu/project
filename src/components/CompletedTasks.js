import React from 'react';
import '../styles/CompletedTasks.css';

const CompletedTasks = () => {
  const tasks = [
    { id: 1, title: 'Customer Follow-up Completed', date: '2025-05-08' },
    { id: 2, title: 'Sales Deal Closed', date: '2025-05-07' },
    { id: 3, title: 'Email Campaign Launched', date: '2025-05-06' },
  ];

  return (
    <div className="completed-tasks-container">
      <h2>Completed Tasks</h2>
      <ul className="completed-tasks-list">
        {tasks.map((task) => (
          <li key={task.id} className="completed-task-item">
            <h3>{task.title}</h3>
            <p>{task.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasks;
