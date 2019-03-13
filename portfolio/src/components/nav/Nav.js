import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Contact from '../contact-page/Contact';
import LandingPage from '../landing-page/LandingPage';
import Projects from '../projects-page/Project';

class Nav extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="/">Navbar w/ text</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/projects">Projects</a>
                            </li>
                            </ul>
                            <span class="navbar-text">
                            Navbar text with an inline element
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