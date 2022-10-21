import React, { useState } from 'react'
import { booksList, descriptions, elmCnt } from './BooksArray';
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ImageContent, { ArrowLeft, ArrowRight } from './ImageContent';

const BooksContainer = styled.div`
    background: #fffdd0;
    width: 100%;
    height: 100vh;
    display: flex;
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
    transition-duration: 3s;
    cursor: pointer;

    &:hover{
        color: white;
    }

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
        height: 70vh;
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
                        <FaAngleLeft onClick={prevItem} style={{ color: 'black' }} />
                    </ArrowLeft>
                    <ArrowRight>
                        <FaAngleRight onClick={nextItem} style={{ color: 'black' }} />
                    </ArrowRight>

                </ImageContainer>
            </BooksContent>
        </BooksContainer>
    )
}

export default Books;