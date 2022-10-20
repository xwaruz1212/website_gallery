import React from "react";
import styled, { keyframes } from "styled-components";

export const ImageP = styled.img`
  max-width: 15vw;

  @media screen and (max-width: 768px) {
    max-width: 20vh;
  }
`;

export const BooksP = styled.p`
  font-size: 4vh;
  color: #fff;
  text-align: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    font-size: 3vh;
  }
`;

export const ArrowLeft = styled.button`
  background: transparent;
  border: none;
  font-size: 8rem;
  cursor: pointer;
  color: white;
  position: absolute;

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
  right: 5vw;

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

const ImageContent = ({ book, description, active }) => {
  return (
    <Fade active={active}>
      <ImageP src={book} />
      <BooksP>{description}</BooksP>
    </Fade>
  );
};

export default ImageContent;
