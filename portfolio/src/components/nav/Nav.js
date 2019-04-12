import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Contact from '../contact-page/Contact';
import LandingPage from '../landing-page/LandingPage';
import Projects from '../projects-page/Project';
import AboutMe from '../aboutme-page/AboutMe';

import './Nav.css';

class Nav extends React.Component{
    render(){
        return(
            <Router>
                <div className="transparent-background">
                    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" aria-label="Home" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-label="About" to="/aboutme">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-label="Projects" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-label="Contact" to="/contact">Contact</Link>
                            </li>
                            </ul>
                            <span className="navbar-text">
                                Miranda Manriquez | Web Developer
                            </span>
                        </div>
                    </nav>

                    <Route exact path ="/" component={LandingPage}/>
                    <Route path="/aboutme" component={AboutMe}/>
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact}/>
                </div>
            </Router>
        );
    }
}

export default Nav;