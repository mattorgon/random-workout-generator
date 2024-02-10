import React from "react";
import styled from "@emotion/styled";
import { darkModeStyles, lightModeStyles } from "../styles";
import { useDarkMode } from "../context/DarkModeProvider";

const Intro = () => {
  const IntroStyle = styled.div`
    display: flex
    width: 100%;
    left: 10px;
    padding: 10px;
    //color: #232323;
    //color: '#5B7564';
   // background-color: "red";
    background-color: ${(props) =>
      props.darkMode
        ? darkModeStyles.mainScreen.backgroundColor
        : lightModeStyles.backgroundColor};
    color: ${(props) =>
      props.darkMode ? darkModeStyles.mainScreen.color : lightModeStyles.color};
`;
  let introText =
    "Welcome to the randomized workout generator where you only need to choose which body segment you want to target and how many exercises you have time for today.";

  const { darkMode } = useDarkMode();

  return (
    <>
      <IntroStyle darkMode={darkMode}>{introText}</IntroStyle>
    </>
  );
};

export default Intro;
