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
                <DataBlock id={props.block.id} block={props.block}>
                    <img className={classes.blockImage} src={props.block.content} alt="" />
                </DataBlock>
            </div>
        </>
    );
};

export default BlockImage;