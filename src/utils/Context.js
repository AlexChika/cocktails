import React from "react";
import { useContext } from "react";
const AppContext = React.createContext();
const GeneralContext = ({ children }) => {
  return (
    <AppContext.Provider value={"Hello world"}>{children}</AppContext.Provider>
  );
};
export const useGeneralContext = () => {
  return useContext(AppContext);
};

export default GeneralContext;
