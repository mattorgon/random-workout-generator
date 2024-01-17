import React from "react";
import styled from "@emotion/styled";
import SlidingScale from "./SlidingScale";
import { darkModeStyles, lightModeStyles } from "../styles";
import { useDarkMode } from "../context/DarkModeProvider";

let subtitleText = "How many are we hitting today?";

const TitleStyle = styled.div`
  font-weight: bold;
  font-size: 20px;
  //color: #32533D
  background-color: ${(props) =>
    props.darkMode
      ? darkModeStyles.mainScreen.backgroundColor
      : lightModeStyles.backgroundColor};
  color: ${(props) =>
    props.darkMode ? darkModeStyles.mainScreen.color : lightModeStyles.color};
`;

const SubtitleStyle = styled.div`
  display: flex;
  justify-content: center;
  //color: #232323;
  background-color: ${(props) =>
    props.darkMode
      ? darkModeStyles.mainScreen.backgroundColor
      : lightModeStyles.backgroundColor};
  color: ${(props) =>
    props.darkMode ? darkModeStyles.mainScreen.color : lightModeStyles.color};
`;
const WorkoutCount = ({ onSliderChange, maxSliderValue }) => {
  const { darkMode } = useDarkMode();

  let titleText = "Number of Exercises";

  return (
    <>
      <TitleStyle darkMode={darkMode}>{titleText}</TitleStyle>
      <SubtitleStyle darkMode={darkMode}>{subtitleText}</SubtitleStyle>
      {/* <SlidingScale onChange={onSliderChange} /> */}
      {/* <SlidingScale value={initialSliderValue} onChange={handleSliderChange} /> */}
      <SlidingScale
        onChange={onSliderChange}
        value={Math.floor(maxSliderValue / 2)}
        max={maxSliderValue}
      />
    </>
  );
};

export default WorkoutCount;
