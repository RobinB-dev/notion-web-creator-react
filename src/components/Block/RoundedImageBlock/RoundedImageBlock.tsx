import React from 'react';
import styles from "../../Homepage/Homepage.module.css";

type roundedImageProps = {
    img: string
    alt: string
    content: string
    name: string
}
const RoundedImageBlock = (props: roundedImageProps) => {
    return (
        <div className={styles.RoundedImageBlockContainer}>
            <img className={styles.roundedBlockImg} src={props.img} alt={props.alt}></img>
            <div>
                <p>{props.content}</p>
                <span>{props.name}</span>
            </div>
        </div>
    );
};

export default RoundedImageBlock;