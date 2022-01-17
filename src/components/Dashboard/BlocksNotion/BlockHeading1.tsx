import React, { useContext, useEffect } from 'react';
import DataContext from '../../../contexts/DataContext';
import classes from './BlocksNotion.module.css'
import useCustomStyle from '../../../hooks/useCustomStyle';
import DataBlock from './DataBlock';

type BlockHeading1Props = {
    key: number,
    block: any
}

const BlockHeading1 = (props: BlockHeading1Props) => {
    const dataCtx = useContext(DataContext);

    const {
        fontFamily: h1FontFamily,
        textColor: h1TextColor,
    } = useCustomStyle(props.block.id);

    useEffect(() => {
    }, [dataCtx.fontFamily, dataCtx.textColor])

    return (
        <>
            <div className={classes.heading1Contain}>
                <DataBlock id={props.block.id} block={props.block}>
                    <h1 className={classes.heading1} style={{ fontFamily: h1FontFamily, color: `#${h1TextColor}` }}>{props.block.content}</h1>
                </DataBlock>
            </div>
        </>
    );
};

export default BlockHeading1;