import React, { useContext, useEffect, useState } from 'react';
import { Select } from 'antd';
import styles from '../ToolBar.module.css'
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

type FontPickerProps = {
    type: string
}


const FontPicker = ({ type }: FontPickerProps) => {
    const dataCtx = useContext(DataContext);
    const activeObj = testObj(dataCtx.activeBlock, "obj")
    const acitveBlockId = testObj(dataCtx.activeBlock, "id")
    const [activeFontFamily, setActiveFontFamily] = useState("default")
    let obj = dataCtx.styleStore.find((o: { id: string; }) => o.id === acitveBlockId);


    const handleChange = (value: string) => {
        // dataCtx.setFontFamily(value)

        if (activeObj === "page") {
            dataCtx.setFontFamily({ [type]: value })
        } else {
            dataCtx.setFontFamily({ select: value })
        }
        setActiveFontFamily(value)
    }

    useEffect(() => {
        if (!obj) { return }

        if (activeObj === "page") {
            setActiveFontFamily(testObj(obj[type], "fontFamily"))
        } else {
            setActiveFontFamily(testObj(obj, "fontFamily"))
        }
    }, [activeFontFamily, obj, activeObj, type])

    return (
        <div>
            <Select value={activeFontFamily} className={styles.selectFont} onChange={handleChange}>
                {FontList.map((fontFamily: string, key) => <Option value={fontFamily} key={key}>{fontFamily}</Option>)}
                {/* <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option> */}
            </Select>
        </div>
    );
};

export default FontPicker;