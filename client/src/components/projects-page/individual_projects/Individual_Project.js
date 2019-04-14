import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

//rendering out a card with name, desc, html_url using axios to github api endpoint
//https://api.github.com/users/mirandamm228/repos
//Maybe just have this in the "projects" component
//use array in portfolio to loop through array, then uuse props to pass information to the individual projects

const IndividualProject = (props) => (
    
        <div>
            <Router>
                <div className="card project-card">
                    <div className="card-body">
                    <h3 className="card-title">Name: {props.repo.name}</h3>
                    <p className="card-text">Description: {props.repo.description}</p>
                    <a rel="noopener noreferrer" href={props.repo.html_url} target="_blank"><i className="fab fa-github-square fa-3x m-2"></i></a>
                    {props.repo.homepage !== null ? <a href={props.repo.homepage} target="_blank" rel="noopener noreferrer">Visit Site</a> : null}
                    </div>
                </div>
            </Router>
        </div>
     
)

export default IndividualProject;