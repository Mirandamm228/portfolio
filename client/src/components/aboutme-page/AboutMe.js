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
                        <p>I've worked with a variety of JavaScript technologies like React, Redux, Node, Express, MongoDB, Ionic, jQuery, CSS, and Angular. My interests include learning more programming languages such as Java, PHP, and C#. Primarily, I am a front end developer. In 5 years, I want to be full stack and helping small business get an edge on the competition against larger companies by providing a quality website.</p>
                        <a href="/projects" aria-label=""><button className="btn btn-primary btn-lg btn-block" aria-label="View Projects">View Projects</button></a>
                    </div>
                    
                    <div className="your-face">
                        <img className="rounded img-fluid" src="https://instagram.fphx1-2.fna.fbcdn.net/vp/026ed7fe89b952072837f4441d8d5e43/5D48E1A9/t51.2885-19/s320x320/56702428_1188607167981799_5791833827529719808_n.jpg?_nc_ht=instagram.fphx1-2.fna.fbcdn.net" alt=''/>
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