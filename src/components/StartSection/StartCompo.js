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
    font-size: 7vh;
    text-transform: uppercase;
    margin-top: 10vh;
    transition-duration: 3s;
    cursor: pointer;

    &:hover{
        color: white;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    max-width: 45vw;
    max-height: 42vh;
    padding: 1vw;
    border-radius: 1.5rem;
`;

export const StartP = styled.p`
    color: black;
    font-size: 3vh;
    width: 40vw;
    text-align: center;
    background: rgba(128, 128, 128, 0.126);
    padding: 0.4rem;
    border-radius: .3rem;
`;
