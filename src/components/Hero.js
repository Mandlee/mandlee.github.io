import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
    return (
        <header>
            <div className="flex">
                <div className="flex-grow">
                    <div className="w-16 h-16 rounded-full overflow-hidden translate-x-0">
                        <StaticImage
                            src="../images/avatar.png"
                            className="rounded-full"
                            placeholder="blurred"
                            alt="Bence Mandli"
                        />
                    </div>
                </div>
                <div className="flex-none">
                    <p>Hungary - Budapest</p>
                    <a href="mailto:mandli.bence@gmail.com" className="block hover:text-indigo-500">
                        mandli.bence@gmail.com
                    </a>
                    <a href="tel:+36306635183" className="block hover:text-indigo-500">
                        +36 30 663 5183
                    </a>
                </div>
            </div>
            <h1 className="text-4xl font-medium py-4">Bence Mándli</h1>
            <p className="text-xl tracking-wider text-slate-500">
                Senior Frontend Developer with 7 years of experience in frontend development. Skilled in modern
                Javascript frameworks like React.js and have a lot of experience with ES6 Javascript. While I enjoy all
                aspects of my job, I think one my favorite part of a project is creating the sitebuild and style,
                because the results are immediately visible to anyone.
            </p>
        </header>
    );
};
export default Hero;
