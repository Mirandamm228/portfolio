import React from 'react';

import IndividualProject from './individual_projects/Individual_Project';
import './Projects.css';

const API_URL = "https://api.github.com/users/mirandamm228/repos";

class Projects extends React.Component{
    constructor(){
        super();
        this.state = {
            repos: [],
            errors: null
        }
    }

    componentDidMount(){
        fetch(API_URL)
        .then(response => response.json())
        .then(data => this.setState({repos: data}))
        .catch(err => this.setState({ error: err }));
        
    }

    render(){
        return(
            <div>
                <div className="projects-container">
                    <div className="card-columns">
                        {this.state.repos.map(repo => (
                            <IndividualProject key={repo.id} repo={repo}/>
                        ))}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Projects;