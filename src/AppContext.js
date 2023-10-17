// AppContext.js
import React, { createContext, useState } from "react";
// import { setSelectedItems } from "./ShiftElementsApp"

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [listA, setListA] = useState(["Item A1", "Item A2", "Item A3"]);
  const [listB, setListB] = useState(["Item B1", "Item B2", "Item B3"]);
  const [selectedItemsA, setSelectedItemsA] = useState([]);
  const [selectedItemsB, setSelectedItemsB] = useState([]);

  const moveItems = (fromList, toList, selectedItems, setSelectedItems) => {
    const updatedFromList = fromList.filter(
      (item) => !selectedItems.includes(item)
    );
    const updatedToList = [...toList, ...selectedItems];
  
    setSelectedItemsA([]);
    setSelectedItemsB([]);
    if (fromList === listA) {
      setListA(updatedFromList);
      setListB(updatedToList);
      setSelectedItemsA((prevSelectedItems) =>

        prevSelectedItems.filter((item) => !selectedItems.includes(item))
      );
      setSelectedItemsB((prevSelectedItems) => [
        ...prevSelectedItems,
        ...selectedItems,
      ]);
    } else {
      setListB(updatedFromList);
      setListA(updatedToList);
      setSelectedItemsB((prevSelectedItems) =>
        prevSelectedItems.filter((item) => !selectedItems.includes(item))
      );
      setSelectedItemsA((prevSelectedItems) => [
        ...prevSelectedItems,
        ...selectedItems,
      ]);
    }
  };
  

  const contextValue = {
    listA,
    listB,
    selectedItemsA,
    selectedItemsB,
    moveItems,
    setSelectedItemsA,
    setSelectedItemsB,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;