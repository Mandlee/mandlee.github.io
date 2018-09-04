import React from 'react';

const experiences = [
    {
        company: 'EPAM Systems',
        title: 'Senior Frontend Developer',
        date: 'Nov 2020 - Present',
        description:
            "I'm currently working as a UIE developer. My job consist of implementing new features and maintaining existing websites for key customer in hospitality industry.",
    },
    {
        company: 'Hearsay Systems',
        title: 'Senior Frontend Developer',
        date: 'Apr 2019 - Nov 2020',
        description:
            "I've worked as a Frontend developer on Sites product. Hearsay Sites is the easiest and fastest way for creating beautiful and high converting agent websites for the financial services industry. My main responsibilities were developing next generation of Sites product, implementing new features and maintaining existing websites for key financial customers.",
    },
    {
        company: 'HBO Europe',
        title: 'Senior Frontend Developer',
        date: 'May 2017 - Mar 2019',
        description:
            "I worked on HBO GO's web platform through Attrecto Next Tech Digital Solutions. HBO GO is a web streaming platform, which is available in more than 10 countries in Europe. I was part of the team, which developed the new version of HBO GO's frontend. My main responsibilities were implementing new features and coding the final look and feel of the site.",
    },
    {
        company: 'Attrecto Next Tech Digital Solutions',
        title: 'Frontend Developer',
        date: 'Dec 2014 - Mar 2019',
        description:
            'Developed individual executive information systems with Javascript language, AngularJS framework and creating sitebuild for the screens with Sass, CSS. Participation in international, multi-team agile development projects, for US customer. The aim of these projects to visualize the data with charts to help customers to make a right decision.',
    },
    {
        company: 'Szintézis Informatika Zrt.',
        title: 'Android Developer Intern',
        date: 'Apr 2014 - Sep 2014',
        description:
            "Developed an Android application for Széchenyi István University that presented the university's infrastructure. My responsibilities included software design, implementation, testing and writing documentation.",
    },
];

const Experience = () => {
    return (
        <>
            <section id="experience">
                <h2>Work Experience</h2>
                {experiences.map(({ title, date, company, description }) => (
                    <article className="md:grid grid-cols-3 gap-4 py-2" key={company}>
                        <div className="">
                            <time className="leading-8">{date}</time>
                        </div>
                        <div className="col-span-2">
                            <h3 className="text-xl leading-8 font-semibold text-indigo-500">{company}</h3>
                            <h4 className="text-l pb-1 font-medium text-slate-500">{title}</h4>
                            <p className="tracking-wide">{description}</p>
                        </div>
                    </article>
                ))}
            </section>
            <section id="education">
                <h2>Education</h2>
                <article className="md:grid grid-cols-3 gap-4 py-2">
                    <div className="">
                        <time className="leading-8">Sep 2011 - Jan 2016</time>
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-xl leading-8 font-semibold text-indigo-500">Széchenyi István University</h3>
                        <h4 className="text-l pb-1 font-medium text-slate-500">
                            Bachelor's Degree, Engineering Information Technology
                        </h4>
                        <p className="tracking-wide">
                            Thesis: Creation of an Android application promoting and supporting healthy nutrition and
                            lifestyle. The purpose of the project was to showcase the newly released Material Design
                            elements and the steps required to create and Android Application from scratch.
                        </p>
                    </div>
                </article>
            </section>
        </>
    );
};
export default Experience;
