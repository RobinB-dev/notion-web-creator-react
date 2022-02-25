import React from 'react';
import styles from './Blocks.module.css'

type Heading1Props = {
    text?: string;
    children?: React.ReactNode;
}

export const Heading1 = ({ children }: Heading1Props) => {
    return (
        <h1 className={styles.h1}>{children}</h1>
    );
};

type ColorTextProps = {
    children: React.ReactNode
}

export const ColorText = ({ children }: ColorTextProps) => {
    return (
        <span className={styles.colorText}>{children}</span>
    );
};

type Subtitle1Props = {
    children: React.ReactNode
}

export const Subtitle1 = ({ children }: Subtitle1Props) => {
    return (
        <p className={styles.subtitle1}>{children}</p>
    );
};
