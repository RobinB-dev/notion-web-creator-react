import React from 'react';
import classes from "../../Homepage/Homepage.module.css";


type imageCaptionProps = {
    src: string,
    alt: string,
    content: string
}
const ImageCaption = (props: imageCaptionProps) => {
    return (
        <div className={classes.imageCaptionContainer}>
            <img src={props.src} alt={props.alt}></img>
            <h3>{props.content}</h3>
        </div>
    );
};

export default ImageCaption;