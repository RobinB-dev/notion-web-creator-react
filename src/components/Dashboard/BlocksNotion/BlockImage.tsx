import React, { useContext, useEffect } from 'react';
import DataContext from '../../../contexts/DataContext';
import useCustomStyle from '../../../hooks/useCustomStyle';
import classes from './BlocksNotion.module.css'
import DataBlock from './DataBlock';

type BlockHeading1Props = {
    key: number,
    block: any
}

const BlockImage = (props: BlockHeading1Props) => {
    const dataCtx = useContext(DataContext);

    const {
        borderRadius: imageBorderRadius,
    } = useCustomStyle(props.block.id);


    useEffect(() => {
    }, [dataCtx.borderRadius])



    return (
        <>
            <div className={classes.blockImageContain}>
                <DataBlock id={props.block.id} block={props.block}>
                    <img className={classes.blockImage} src={props.block.content} alt="" style={{ borderRadius: imageBorderRadius }} />
                </DataBlock>
            </div>
        </>
    );
};

export default BlockImage;