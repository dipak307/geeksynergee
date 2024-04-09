import React from 'react';
import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/info">Company Info</Link></li>
      </ul>
    </nav>
  );
}

export default MenuBar;