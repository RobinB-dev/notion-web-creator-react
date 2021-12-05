import React from 'react';
import { NotionBlock } from '../../../decl/notionPage.decl';
import classes from './BlocksNotion.module.css'
import { CreateBlock } from './CreateBlock';
import DataBlock from './DataBlock'

type BlockHeading1Props = {
    key: number,
    block: any
}

const BlockCallout = (props: BlockHeading1Props) => {
    
    return (
        <>
            <DataBlock id={props.block.id} block={props.block}>
                <div className={classes.blockCallout}>
                    <div className={classes.emoji}>{props.block.emoji}</div>
                    {props.block.childrens.map((block: NotionBlock) => CreateBlock(block))}
                </div>
            </DataBlock>
        </>
    );
};

export default BlockCallout;