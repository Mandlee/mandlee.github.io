import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import SEO from '../components/SEO';

const HomePage = () => {
    return (
        <>
            <SEO />
            <Header />
            <div className="container text-center">
                <Hero />
                <Experience />
                <Skills />
                <Projects />
            </div>
            <Contact />
        </>
    );
};

export default HomePage;
