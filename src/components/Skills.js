import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faReact, faHtml5 } from '@fortawesome/free-brands-svg-icons'

const iconSettings = {
    size: '3x',
    color: '#303f9f',
    className: 'd-print-none'
}

const Skills = () => {
    return (
        <section id="skills" className="skills card animated">
            <h2>Skills & Knowledge</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <FontAwesomeIcon icon={faHtml5} {...iconSettings} />
                    <h3>Front-end Development</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>JavaScript/ES 6</li>
                        <li>Sass/CSS3</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-6">
                    <FontAwesomeIcon icon={faReact} {...iconSettings} />
                    <h3>Frameworks</h3>
                    <ul>
                        <li>React JS</li>
                        <li>Redux</li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                    <FontAwesomeIcon icon={faCode} {...iconSettings} />
                    <h3>Tools/Libs</h3>
                    <ul>
                        <li>Jest Testing Framework</li>
                        <li>MUI Styles</li>
                        <li>D3.js</li>
                        <li>VS Code/Webstorm</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
