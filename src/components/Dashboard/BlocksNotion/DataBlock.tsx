import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../../contexts/DataContext';
import classes from './BlocksNotion.module.css'
import { testObj } from './CreateBlock';

type DataBlockProps = {
    children: React.ReactNode
    id: string
    block: {}
}

const DataBlock = ( { children, id, block}:DataBlockProps ) => {
    const [active, setActive] = useState(false)
    const dataCtx = useContext(DataContext);

    const handleClick = ( e:any ) => {
        e.stopPropagation();
        setActive(!active)
        !active ? dataCtx.setActiveBlock(block) : dataCtx.setActiveBlock({});
    }
    
    useEffect(() => {
        if (testObj(dataCtx.activeBlock, "id") === id && active) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [dataCtx.activeBlock, active, id])
    
    return (
        <div className={!active ? classes.wrapper : `${classes.wrapper} ${classes.active}` } onClick={handleClick}>
            {children}
        </div>
    );
};

export default DataBlock;