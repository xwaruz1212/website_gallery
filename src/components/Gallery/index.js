import React, { useState } from 'react'
import styled from 'styled-components';
import { elmCnt } from './paintings';
import Paintings from './paintings'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ImageContent, { ArrowLeft, ArrowRight } from './ImageContent';

const GalleryContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #fffdd0;
  text-align: center;
`;

const GalleryH1 = styled.h1`
  color: black;
  font-size: 10vh;
  letter-spacing: 0.5vw;
  text-transform: uppercase;
  cursor: pointer;

    @media screen and (max-width: 768px) {
      font-size: 7vh;
      margin-top: 3vh;
    }
`;

const ImageContainer = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
`;

const ImageCounter = styled.p`
  font-size: 3vh;
  font-style: italic;
  position: relative;
  top: -10vh;
`;


const mod = (a, n) => a - n * Math.floor(a / n);

const Gallery = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((i) => mod(++i, elmCnt));
  };

  const prevSlide = () => {
    setCurrent((i) => mod(--i, elmCnt));
  };
  return (
    <GalleryContainer id="gallery">
      <GalleryH1> My Works </GalleryH1>
      <ImageContainer>
        {
          Paintings.map((t, i) =>
            <ImageContent
              key={i}
              painting={t}
              active={i === current ? true : false}
            />)
        }
        <ArrowLeft>
          <FaAngleLeft onClick={prevSlide} style={{ color: 'rgba(0, 0, 0, 0.679)' }} />
        </ArrowLeft>
        <ArrowRight>
          <FaAngleRight onClick={nextSlide} style={{ color: 'rgba(0, 0, 0, 0.679)' }} />
        </ArrowRight>

      </ImageContainer>
      <ImageCounter>{current + 1}/{elmCnt}</ImageCounter>
    </GalleryContainer>

  );
}

export default Gallery;