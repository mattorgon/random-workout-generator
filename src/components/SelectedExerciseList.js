import React from 'react';
import ExerciseCard from './Exercise';

const SelectedExerciseList = ({ selectedExercises }) => {
  
  // Check if selectedExercises is an array
  if (!Array.isArray(selectedExercises)) {
    console.error('Selected exercises is not an array:', selectedExercises);
    return null; // or you can return a message, an empty array, or handle it in some other way
  }

  return (
    <div>
      {selectedExercises.map((exercise, index) => (
        <ExerciseCard key={index} exerciseName={exercise} />
      ))}
    </div>
  );
};

export default SelectedExerciseList;
