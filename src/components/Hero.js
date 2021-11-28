import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
    return (
        <section className="about card animated fadeIn">
            <div className="row">
                <div className="col-md-8 offset-md-2 details">
                    <StaticImage
                        src="../images/avatar.png"
                        className="avatar rounded mx-auto d-block"
                        placeholder="blurred"
                        layout="fixed"
                        width={200}
                        height={200}
                        alt="Bence Mandli"
                    />
                    <div className="intro">
                        <h1>Bence Mándli</h1>
                        <p>
                            Senior Frontend Developer with 7 years of experience in frontend development. Skilled in
                            modern Javascript frameworks like React.js and have a lot of experience with ES6 Javascript.
                            While I enjoy all aspects of my job, I think my favorite part of a project is creating the
                            sitebuild and style, because the results are immediately visible to anyone.
                        </p>
                        <a className="btn btn-primary btn-lg" href="#contact" role="button">
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
