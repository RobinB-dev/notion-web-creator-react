import React, { useContext } from 'react';
import DataContext from '../../../../contexts/DataContext';
import { testObj } from '../../../../decl';
import classes from '../../Dashboard.module.css'
import ColorBar from './ColorBar';

type ToolColorProps = {
    bloctype: string | undefined
}

const ToolColor = ({ bloctype }: ToolColorProps) => {
    const dataCtx = useContext(DataContext);
    const activeObj = testObj(dataCtx.activeBlock, "obj");

    return (
        <>
            {((activeObj === "heading_1") || (bloctype === "general")) &&
                <div className={classes.barBlockColorContainer}>
                    <h3>H1</h3>
                    <ColorBar />
                </div>
            }
            {((activeObj === "heading_2") || (bloctype === "general")) &&
                <div className={classes.barBlockColorContainer}>
                    <h3>H2</h3>
                    <ColorBar />
                </div>
            }
            {((activeObj === "heading_3") || (bloctype === "general")) &&
                <div className={classes.barBlockColorContainer}>
                    <h3>H3</h3>
                    <ColorBar />
                </div>
            }
            {((activeObj === "paragraph") || (bloctype === "general")) &&
                <div className={classes.barBlockColorContainer}>
                    <h3>Paragraph</h3>
                    <ColorBar />
                </div>
            }
        </>
    );
};

export default ToolColor;