import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = _ => {
  return (
    <nav id="sidebar" className="bg-dark">
      <div className="sidebar-header" style={{ textAlign: 'center' }}>

      </div>

      <ul className="list-unstyled components">
        <p
          style={{
            color: '#2fbc1a',
            fontFamily: 'Shadows Into Light',
            fontSize: '1.7em',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }}
        >
          Pico Certo PWA
        </p>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>

    </nav>
  );
};

export default Sidebar;
