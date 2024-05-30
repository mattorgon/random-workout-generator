import workoutData from "../data/workoutData.json";

const compoundSegments = {
  Push: ["Chest", "Triceps", "Shoulders"],
  Pull: ["Back", "Biceps"],
};

const getRandomExercise = (bodySegments) => {
  const exercises = bodySegments
    .flatMap((segment) => workoutData.exercises?.[segment] || [])
    .filter((exercise) => exercise);

  console.log("exercises:", exercises);

  if (exercises.length === 0) {
    console.log("No exercises found for the selected body segments.");
    return null;
  }

  const randomIndex = Math.floor(Math.random() * exercises.length);
  const selectedExercise = exercises[randomIndex];

  // Remove the selected exercise to avoid repeats
  //exercises.splice(randomIndex, 1);

  return selectedExercise;
};

export const getRandomExercises = (bodySegments, count, lockedList) => {
  // Expand compound segments
  const expandedSegments = bodySegments.flatMap((segment) => {
    return compoundSegments[segment] || segment;
  });

  const selectedExercises = [];

  for (let i = 0; i < count; i++) {
    let e = lockedList.find((lock) => lock.index === i);

    if (e === undefined) {
      const selectedExercise = getRandomExercise(expandedSegments);
      const isExerciseInLockedList = lockedList.some(
        (lock) => lock.exercise === selectedExercise
      );
      if (
        selectedExercises.includes(selectedExercise) ||
        isExerciseInLockedList
      ) {
        i--;
        continue;
      }
      if (selectedExercise !== null) {
        selectedExercises.push(selectedExercise);
      } else {
        // No more exercises available
        break;
      }
    } else {
      selectedExercises.push(e.exercise);
    }
  }

  return { selectedExercises, lockedList }; //, updatedBodySegments: bodySegments };
};
