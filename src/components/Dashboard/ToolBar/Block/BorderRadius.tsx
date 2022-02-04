import React, { useContext, useEffect, useState } from 'react';
import { InputNumber } from 'antd';
import classes from '../../Dashboard.module.css'
import DataContext from '../../../../contexts/DataContext';
import { testObj } from '../../../../decl';


const BorderRadius = () => {
    const dataCtx = useContext(DataContext);
    const acitveBlockId = testObj(dataCtx.activeBlock, "id")
    const [inputValue, setInputValue] = useState(20)
    let obj = dataCtx.styleStore.find((o: { id: string; }) => o.id === acitveBlockId);

    const handleChange = (value: number) => {
        dataCtx.setBorderRadius(value + "px")
        setInputValue(value)
    }

    useEffect(() => {
        if (!obj) { return }
        const brString = testObj(obj, "borderRadius")
        if (!brString) { return }
        // get the first numbers  of the string
        setInputValue(brString.replace(/(^\d+)(.+$)/i, '$1'))

    }, [inputValue, obj])

    return (
        <div className={classes.borderRadius}>
            <h4>Border radius</h4>
            <InputNumber min={1} max={1000} value={inputValue} onChange={handleChange} />
        </div>
    );
};

export default BorderRadius;