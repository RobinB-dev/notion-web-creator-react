import React from 'react';
// import React, { useContext } from 'react';
// import DataContext from '../../../../contexts/DataContext';
// import { testObj } from '../../../../decl';
import styles from '../ToolBar.module.css'
import ThemeRadio from './ThemeRadio';

type ToolThemeProps = {
    bloctype: string | undefined
}

const ToolTheme = ({ bloctype }: ToolThemeProps) => {
    // const dataCtx = useContext(DataContext);
    // const activeObj = testObj(dataCtx.activeBlock, "obj");

    return (
        <>
            <div className={styles.barBlockThemeContainer}>
                <h3>Page</h3>
                <ThemeRadio />
            </div>
            {/* {((activeObj === "heading_1") || (bloctype === "general")) &&
                <div className={styles.barBlockThemeContainer}>
                    <ThemeRadio />
                </div>
            }
            {((activeObj === "heading_2") || (bloctype === "general")) &&
                <div className={styles.barBlockThemeContainer}>
                    <h3>H2</h3>
                    <ThemeRadio />
                </div>
            }
            {((activeObj === "heading_3") || (bloctype === "general")) &&
                <div className={styles.barBlockThemeContainer}>
                    <h3>H3</h3>
                    <ThemeRadio />
                </div>
            }
            {((activeObj === "paragraph") || (bloctype === "general")) &&
                <div className={styles.barBlockThemeContainer}>
                    <h3>Paragraph</h3>
                    <ThemeRadio />
                </div>
            } */}
        </>
    );
};

export default ToolTheme;