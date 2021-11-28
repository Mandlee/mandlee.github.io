import React from 'react';
import Helmet from 'react-helmet';

const SEO = () => {
    return (
        <Helmet>
            <html lang="en" />
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>Bence Mándli - Senior Frontend Developer</title>

            <meta name="identifier-url" content="https://mandlee.github.io/" />
            <meta name="title" content="Bence Mándli" />
            <meta
                name="description"
                content="Focused Senior Frontend Developer with 6 years of experience in frontend development with a wide range of software and services for multiple clients. Skilled in modern Javascript frameworks like Angular.JS, Vue.js and have a lot of experience with ES6(7) Javascript."
            />
            <meta name="keywords" content="javascript, es6, css, scss, sitebuild, react.js, d3js" />
            <meta name="author" content="Bence Mándli" />

            <meta property="og:type" content="profile" />
            <meta property="og:title" content="Bence Mándli" />
            <meta property="og:url" content="https://mandlee.github.io/" />
            <meta property="og:image" content="https://mandlee.github.io/img/new_avatar.png" />
            <meta property="profile:first_name" content="Bence" />
            <meta property="profile:last_name" content="Mándli" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="https://mandlee.github.io/" />
            <meta name="twitter:title" content="Bence Mandli - Frontend Developer" />
            <meta
                name="twitter:description"
                content="Focused Senior Frontend Developer with 6 years of experience in frontend development with a wide range of software and services for multiple clients."
            />

            <script type="application/ld+json">
                {`
                    {
                        "@context": "http://schema.org/",
                        "@type": "Person",
                        "name": "Bence Mándli",
                        "url": "https://mandlee.github.io/",
                        "image": "https://mandlee.github.io/img/new_avatar.png",
                        "sameAs": "https://www.linkedin.com/in/bencemandli/",
                        "jobTitle": "Senior Frontend Developer"
                    }
                `}
            </script>
        </Helmet>
    );
};
export default SEO;
