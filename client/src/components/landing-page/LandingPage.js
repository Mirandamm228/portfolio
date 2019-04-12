import React from 'react';
import './LandingPage-Styles.css';

class LandingPage extends React.Component{
    render(){
        return(
            <div className="landingPage-image">
                <div className="vertical-align text-left">
                    <h1 className="landingPage-header">You need a <span className="emphasis-color">developer</span> who is -</h1>
                    <br />
                    <h3><span className="emphasis-color txt-sm">determined, a problem solver, always improving, and honest... <br />Look no further!</span></h3>
                    <a href="/aboutme" aria-label=""><button className="btn btn-primary btn-lg mt-3" aria-label="Learn more">Learn more</button></a>
                </div>
            </div>
        );
    }
}

export default LandingPage;