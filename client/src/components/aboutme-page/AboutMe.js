import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component{
    render(){
        return(
            <div className="aboutme">
                <div className="grid p-3 mt-3">
                    <div className="header-div">
                        <h1 className="text-center emphasis-color">Miranda Manriquez | Web Developer</h1>
                    </div>

                    <div className="skills-div">
                        <p>I've worked with a variety of JavaScript technologies like React, Redux, Node, Express, Mongo, Ionic, jQuery, CSS, and Angular. </p>
                        <a href="/projects" aria-label=""><button className="btn btn-secondary btn-lg btn-block" aria-label="View Projects">View Projects</button></a>
                    </div>
                    
                    <div className="your-face">
                        <img className="rounded img-fluid" src="https://avatars2.githubusercontent.com/u/35352672?s=460&v=4" alt=''/>
                    </div>

                    <div className="bio-div">
                        <p>My interest in software began at a young age when it was described to me as a language. Growing up bilingual and self teaching other languages, knowing how to speak to computers seemed magical! Several years later during the summer of 2017, fate presented an opportunity to learn web development. I could not resist. My career in tech launched forward at the start of the new year. A few months in, I was hired to teach JavaScript full stack development while still learning! There were many struggles, and I thrived off each one. After receiving my certification, I’ve been helping a startup company find its footing as an intern while mentoring. Now I'm ready for the next step!</p>
                    </div>

                    <div className="contact-div">
                        <p>If you are in need of a website to make your business shine or you're missing something from your team... </p>
                        <a href="/contact" aria-label=""><button className="btn btn-primary btn-lg btn-block" aria-label="contact me">Contact Me</button></a>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default AboutMe;