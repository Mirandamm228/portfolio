import React from 'react';
import './LandingPage-Styles.css';

class LandingPage extends React.Component{
    render(){
        return(
            <div className="landingPage-image">
                <div className="vertical-align text-right">
                    <h1 className="landingPage-header">You need a <span className="emphasis-color">developer</span> who is..</h1>
                    <br />
                    <h3><span className="emphasis-color txt-sm">Determined, a problem solver, <br /> always improving, and honest... <br />You finally found her!</span></h3>
                    <a href="/aboutme"><button className="btn btn-primary btn-lg mt-3">Learn more</button></a>
                </div>
            </div>
        );
    }
}

export default LandingPage;