import React from "react";
import Intro from "../components/intro";
import BodySeg from "../components/BodySegment";
import { darkModeStyles, lightModeStyles } from "../styles";
import { useDarkMode } from "../context/DarkModeProvider";
import styled from "@emotion/styled";

const ScreenSyle = styled.div`
    display: flex
    width: 100%;
    height: 100%;
    left: 10px;
    //color: #232323;
    color: '#5B7564';
    //background-color: #CC2936;
    background-color: ${(props) =>
      props.darkMode
        ? darkModeStyles.mainScreen.backgroundColor
        : lightModeStyles.backgroundColor};
    color: ${(props) =>
      props.darkMode ? darkModeStyles.mainScreen.color : lightModeStyles.color};
`;

const MainScreen = () => {
  const { darkMode } = useDarkMode();

  return (
    <>
      <ScreenSyle darkMode={darkMode}>
        <Intro darkMode={darkMode} />
        <BodySeg darkMode={darkMode} />
      </ScreenSyle>
    </>
  );
};

export default MainScreen;
