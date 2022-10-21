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
  transition-duration: 3s;
    cursor: pointer;

    &:hover{
        color: white;
    }

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
          <FaAngleLeft onClick={prevSlide} style={{ color: 'rgba(128, 128, 128, 0.579)' }} />
        </ArrowLeft>
        <ArrowRight>
          <FaAngleRight onClick={nextSlide} style={{ color: 'rgba(128, 128, 128, 0.579)' }} />
        </ArrowRight>

      </ImageContainer>
    </GalleryContainer>

  );
}

export default Gallery;