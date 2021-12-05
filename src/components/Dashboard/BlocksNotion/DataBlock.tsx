import React from 'react';
import classes from './BlocksNotion.module.css'

type DataBlockProps = {
    children: React.ReactNode
    id: string
}

const DataBlock = ( { children, id}:DataBlockProps ) => {

    const handleClick = () => {
        console.log(id);
    }

    return (
        <div className={classes.wrapper} onClick={handleClick}>
            {children}
        </div>
    );
};

export default DataBlock;