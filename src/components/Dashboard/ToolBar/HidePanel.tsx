import React, { useContext } from 'react';
import DataContext from '../../../contexts/DataContext';
import { testObj } from '../BlocksNotion/CreateBlock';
import { menuToolBar } from '../Customize';
import { Collapse } from 'antd';
import classes from '../Dashboard.module.css'

const { Panel } = Collapse;

type HidePanelProps = {
    children: React.ReactNode;
    display: any[];
}

const HidePanel = ( { children, display }: HidePanelProps ) => {
    const dataCtx = useContext(DataContext);
    const BlockType:string = testObj(menuToolBar, testObj(dataCtx.activeBlock, "obj"));
    console.log(display, BlockType);
    console.log(display.includes(BlockType));
    
    
    
    return (
        <>

        </>
    );
};

export default HidePanel;
