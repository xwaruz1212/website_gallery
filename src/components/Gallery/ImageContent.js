import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Image = styled.img`
  max-width: 30vw;
  max-height: 60vh;

  @media screen and (max-width: 768px) {
    max-width: 50vh;
    max-height: 80vh;
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
    font-size: 4.5rem;
    left: 1vw;
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
    font-size: 4.5rem;
    right: 1vw;
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
  animation-duration: 1s;
`;

const ImageContent = ({ painting, active }) => {
  return (
    <Fade active={active}>
      <Image src={painting} />
    </Fade>
  );
};

export default ImageContent;