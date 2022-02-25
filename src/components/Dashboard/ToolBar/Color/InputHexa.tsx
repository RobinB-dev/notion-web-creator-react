import React, { useEffect, useState } from 'react';
import styles from '../ToolBar.module.css'

const InputHexa = (props: any) => {
    const [colorValue, setColorValue] = useState(props.value)
    const [colorSuggest, setColorSuggest] = useState("")

    useEffect(() => {
        setColorSuggest("")
        setColorValue(props.value)
    }, [props.value])

    const onChange = (e: { currentTarget: { value: any; }; }) => {
        const input = e.currentTarget.value;
        if (input.length > 6) { return }
        // check value hexa format
        if (!(/^[0-9a-f]+$/.test(input))) { return }

        (input.length === 3) ? setColorSuggest(input + input) : setColorSuggest("")

        if (input.length === 6) {
            console.log("6 : ", input);
            props.setValue(input)
        }
        setColorValue(input);
    }

    function validateSuggest(event: any) {
        if (event.key === 'Enter' || event.type === 'blur') {
            if (colorValue.length === 3) {
                props.setValue(colorSuggest)
            }
        }
    }

    return (
        <div
            className={styles.colorInput}
            data-prefix="#"
            data-suggest={colorSuggest}>
            <input type="text"
                value={colorValue}
                onChange={onChange}
                onKeyDown={validateSuggest}
                onBlur={validateSuggest}
            />

        </div>
    );
};

export default InputHexa;