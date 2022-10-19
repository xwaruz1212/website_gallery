import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="home"
              onClick={toggle}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              delay={100}
            >
              Home
            </SidebarLink>
            <SidebarLink
              to="books"
              onClick={toggle}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              delay={100}
            >
              Books
            </SidebarLink>
            <SidebarLink
              to="gallery"
              onClick={toggle}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              delay={100}
            >
              Gallery
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
