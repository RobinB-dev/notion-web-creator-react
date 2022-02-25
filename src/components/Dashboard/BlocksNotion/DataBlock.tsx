import React, { useContext, useEffect, useState } from 'react';
import DataContext from '../../../contexts/DataContext';
import { pageObj, testObj } from '../../../decl';
import useCustomStyle from '../../../hooks/useCustomStyle';
import styles from './BlocksNotion.module.css'

type DataBlockProps = {
    children: React.ReactNode
    id: string
    block: {}
}

// manage the state of each block
const DataBlock = ({ children, id, block }: DataBlockProps) => {
    const [active, setActive] = useState(false)
    const dataCtx = useContext(DataContext);

    // manage the border radius value of the outline, for estetic purpose
    const {
        borderRadius: imageBorderRadius,
    } = useCustomStyle(id);

    useEffect(() => {
    }, [dataCtx.borderRadius])

    // reset the context value, to avoid duclication of style 
    const resetContext = () => {
        dataCtx.setFontFamily("")
        dataCtx.setBorderRadius("")
        dataCtx.setTextColor("")
        dataCtx.setTheme("")
    }

    const handleClick = (e: any) => {
        e.stopPropagation();
        !active && resetContext();
        // select the page if no block is selected
        !active ? dataCtx.setActiveBlock(block) : dataCtx.setActiveBlock(pageObj);
    }

    // set active if the bock id match the active block id
    useEffect(() => {
        testObj(dataCtx.activeBlock, "id") === id ? setActive(true) : setActive(false)
    }, [dataCtx.activeBlock, id])

    return (
        <div className={!active ? styles.wrapper : `${styles.wrapper} ${styles.active}`}
            style={{ borderRadius: imageBorderRadius }}
            onClick={handleClick}>
            {children}
        </div>
    );
};

export default DataBlock;