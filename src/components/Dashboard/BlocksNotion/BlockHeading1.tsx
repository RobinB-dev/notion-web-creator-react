import React from 'react';
import classes from './BlocksNotion.module.css'
import DataBlock from './DataBlock';

type BlockHeading1Props = {
    key: number,
    block: any
}

const BlockHeading1 = (props: BlockHeading1Props) => {
    return (
        <>
            <div className={classes.heading1Contain}>
                <DataBlock id={props.block.id}>
                    <h1 className={classes.heading1}>{props.block.content}</h1>
                </DataBlock>
            </div>
        </>
    );
};

export default BlockHeading1;