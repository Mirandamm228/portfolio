import React from 'react';

class Contact extends React.Component{
   

    render(){
        return(
            <div>
                <div className="card text-center card-margin">
                    <div className="card-header m-3">
                        <h1>Contact Me</h1>
                    </div>
                    <div className="card-body m-5">
                        <div className="container mb-5">
                            <div className="row">
                                <div className="col">
                                    <h4 className="card-text">Please reach out if you have any further questions!</h4>
                                    <h5 className="card-text">Hours: 9am - 6pm Arizona Time</h5>
                                    <h5 className="card-text">Best method of contact: Email</h5>
                                </div>
                                <div className="col">
                                    <h5 className="card-text"><i className="far fa-envelope"></i> miranda.manriquez.dev@gmail.com</h5>
                                    <h5 className="card-text"><i className="fas fa-mobile-alt"></i> (480) 249 - 5816</h5>
                                    <a href="https://www.instagram.com/miranda_webdev/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-3x m-2"></i></a>
                                    <a href="https://www.linkedin.com/in/miranda-manriquez-developer/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x m-2"></i></a>
                                    <a href="https://github.com/Mirandamm228" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-3x m-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Contact;