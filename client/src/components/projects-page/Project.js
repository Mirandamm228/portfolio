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
            <div className="projectsPage">
             {/* <div className="Project--deployed-section">
                    <h1 className="Project--section-header">Deployed Websites</h1>
                    <div className="card deployed-card flipInY">
                        <div className="card-body">
                        <h3 className="card-title">Art Gallery Mock</h3>
                        <p className="card-text">Description: This website uses React and CSS to create a colorful display of artwork. Still ongoing. You can visit it here: <a rel="noopener noreferrer" href="https://art-gallery-mock.herokuapp.com/" target="_blank" aria-label="Visit Art Gallery Mock">https://art-gallery-mock.herokuapp.com/</a></p>
                        <a rel="noopener noreferrer" href="https://art-gallery-mock.herokuapp.com/" target="_blank" alt=""><img src={require('../../images/art-gallery-mock.JPG')} alt=""/></a>
                        </div>
                    </div>
                </div>
                <hr /> */}
                <div className="projects-container p-2">
                    <h2 className="Project--other-header">Other Projects</h2>
                    <div className="card-columns">
                        {this.state.repos.map(repo => (
                           repo.name !== "portfolio" ? <IndividualProject key={repo.id} repo={repo} /> : false
                        ))}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Projects;