import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Intro from "../components/intro";
import BodySeg from "../components/BodySegment";
import SlidingScale from "../components/SlidingScale";
import WorkoutCount from "../components/WorkoutCount";
import SubmitButton from "../components/SubmitButton";
import ExerciseCard from "../components/Exercise";
import ToggleableButton from "../components/ToggleButton";
import { colors } from "@mui/material";
import YourWorkout from "../components/GenerateWorkout";
import { darkModeStyles, lightModeStyles } from "../styles";
import { useDarkMode } from "../context/DarkModeProvider";
import styled from "@emotion/styled";

const ScreenSyle = styled.div`
    display: flex
    width: 100%;
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
        <Header darkMode={darkMode} />
        <Intro darkMode={darkMode} />
        <BodySeg darkMode={darkMode} />
        {/* <WorkoutCount/> */}
        {/* <SubmitButton buttonText={"Generate Workout"}/> */}
        {/* <p>main screennnn</p>
            <ExerciseCard exerciseName={'bicep curls'}/> */}
      </ScreenSyle>
    </>
  );
};

export default MainScreen;
