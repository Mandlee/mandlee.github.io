import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const iconSettings = {
    size: '4x',
    color: '#303f9f',
    className: 'd-print-none'
}

const Experience = () => {
    return (
        <section id="experience" className="experience card">
            <h2>Experience & Education</h2>
            <ul className="timeline">
                <li>
                    <span className="icon">
                        <FontAwesomeIcon icon={faSuitcase} {...iconSettings} />
                    </span>
                    <div className="animated" data-animate-type="fadeInRight">
                        <h3>Hearsay System</h3>
                        <h4 className="job-title">Senior Frontend Developer</h4>
                        <div className="date">Apr 2019 - Present</div>
                        <p>
                            I'm currently working as a Frontend developer on Sites product. Hearsay Sites is the easiest
                            and fastest way for creating beautiful and high converting agent websites for the financial
                            services industry. My main responsibilities are developing next generation of Sites product,
                            implementing new features and maintaining existing websites for key financial customers.
                        </p>
                    </div>
                </li>
                <li>
                    <span className="icon">
                        <FontAwesomeIcon icon={faSuitcase} {...iconSettings} />
                    </span>
                    <div className="animated" data-animate-type="fadeInLeft">
                        <h3>HBO Europe</h3>
                        <h4 className="job-title">Senior Frontend Developer</h4>
                        <div className="date">May 2017 - Mar 2019</div>
                        <p>
                            I worked as a frontend developer on HBO GO's web platform through Attrecto Next Tech Digital
                            Solutions. HBO GO is a web streaming platform, which is available in more than 10 countries
                            in Europe. I was part of the team, which developed the new version of HBO GO's frontend. My
                            main responsibilities were implementing new features and coding the final look and feel of
                            the site.
                        </p>
                    </div>
                </li>
                <li>
                    <span className="icon">
                        <FontAwesomeIcon icon={faSuitcase} {...iconSettings} />
                    </span>
                    <div className="animated" data-animate-type="fadeInRight">
                        <h3>Attrecto Next Tech Digital Solutions</h3>
                        <h4 className="job-title">Frontend Developer</h4>
                        <div className="date">Dec 2014 - Mar 2019</div>
                        <p>
                            Developed individual executive information systems with Javascript language, AngularJS
                            framework and creating sitebuild for the screens with Sass, CSS. Participation in
                            international, multi-team agile development projects, for US customer. The aim of these
                            projects to visualize the data with charts to help customers to make a right decision.
                        </p>
                    </div>
                </li>
                <li>
                    <span className="icon">
                        <FontAwesomeIcon icon={faSuitcase} {...iconSettings} />
                    </span>
                    <div className="animated" data-animate-type="fadeInLeft">
                        <h3>Szintézis Informatika Zrt.</h3>
                        <h4 className="job-title">Android Developer Intern</h4>
                        <div className="date">Apr 2014 - Sep 2014</div>
                        <p>
                            Developed an Android application for Széchenyi István University that presented the
                            university's infrastructure. My responsibilities included software design, implementation,
                            testing and writing documentation.
                        </p>
                    </div>
                </li>

                <li id="university">
                    <span className="icon">
                        <FontAwesomeIcon icon={faGraduationCap} {...iconSettings} />
                    </span>
                    <div className="animated" data-animate-type="fadeInRight">
                        <h3>Széchenyi István University</h3>
                        <h4 className="job-title">Bachelor's Degree, Engineering Information Technology</h4>
                        <div className="date">Sep 2011 - Jan 2016</div>
                        <p>
                            Thesis: Creation of an Android application promoting and supporting healthy nutrition and
                            lifestyle. The purpose of the project was to showcase the newly released Material Design
                            elements and the steps required to create and Android Application from scratch.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    );
};
export default Experience;
