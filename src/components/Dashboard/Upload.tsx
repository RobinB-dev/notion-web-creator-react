import React from 'react';
import { ColorText, Heading1, Subtitle1 } from '../Blocks/Headings';
import styles from './Dashboard.module.css'

export const UploadMain = () => {
    return (
        <>
            <div className={styles.textContainer}>
                <Heading1>
                    Let’s start upload !
                </Heading1>
                <Subtitle1> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    <ColorText>Pariatur, magnam?</ColorText>
                </Subtitle1>
                <div className={styles.divider}></div>
            </div>
        </>
    );
};

export const UploadToolBar = () => {
    return (
        <>
            <h2 className={styles.colorH2}>Upload</h2>
            <div className={styles.divider}></div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ab voluptate voluptates ullam dicta veniam itaque, magnam ducimus illo nesciunt fugit, quidem corrupti dolore facilis reprehenderit assumenda est libero voluptatem?</p>
        </>
    );
};
