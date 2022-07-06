import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCamera, faBookReader } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="nav-bar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="Books-link" to="/Books">
          <FontAwesomeIcon icon={faBookReader} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="Gallery-link" to="/Gallery">
          <FontAwesomeIcon icon={faCamera} color="#4d4d4e" />
        </NavLink>
        
      </nav>
      </div>
    
  );
};

export default Navbar;