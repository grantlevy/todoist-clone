import React, { useState } from 'react';
import { CgDarkMode } from 'react-icons/cg'
import { AddTask } from '../AddTask';

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return <header className="header" data-testid="header">
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="Grant's Logo"/>
      </div>
      <div className="settings">
        <ul>
          <li
            data-testid="quick-add-task-action"
            className="settings__add"
            onClick={() => {
              setShowQuickAddTask(true);
              setShouldShowMain(true);
            }}
          >
            +
          </li>
          <li
            data-testid="dark-mode-action"
            className="settings__darkmode"
            onClick={() => setDarkMode(!darkMode)}
          >
            <CgDarkMode />
          </li>
        </ul>
      </div>
    </nav>

    <AddTask
      showAddTaskMain={false}
      shouldShowMain={shouldShowMain}
      showQuickAddTask={showQuickAddTask}
      setShowQuickAddTask={setShowQuickAddTask}
    />
  </header>;
};
