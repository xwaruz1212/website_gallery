import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: url("../../assets/images/background.png");
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.6s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    
`;

export const CloseIcon = styled(FaTimes)`
    color: white;
    background: transparent;
`;

export const Icon = styled.div`
    position: absolute;
    top: 13vh;
    right: 2.5vw;
    background: transparent;
    font-size: 4vh;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 20vh);
    text-align: center;

    @media screen and(max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 20vw);
    }
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7vh;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: white;
    cursor: pointer;
`;
