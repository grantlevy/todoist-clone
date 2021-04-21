import React, { useState } from 'react';
import { CgChevronDown, CgInbox, CgCalendar, CgCalendarToday } from 'react-icons/cg';
import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectValue();
  const [active, setActive] = useState('INBOX');
  const [showProjects, setShowProjects] = useState(true);
  
  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="inbox"
          className={active === "inbox" ? "active" : undefined}
          onClick={() => {
            setActive('inbox');
            setSelectedProject('INBOX');
          }}
        >
          <span>
            <CgInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li
          data-testid="today"
          className={active === "today" ? "active" : undefined}
          onClick={() => {
            setActive('today');
            setSelectedProject('TODAY');
          }}
        >
          <span>
            <CgCalendarToday />
          </span>
          <span>Today</span>
        </li>
        <li
          data-testid="next_7"
          className={active === "next_7" ? "active" : undefined}
          onClick={() => {
            setActive('next_7');
            setSelectedProject('NEXT_7');
          }}
        >          
          <span>
            <CgCalendar />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>

      <div
        className="sidebar__middle"
        onClick={() => setShowProjects(!showProjects)}
      >
        <span>
          <CgChevronDown
            className={!showProjects ? "hidden-projects" : undefined }
          />
        </span>
        <h2>Projects</h2>
      </div>

      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

      {showProjects && <AddProject />}
    </div>
  )
};