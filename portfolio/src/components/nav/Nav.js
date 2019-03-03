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
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/portfolio" component={Projects}/>
                </div>
            </Router>
        );
    }
}

export default Nav;