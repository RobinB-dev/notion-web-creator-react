import React, { useContext, useEffect, useState } from 'react';
import { Select } from 'antd';
import classes from '../../Dashboard.module.css'
import DataContext from '../../../../contexts/DataContext';
import { testObj } from '../../../../decl';
// import 'antd/lib/select/style/index.css'

const { Option } = Select;

const FontList = [
    "Lato",
    "Montserrat",
    "Open Sans",
    "Roboto",
    "Roboto Mono",
    "Ubuntu",
]


const FontPicker = () => {
    const dataCtx = useContext(DataContext);
    const acitveBlockId = testObj(dataCtx.activeBlock, "id")
    const [activeFontFamily, setActiveFontFamily] = useState("default")
    let obj = dataCtx.styleStore.find((o: { id: string; }) => o.id === acitveBlockId);

    // console.log(obj);

    const handleChange = (value: string) => {
        dataCtx.setFontFamily(value)
        setActiveFontFamily(value)
    }

    useEffect(() => {
        if (!obj) { return }
        setActiveFontFamily(testObj(obj, "fontFamily"))
    }, [activeFontFamily, obj])

    return (
        <div>
            <Select value={activeFontFamily} className={classes.selectFont} onChange={handleChange}>
                {FontList.map((fontFamily: string, key) => <Option value={fontFamily} key={key}>{fontFamily}</Option>)}
                {/* <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option> */}
            </Select>
        </div>
    );
};

export default FontPicker;