import React from 'react';
import styles from './BlocksNotion.module.css'
import useCustomStyle from '../../../hooks/useCustomStyle'
import DataBlock from './DataBlock';

type BlockHeading2Props = {
    key: number,
    block: any
}

const BlockHeading2 = ({ block }: BlockHeading2Props) => {

    const {
        fontFamily: h2FontFamily,
        textColor: h2TextColor,
        theme: h2Theme,
    } = useCustomStyle(block.obj, block.id);

    const Theme1 = () => {
        return (
            <div className={styles.themeWrapper}>
                <h2 className={styles.heading2} style={{ fontFamily: h2FontFamily, color: `#${h2TextColor}` }}>{block.content}</h2>
            </div>
        );
    }

    const Theme2 = () => {
        return (
            <div className={styles.themeWrapper} style={{ fontFamily: "Roboto Mono" }}>
                <h2 className={styles.heading2} style={{ fontFamily: h2FontFamily, color: `#${h2TextColor}` }}>{block.content}</h2>
                <div className={styles.heading2line}></div>
            </div>
        );
    }

    return (
        <>
            <div className={styles.heading2Contain}>
                <DataBlock id={block.id} block={block}>
                    {h2Theme === "default" && Theme1()}
                    {h2Theme === "theme1" && Theme1()}
                    {h2Theme === "theme2" && Theme2()}
                </DataBlock>
            </div>
        </>
    );
};

export default BlockHeading2;
