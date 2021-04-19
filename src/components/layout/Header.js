import React from 'react';
import { CgDarkMode } from 'react-icons/cg'

export const Header = () => {
  return <header className="header" data-testid="header">
    <nav>
      <div className="logo">
        <img src="/images/logo.png" alt="Grant's Logo"/>
      </div>
      <div className="settings">
        <ul>
          <li data-testid="quick-add-task-action" className="settings__add">+</li>
          <li data-testid="dark-mode-action" className="settings__darkmode">
            <CgDarkMode />
          </li>
        </ul>
      </div>
    </nav>
  </header>;
};
