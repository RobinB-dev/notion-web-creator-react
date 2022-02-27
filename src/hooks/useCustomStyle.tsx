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
        text: [
            ["fontFamily", dataCtx.fontFamily],
            ["textColor", dataCtx.textColor],
            ["theme", dataCtx.theme]],
        block: [
            ["borderRadius", dataCtx.borderRadius]],
        image: [
            ["borderRadius", dataCtx.borderRadius],
            ["theme", dataCtx.theme]],
        general: [
            ["fontFamily", dataCtx.fontFamily],
            ["textColor", dataCtx.textColor],
            ["theme", dataCtx.theme]]
    }

    const updateType = (_type: string, _id: string, _blockObj: string) => {
        const elemType = testObj(TypeStyle, _type)

        for (let i = 0; i < elemType.length; i++) {
            const styleName = elemType[i][0];
            const styleCtx = elemType[i][1];
            // console.log("elemStyle : ", elemStyle, _id);

            // console.log(_blockObj, _type);
            // if the value is not in the context
            if (styleCtx !== "") {

                let newStyle = { id: _id, [styleName]: styleCtx[_blockObj] };
                // if a id doesnt exist in styleStore


                let newPageStyle = { id: _id, [_blockObj]: { [styleName]: styleCtx[_blockObj] } };
                let newPageStyle2 = { [styleName]: styleCtx[_blockObj] };
                // handle style of the page
                if (acitveBlockId === 'a0c1294e-page') {
                    // store the style in the styleStore

                    // console.log(styleCtx[_blockObj]);

                    // select only the good type of block
                    if (styleCtx[_blockObj]) {

                        if (obj === undefined) {
                            console.log("not stored");
                            dataCtx.setStyleStore([...dataCtx.styleStore, newPageStyle])
                        } else {
                            console.log("stored");
                            obj[_blockObj] = newPageStyle2
                        }

                        // console.log(styleCtx[_blockObj]);

                        // update hook state from the styleStore
                        setCustomStyle((prevState) => ({
                            ...prevState,
                            [styleName]: styleCtx[_blockObj]
                        }))

                    }



                    // update hook state from the styleStore


                } else { // handle style of one block

                    // store the style in the styleStore
                    if (obj === undefined) {
                        dataCtx.setStyleStore([...dataCtx.styleStore, newStyle])
                    } else {
                        obj[styleName] = styleCtx[_blockObj]
                    }

                    // update hook state from the styleStore
                    setCustomStyle((prevState) => ({
                        ...prevState,
                        [styleName]: styleCtx[_blockObj]
                    }))
                }

                // console.log(blockId);
                // console.log(_blockObj, _type);
                // console.log(dataCtx);

                // function detect style conflicts

            }

        }
    }

    useEffect(() => {

        const updateStyleStore = () => {

            if (acitveBlockId === 'a0c1294e-page') {
                // console.log('page ', activeBlockType);
                updateType(activeBlockType, acitveBlockId, blockObj)

            } else if (acitveBlockId === blockId) {
                // console.log('activeBlockType ', activeBlockType, blockObj);
                if (activeBlockType === "text" || activeBlockType === "image") {
                    updateType(activeBlockType, acitveBlockId, "select")
                } else {
                    console.log('not text');
                }
            }

            // console.log("refresh ", dataCtx.styleStore);
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
