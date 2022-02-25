import React from 'react';
import useCustomStyle from '../../../hooks/useCustomStyle';
import styles from './BlocksNotion.module.css'
import DataBlock from './DataBlock';

type BlockHeading1Props = {
    key: number,
    block: any
}

const BlockImage = (props: BlockHeading1Props) => {

    const {
        borderRadius: imageBorderRadius,
        theme: imageTheme,
    } = useCustomStyle(props.block.id);

    const Theme1 = () => {
        return (
            <div className={styles.themeWrapper}>
                <img className={styles.blockImage} src={props.block.content} alt="" style={{ borderRadius: imageBorderRadius }} />
            </div>
        );
    }

    const Theme2 = () => {
        return (
            <div className={styles.themeWrapper} style={{ fontFamily: "Roboto Mono" }}>
                <img className={styles.blockImage} src={props.block.content} alt="" style={{ borderRadius: imageBorderRadius }} />
                <div className={styles.imageDotsFrame}></div>
            </div>
        );
    }


    return (
        <>
            <div className={styles.blockImageContain}>
                <DataBlock id={props.block.id} block={props.block}>
                    {imageTheme === "default" && Theme1()}
                    {imageTheme === "theme1" && Theme1()}
                    {imageTheme === "theme2" && Theme2()}
                </DataBlock>
            </div>
        </>
    );
};

export default BlockImage;