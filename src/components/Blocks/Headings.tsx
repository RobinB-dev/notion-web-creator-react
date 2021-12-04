import React from 'react';
import classes from './Blocks.module.css'

type Heading1Props = {
    text?: string;
    children?: React.ReactNode;
}

export const Heading1 = ( { children }:Heading1Props ) => {
    return (
        <h1 className={classes.h1}>{children}</h1>
    );
};

type ColorTextProps = {
    children: React.ReactNode
}

export const ColorText = ( { children }:ColorTextProps ) => {
    return (
        <span className={classes.colorText}>{children}</span>
    );
};

type Subtitle1Props = {
    children: React.ReactNode
}

export const Subtitle1 = ( { children }:Subtitle1Props ) => {
    return (
        <p className={classes.subtitle1}>{children}</p>
    );
};
