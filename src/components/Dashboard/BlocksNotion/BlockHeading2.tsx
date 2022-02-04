import React, { useContext, useEffect } from 'react';
import DataContext from '../../../contexts/DataContext';
import classes from './BlocksNotion.module.css'
import useCustomStyle from '../../../hooks/useCustomStyle'
import DataBlock from './DataBlock';

type BlockHeading2Props = {
    key: number,
    block: any
}

const BlockHeading2 = (props: BlockHeading2Props) => {
    const dataCtx = useContext(DataContext);

    const {
        fontFamily: h2FontFamily,
        textColor: h2TextColor,
    } = useCustomStyle(props.block.id);

    useEffect(() => {
    }, [dataCtx.fontFamily, dataCtx.textColor])

    return (
        <>
            <div className={classes.heading2Contain}>
                <DataBlock id={props.block.id} block={props.block}>
                    <h2 className={classes.heading2} style={{ fontFamily: h2FontFamily, color: `#${h2TextColor}` }}>{props.block.content}</h2>
                </DataBlock>
            </div>
        </>
    );
};

export default BlockHeading2;
