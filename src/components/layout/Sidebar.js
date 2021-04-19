import React from 'react';
import { CgChevronDown, CgInbox, CgCalendar, CgCalendarToday } from 'react-icons/cg';

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li data-testid="inbox" className="inbox">
        <span>
          <CgInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li data-testid="today" className="today">
        <span>
          <CgCalendarToday />
        </span>
        <span>Today</span>
      </li>
      <li data-testid="next_7" className="next_7">
        <span>
          <CgCalendar />
        </span>
        <span>Next 7 days</span>
      </li>
    </ul>

    <div className="sidebar__middle">
      <span>
        <CgChevronDown />
      </span>
      <h2>Projects</h2>
    </div>

    <ul className="sidebar__projects">Projects will be here!</ul>

    Add Project Component Here!!
  </div>
)