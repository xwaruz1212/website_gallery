import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const StartContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#fffdd0;
    border-bottom: 1rem solid black;
    z-index: 1;

`;

export const StartH2 = styled.h2`
    color: black;
    font-size: 7vh;
    position: absolute;
    text-transform: uppercase;
    top: 13vh;
    cursor: pointer;

    

    @media screen and (max-width: 768px) {
        font-size: 4vh;
        text-align: center;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 11vh;
`;

export const Image = styled.img`
    max-width: 45vw;
    max-height: 42vh;
    padding: 1vw;
    border-radius: 1.5rem;

    @media screen and (max-width: 768px) {
        max-width: 70vw;
        max-height: 24vh;
    }
`;

export const StartP = styled.p`
    color: black;
    font-size: 3vh;
    width: 40vw;
    text-align: center;
    background: rgba(128, 128, 128, 0.126);
    padding: 0.4rem;
    border-radius: .3rem;

    @media screen and (max-width: 768px) {
        width: 90vw;
        font-size: 2.3vh;
        padding-top: 3vh;
    }
`;

export const ArrowScroll = styled(LinkScroll)`
   display: none;


   @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 7vh;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: black;
    cursor: pointer;
   }
`;
