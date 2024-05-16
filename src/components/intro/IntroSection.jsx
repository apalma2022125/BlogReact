import React from 'react';
import './IntroSection.css';

export const IntroSection = () => {
    return (
        <section className="intro-section">
            <div className="intro-content">
                <h1>I'm <span className="highlight">Ángelo</span> Palma</h1>
                <p>
                    I'm Ángelo Palma, an 18-year-old passionate about technology and currently in the final year
                    of my degree in Informatics. I have been deeply involved in the world of software development, gaining
                    experience in creating dynamic and responsive web applications and its logic.
                </p>
                <a href="../../../public/cv.pdf" className="download-cv" download>Download CV</a>
            </div>
            <div className="intro-image">
                <img src="../../../public/yo.jpeg" alt="Ángelo Palma" />
            </div>
        </section>
    );
};
