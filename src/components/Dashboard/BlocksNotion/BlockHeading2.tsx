import React, { useContext, useEffect } from 'react';
import DataContext from '../../../contexts/DataContext';
import classes from './BlocksNotion.module.css'
import DataBlock from './DataBlock';

type BlockHeading2Props = {
    key: number,
    block: any
}

const BlockHeading2 = (props: BlockHeading2Props) => {
    const dataCtx = useContext(DataContext);

    useEffect(() => {
    }, [dataCtx.font])
    
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