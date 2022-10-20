import React from 'react';
import styled, { keyframes } from 'styled-components';

export const ImageP = styled.img`
  max-width: 30vw;
  max-height: 60vh;
  border: 1rem solid black;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    max-width: 20vh;
  }
`;


export const ArrowLeft = styled.button`
  background: transparent;
  border: none;
  font-size: 8rem;
  cursor: pointer;
  color: white;
  position: absolute;
  left: 15vw;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    top: 35vh;
    left: 2vw;
  }
`;

export const ArrowRight = styled.button`
  background: transparent;
  border: none;
  font-size: 8rem;
  cursor: pointer;
  color: white;
  position: absolute;
  right: 15vw;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    top: 35vh;
    right: 2vw;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Fade = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${props => props.active ? fadeIn : false} 1s linear;
  display: ${props => props.active ? 'block' : 'none'};
`;

const ImageContent = ({ painting, active }) => {
    return (
        <Fade active={active}>
            <ImageP src={painting} />
        </Fade>
    );
};

export default ImageContent;