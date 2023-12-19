import React, { useState } from 'react';
import SelectedExerciseList from './SelectedExerciseList';
import { getRandomExercises } from './SelectedExercises'; // Adjust the path based on your project structure

const YourWorkout = () => {
  const [selectedSegments, setSelectedSegments] = useState([]); // Assuming you have some state to track selected segments
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleSegmentSelection = (segment) => {
    // Handle the segment selection (add or remove from state)
  };

  const handleGenerateExercises = () => {
    const exercises = getRandomExercises(selectedSegments);
    setSelectedExercises(exercises); // Update state with the generated exercises
  };

  return (
    <div>
      {/* Your component code */}
      {/* <button onClick={handleGenerateExercises}>Generate Exercises</button> */}
      <SelectedExerciseList selectedExercises={selectedExercises} />
    </div>
  );
};

export default YourWorkout;
