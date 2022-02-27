import React, { useContext, useEffect } from 'react';
import DataContext from '../../../contexts/DataContext';
import useCustomStyle from '../../../hooks/useCustomStyle';
import styles from './BlocksNotion.module.css'
import DataBlock from './DataBlock';

type BlockHeading1Props = {
    key: number,
    block: any
}

const BlockImage = ({ block }: BlockHeading1Props) => {
    const dataCtx = useContext(DataContext);

    const {
        borderRadius: imageBorderRadius,
        theme: imageTheme,
    } = useCustomStyle(block.obj, block.id);

    useEffect(() => {
    }, [dataCtx.theme])


    const Theme1 = () => {
        return (
            <div className={styles.themeWrapper}>
                <img className={styles.blockImage} src={block.content} alt="" style={{ borderRadius: imageBorderRadius }} />
            </div>
        );
    }

    const Theme2 = () => {
        return (
            <div className={styles.themeWrapper} style={{ fontFamily: "Roboto Mono" }}>
                <img className={styles.blockImage} src={block.content} alt="" style={{ borderRadius: imageBorderRadius }} />
                <div className={styles.imageDotsFrame}></div>
            </div>
        );
    }


    return (
        <>
            <div className={styles.blockImageContain}>
                <DataBlock id={block.id} block={block}>
                    {imageTheme === "default" && Theme1()}
                    {imageTheme === "theme1" && Theme1()}
                    {imageTheme === "theme2" && Theme2()}
                </DataBlock>
            </div>
        </>
    );
};

export default BlockImage;