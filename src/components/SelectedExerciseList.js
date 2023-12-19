import React from 'react';
import ExerciseCard from './Exercise';
import styled from '@emotion/styled';

const SelectedExerciseList = ({ selectedExercises }) => {

  const ExerciseListStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
    flex-wrap: wrap;
`

  // Check if selectedExercises is an array
  if (!Array.isArray(selectedExercises)) {
    console.error('Selected exercises is not an array:', selectedExercises);
    return null; // or you can return a message, an empty array, or handle it in some other way
  }

  return (
    <ExerciseListStyle>
      {selectedExercises.map((exercise, index) => (
        <ExerciseCard key={index} exerciseName={exercise} />
      ))}
    </ExerciseListStyle>
  );
};

export default SelectedExerciseList;
