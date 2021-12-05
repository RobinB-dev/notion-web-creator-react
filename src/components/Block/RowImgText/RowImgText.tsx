import React from 'react';
import classes from "../../Homepage/Homepage.module.css";

type rowImgTextProps = {
    img: string
    alt: string
    content: string
}
const RowImgText = (props: rowImgTextProps) => {
    return (
        <div className={classes.rowImgTextContainer}>
            <img alt={props.alt} src={props.img}></img>
            <p>{props.content}</p>
        </div>
    );
};

export default RowImgText;