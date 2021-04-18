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
          <li>+</li>
          <li>
            <CgDarkMode />
          </li>
        </ul>
      </div>
    </nav>
  </header>;
};
