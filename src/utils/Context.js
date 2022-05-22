import React from "react";
import { useContext, useState, useReducer } from "react";
const AppContext = React.createContext();
const reducer = (state, action) => {
  if (action.type === "SELECTED_TOP_LEVEL_CATEGORY") {
    const selected = action.payload;
    if (state.tag.category === selected) return state;
    let newCategory;
    if (selected === "Categories") {
      newCategory = {
        categories: true,
        glass: false,
        ingredient: false,
        alcohol: false,
      };
    }
    if (selected === "Glass Type") {
      newCategory = {
        categories: false,
        glass: true,
        ingredient: false,
        alcohol: false,
      };
    }
    if (selected === "Ingredient") {
      newCategory = {
        categories: false,
        glass: false,
        ingredient: true,
        alcohol: false,
      };
    }
    if (selected === "Alcohol/Non") {
      newCategory = {
        categories: false,
        glass: false,
        ingredient: false,
        alcohol: true,
      };
    }
    return {
      ...state,
      categorySelected: { ...newCategory },
      tag: { ...state.tag, category: selected },
    };
  }
  if (action.type === "SELECTED_FROM_LIST") {
    const selected = action.payload;
    if (state.tag.list === selected) return state;
    return {
      ...state,
      tag: { ...state.tag, list: selected },
    };
  }
  if (action.type === "SET_LIST_BUTTONS") {
    const list = action.payload;
    return {
      ...state,
      list: [...list],
    };
  }

  return state;
};
const initialState = {
  tag: {
    cocktail: "Cocktail",
    category: "",
    list: "",
    name: "",
  },
  categorySelected: {
    categories: false,
    glass: false,
    ingredient: false,
    alcohol: false,
  },
  list: [],
  searchedResult: [],
  individualCocktail: {},
};
const GeneralContext = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, initialState);
  const [filterWord, setFilterWord] = useState("");
  const [searchWord, setSearchWord] = useState("");
  return (
    <AppContext.Provider
      value={{
        filterWord,
        setFilterWord,
        searchWord,
        setSearchWord,
        appState,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGeneralContext = () => {
  return useContext(AppContext);
};

export default GeneralContext;
