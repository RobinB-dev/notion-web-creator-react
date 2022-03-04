import React, { useState, createContext } from 'react';
import { pageObj } from '../decl';

type DataContextProps = {
  notionData: object;
  setNotionData?: any;
  notionPages: any;
  setNotionPages?: any;
  selectPageId: string;
  setSelectPageId?: any;
  isLoading: { api: boolean, auth: boolean, projects: boolean, customize: boolean },
  setIsLoading?: any;
  activeBlock: object;
  setActiveBlock?: any;
  styleStore: any;
  setStyleStore?: any;
  fontFamily: { select: string, h1: string; h2: string; h3: string; paragraph: string };
  setFontFamily?: any;
  textColor: { select: string, h1: string; h2: string; h3: string; paragraph: string };
  setTextColor?: any;
  textOpacity: { select: string, h1: string; h2: string; h3: string; paragraph: string };
  setTextOpacity?: any;
  theme: { select: string, page: string, h1: string, h2: string, h3: string, paragraph: string };
  setTheme?: any;
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
  isLoading: { api: false, auth: true, projects: true, customize: true },
  activeBlock: pageObj,
  fontFamily: { select: "", h1: "", h2: "", h3: "", paragraph: "" },
  borderRadius: "",
  textColor: { select: "", h1: "", h2: "", h3: "", paragraph: "" },
  textOpacity: { select: "", h1: "", h2: "", h3: "", paragraph: "" },
  theme: { select: "", page: "", h1: "", h2: "", h3: "", paragraph: "" },
  overlayActive: false,
  styleStore: [],
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
  const [theme, setTheme] = useState(defaultState.theme);
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
        theme,
        setTheme,
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