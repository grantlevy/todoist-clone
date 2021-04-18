import React from 'react';
import { CgChevronDown, CgInbox, CgCalendar, CgCalendarToday } from 'react-icons/cg';

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <CgInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li>
        <span>
          <CgCalendarToday />
        </span>
        <span>Today</span>
      </li>
      <li>
        <span>
          <CgCalendar />
        </span>
        <span>Next 7 days</span>
      </li>
    </ul>

    <div className="sidebar__middle">
      <span>
        <CgChevronDown />
        <h2>Projects</h2>
      </span>
    </div>

    <ul className="sidebar__projects">Projects will be here!</ul>

    Add Project Component Here!!
  </div>
)