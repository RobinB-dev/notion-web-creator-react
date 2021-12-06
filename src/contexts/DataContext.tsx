import React, { useState, createContext } from 'react';

type DataContextProps = {
    notionData: object;
    setNotionData?: any;
    activeBlock: object;
    setActiveBlock?: any;
    styleStore: any;
    setStyleStore?: any;
    font: string;
    setFont?: any;
    updateNotionData?: () => void;
  }
  
  const defaultState = {
    notionData: {obj: "ici"},
    activeBlock: {},
    font: '',
    styleStore: [{id:"dzeiuln", fontFam:"red"},{id:"dzeiuln", fontFam:"red"}],
  };
  
const DataContext = createContext<DataContextProps>(defaultState);
  
  export const DataProvider: React.FC = ({ children }) => {
    const [notionData, setNotionData] = useState(defaultState.notionData);
    const [activeBlock, setActiveBlock] = useState(defaultState.activeBlock);
    const [font, setFont] = useState(defaultState.font);
    const [styleStore, setStyleStore] = useState(defaultState.styleStore);
  //   const [data, setData] = useState({
  //     address:{
  //       0:{},
  //       1:{},
  //     }
  //  })

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
          font,
          setFont,
          styleStore,
          setStyleStore
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };


  export default DataContext
  
//   export const useDataContext = () =>  useContext(DataContext);