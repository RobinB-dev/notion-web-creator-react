import React, { useContext } from 'react';
import DataContext from '../../../contexts/DataContext';
import { testObj } from '../BlocksNotion/CreateBlock';
import FontPicker from '../BlocksNotion/FontPicker';

type ToolTextProps = {
    bloctype: string | undefined
}

const ToolText = ({ bloctype }: ToolTextProps ) => {
    const dataCtx = useContext(DataContext);
    const activeObj = testObj(dataCtx.activeBlock, "obj");
    
    return (
        <>
            {((activeObj === "heading_1") || (bloctype === "general")) &&
                <div>
                    <h3>Heading 1</h3>
                    <FontPicker />
                </div>
            }
            {((activeObj === "heading_2") || (bloctype === "general")) &&
                <div>
                    <h3>Heading 2</h3>
                    <FontPicker />
                </div>
            }
            {((activeObj === "heading_3") || (bloctype === "general")) &&
                <div>
                    <h3>Heading 3</h3>
                    <FontPicker />
                </div>
            }
            {((activeObj === "paragraph") || (bloctype === "general")) &&
                <div>
                    <h3>Heading 3</h3>
                    <FontPicker />
                </div>
            }
        </>
    );
};

export default ToolText;