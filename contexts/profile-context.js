import { createContext, useReducer } from "react";
import { profileReducer, initialState } from "./profileReducer";

export const AppContext = createContext();

export const Datalayer = ({ children }) => {
  return (
    <AppContext.Provider value={useReducer(profileReducer, initialState)}>
      {children}
    </AppContext.Provider>
  );
};
