import { useContext, useEffect, useState } from 'react';
import DataContext from '../contexts/DataContext';
import { menuToolBar } from '../decl'
import { testObj } from '../decl';

const initialCustomStyleState = {
    fontFamily: 'default',
    textColor: "#fefefe",
    fontWeight: "blue",
    fontSize: "12px",
    fontAlign: "left",
    borderRadius: "10px",
    theme: "default"
};

const useCustomStyle = (blockObj: string, blockId: string) => {
    const dataCtx = useContext(DataContext);
    const [customStyle, setCustomStyle] = useState(initialCustomStyleState);
    const acitveBlockId = testObj(dataCtx.activeBlock, "id")
    const activeBlockObj = testObj(dataCtx.activeBlock, "obj")
    const activeBlockType = testObj(menuToolBar, activeBlockObj);

    let obj = dataCtx.styleStore.find((o: { id: string; }) => o.id === acitveBlockId);


    const TypeStyle = {
        text: ["fontFamily", "textColor", "theme"],
        block: ["borderRadius"],
        image: ["borderRadius", "theme"],
        general: ["fontFamily", "textColor", "theme"]
    }

    // update hook state from the context
    const UpdateHookStates = (styleName: string, styleCtx: any, _blockObj: string) => {
        if (!styleCtx[_blockObj]) { return } // select only the good type of block
        setCustomStyle((prevState) => ({
            ...prevState,
            [styleName]: styleCtx[_blockObj]
        }))
    }

    const UpdateStyleStore = (styleName: string, styleCtx: any, _id: string, _blockObj: string) => {
        let newStyle = { id: _id, [styleName]: styleCtx[_blockObj] };
        let newPageStyle = { id: _id, [_blockObj]: { [styleName]: styleCtx[_blockObj] } };
        let newPageStyle2 = { [styleName]: styleCtx[_blockObj] };

        if (acitveBlockId === 'a0c1294e-page') {
            if (!styleCtx[_blockObj]) { return } // select only the good type of block

            if (obj === undefined) {
                dataCtx.setStyleStore([...dataCtx.styleStore, newPageStyle])
            } else if (testObj(obj, _blockObj) === undefined) {
                console.log("new styleName");
                obj[_blockObj] = newPageStyle2
            } else {
                obj[_blockObj][styleName] = styleCtx[_blockObj]
            }

        } else {
            if (obj === undefined) {
                dataCtx.setStyleStore([...dataCtx.styleStore, newStyle])
            } else {
                obj[styleName] = styleCtx[_blockObj]
            }
        }
    }

    const updateType = (_type: string, _id: string, _blockObj: string) => {
        const elemType = testObj(TypeStyle, _type)

        for (let i = 0; i < elemType.length; i++) {
            const styleName = elemType[i];
            const styleCtx = dataCtx[styleName];

            // if the context is not empty
            if (styleCtx !== "") {
                UpdateStyleStore(styleName, styleCtx, _id, _blockObj)
                UpdateHookStates(styleName, styleCtx, _blockObj)

                // function detect style conflicts
            }
        }
    }

    useEffect(() => {

        const updateStyleStore = () => {

            if (acitveBlockId === 'a0c1294e-page') {
                updateType(activeBlockType, acitveBlockId, blockObj)
            } else if (acitveBlockId === blockId) {
                if (activeBlockType === "text" || activeBlockType === "image") {
                    updateType(activeBlockType, acitveBlockId, "select")
                } else {
                    console.log('not text');
                }
            }
        }

        updateStyleStore()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataCtx, acitveBlockId, blockId, activeBlockType])


    return {
        fontFamily: customStyle.fontFamily,
        textColor: customStyle.textColor,
        fontWeight: customStyle.fontWeight,
        fontSize: customStyle.fontSize,
        fontAlign: customStyle.fontAlign,
        borderRadius: customStyle.borderRadius,
        theme: customStyle.theme
    };
};

export default useCustomStyle;
