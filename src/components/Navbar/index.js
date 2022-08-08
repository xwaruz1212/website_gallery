import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPalette,
  faBookReader,
  faClose,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(true);

  return (
    <div
      className="nav-bar"
      style={{
        left: menuOpened ? 0 : "-130px",
      }}
    >
      <button
        className="Menu-button"
        onClick={() => setMenuOpened(!menuOpened)}
      >
        {menuOpened ? (
          <FontAwesomeIcon icon={faClose} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>

      <nav
        style={{
          pointerEvents: menuOpened ? "all" : "none",
        }}
      >
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink activeclassname="active" className="Books-link" to="/Books">
          <FontAwesomeIcon icon={faBookReader} />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="Gallery-link"
          to="/Gallery"
        >
          <FontAwesomeIcon icon={faPalette} />
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
