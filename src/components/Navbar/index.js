import React from "react";
import { FaBars, FaHome, FaBookReader, FaPalette } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarCompo";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavLogo to="/" onClick={toggleHome}>
          Makis Lazos
        </NavLogo>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="home"
                spy={true}
                smooth={true}
                offset={-90}
                duration={800}
                delay={100} >
                <FaHome />
                Home


              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="books"
                spy={true}
                smooth={true}
                offset={-90}
                duration={800}
                delay={100}>
                <FaBookReader />
                Books

              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="gallery"
                spy={true}
                smooth={true}
                offset={-90}
                duration={800}
                delay={100} >
                <FaPalette />
                Gallery

              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
