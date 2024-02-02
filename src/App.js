import "./App.css";
import MainScreen from "./screens/MainScreen";
import MyWorkouts from "./screens/MyWorkouts";
import { DarkModeProvider } from "./context/DarkModeProvider";
import React from "react";
import styled from "@emotion/styled";
import BackgroundColorProvider from "./context/BackgroundColorProvider";
import { Routes, Route, Router } from "react-router-dom";

const AppContainer = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: red; /* your background color */
`;

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <BackgroundColorProvider>
          {/* <MainScreen /> */}
          <Router>
            <Routes>
              <Route path="/" element={<MainScreen />} />
              <Route path="/savedWorkouts" element={<MyWorkouts />} />
            </Routes>
          </Router>
        </BackgroundColorProvider>
      </div>
    </DarkModeProvider>
  );
}

export default App;
