import React, { useEffect } from 'react';
const SmoothScroll = typeof window !== `undefined` ? require('smooth-scroll') : null;

const Header = () => {
    useEffect(() => {
        new SmoothScroll('a[href*="#"]', {
            header: '.navbar',
            offset: 20,
        });
    });

    return (
        <nav className="navbar navbar-expand-sm navbar-fixed">
            <div className="container">
                <a className="navbar-brand" href="#about">
                    Bence Mándli
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">
                                Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
