import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-links">
        <Link className="sidebar-links__link" to="/profile">
          Profile
        </Link>
        <Link className="sidebar-links__link" to="/dialogs">
          Dialogs
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;
