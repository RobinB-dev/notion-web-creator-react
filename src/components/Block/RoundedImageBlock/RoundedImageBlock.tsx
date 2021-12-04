import React from 'react';
import classes from "../../Homepage/Homepage.module.css";

type roundedImageProps ={
    img: string
    alt: string
    content: string
    name: string
}
const RoundedImageBlock = (props: roundedImageProps) => {
    return (
        <div className={classes.RoundedImageBlockContainer}>
            <img className={classes.roundedBlockImg} src={props.img} alt={props.alt}></img>
            <div>
                <p>{props.content}</p>
                <span>{props.name}</span>
            </div>
        </div>
    );
};

export default RoundedImageBlock;