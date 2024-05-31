import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";
import ToggleableButton from "./ToggleButton";
import ToggleableButtonComponent from "./ToggleButton";
import SubmitButton from "./SubmitButton";
import SelectedExerciseList from "./SelectedExerciseList";
import { getRandomExercises } from "./SelectedExercises";
import WorkoutCount from "./WorkoutCount";
import pushupMan from "../assets/Pushup man no bkgd.gif";
import { getLockedExercises } from "./SelectedExerciseList";
import { darkModeStyles, lightModeStyles } from "../styles";
import { useDarkMode } from "../context/DarkModeProvider";
import SaveButton from "./SaveButton";
import { useAuth } from "../context/AuthContext";

const DisplayLength = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

const BodySeg = () => {
  let titleText = "Body Segment";
  let subtitleText = "What are we hitting today?";
  let exercises = [];
  let initialSliderValue = 5;

  const { isSignedIn } = useAuth();

  const [sliderValue, setSliderValue] = useState(initialSliderValue);
  //body segment toggle buttons
  const [toggledButtons, setToggledButtons] = useState([]);
  //exercises
  const [selectedExercises, setSelectedExercises] = useState([]);
  //submit button
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const bottomRef = useRef(null);

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
  let lockedProp;
  const handleFormSubmit = () => {
    console.log("Button clicked");
    console.log("slider val: ", sliderValue);
    const locked = getLockedExercises();
    console.log("these are locked", locked);
    const { selectedExercises: exercises, lockedList: pleaseLock } =
      getRandomExercises(toggledButtons, sliderValue, locked);
    lockedProp = pleaseLock;
    console.log("pleeeeeeeeeeeeeeeeeeeeaaaaaaaaaaase3: ", pleaseLock);
    console.log("Exercises:", exercises);
    setIsLoading(true);
    setSelectedExercises(exercises);
    setSubmitButtonClicked(true);
    scrollToBottom();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

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
    width: 300px;
    height: 300px;
    margin-bottom: 5px;
    border: none;
    border-radius: 10px;
  `;

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
    z-index: 1;
    position: relative;

    line-height: 0; /* Adjust line-height to remove gap */
    margin-bottom: 0; /* Reset margin-bottom */
    padding: 0; /* Reset padding */
  `;

  const TitleWrapper = styled.div`
    position: relative;
    z-index: 0;
  `;

  const Underline = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    border-radius: 1.5px;
    transform: translateX(-50%); /* Center the underline */
    width: 250px; /* Set the width of the underline */
    height: 2px; /* Adjust the height of the underline */
    background-color: #f1ba66; /* Adjust the color of the underline */
    z-index: 0;
    margin: 0; /* Reset margin */
    padding: 0; /* Reset padding */
    margin-bottom: 2px; /* Reset margin-bottom */
    line-height: 0;
  `;

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (submitButtonClicked) {
      scrollToBottom();
    }
  }, [submitButtonClicked, isLoading, selectedExercises]);
  return (
    <>
      <TitleWrapper>
        <TitleStyle darkMode={darkMode}>{titleText}</TitleStyle>
        <Underline />
      </TitleWrapper>

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

      <SubmitButton buttonText="Generate" onButtonClick={handleFormSubmit} />

      {submitButtonClicked && (
        <div>
          {isLoading ? (
            <>
              <p>Working...</p>
              <Pushup src={pushupMan} alt="Loading..." ref={bottomRef} />
            </>
          ) : (
            <>
              <SelectedExerciseList
                selectedExercises={selectedExercises}
                lockedList={lockedProp}
                // onRendered={scrollToBottom}
              />
              {/* <div ref={bottomRef}></div> */}
              {isSignedIn ? (
                <SaveButton
                  buttonText={"Save Workout"}
                  exercises={selectedExercises}
                  // ref={bottomRef}
                />
              ) : (
                <p>Sign in to save workout!</p>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default BodySeg;
