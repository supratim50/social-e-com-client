import { createContext, useReducer } from "react";
import { profileReducer, initialState } from "./profileReducer";

export const ProfileContext = createContext();

export const Datalayer = ({ children }) => {
  return (
    <ProfileContext.Provider value={useReducer(profileReducer, initialState)}>
      {children}
    </ProfileContext.Provider>
  );
};
