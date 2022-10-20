import React, { useState } from 'react'
import styled from 'styled-components';
import { elmCnt } from './paintings';
import Paintings from './paintings'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import ImageContent, { ArrowLeft, ArrowRight } from './ImageContent';

const GalleryContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(137,150,201);
  background: linear-gradient(180deg, rgba(137,150,201,1) 36%, rgba(255,255,255,1) 94%);
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
      <GalleryH1> My Work </GalleryH1>
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
          <FaAngleLeft onClick={prevSlide} style={{ color: 'black' }} />
        </ArrowLeft>
        <ArrowRight>
          <FaAngleRight onClick={nextSlide} style={{ color: 'black' }} />
        </ArrowRight>

      </ImageContainer>
    </GalleryContainer>

  );
}

export default Gallery;