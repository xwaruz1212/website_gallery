import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Books from './components/Books'
import Gallery from './components/Gallery'
import { useState } from 'react';


const Home = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Home />
            <Books />
            <Gallery />
        </>
    );
};

export default Home;