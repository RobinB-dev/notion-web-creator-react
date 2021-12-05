import React, { useContext } from 'react';
import DataContext from '../../../contexts/DataContext';

type ToolTextProps = {
    bloctype: string | undefined
}

const ToolText = ( bloctype: ToolTextProps ) => {
    const dataCtx = useContext(DataContext);
    console.log('rerep', dataCtx.activeBlock);
    
    
    return (
        <div>
            Ici
        </div>
    );
};

export default ToolText;