import React, { createContext, useEffect, useReducer } from "react";
import { recipies } from "../data/recipies";

export const DataContext = createContext();

const initialRecipies = localStorage.getItem("recipies")
  ? JSON.parse(localStorage.getItem("recipies"))
  : recipies;

const DataContextProvider = ({ children }) => {
  const recipiesReducer = (prev, { type, payload }) => {
    switch (type) {
      case "ADD_RECIPIE": {
        return [...prev, payload.recipie];
      }
      case "REMOVE_RECIPIE": {
        return prev.filter(({ key }) => key !== payload.key);
      }
      case "EDIT_RECIPIE": {
        return prev.map((recipie) =>
          recipie.key === payload.recipie.key ? payload.recipie : recipie
        );
      }
      default:
        return [...prev];
    }
  };

  const [recipiesData, dispatchRecipies] = useReducer(
    recipiesReducer,
    initialRecipies
  );

  useEffect(() => {
    localStorage.setItem("recipies", JSON.stringify(recipiesData));
  }, [recipiesData]);

  return (
    <DataContext.Provider value={{ recipiesData, dispatchRecipies }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
