import React from 'react';
// import axios from 'axios';

import IndividualProject from './individual_projects/Individual_Project';
import './Projects.css';

const API_URL_mmm228 = "https://api.github.com/users/mirandamm228/repos";
const API_URL_webdev = "https://api.github.com/users/miranda-webdev/repos";

class Projects extends React.Component{
    constructor(){
        super();
        this.state = {
            repos: [],
            errors: null
        }
    }

    componentDidMount(){
            Promise.all([
                fetch(API_URL_mmm228),
                fetch(API_URL_webdev)
            ])
        .then((response) => {
            return Promise.all([response[0].json(), response[1].json()])
        })
        .then((data) => {
            //combine reponse array of each fetch
            let repos = [...data[0], ...data[1]]
            
            this.setState({repos: repos})
        })
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
                    <h1 className="Project--section-header">Ongoing Projects</h1>
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