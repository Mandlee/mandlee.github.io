import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Meta from '../components/Meta';
import { IconContext } from 'react-icons';

const iconSettings = {
    className: 'react-icons d-print-none',
    size: '3em',
};

const HomePage = () => {
    return (
        <IconContext.Provider value={iconSettings}>
            <Meta />
            <Header />
            <div className="container text-center">
                <Hero />
                <Experience />
                <Skills />
                <Projects />
            </div>
            <Contact />
        </IconContext.Provider>
    );
};

export default HomePage;
