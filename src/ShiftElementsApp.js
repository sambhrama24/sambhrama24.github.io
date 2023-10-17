// ShiftElementsApp.js
import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import "./styles.css"; // Import the CSS file

const ShiftElementsApp = () => {
  const {
    listA,
    listB,
    selectedItemsA,
    selectedItemsB,
    moveItems,
    setSelectedItemsA,
    setSelectedItemsB,
  } = useContext(AppContext);

  const handleItemClick = (item, list, selectedItems, setSelectedItems) => {
    const updatedSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter((selectedItem) => selectedItem !== item)
      : [...selectedItems, item];

    setSelectedItems(updatedSelectedItems);
  };

  return (
    <div className="main-container">
      <div className="list-container">
      <div className="listA">
        <h2 className="list-heading">List A</h2>
        <ul>
          {listA.map((item, index) => (
            <li
              key={index}
              className={`list-item ${
                selectedItemsA.includes(item) ? "selected" : ""
              }`}
              onClick={() =>
                handleItemClick(item, listA, selectedItemsA, setSelectedItemsA)
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="listB">
        <h2 className="list-heading">List B</h2>
        <ul>
          {listB.map((item, index) => (
            <li
              key={index}
              className={`list-item ${
                selectedItemsB.includes(item) ? "selected" : ""
              }`}
              onClick={() =>
                handleItemClick(item, listB, selectedItemsB, setSelectedItemsB)
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      </div>
      <div className="button-container">
        <button
          className="shift-button"
          onClick={() => moveItems(listA, listB, selectedItemsA)}
          title="Shift Right"
        >
          {">"}
        </button>
        <button
          className="shift-button"
          onClick={() => moveItems(listB, listA, selectedItemsB)}
          title="Shift Left"
        >
          {"<"}
        </button>
        <button
          className="shift-button"
          onClick={null}
          title="Save current state"
        >
          {"SAVE"}
        </button>
        <button
          className="shift-button"
          onClick={null}
          title="Reset to last saved state"
        >
          {"RESET"}
        </button>
      </div>
    </div>
  );
};

export default ShiftElementsApp;

