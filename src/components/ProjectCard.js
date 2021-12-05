import React from 'react';
import '../styles/css/projectcard.css'

const ProjectCard = (props) => {
    return (
        <div className='card-container'>
            <img className='card-img' src={props.image} alt="" />
            <div className="card-overlay">
                <div className="card-title">{props.title}</div>
            </div>
        </div>
    );
}

export default ProjectCard;
