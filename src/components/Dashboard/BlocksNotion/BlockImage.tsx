import React from 'react';
import classes from './BlocksNotion.module.css'
import DataBlock from './DataBlock';

type BlockHeading1Props = {
    key: number,
    block: any
}

const BlockImage = (props: BlockHeading1Props) => {
    return (
        <>
            <div className={classes.blockImageContain}>
                <DataBlock id={props.block.id}>
                    <img className={classes.blockImage} src={props.block.url} alt="" />
                </DataBlock>
            </div>
        </>
    );
};

export default BlockImage;