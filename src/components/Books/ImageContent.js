import React from "react";
import styled, { keyframes } from "styled-components";

export const Image = styled.img`
  max-width: 15vw;
  border-radius: 0 1rem 1rem 0;

  @media screen and (max-width: 768px) {
    max-width: 25vh;
  }
`;

export const BooksP = styled.p`
  font-size: 2.5vh;
  color: black;
  text-align: center;
  text-justify: newspaper;
  flex-wrap: wrap;
  max-width: 30vw;
  font-style: italic;
  font-weight: 200;
  padding-top: 2vh;

  @media screen and (max-width: 768px) {
    max-width: 90vw;
    font-size: 2vh;
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
    left: 4vw;
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
    right: 4vw;
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
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: ${props => props.active ? fadeIn : false} 1s linear;
  display: ${props => props.active ? 'block' : 'none'};
`;

const ImageContent = ({ book, description, active }) => {
  return (
    <Fade active={active}>
      <Image src={book} />
      <BooksP>{description}</BooksP>
    </Fade>
  );
};

export default ImageContent;
