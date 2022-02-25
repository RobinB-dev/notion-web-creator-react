import React, { useContext, useEffect, useState } from 'react';
import styles from '../ToolBar.module.css'
import theme1 from '../../../../assets/images/theme1.svg'
import theme2 from '../../../../assets/images/theme2.svg'
import theme3 from '../../../../assets/images/theme3.svg'
import DataContext from '../../../../contexts/DataContext';
import { testObj } from '../../../../decl';

const ThemeRadio = () => {
    const dataCtx = useContext(DataContext);
    const acitveBlockId = testObj(dataCtx.activeBlock, "id")
    const [activeTheme, setActiveTheme] = useState("default")
    let obj = dataCtx.styleStore.find((o: { id: string; }) => o.id === acitveBlockId);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dataCtx.setTheme(e.target.value);
        setActiveTheme(e.target.value)
    }

    useEffect(() => {
        if (!obj) {
            setActiveTheme("default")
        } else {
            setActiveTheme(testObj(obj, "theme"))
        }
    }, [activeTheme, obj])

    return (
        <div className={styles.radioContainer}>
            <label className={styles.radio}>
                <input
                    type="radio"
                    name="radio"
                    value="theme1"
                    onChange={onChange}
                    checked={(activeTheme === "theme1") || (activeTheme === "default")}>
                </input>
                <img src={theme1} alt="" />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.radio}>
                <input
                    type="radio"
                    name="radio"
                    value="theme2"
                    onChange={onChange}
                    checked={activeTheme === "theme2"}>
                </input>
                <img src={theme2} alt="" />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.radio}>
                <input
                    type="radio"
                    name="radio"
                    value="theme3"
                    onChange={onChange}
                    checked={activeTheme === "theme3"}>
                </input>
                <img src={theme3} alt="" />
                <span className={styles.checkmark}></span>
            </label>
        </div>
    );
};

export default ThemeRadio;