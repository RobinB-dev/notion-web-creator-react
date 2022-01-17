import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../../contexts/DataContext';
import { pageObj, testObj } from '../../../decl';
import useCustomStyle from '../../../hooks/useCustomStyle';
import classes from './BlocksNotion.module.css'

type DataBlockProps = {
    children: React.ReactNode
    id: string
    block: {}
}

const DataBlock = ({ children, id, block }: DataBlockProps) => {
    const [active, setActive] = useState(false)
    const dataCtx = useContext(DataContext);

    const {
        borderRadius: imageBorderRadius,
    } = useCustomStyle(id);


    useEffect(() => {
    }, [dataCtx.borderRadius])

    const resetContext = () => {
        dataCtx.setFontFamily("")
        dataCtx.setBorderRadius("")
        dataCtx.setTextColor("")
    }

    const handleClick = (e: any) => {
        e.stopPropagation();
        !active && resetContext();
        !active ? dataCtx.setActiveBlock(block) : dataCtx.setActiveBlock(pageObj);
        setActive(!active)
    }

    useEffect(() => {
        if (testObj(dataCtx.activeBlock, "id") === id && active) {
            console.log("App");
            setActive(true)
        } else {
            setActive(false)
        }
    }, [dataCtx.activeBlock, active, id])

    return (
        <div className={!active ? classes.wrapper : `${classes.wrapper} ${classes.active}`}
            style={{ borderRadius: imageBorderRadius }}
            onClick={handleClick}>
            {children}
        </div>
    );
};

export default DataBlock;