import React from 'react';

const skills = [
    'HTML5',
    'JavaScript/ES6',
    'Sass/CSS3',
    'React.js',
    'Next.js',
    'Jest',
    'Enzyme',
    'Cypress',
    'MUI',
    'Accessibility',
];

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="text-2xl pb-4 font-medium">Skills</h2>
            <ul className="grid grid-cols-2 md:block print:block">
                {skills.map(skill => (
                    <li
                        key={skill}
                        className="bg-slate-100 hover:bg-indigo-500 hover:text-slate-100 mr-2 mb-2 py-2 px-10 whitespace-nowrap md:inline-block print:p-0 text-xs"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
