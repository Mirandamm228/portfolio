import React from 'react';

const IndividualProject = (props) => (
    
        <div>
            <div className="card project-card bg-secondary flipInY">
                <div className="card-body">
                    <h3 className="card-title">Name: {props.repo.name}</h3>
                    <p className="card-text">Description: {props.repo.description}                 {props.repo.homepage !== null && props.repo.homepage !== "" ? <a href={props.repo.homepage} target="_blank" rel="noopener noreferrer" className="visit-site-link">Visit Site</a> : null}</p>
                    <a rel="noopener noreferrer" href={props.repo.html_url} target="_blank"><i className="fab fa-github-square fa-3x m-2 github-link-card"></i></a>
                </div>
            </div>
        </div>
     
)

export default IndividualProject;