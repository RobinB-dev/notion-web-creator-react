import React, { useContext } from 'react';
import { Select } from 'antd';
import classes from '../Dashboard.module.css'
import DataContext from '../../../contexts/DataContext';
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

    function handleChange(value: string) {
        dataCtx.setFont(value)
        console.log(`selected ${value}`);
    }
    return (
        <div>
            <Select defaultValue={FontList[0]} className={classes.selectFont} style={{ width: 120 }} onChange={handleChange}>
                {FontList.map((fontFamily: string, key) => <Option value={fontFamily} key={key}>{fontFamily}</Option>)}
                {/* <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option> */}
            </Select>
        </div>
    );
};

export default FontPicker;