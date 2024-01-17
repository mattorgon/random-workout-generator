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
  background-color: rgba(0, 0, 0, 0);
  color: ${(props) =>
    props.darkMode
      ? darkModeStyles.titleText.color
      : lightModeStyles.titleText.color};
  display: inline;
  z-index: 2;
  position: relative;

  line-height: 0; /* Adjust line-height to remove gap */
  margin-bottom: 0; /* Reset margin-bottom */
  padding: 0; /* Reset padding */
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

const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  border-radius: 1.5px;
  transform: translateX(-50%); /* Center the underline */
  width: 250px; /* Set the width of the underline */
  height: 3px; /* Adjust the height of the underline */
  background-color: #f1ba66; /* Adjust the color of the underline */
  z-index: 1;
  margin: 0; /* Reset margin */
  padding: 0; /* Reset padding */
  margin-bottom: 1px; /* Reset margin-bottom */
  line-height: 0;
`;

const TitleWrapper = styled.div`
  position: relative;
`;
const WorkoutCount = ({ onSliderChange, maxSliderValue }) => {
  const { darkMode } = useDarkMode();

  let titleText = "Number of Exercises";

  return (
    <>
      <TitleWrapper>
        <TitleStyle darkMode={darkMode}>{titleText}</TitleStyle>
        <Underline />
      </TitleWrapper>
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
