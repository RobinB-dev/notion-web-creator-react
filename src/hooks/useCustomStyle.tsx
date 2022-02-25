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

const useCustomStyle = (blockId: string) => {
    const dataCtx = useContext(DataContext);
    const acitveBlockId = testObj(dataCtx.activeBlock, "id")
    const [customStyle, setCustomStyle] = useState(initialCustomStyleState);
    const BlockType = testObj(menuToolBar, testObj(dataCtx.activeBlock, "obj"));

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

    const updateType = (_type: string, _id: string) => {
        const elemType = testObj(TypeStyle, _type)

        for (let i = 0; i < elemType.length; i++) {
            const styleName = elemType[i][0];
            const styleCtx = elemType[i][1];
            // console.log("elemStyle : ", elemStyle, _id);

            // if the value is not in the context
            if (styleCtx !== "") {
                let newStyle = { id: _id, [styleName]: styleCtx };
                // if a id doesnt exist in styleStore
                if (obj === undefined) {
                    dataCtx.setStyleStore([...dataCtx.styleStore, newStyle])
                } else {
                    obj[styleName] = styleCtx
                }
                setCustomStyle((prevState) => ({
                    ...prevState,
                    [styleName]: styleCtx
                }))

            }

        }
    }


    useEffect(() => {


        const updateStyleStore = () => {

            if (acitveBlockId === 'a0c1294e-page') {
                // console.log('page ', BlockType);
                updateType(BlockType, acitveBlockId)
            } else if (acitveBlockId === blockId) {
                // console.log('BlockType ', BlockType);
                if (BlockType === "text" || BlockType === "image") {
                    updateType(BlockType, acitveBlockId)
                } else {
                    console.log('not text');
                }
            }



            // console.log("refresh ", dataCtx.styleStore);
        }

        updateStyleStore()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataCtx, acitveBlockId, blockId, BlockType])


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
