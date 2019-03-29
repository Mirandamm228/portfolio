import React from 'react';
import './Contact.css';

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
        console.log(this.state);
    }

    render(){
        return(
            <div>
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