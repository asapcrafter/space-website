import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className='card-container'>
            <div className="card-title">{props.title}</div>
            <img className='card-img' src={props.image} alt="" />
        </div>
    );
}

export default ProjectCard;
