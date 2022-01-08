import { useContext, useEffect, useState } from 'react';
import DataContext from '../contexts/DataContext';
import { testObj } from '../components/Dashboard/BlocksNotion/CreateBlock';
import { menuToolBar } from '../components/Dashboard/Customize';

const initialCustomStyleState = {
    fontFamily: 'roboto',
    textColor: "blue",
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
            const element = testObj(TypeStyle, type)[i];
            const elem1 = element[0];
            // console.log(elem1);

            if (element[1] === "") { return }

            let newNumber = { id: acitveBlockId, [elem1]: element[1] };
            // if a id doesnt exist in styleStore
            if (obj === undefined) {
                dataCtx.setStyleStore([...dataCtx.styleStore, newNumber])
            } else {
                obj[elem1] = element[1]
            }
            setCustomStyle((prevState) => ({
                ...prevState,
                [elem1]: element[1]
            }))
        }
    }


    useEffect(() => {


        const updateStyleStore = () => {
            if (acitveBlockId !== blockId) { return }

            // console.log('BlockType ', BlockType);


            if (BlockType === "text") {
                updateType("text")
            } else if (BlockType === "image") {
                updateType("image")
            } else {
                console.log('not text');
            }
            // console.log("refresh ", dataCtx.styleStore);
        }

        updateStyleStore()
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
