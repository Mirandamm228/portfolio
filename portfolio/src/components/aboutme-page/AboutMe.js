import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component{
    render(){
        return(
            <div>
                <div className="card card-margin">
                    <div className="card-header">
                        <h1 className="card-title text-center">Miranda Manriquez | Web Developer</h1>
                    </div>
                    <div className="card-body">
                        <div className="container"> 
                            <div className="row">
                                <div className="col">
                                    <p className="card-text">These words are about me and my skills and life story.</p>
                                </div>
                                <div className="col text-center your-face">
                                    <img className="rounded img-fluid" src="https://avatars2.githubusercontent.com/u/35352672?s=460&v=4" alt=''/>
                                </div>
                            </div>
                            <div className="row card-footer mt-5">
                                <div className="col">
                                    <p className="card-text">
                                        Skills: Bootstrap, React, Redux, Angular, Node, Express, HTML5, and CSS3
                                    </p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;