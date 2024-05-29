import React, { useState, useEffect } from "react";
import ExerciseCard from "./Exercise";
import styled from "@emotion/styled";

let lockedExercises = [];

export const getLockedExercises = () => {
  return lockedExercises;
};

const setLockedExercises = (locked) => {
  lockedExercises = [];
  lockedExercises = locked;
};

const SelectedExerciseList = ({ selectedExercises }) => {
  //exercise toggle lock buttons
  const [toggledLock, setToggledLock] = useState([]);

  const ExerciseListStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
    flex-wrap: wrap;
  `;

  const handleButtonLock = (buttonText) => {
    setToggledLock((prevLock) => {
      if (prevLock.some((lock) => lock.exercise === buttonText)) {
        return prevLock.filter((lock) => lock.exercise !== buttonText);
      } else {
        const index = selectedExercises.indexOf(buttonText);
        return [...prevLock, { exercise: buttonText, index }];
      }
    });
  };

  useEffect(() => {
    console.log("Locked Exercises:", toggledLock);
    setLockedExercises(toggledLock);
  }, [toggledLock]); // Log values when isPressed or toggledLock change

  // Check if selectedExercises is an array
  if (!Array.isArray(selectedExercises)) {
    console.error("Selected exercises is not an array:", selectedExercises);
    return null; // or return message
  }

  return (
    <ExerciseListStyle>
      {selectedExercises.map((exercise, index) => (
        <ExerciseCard
          key={index}
          exerciseName={exercise}
          onButtonLock={handleButtonLock}
          checked={toggledLock.some((lock) => lock.exercise === exercise)}
        />
      ))}
    </ExerciseListStyle>
  );
};

export default SelectedExerciseList;
