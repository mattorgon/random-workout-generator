import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";
import ToggleableButton from "./ToggleButton";
import ToggleableButtonComponent from "./ToggleButton";
import SubmitButton from "./SubmitButton";
import SelectedExerciseList from "./SelectedExerciseList";
import { getRandomExercises } from "./SelectedExercises";
import YourWorkout from "./GenerateWorkout";
import WorkoutCount from "./WorkoutCount";
import pushupMan from "../assets/Pushup man no bkgd.gif";
import { getLockedExercises } from "./SelectedExerciseList";
import { darkModeStyles, lightModeStyles } from "../styles";
import { useDarkMode } from "../context/DarkModeProvider";

const DisplayLength = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

const BodySeg = () => {
  let titleText = "Body Segment";
  let subtitleText = "What are we hitting today?";
  let exercises = [];
  let initialSliderValue = 5;

  const [sliderValue, setSliderValue] = useState(initialSliderValue);

  //body segment toggle buttons
  const [toggledButtons, setToggledButtons] = useState([]);

  //exercises
  const [selectedExercises, setSelectedExercises] = useState([]);

  //submit button
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  const { darkMode } = useDarkMode();

  const handleButtonClick = (buttonText) => {
    setToggledButtons((prevButtons) => {
      if (prevButtons.includes(buttonText)) {
        return prevButtons.filter((button) => button !== buttonText);
      } else {
        return [...prevButtons, buttonText];
      }
    });
  };

  const handleFormSubmit = () => {
    // console.log('Button clicked');
    // //const { selectedExercises: exercises, updatedBodySegments } = getRandomExercises(toggledButtons, 3);
    // exercises = getRandomExercises(toggledButtons, 3);

    // console.log('Exercises:', exercises);
    // //console.log('Updated Body Segments:', updatedBodySegments);
    // setSelectedExercises(exercises);
    // //setToggledButtons(updatedBodySegments);
    // setSubmitButtonClicked(true);
    // // Additional logic if needed

    console.log("Button clicked");
    console.log("slider val: ", sliderValue);
    const locked = getLockedExercises();
    console.log("these are locked", locked);
    const { selectedExercises: exercises } = getRandomExercises(
      toggledButtons,
      sliderValue,
      locked
    );
    console.log("Exercises:", exercises);
    setSelectedExercises(exercises);
    setSubmitButtonClicked(true);
    console.log("dark mode:", darkMode);
  };

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
  const ButtonRowStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin: 10px;

    /* Dynamic styles based on darkMode state */
    background-color: ${(props) =>
      props.darkMode
        ? darkModeStyles.mainScreen.backgroundColor
        : lightModeStyles.backgroundColor};
    //color: ${(props) =>
      props.darkMode ? darkModeStyles.mainScreen.color : lightModeStyles.color};
  `;

  const Pushup = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 5px;
    border: none;
    border-radius: 10px;
  `;

  return (
    <>
      <TitleStyle darkMode={darkMode}>{titleText}</TitleStyle>
      <SubtitleStyle darkMode={darkMode}>{subtitleText}</SubtitleStyle>
      {/* <DisplayLength>{`List Length: ${toggledButtons}`}</DisplayLength> */}
      <ButtonRowStyle darkMode={darkMode}>
        <ToggleableButtonComponent
          buttonText={"Back"}
          onButtonClick={handleButtonClick}
          checked={toggledButtons.includes("Back")}
        />
        <ToggleableButtonComponent
          buttonText={"Biceps"}
          onButtonClick={handleButtonClick}
          checked={toggledButtons.includes("Biceps")}
        />
        <ToggleableButtonComponent
          buttonText={"Chest"}
          onButtonClick={handleButtonClick}
          checked={toggledButtons.includes("Chest")}
        />
        <ToggleableButtonComponent
          buttonText={"Triceps"}
          onButtonClick={handleButtonClick}
          checked={toggledButtons.includes("Triceps")}
        />
        <ToggleableButtonComponent
          buttonText={"Legs"}
          onButtonClick={handleButtonClick}
          checked={toggledButtons.includes("Legs")}
        />
      </ButtonRowStyle>
      <ButtonRowStyle darkMode={darkMode}>
        <ToggleableButtonComponent
          buttonText={"Shoulders"}
          onButtonClick={handleButtonClick}
          checked={toggledButtons.includes("Shoulders")}
        />
        <ToggleableButtonComponent
          buttonText={"Core"}
          onButtonClick={handleButtonClick}
          checked={toggledButtons.includes("Core")}
        />
        <ToggleableButtonComponent
          buttonText={"Cardio"}
          onButtonClick={handleButtonClick}
          checked={toggledButtons.includes("Cardio")}
        />
        <ToggleableButtonComponent
          buttonText={"Push"}
          onButtonClick={handleButtonClick}
          checked={toggledButtons.includes("Push")}
        />
        <ToggleableButtonComponent
          buttonText={"Pull"}
          onButtonClick={handleButtonClick}
          checked={toggledButtons.includes("Pull")}
        />
      </ButtonRowStyle>

      <WorkoutCount
        onSliderChange={setSliderValue}
        maxSliderValue={initialSliderValue * 2}
      />

      <SubmitButton buttonText="Submit" onButtonClick={handleFormSubmit} />

      {submitButtonClicked && (
        <SelectedExerciseList selectedExercises={selectedExercises} />
      )}
      {/* <YourWorkout selectedExercises={selectedExercises} />}
            <SelectedExerciseList selectedExercises={selectedExercises}/> */}
    </>
  );
};

export default BodySeg;
