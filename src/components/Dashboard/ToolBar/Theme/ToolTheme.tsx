// import React from 'react';
import React, { useContext } from 'react';
import DataContext from '../../../../contexts/DataContext';
import { testObj } from '../../../../decl';
import styles from '../ToolBar.module.css'
import ThemeRadio from './ThemeRadio';

type ToolThemeProps = {
    bloctype: string | undefined
}

const ToolTheme = ({ bloctype }: ToolThemeProps) => {
    const dataCtx = useContext(DataContext);
    const activeObj = testObj(dataCtx.activeBlock, "obj");

    return (
        <>
            <div className={styles.barBlockThemeContainer}>
                <h3>Page</h3>
                <ThemeRadio type={"general"} />
            </div>
            {((activeObj === "heading_1") || (bloctype === "general")) &&
                <div className={styles.barBlockThemeContainer}>
                    <h3>H1</h3>
                    <ThemeRadio type={"heading_1"} />
                </div>
            }
            {((activeObj === "heading_2") || (bloctype === "general")) &&
                <div className={styles.barBlockThemeContainer}>
                    <h3>H2</h3>
                    <ThemeRadio type={"heading_2"} />
                </div>
            }
            {(activeObj === "heading_3") &&
                <div className={styles.barBlockThemeContainer}>
                    <h3>H3</h3>
                    <ThemeRadio type={"heading_3"} />
                </div>
            }
            {(activeObj === "paragraph") &&
                <div className={styles.barBlockThemeContainer}>
                    <h3>Paragraph</h3>
                    <ThemeRadio type={"paragraph"} />
                </div>
            }
            {(activeObj === "image") &&
                <div className={styles.barBlockThemeContainer}>
                    <h3>Image</h3>
                    <ThemeRadio type={"image"} />
                </div>
            }
        </>
    );
};

export default ToolTheme;