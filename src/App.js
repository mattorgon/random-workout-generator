import "./App.css";
import MainScreen from "./screens/MainScreen";
import { DarkModeProvider } from "./context/DarkModeProvider";
import React from "react";
import styled from "@emotion/styled";
import BackgroundColorProvider from "./context/BackgroundColorProvider";

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
          <MainScreen />
        </BackgroundColorProvider>
      </div>
    </DarkModeProvider>
  );
}

export default App;
