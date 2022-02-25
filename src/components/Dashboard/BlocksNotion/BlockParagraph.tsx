import React from 'react';
import useCustomStyle from '../../../hooks/useCustomStyle';
import styles from './BlocksNotion.module.css'
import DataBlock from './DataBlock';

type BlockParagraphProps = {
    key: number,
    block: any
}

const BlockParagraph = (props: BlockParagraphProps) => {

    const {
        fontFamily: paragraphFontFamily,
        textColor: paragraphTextColor,
        theme: paragraphTheme
    } = useCustomStyle(props.block.id);

    const Theme1 = () => {
        return (
            <div className={styles.themeWrapper}>
                <p className={styles.paragraphContain} style={{ fontFamily: paragraphFontFamily, color: `#${paragraphTextColor}` }}>{props.block.content}</p>
            </div>
        );
    }

    const Theme2 = () => {
        return (
            <div className={styles.themeWrapper} style={{ fontFamily: "Roboto Mono" }}>
                <p className={styles.paragraphContain} style={{ fontFamily: paragraphFontFamily, color: `#${paragraphTextColor}` }}>{props.block.content}</p>
            </div>
        );
    }

    return (
        <>
            <div className={styles.blockParagraphContain}>
                <DataBlock id={props.block.id} block={props.block}>
                    {paragraphTheme === "default" && Theme1()}
                    {paragraphTheme === "theme1" && Theme1()}
                    {paragraphTheme === "theme2" && Theme2()}
                </DataBlock>
            </div>
        </>
    );
};

export default BlockParagraph;