import React from 'react';
import {createRoot} from "react-dom/client";
import "./styles.css"
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import About from "./About";
import WhatIDo from "./WhatIDo";
import Education from "./Education";
import Projects from "./Projects";
import Achievements from "./Achievements";
import IndustryFeedbacks from "./IndustryFeedbacks";
import Footer from "./Footer";

function App() {
    return (
        <div className="font-comfortaa overflow-x-hidden overflow-y-hidden">
            <Header />
            <Home />
            <Skills />
            <About />
            <WhatIDo />
            <Education />
            <Projects />
            <Achievements />
            <IndustryFeedbacks />
            <Footer />
        </div>
    )
}
const container = document.getElementById('root');
const root = createRoot(container)
root.render(<App />)

