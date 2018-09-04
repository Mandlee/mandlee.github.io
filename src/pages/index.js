import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Meta from '../components/Meta';
import { VscGithubAlt } from 'react-icons/vsc';
import { TiSocialLinkedin } from 'react-icons/ti';

const footerIcons = [
    {
        icon: <VscGithubAlt />,
        link: 'https://github.com/Mandlee',
    },
    {
        icon: <TiSocialLinkedin />,
        link: 'https://www.linkedin.com/in/bencemandli/',
    },
];

const HomePage = () => {
    return (
        <>
            <Meta />
            <div className="bg-slate-100 md:p-8 p-2 min-h-screen">
                <div className="container mx-auto p-4 md:p-16 bg-white max-w-4xl drop-shadow print:drop-shadow-none">
                    <Hero />
                    <Experience />
                    <Skills />
                </div>
                <footer className="print:hidden">
                    <p className="text-center py-4 text-xs">
                        &copy; 2022 Bence Mandli - Handcrafted with Gatsby and Tailwind
                    </p>
                    <div className="flex items-center justify-center pb-4 text-xl">
                        {footerIcons.map(({ icon, link }) => (
                            <a href={link} target="_blank" rel="noreferrer" className="px-2 hover:text-indigo-500">
                                {icon}
                            </a>
                        ))}
                    </div>
                </footer>
            </div>
        </>
    );
};

export default HomePage;
