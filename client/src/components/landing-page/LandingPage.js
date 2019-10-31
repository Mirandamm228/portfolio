import React from 'react';
import './LandingPage-Styles.css';

class LandingPage extends React.Component{
    render(){
        return(
            <div className="landingPage">
                <div className="grid">
                    <div className="lmd-monitor--div">
                        <img src={require('../../images/lmd-monitor.png')} className="lmd-monitor img-fluid" alt=""/>
                    </div>
                    
                    <div className="landingPage-txt text-center fadeIn">
                        <h1>You need a developer who is</h1>
                        <h3>determined, a problem solver, always improving, and honest... <br />Look no further!</h3>
                        <a href="/aboutme" aria-label=""><button className="btn btn-outline-light btn-lg mt-3" aria-label="Learn more" id="btn-color-scheme">Learn more</button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;