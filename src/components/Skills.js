import React from 'react';
import { FaHtml5, FaReact, FaCode } from 'react-icons/fa';

const Skills = () => {
    return (
        <section id="skills" className="skills card animated">
            <h2>Skills & Knowledge</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <FaHtml5 />
                    <h3>Front-end Development</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>JavaScript/ES 6</li>
                        <li>Sass/CSS3</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <FaReact />
                    <h3>Frameworks</h3>
                    <ul>
                        <li>React JS</li>
                        <li>Next.js</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                    <FaCode />
                    <h3>Tools/Libs</h3>
                    <ul>
                        <li>Jest</li>
                        <li>Enzyme</li>
                        <li>Cypress</li>
                        <li>MUI Styles</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
