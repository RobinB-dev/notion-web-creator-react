import React, { useState, createContext } from 'react';

type DataContextProps = {
  notionData: object;
  setNotionData?: any;
  notionPages: any;
  setNotionPages?: any;
  selectPageId: string;
  setSelectPageId?: any;
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
  textOpacity: string;
  setTextOpacity?: any;
  borderRadius: string;
  setBorderRadius?: any;
  overlayActive: boolean;
  setOverlayActive?: any;
  updateNotionData?: () => void;
}

const defaultState = {
  notionData: {},
  notionPages: [],
  selectPageId: "",
  isLoading: { auth: true, projects: true, customize: true },
  activeBlock: {},
  fontFamily: '',
  borderRadius: "20px",
  textColor: "000000",
  textOpacity: "",
  overlayActive: false,
  styleStore: [{ id: "a0c1294e-page", fontFamily: "Roboto Mono" }, { id: "dzeiuln", fontFamily: "red" }],
};

const DataContext = createContext<DataContextProps>(defaultState);

export const DataProvider: React.FC = ({ children }) => {
  const [notionData, setNotionData] = useState(defaultState.notionData);
  const [notionPages, setNotionPages] = useState(defaultState.notionPages);
  const [selectPageId, setSelectPageId] = useState(defaultState.selectPageId);
  const [isLoading, setIsLoading] = useState(defaultState.isLoading);
  const [activeBlock, setActiveBlock] = useState(defaultState.activeBlock);
  const [fontFamily, setFontFamily] = useState(defaultState.fontFamily);
  const [borderRadius, setBorderRadius] = useState(defaultState.borderRadius);
  const [textColor, setTextColor] = useState(defaultState.textColor);
  const [textOpacity, setTextOpacity] = useState(defaultState.textOpacity);
  const [overlayActive, setOverlayActive] = useState(defaultState.overlayActive);
  const [styleStore, setStyleStore] = useState(defaultState.styleStore);
  //   const [data, setData] = useState({
  //     address:{
  //       0:{},
  //       1:{},
  //     }
  //  })


  const updateNotionData = () => {
    setNotionData({ obj: "la" });
  };

  return (
    <DataContext.Provider
      value={{
        notionData,
        updateNotionData,
        setNotionData,
        notionPages,
        setNotionPages,
        selectPageId,
        setSelectPageId,
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
        textOpacity,
        setTextOpacity,
        isLoading,
        setIsLoading,
        overlayActive,
        setOverlayActive
      }}
    >
      {children}
    </DataContext.Provider>
  );
};


export default DataContext

//   export const useDataContext = () =>  useContext(DataContext);