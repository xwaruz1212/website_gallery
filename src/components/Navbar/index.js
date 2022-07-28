import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPalette, faBookReader } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="nav-bar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#ffff" />
        </NavLink>
        <NavLink activeclassname="active" className="Books-link" to="/Books">
          <FontAwesomeIcon icon={faBookReader} color="#ffff" />
        </NavLink>
        <NavLink activeclassname="active" className="Gallery-link" to="/Gallery">
          <FontAwesomeIcon icon={faPalette} color="#ffff" />
        </NavLink>
        
      </nav>
      </div>
    
  );
};

export default Navbar;