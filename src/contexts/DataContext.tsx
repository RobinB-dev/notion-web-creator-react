import React, { useState, createContext } from 'react';

type DataContextProps = {
    notionData: object;
    setNotionData?: any;
    activeBlock: object;
    setActiveBlock?: any;
    updateNotionData?: () => void;
  }
  
  const defaultState = {
    notionData: {obj: "ici"},
    activeBlock: {}
  };
  
const DataContext = createContext<DataContextProps>(defaultState);
  
  export const DataProvider: React.FC = ({ children }) => {
    const [notionData, setNotionData] = useState(defaultState.notionData);
    const [activeBlock, setActiveBlock] = useState(defaultState.activeBlock);

    // console.log('my : ', activeBlock);
    
  
    const updateNotionData = () => {
      setNotionData({obj: "la"});
    };
  
    return (
      <DataContext.Provider
        value={{
          notionData,
          updateNotionData,
          setNotionData,
          activeBlock,
          setActiveBlock,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };


  export default DataContext
  
//   export const useDataContext = () =>  useContext(DataContext);