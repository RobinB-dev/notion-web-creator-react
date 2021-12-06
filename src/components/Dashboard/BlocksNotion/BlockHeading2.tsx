import React, { useContext, useEffect } from 'react';
import DataContext from '../../../contexts/DataContext';
import classes from './BlocksNotion.module.css'
import { testObj } from './CreateBlock';
import DataBlock from './DataBlock';

type BlockHeading2Props = {
    key: number,
    block: any
}

const BlockHeading2 = (props: BlockHeading2Props) => {
    const dataCtx = useContext(DataContext);
    const BlockId = testObj(dataCtx.activeBlock, "id")

    useEffect(() => {
        console.log("refresh ");
        if (props.block.id === BlockId) {
            setMyFont (dataCtx.font)
        }
        
    }, [dataCtx.font, props.block.id, BlockId])
    return (
        <>
            <div className={classes.heading2Contain}>
                <DataBlock id={props.block.id} block={props.block}>
                    <h2 className={classes.heading2}>{props.block.content}</h2>
                </DataBlock>
            </div>
        </>
    );
};

export default BlockHeading2;

function setMyFont(font: string) {
    throw new Error('Function not implemented.');
}
