import React from 'react';
import '../styles/css/projectcard.css'

const ProjectCard = (props) => {
    const {title, gitLink, liveLink, description} = props

    return (
        <div className='card-container'>
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
            <div className="card-link">
                <a href={gitLink}>Source Code</a>
                <a href={liveLink}>Live Demo</a>
            </div>
        </div>
    );
}

export default ProjectCard;
