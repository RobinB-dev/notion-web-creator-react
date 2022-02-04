import React, { useState, useContext, useEffect } from 'react';
import { HexColorPicker } from "react-colorful";
import DataContext from '../../../../contexts/DataContext';
import { testObj } from '../../../../decl';
import InputHexa from './InputHexa'
import { Input, InputNumber } from 'antd';
import classes from '../../Dashboard.module.css'


const ColorBar = () => {
    const dataCtx = useContext(DataContext);
    const [toogleColor, setToogleColor] = useState(false)
    // const [opacity, setOpacity] = useState(100)
    const [barColor, setBarColor] = useState("000000")

    const acitveBlockId = testObj(dataCtx.activeBlock, "id")
    let obj = dataCtx.styleStore.find((o: { id: string; }) => o.id === acitveBlockId);

    useEffect(() => {
        if (!obj) { return }
        setBarColor(testObj(obj, "textColor"))
    }, [dataCtx.textColor, dataCtx.activeBlock, obj])

    const changeColor = (color: any) => {
        setBarColor(color)
        dataCtx.setTextColor(color);
    }

    function onClick() {
        setToogleColor(!toogleColor)
        dataCtx.setOverlayActive(!toogleColor)
    }

    function onChange(value: number) {
        // setOpacity(value / 100)
    }

    // useEffect(() => {
    //     // console.log("barColordddd", barColor);
    // }, [barColor])

    // function addAlpha(color: string, opacity: number): string {
    //     // coerce values so ti is between 0 and 1.
    //     const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    //     return color + _opacity.toString(16).toUpperCase();
    // }

    // useEffect(() => {
    //     addAlpha(dataCtx.textColor, opacity)
    //     dataCtx.setTextOpacity(addAlpha(dataCtx.textColor, opacity))
    // }, [dataCtx.textColor, dataCtx.textOpacity, opacity])


    useEffect(() => {
        setToogleColor(dataCtx.overlayActive)
    }, [dataCtx.overlayActive])


    return (
        <>
            <Input.Group compact>
                <button className={classes.colorButton} onClick={onClick}><div style={{ background: "#" + barColor }}></div></button>
                <InputHexa value={barColor} setValue={changeColor} />
                <InputNumber
                    defaultValue={100}
                    min={0}
                    max={100}
                    formatter={value => `${value}%`}
                    onChange={onChange}
                />
            </Input.Group>
            {toogleColor && <ColorPicker value={barColor} setValue={changeColor} />}
        </>
    )
}

export default ColorBar;



const ColorPicker = (props: any) => {
    const [color, setColor] = useState("#" + props.value);

    useEffect(() => {
        setColor("#" + props.value)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function onChange(value: any) {
        setColor(value)
        props.setValue(value.split(/#(.+)/)[1])
    }

    return (
        <>
            <HexColorPicker color={color} onChange={onChange} />
        </>
    );
};
