import React from 'react';
import sliderCss from './SliderProjects.module.css'

type ProjectCardProps = {
    title: string;
    src: string;
    date: string;
}

const ProjectCard = ( props: ProjectCardProps) => {
    return (
        <label className={sliderCss.card}>
            <input name="plan" className={sliderCss.radio} type="radio"/>
            <span className={sliderCss.cardContent}>
                <img src={props.src} alt="Image cover project" />
                <h4>{props.title}</h4>
            </span>
        </label>
    );
};

export default ProjectCard;