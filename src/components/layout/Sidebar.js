import React, { useState } from 'react';
import { CgChevronDown, CgInbox, CgCalendar, CgCalendarToday } from 'react-icons/cg';
import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects'

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue;
  const [active, setActive] = useState('INBOX');
  const [showProjects, setShowProjects] = useState(true);
  
  return (
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

      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

      {/* {showProjects && <Projects />} */}
    </div>
  )
};