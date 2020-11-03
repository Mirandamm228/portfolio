import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component{
    render(){
        return(
            <div className="aboutme">
                <div className="grid p-3 mt-3">
                    <div className="header-div fadeInDown">
                        <h1 className="text-center">Miranda Manriquez | Web Developer</h1>
                    </div>

                    <div className="your-face fadeIn">
                        <img className="rounded img-fluid" src={require('../../images/proface (4).jpg')} alt=''/>
                    </div>

                    <div className="skills-div fadeIn">
                        <ul>
                            <li><p>JavaScript - Intermediate</p></li>
                            <li><p>Java - Beginner</p></li>
                        </ul>
                    </div>

                    <div className="history-div fadeIn">
                        <p>I've worked with a variety of JavaScript technologies like React, Redux, Node, Express, jQuery, and Angular 7. My interests include learning more programming languages such as Java, Python, and C#. Primarily, I am a front end developer. In 5 years, I want to be full stack and helping small businesses get an edge on the competition against larger companies by providing a quality website.</p>
                        <a href="/projects" aria-label=""><button className="btn btn-outline-light btn-lg btn-block" aria-label="View Projects">View Projects</button></a>
                    </div>

                    <div className="bio-div fadeIn">
                        <p>My interest in software began at a young age when it was described to me as a language. Growing up bilingual and self teaching other languages, knowing how to speak to computers seemed magical! Several years later during the summer of 2017, fate presented an opportunity to learn web development. I could not resist. My career in tech launched forward at the start of the new year. A few months in, I was hired to teach JavaScript full stack development while still learning! There were many struggles, and I thrived off each one. After receiving my certification, I interned with a startup company helping bring in funds by modifying existing WordPress templates and programming some of their own site with React and Material UI. Now I'm ready for the next step!</p>
                    </div>

                    <div className="contact-div fadeIn">
                        <a href="/contact" aria-label=""><button className="btn btn-outline-light btn-lg btn-block" aria-label="contact me">Contact Me</button></a>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default AboutMe;