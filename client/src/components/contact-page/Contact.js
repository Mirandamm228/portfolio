import React from 'react';
import './Contact.css';

//<h4 className="card-text">Please give me a name and a callback number. Let me know how I can help you! </h4>
//<h5 className="card-text">Hours: 9am - 6pm Arizona Time</h5>
//<h5 className="card-text">Best method of contact: Email</h5>

// <h5 className="card-text emphasis-color email-txt-sm"><i className="far fa-envelope"></i> miranda.manriquez.dev@gmail.com</h5>
// <h5 className="card-text emphasis-color"><i className="fas fa-mobile-alt"></i> (480) 249 - 5816</h5>
// <a href="https://www.instagram.com/miranda_webdev/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-3x m-2"></i></a>
// <a href="https://www.linkedin.com/in/miranda-manriquez-developer/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x m-2"></i></a>
// <a href="https://github.com/Mirandamm228" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-3x m-2"></i></a>

class Contact extends React.Component{
   

    render(){
        return(
            <div className="contactPage fadeIn">
                <div className="grid">
                    <div className="speech-bubble--div text-center">
                        <i className="far fa-comment fa-9x"></i>
                    </div>
                    <div className="misc-info--div text-center">
                        <p>Please give me a name and a callback number. Let me know how I can help you! </p>
                        <br />
                        <h5>Hours: 9am - 6pm Arizona Time</h5>
                        <h5>Best method of contact: Email</h5>
                    </div>
                    <div className="contact-info--div text-center">
                        <div className="inner-grid">
                            <div>
                                <i className="far fa-envelope"></i>
                                <h5> miranda.manriquez.dev@gmail.com</h5>
                            </div>
                           <div>
                                <i className="fas fa-mobile-alt"></i>
                                <h5> (480) 249 - 5816</h5>
                           </div>
                        </div>
                        <div className="social-media--div">
                            <a href="https://www.instagram.com/miranda_webdev/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-3x m-2"></i></a>
                            <a href="https://www.linkedin.com/in/miranda-manriquez-developer/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x m-2"></i></a>
                            <a href="https://github.com/Mirandamm228" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-3x m-2"></i></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;