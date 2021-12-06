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
            {((activeObj === "heading1") || (bloctype === "general")) &&
                <div>
                    <h3>Heading 1</h3>
                    <FontPicker />
                </div>
            }
            {((activeObj === "heading2") || (bloctype === "general")) &&
                <div>
                    <h3>Heading 2</h3>
                    <FontPicker />
                </div>
            }
            {((activeObj === "heading3") || (bloctype === "general")) &&
                <div>
                    <h3>Heading 3</h3>
                    <FontPicker />
                </div>
            }
            {((activeObj === "text") || (bloctype === "general")) &&
                <div>
                    <h3>Heading 3</h3>
                    <FontPicker />
                </div>
            }
        </>
    );
};

export default ToolText;