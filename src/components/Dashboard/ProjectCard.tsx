import React, { useEffect, useState } from 'react';
import sliderCss from './SliderProjects.module.css'
import defaultImage from '../../assets/images/dafault_image_page.png';

type ProjectCardProps = {
    state: string;
    title: string;
    src: string;
    emoji: string;
    date: string;
}

const ProjectCard = (props: ProjectCardProps) => {
    const [image, setImage] = useState(defaultImage)

    const { state } = props;
    useEffect(() => {
        (props.src !== "") && setImage(props.src);
    }, [props.src])

    return (
        <label className={`${sliderCss.card} ${state} cardState`}>
            <input name="plan" className={sliderCss.radio} type="radio" />
            <span className={sliderCss.cardContent}>
                <span>{props.emoji}</span>
                <div className="image">
                    <img src={image} alt="Cover project" />
                </div>
                <h4>{props.title}</h4>
            </span>
        </label>
    );
};

export default ProjectCard;