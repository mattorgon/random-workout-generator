import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import exerciseGif from "../assets/Bicep-Curl-1gif.gif";
import lockedImage from "../assets/illustration-of-lock-icon-vector.jpg";
import unlockedImage from "../assets/21-213657_padlock-146537-unlock-clipart-png-download.png";
import { darkModeStyles, lightModeStyles } from "../styles";
import { useDarkMode } from "../context/DarkModeProvider";

const LockButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  //background-color: DarkSlateGray;
  background-color: ${(props) =>
    props.darkMode
      ? darkModeStyles.lockButton.backgroundColor
      : lightModeStyles.lockButton.backgroundColor};
  color: white;
  border: ${(props) =>
    props.darkMode
      ? darkModeStyles.lockButton.border
      : lightModeStyles.lockButton.border};
  //border: none;
  border-radius: 6px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  &:hover {
    background-color: darkred;
  }

  /* Dynamic font size based on text length */
  font-size: ${(props) => props.fontSize}px;
`;

const ExerciseGif = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
  border: ${(props) =>
    props.darkMode
      ? darkModeStyles.exerciseGif.border
      : lightModeStyles.exerciseGif.border};
  border-radius: 10px;
`;

const LockImg = styled.img`
    width: 10px;
    height: 10px;
    border: solid;
    border-radius: 10px;
    margin-left: 5px;
    //margin-right: 5px;
    justify-content: center;
    position: absolute
    background-color: ${(props) => (props.checked ? "#5B7564" : "white")};

`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Vertical alignment */
  margin-bottom: 10px; /* Adjust the margin as needed */
  // background-color: red;
`;

let locked = [];

export const getLockedExercises = (lockExercises) => {
  locked = lockExercises;
};

const ExerciseCard = ({
  exerciseName,
  exerciseImage,
  onButtonLock,
  checked,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const [fontSize, setFontSize] = useState(12);

  const buttonRef = useRef();

  const { darkMode } = useDarkMode();

  const handleLockButtonClick = () => {
    onButtonLock(exerciseName);
    console.log("Effect triggered. Current value of isPressed:", isPressed);
    // setIsPressed(prevState => !prevState);
    setIsPressed(!isPressed);
    // Call your other function here
  };

  useEffect(() => {
    console.log("After setIsPressed:", isPressed);
  }, [isPressed]); // Log values when isPressed or toggledLock change

  useEffect(() => {
    console.log(
      exerciseName,
      buttonRef.current.scrollWidth,
      buttonRef.current.scrollHeight
    );
    const textLength = buttonRef.current.scrollWidth; //exerciseName.length;//
    const textHeight = buttonRef.current.scrollHeight;
    const maxWidth = 90; // You can adjust this value based on your requirements
    const maxHeight = 25;
    const scaleFactor = maxWidth / textLength;
    const heightScale = maxHeight / textHeight;
    const adjustedFontSize = Math.floor(fontSize * scaleFactor);
    setFontSize(
      Math.min(12, Math.min(adjustedFontSize, fontSize * heightScale))
    );
  }, [exerciseName]);

  return (
    <CardContainer>
      <ExerciseGif src={exerciseImage} alt={exerciseName} darkMode={darkMode} />
      <LockButton
        onClick={handleLockButtonClick}
        checked={checked}
        fontSize={fontSize}
        ref={buttonRef}
        darkMode={darkMode}
      >
        {exerciseName}
        <LockImg
          src={checked ? lockedImage : unlockedImage}
          alt={checked ? "unlocked" : "locked"}
          checked={checked}
        />
      </LockButton>
    </CardContainer>
  );
};

export default ExerciseCard;
