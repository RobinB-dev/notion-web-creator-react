import { useContext, useEffect, useState } from 'react';
import DataContext from '../contexts/DataContext';
import { menuToolBar } from '../decl'
import { testObj } from '../decl';

const initialCustomStyleState = {
    fontFamily: 'roboto',
    textColor: "#fefefe",
    fontWeight: "blue",
    fontSize: "12px",
    fontAlign: "left",
    borderRadius: "10px"
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
            ["textColor", dataCtx.textColor]],
        block: [
            ["borderRadius", dataCtx.borderRadius]],
        image: [
            ["borderRadius", dataCtx.borderRadius]],
        general: [
            ["fontFamily", dataCtx.fontFamily],
            ["textColor", dataCtx.textColor]]
    }


    const updateType = (type: string) => {

        for (let i = 0; i < testObj(TypeStyle, type).length; i++) {
            const elemType = testObj(TypeStyle, type)[i];
            // const elemType[0] = elemType[0];
            // console.log(elemType);
            // console.log("elemType : ", elemType, acitveBlockId);

            // if the value is not in the context
            if (elemType[1] !== "") {
                let newStyle = { id: acitveBlockId, [elemType[0]]: elemType[1] };
                // if a id doesnt exist in styleStore
                if (obj === undefined) {
                    dataCtx.setStyleStore([...dataCtx.styleStore, newStyle])
                } else {
                    obj[elemType[0]] = elemType[1]
                }
                setCustomStyle((prevState) => ({
                    ...prevState,
                    [elemType[0]]: elemType[1]
                }))

            }

        }
    }


    useEffect(() => {


        const updateStyleStore = () => {

            if (acitveBlockId === 'a0c1294e-page') {
                console.log("acitvePage");
            } else if (acitveBlockId === blockId) {
                console.log('BlockType ', BlockType);
                if (BlockType === "text") {
                    updateType("text")
                } else if (BlockType === "image") {
                    updateType("image")
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
        borderRadius: customStyle.borderRadius
    };
};

export default useCustomStyle;
