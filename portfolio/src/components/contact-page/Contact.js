import React from 'react';
import axios from 'axios';
import './Contact.css';
//still in progress
//needs to scrub inputs and set up validation with regex

const API_PATH = 'http://localhost:3000/portfolio/api/contact/index.php';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            messageSent: false,
            error: null
        }
    }

    handleFormSubmit(event){
        event.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: {'content-type': 'application/json'},
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({error: error.message}))
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <div>
                    {this.state.mailSent &&
                        <div>Thank you for contacting me.</div>
                    }
                </div>
                
                <div className="card m-5 white">
                    <h2 className="card-header text-center">Contact Me</h2>
                    <div className="card-body">
                        <form >
                            <div className="form-group">
                                <label htmlFor="yourName" className="text-left card-text"><h4>Name: </h4></label>
                                <input name="yourName" className="form-control" placeholder="Your Name"
                                    onChange={event => this.setState({name: event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="text-left card-text"><h4>Email: </h4></label>
                                <input name="email" className="form-control" placeholder="Your Email"
                                    onChange={event => this.setState({email: event.target.value})}/>
                            </div>
                            <div className="form-group"> 
                                <label htmlFor="message" className="text-left card-text"><h4>Message: </h4></label>
                                <input name="message" className="form-control" placeholder="Information about yourself, reason for contact, and a call back number!"
                                    onChange={event => this.setState({message: event.target.value})}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={event => this.handleFormSubmit(event)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;