import React, { useState } from 'react'
import { booksList, descriptions, elmCnt } from './BooksArray';
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight, FaArrowAltCircleDown } from "react-icons/fa";
import ImageContent, { ArrowLeft, ArrowRight } from './ImageContent';
import { ArrowScroll } from '../StartSection/StartCompo';

const BooksContainer = styled.div`
    background: #fffdd0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
    border-bottom: 1rem solid black;
`;

const BooksContent = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const BooksH1 = styled.h1`
    text-align: center;
    font-size: 10vh;
    color: black;
    letter-spacing: 0.5vw;
    text-transform: uppercase;
    cursor: pointer;


    @media screen and (max-width: 768px) {
        font-size: 7vh;
    }
`;

const ImageContainer = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 768px) {
        height: 60vh;
    }
`;

const mod = (a, n) => a - n * Math.floor(a / n);

const Books = () => {
    const [current, setCurrent] = useState(0)

    const nextItem = () => {
        setCurrent((i) => mod(++i, elmCnt));
    };

    const prevItem = () => {
        setCurrent((i) => mod(--i, elmCnt));
    };

    return (
        <BooksContainer id="books">
            <BooksContent>
                <BooksH1> My Books </BooksH1>
                <ImageContainer>
                    {
                        booksList.map((t, i) =>
                            <ImageContent
                                key={i}
                                book={t}
                                description={descriptions[current]}
                                active={i === current ? true : false}

                            />)
                    }
                    <ArrowLeft>
                        <FaAngleLeft onClick={prevItem} style={{ color: 'rgba(0, 0, 0, 0.679)' }} />
                    </ArrowLeft>
                    <ArrowRight>
                        <FaAngleRight onClick={nextItem} style={{ color: 'rgba(0, 0, 0, 0.679)' }} />
                    </ArrowRight>

                </ImageContainer>
            </BooksContent>
            <ArrowScroll
                to="gallery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                delay={100}>
                <FaArrowAltCircleDown style={{ color: 'rgba(0, 0, 0, 0.679)' }} />
            </ArrowScroll>
        </BooksContainer>
    )
}

export default Books;