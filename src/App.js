// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import ShiftElementsApp from "./ShiftElementsApp";
import AppContextProvider from "./AppContext";
import ListsComponent from "./ListsComponent";

const App = () => {
  return (
    <Router>
      <AppContextProvider>
        <div style={{ display: "flex" }}>
          {/* Side Navigation Bar */}
          <NavigationBar />

          {/* Main Content */}
          <Routes>
            <Route path="/optionA" element={<ShiftElementsApp/>} />
          </Routes>
          <Routes>
            <Route path="/optionB" element={<ListsComponent/>} />
          </Routes>
        </div>
      </AppContextProvider>
    </Router>
  );
};

export default App;


