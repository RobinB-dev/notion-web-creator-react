import React from 'react';
import classes from './BlocksNotion.module.css'
import DataBlock from './DataBlock';

type BlockParagraphProps = {
    key: number,
    block: any
}

const BlockParagraph = (props: BlockParagraphProps) => {
    return (
        <>
            <div className={classes.blockParagraphContain}>
                <DataBlock id={props.block.id} block={props.block}>
                    <p>{props.block.content}</p>
                </DataBlock>
            </div>
        </>
    );
};

export default BlockParagraph;