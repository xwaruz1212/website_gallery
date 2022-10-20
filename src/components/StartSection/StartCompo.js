import styled from "styled-components"

export const StartContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgb(137,150,201);
    background: linear-gradient(180deg, rgba(137,150,201,1) 36%, rgba(255,255,255,1) 94%);
    border-bottom: 1rem solid black;
    z-index: 1;
`;

export const StartH2 = styled.h2`
    color: black;
    font-size: 8vh;
    position: absolute;
    top: 14vh;
    text-transform: uppercase;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    max-width: 34vw;
    max-height: 40vh;
    padding: 3vw;
`;

export const StartP = styled.p`
    color: black;
    font-size: 3vh;
    width: 40vw;
    text-align: center;
`;
