import workoutData from '../data/workoutData.json';
  


  const getRandomExercise = (bodySegments) => {
    const exercises = bodySegments
      .flatMap(segment => workoutData.exercises?.[segment] || [])
      .filter(exercise => exercise);
  
    if (exercises.length === 0) {
      console.log("No exercises found for the selected body segments.");
      return null;
    }
  
    const randomIndex = Math.floor(Math.random() * exercises.length);
    const selectedExercise = exercises[randomIndex];
  
    // Remove the selected exercise to avoid repeats
    exercises.splice(randomIndex, 1);
  
    return selectedExercise;
  };
  
  
  export const getRandomExercises = (bodySegments, count) => {
    const selectedExercises = [];
  
    for (let i = 0; i < count; i++) {
      const selectedExercise = getRandomExercise(bodySegments);
      if (selectedExercise !== null) {
        selectedExercises.push(selectedExercise);
      } else {
        // No more exercises available
        break;
      }
    }
  
    return { selectedExercises};    //, updatedBodySegments: bodySegments };
  };
  
  // // Example usage
  // const selectedExercises1 = getRandomExercises(["back", "biceps"], 3);
  // console.log("Selected Exercises 1:", selectedExercises1);
  
  // const selectedExercises2 = getRandomExercises(["legs", "cardio"], 2);
  // console.log("Selected Exercises 2:", selectedExercises2);
  


    // const getRandomExercise = (bodySegments) => {
  //   // const exercises = bodySegments.flatMap(segment => workoutData.bodySegments[segment] || []);
  
  //   // if (exercises.length === 0) {
  //   //   console.log("No exercises found for the selected body segments.");
  //   //   return null;
  //   // }
  
  //   // const randomIndex = Math.floor(Math.random() * exercises.length);
  //   // const selectedExercise = exercises[randomIndex];
  
  //   // // Remove the selected exercise to avoid repeats
  //   // exercises.splice(randomIndex, 1);
  
  //   // return selectedExercise;
  //   const exercises = bodySegments
  //   .flatMap(segment => workoutData.bodySegments?.[segment] || []) // Use optional chaining to avoid errors
  //   .filter(exercise => exercise); // Filter out undefined or null exercises
  

  //   if (exercises.length === 0) {
  //     console.log("No exercises found for the selected body segments.");
  //     return null;
  // }
  // };
