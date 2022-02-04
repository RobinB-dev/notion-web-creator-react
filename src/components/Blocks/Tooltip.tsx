import React from 'react';
import classes from "./Tooltip.module.css"


type DataBlockProps = {
    children: React.ReactNode
    content: string
    position: string
}


const Tooltip = ({ children, content, position }: DataBlockProps) => {
    return (
        <div className={classes.relative}>
            {children}
            <div className={classes.tooltip} style={{ [position]: "-0.8rem" }}>{content}</div>
        </div>
    );
};

export default Tooltip;