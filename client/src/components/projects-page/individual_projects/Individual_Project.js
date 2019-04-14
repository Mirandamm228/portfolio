import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

const IndividualProject = (props) => (
    
        <div>
            <Router>
                <div className="card project-card">
                    <div className="card-body">
                    <h3 className="card-title">Name: {props.repo.name}</h3>
                    <p className="card-text">Description: {props.repo.description}</p>
                    <a rel="noopener noreferrer" href={props.repo.html_url} target="_blank"><i className="fab fa-github-square fa-3x m-2"></i></a>
                    {props.repo.homepage !== null && props.repo.homepage !== "" ? <a href={props.repo.homepage} target="_blank" rel="noopener noreferrer">Visit Site</a> : null}
                    </div>
                </div>
            </Router>
        </div>
     
)

export default IndividualProject;