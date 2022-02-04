import React, { useContext } from 'react';
import DataContext from '../../../../contexts/DataContext';
import BorderRadius from './BorderRadius';
import { testObj } from '../../../../decl';

import classes from '../../Dashboard.module.css'

type ToolBlockProps = {
    bloctype: string | undefined
}

const ToolBlock = ({ bloctype }: ToolBlockProps) => {
    const dataCtx = useContext(DataContext);
    const activeObj = testObj(dataCtx.activeBlock, "obj");

    return (
        <>
            {((activeObj === "image") || (bloctype === "general")) &&
                <div className={classes.barBlockTypeContainer}>
                    <h3>Image</h3>
                    <BorderRadius />
                </div>
            }
            {((activeObj === "callout") || (bloctype === "general")) &&
                <div className={classes.barBlockTypeContainer}>
                    <h3>Callout</h3>
                    <BorderRadius />
                </div>
            }
        </>
    );
};

export default ToolBlock;