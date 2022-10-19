import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: rgb(12, 22, 79);
  background: linear-gradient(
    90deg,
    rgba(12, 22, 79, 1) 0%,
    rgba(29, 49, 117, 1) 100%,
    rgba(49, 59, 100, 1) 100%
  );
  height: 12vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 100;
  border: 1px solid #0c164f;
  border-radius: 0rem 0rem 10rem 0rem;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    transition: 0.6s all ease;
  }
`;

export const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    height: 12vh;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    background: transparent;
    
    
`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  background: transparent;
  justify-self: flex-end;
  cursor: pointer;
  max-width: 3rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-left: 4vw;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 2vw;
    transform: translate(-50%, 50%);
    font-size: 5vh;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  background: transparent;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 10vh;
  font-size: 4vh;
`;

export const NavLink = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 5vw;
  height: 100%;
  cursor: pointer;

  :active {
    border-bottom: 3px solid green;
  }
`;
