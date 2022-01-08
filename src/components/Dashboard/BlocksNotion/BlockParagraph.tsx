import React from 'react';
import useCustomStyle from '../../../hooks/useCustomStyle';
import classes from './BlocksNotion.module.css'
import DataBlock from './DataBlock';

type BlockParagraphProps = {
    key: number,
    block: any
}

const BlockParagraph = (props: BlockParagraphProps) => {

    const {
        fontFamily: paragraphFontFamily,
    } = useCustomStyle(props.block.id);

    return (
        <>
            <div className={classes.blockParagraphContain}>
                <DataBlock id={props.block.id} block={props.block}>
                    <p className={classes.paragraphContain} style={{ fontFamily: paragraphFontFamily }}>{props.block.content}</p>
                </DataBlock>
            </div>
        </>
    );
};

export default BlockParagraph;