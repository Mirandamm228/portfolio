import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Contact from '../contact-page/Contact';
import LandingPage from '../landing-page/LandingPage';
import Projects from '../projects-page/Project';

import './Nav.css';

class Nav extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <nav className="navbar sticky-bottom navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">
                            <img src="../../images/personal-logo-v1.png" alt=""/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            </ul>
                            <span className="navbar-text">
                                Miranda Manriquez | Web Developer
                            </span>
                        </div>
                    </nav>

                    <Route exact path ="/" component={LandingPage}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/projects" component={Projects} />
                </div>
            </Router>
        );
    }
}

export default Nav;