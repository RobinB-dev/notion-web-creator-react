import React, { useState, createContext } from 'react';

type DataContextProps = {
    notionData: object;
    setNotionData?: any;
    updateNotionData?: () => void;
  }
  
  const defaultState = {
    notionData: {obj: "ici"},
  };
  
const DataContext = createContext<DataContextProps>(defaultState);
  
  export const DataProvider: React.FC = ({ children }) => {
    const [notionData, setNotionData] = useState(defaultState.notionData);
  
    const updateNotionData = () => {
      setNotionData({obj: "la"});
    };
  
    return (
      <DataContext.Provider
        value={{
          notionData,
          updateNotionData,
          setNotionData,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };


  export default DataContext
  
//   export const useDataContext = () =>  useContext(DataContext);