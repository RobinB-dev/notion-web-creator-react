import React, { useContext, useEffect } from 'react';
import DataContext from '../../../contexts/DataContext';
import classes from './BlocksNotion.module.css'
import { testObj } from './CreateBlock';
import DataBlock from './DataBlock';

type BlockHeading1Props = {
    key: number,
    block: any
}

const BlockHeading1 = (props: BlockHeading1Props) => {
    const [MyFont, setMyFont] = useState("PP Neue Montreal")
    const dataCtx = useContext(DataContext);

    const BlockId = testObj(dataCtx.activeBlock, "id")
    
    let newNumber = {id:BlockId, fontFam:dataCtx.font};
    let obj = dataCtx.styleStore.find((o: { id: string; }) => o.id === BlockId);

    // if a block is selected 
    if (BlockId !== undefined) {
        // if a id doesnt exist in styleStore
        if (obj === undefined) {
            dataCtx.setStyleStore([...dataCtx.styleStore, newNumber])
        } else {
            obj.fontFam = dataCtx.font
        }
    }
    
    
    useEffect(() => {
        console.log("refresh ");
        if (props.block.id === BlockId) {
            setMyFont (dataCtx.font)
        }
        
    }, [dataCtx.font, BlockId, props.block.id])


 
    return (
        <>
            <div className={classes.heading1Contain}>
                <DataBlock id={props.block.id} block={props.block}>
                    <h1 className={classes.heading1} style={{fontFamily: MyFont}}>{props.block.content}</h1>
                </DataBlock>
            </div>
        </>
    );
};

export default BlockHeading1;