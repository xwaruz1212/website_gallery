import React, { useState } from "react";
import Books from "../components/Books";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Start from "../components/StartSection";

const Home = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Start />
            <Books />
            <Gallery />
        </>
    );
};

export default Home;
