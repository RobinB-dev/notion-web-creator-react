import React, { useContext, useEffect } from 'react';
import DataContext from '../../../contexts/DataContext';
import styles from './BlocksNotion.module.css'
import useCustomStyle from '../../../hooks/useCustomStyle';
import DataBlock from './DataBlock';

type BlockHeading1Props = {
    key: number,
    block: any
}

const BlockHeading1 = (props: BlockHeading1Props) => {
    const dataCtx = useContext(DataContext);

    const {
        fontFamily: h1FontFamily,
        textColor: h1TextColor,
        theme: h1Theme,
    } = useCustomStyle(props.block.id);

    useEffect(() => {
    }, [dataCtx.fontFamily, dataCtx.textColor])

    const Theme1 = () => {
        return (
            <div className={styles.themeWrapper}>
                <h1 className={styles.heading1} style={{ fontFamily: h1FontFamily, color: `#${h1TextColor}` }}>{props.block.content}</h1>
            </div>
        );
    }

    const Theme2 = () => {
        return (
            <div className={styles.themeWrapper} style={{ fontFamily: "Roboto Mono" }}>
                <h1 className={styles.heading1} style={{ fontFamily: h1FontFamily, color: `#${h1TextColor}` }}>{props.block.content}</h1>
                <div className={styles.heading1line}></div>
            </div>
        );
    }

    return (
        <>
            <div className={styles.heading1Contain}>
                <DataBlock id={props.block.id} block={props.block}>
                    {h1Theme === "default" && Theme1()}
                    {h1Theme === "theme1" && Theme1()}
                    {h1Theme === "theme2" && Theme2()}
                </DataBlock>
            </div>
        </>
    );
};

export default BlockHeading1;