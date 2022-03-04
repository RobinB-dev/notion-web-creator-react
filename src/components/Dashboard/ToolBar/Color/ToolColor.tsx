import React, { useContext } from 'react';
import DataContext from '../../../../contexts/DataContext';
import { testObj } from '../../../../decl';
import styles from '../ToolBar.module.css'
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
                <div className={styles.barBlockColorContainer}>
                    <h3>H1</h3>
                    <ColorBar type="heading_1" />
                </div>
            }
            {((activeObj === "heading_2") || (bloctype === "general")) &&
                <div className={styles.barBlockColorContainer}>
                    <h3>H2</h3>
                    <ColorBar type="heading_2" />
                </div>
            }
            {((activeObj === "heading_3") || (bloctype === "general")) &&
                <div className={styles.barBlockColorContainer}>
                    <h3>H3</h3>
                    <ColorBar type="heading_3" />
                </div>
            }
            {((activeObj === "paragraph") || (bloctype === "general")) &&
                <div className={styles.barBlockColorContainer}>
                    <h3>Paragraph</h3>
                    <ColorBar type="paragraph" />
                </div>
            }
        </>
    );
};

export default ToolColor;