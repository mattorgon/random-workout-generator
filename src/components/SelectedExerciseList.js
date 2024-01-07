import React, {useState, useEffect} from 'react';
import ExerciseCard from './Exercise';
import styled from '@emotion/styled';

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
`

  const handleButtonLock = (buttonText) => {
   // console.log('Before setIsPressed:', isPressed);
    
   
    setToggledLock((prevLock) => {
        if (prevLock.includes(buttonText)) {
            return prevLock.filter((lock) => lock !== buttonText);
        } else {
            return [...prevLock, buttonText];
        }
        });
  // setLockedExercise(exerciseName, isPressed);
   // console.log('After setIsPressed:', isPressed);
  };

  useEffect(() => {
   // console.log('After setIsPressed:', isPressed);
    console.log('Locked Exercises:', toggledLock);
}, [toggledLock]); // Log values when isPressed or toggledLock change

  // Check if selectedExercises is an array
  if (!Array.isArray(selectedExercises)) {
    console.error('Selected exercises is not an array:', selectedExercises);
    return null; // or you can return a message, an empty array, or handle it in some other way
  }

  return (
    <ExerciseListStyle>
      {selectedExercises.map((exercise, index) => (
        <ExerciseCard key={index} exerciseName={exercise} onButtonLock={handleButtonLock} checked={toggledLock.includes(exercise)} />
      ))}
    </ExerciseListStyle>
  );
};

export default SelectedExerciseList;
