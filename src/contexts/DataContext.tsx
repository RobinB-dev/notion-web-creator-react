import React, { useState, createContext } from 'react';

type DataContextProps = {
  notionData: object;
  setNotionData?: any;
  isLoading: any;
  setIsLoading?: any;
  activeBlock: object;
  setActiveBlock?: any;
  styleStore: any;
  setStyleStore?: any;
  fontFamily: string;
  setFontFamily?: any;
  textColor: string;
  setTextColor?: any;
  borderRadius: string;
  setBorderRadius?: any;
  updateNotionData?: () => void;
}

const defaultState = {
  notionData: { obj: "ici" },
  isLoading: { auth: false, projects: false, customize: false },
  activeBlock: {},
  fontFamily: '',
  borderRadius: "20px",
  textColor: "",
  styleStore: [{ id: "dzeiuln", fontFamily: "red" }, { id: "dzeiuln", fontFamily: "red" }],
};

const DataContext = createContext<DataContextProps>(defaultState);

export const DataProvider: React.FC = ({ children }) => {
  const [notionData, setNotionData] = useState(defaultState.notionData);
  const [isLoading, setIsLoading] = useState(defaultState.isLoading);
  const [activeBlock, setActiveBlock] = useState(defaultState.activeBlock);
  const [fontFamily, setFontFamily] = useState(defaultState.fontFamily);
  const [borderRadius, setBorderRadius] = useState(defaultState.borderRadius);
  const [textColor, setTextColor] = useState(defaultState.textColor);
  const [styleStore, setStyleStore] = useState(defaultState.styleStore);
  //   const [data, setData] = useState({
  //     address:{
  //       0:{},
  //       1:{},
  //     }
  //  })

  // console.log('my : ', activeBlock);


  const updateNotionData = () => {
    setNotionData({ obj: "la" });
  };

  return (
    <DataContext.Provider
      value={{
        notionData,
        updateNotionData,
        setNotionData,
        activeBlock,
        setActiveBlock,
        fontFamily,
        setFontFamily,
        borderRadius,
        setBorderRadius,
        styleStore,
        setStyleStore,
        textColor,
        setTextColor,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </DataContext.Provider>
  );
};


export default DataContext

//   export const useDataContext = () =>  useContext(DataContext);