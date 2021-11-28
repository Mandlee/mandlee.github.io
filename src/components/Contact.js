import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import vcard from './../../static/img/v_card.png';

const iconSettings = {
    size: '2x',
}

const Contact = () => {
    return (
        <section id="contact">
            <div className="container text-center contact">
                <h2>Contact</h2>
                <div className="row contact-row">
                    <div className="col-lg-3 col-md-6">
                        <a href="tel:+36306635183">
                            <FontAwesomeIcon icon={faPhone} {...iconSettings} />
                            <h3>Phone</h3>
                            <p>
                                <span className="phone-number"></span>
                            </p>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="mailto:&#109;&#097;&#110;&#100;&#108;&#105;&#046;&#098;&#101;&#110;&#099;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">
                            <FontAwesomeIcon icon={faEnvelope} {...iconSettings} />
                            <h3>Email</h3>
                            <p>
                                &#109;&#097;&#110;&#100;&#108;&#105;&#046;&#098;&#101;&#110;&#099;&#101;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
                            </p>
                        </a>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                        <a
                            href="https://www.linkedin.com/in/bencemandli/"
                            className="d-print-none"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} {...iconSettings} />
                            <h3>Linkedin</h3>
                            <p>bencemandli</p>
                        </a>
                        <img src={vcard} className="d-none d-print-block v-card" alt="vcard" />
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <FontAwesomeIcon icon={faMapMarkerAlt} {...iconSettings} />
                        <h3>Location</h3>
                        <p>Budapest</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
