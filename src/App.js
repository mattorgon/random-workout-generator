import "./App.css";
import MainScreen from "./screens/MainScreen";
import MyWorkouts from "./screens/MyWorkouts";
import Header from "./components/Header";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeProvider";
import React from "react";
import styled from "@emotion/styled";
import BackgroundColorProvider from "./context/BackgroundColorProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppContainer = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: red; /* your background color */
`;

function App() {
  const { darkMode } = useDarkMode();
  return (
    // <DarkModeProvider>
    <div className="App">
      <BackgroundColorProvider>
        {/* <MainScreen /> */}

        <Router>
          <Header darkMode={darkMode} />
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/savedWorkouts" element={<MyWorkouts />} />
          </Routes>
        </Router>
      </BackgroundColorProvider>
    </div>
    // </DarkModeProvider>
  );
}

export default App;
