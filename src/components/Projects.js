import React from 'react';
// import * as basicLightbox from 'basiclightbox';

import prismaPrev from './../../static/img/projects/prisma_prev.png';
import wfPrev from './../../static/img/projects/wf_prev.png';
import wuPrev from './../../static/img/projects/wu_prev.png';
import intensePrev from './../../static/img/projects/intense_prev.png';
import friendlyGreenPrev from './../../static/img/projects/friendlygreen_prev.png';
import royalBluePrev from './../../static/img/projects/royalblue_prev.png';
import amfamPrev from './../../static/img/projects/amfam_prev.png';
import goPrev from './../../static/img/projects/go_prev.png';
import helpCenterPrev from './../../static/img/projects/helpcenter_prev.png';
import digitalPrev from './../../static/img/projects/digital_dashboard_prev.png';
import financialPrev from './../../static/img/projects/financial_dashboard_prev.png';
import insurancePrev from './../../static/img/projects/insurance_dashboard_prev.png';
import stockDashboardPrev from './../../static/img/projects/stock_dashboard_prev.png';
import compassPrev from './../../static/img/projects/compass_prev.png';
import bridalPrev from './../../static/img/projects/feher_rozsa_prev.png';

const projects = [
    {
        title: 'Site Editor',
        description: 'React.js, REDUX, MUI Styles',
        thumbnailImg: prismaPrev,
    },
    {
        title: 'Sales demo #2',
        description: 'Sitebuild (HTML5/SASS), React.js, jinja2',
        thumbnailImg: wuPrev,
    },
    {
        title: 'Sales demo #1',
        description: 'Sitebuild (HTML5/SASS), React.js, jinja2',
        thumbnailImg: wfPrev,
    },
    {
        title: 'Intense Bordeaux theme',
        description: 'Sitebuild (HTML5/SASS), React.js, jinja2',
        thumbnailImg: intensePrev,
    },
    {
        title: 'Friendly Green theme',
        description: 'Sitebuild (HTML5/SASS), React.js, jinja2',
        thumbnailImg: friendlyGreenPrev,
    },
    {
        title: 'Royal Blue theme',
        description: 'Sitebuild (HTML5/SASS), React.js, jinja2',
        thumbnailImg: royalBluePrev,
    },
    {
        title: 'Amfam sites redesign',
        description: 'Sitebuild (HTML5/SASS), Javascript/ES6, jinja2',
        thumbnailImg: amfamPrev,
    },
    {
        title: 'HBO GO',
        description: 'Sitebuild (HTML5/SASS), Javascript/ES6, PHP, Gulp',
        thumbnailImg: goPrev,
    },
    {
        title: 'HBO Help Center',
        description: 'Sitebuild (HTML5/SASS), VueJS',
        thumbnailImg: helpCenterPrev,
    },
    {
        title: 'Digital Dashboard',
        description: 'Sitebuild (HTML5/SASS), AngularJS (ES6), D3JS',
        thumbnailImg: digitalPrev,
    },
    {
        title: 'Financial Dashboard',
        description: 'Sitebuild (HTML5/SASS), AngularJS, D3JS',
        thumbnailImg: financialPrev,
    },
    {
        title: 'Insurance Dashboard',
        description: 'Sitebuild (HTML5/SASS), AngularJS, D3JS',
        thumbnailImg: insurancePrev,
    },
    {
        title: 'Stock Exchange Dashboard',
        description: 'Sitebuild (HTML5/CSS3), Bootstrap, Javascript, D3JS',
        thumbnailImg: stockDashboardPrev,
    },
    {
        title: 'Széchenyi Compass',
        description: 'Android SDK, REST API, SQLite',
        thumbnailImg: compassPrev,
    },
    {
        title: 'Fehér Rózsa Bridal',
        description: 'Sitebuild (HTML5/CSS3), Wordpress',
        thumbnailImg: bridalPrev,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="animated projects card">
            <h2>Projects</h2>
            <div className="row">
                {projects.map(({ title, description, thumbnailImg }) => (
                    <div className="col-lg-3 col-sm-6" key={title}>
                        <div className="project-item">
                            <div className="project-text">
                                <div className="project-description">
                                    <h3>{title}</h3>
                                    <small>{description}</small>
                                </div>
                            </div>
                            <img src={thumbnailImg} className="bl-thumbnail" alt={title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
