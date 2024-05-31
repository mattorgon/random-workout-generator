import React, { useState, useEffect } from "react";
import ExerciseCard from "./Exercise";
import styled from "@emotion/styled";

let lockedExercises = [];

export const getLockedExercises = () => {
  return lockedExercises;
};

const setLockedExercises = (locked) => {
  lockedExercises = locked;
};

const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ExerciseListStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  flex-wrap: wrap;
`;

const ExerciseCardWrapper = styled.div`
  opacity: 0;
  animation: fadeIn 2s forwards; // Apply the fade-in animation
  ${({ delay }) =>
    `animation-delay: ${delay}s;`}// Set the animation delay dynamically
`;

const SelectedExerciseList = ({ selectedExercises, lockedList }) => {
  //exercise toggle lock buttons
  const [toggledLock, setToggledLock] = useState(lockedList);
  const [displayedExercises, setDisplayedExercises] = useState([]);

  console.log("SELECTED EXERCISES: ", selectedExercises);

  // const ExerciseListStyle = styled.div`
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  //   margin-top: 20px;
  //   gap: 10px;
  //   flex-wrap: wrap;
  // `;

  // const handleButtonLock = (buttonText) => {
  //   setToggledLock((prevLock) => {
  //     if (prevLock.some((lock) => lock.exercise === buttonText)) {
  //       return prevLock.filter((lock) => lock.exercise !== buttonText);
  //     } else {
  //       const index = selectedExercises.indexOf(buttonText);
  //       return [...prevLock, { exercise: buttonText, index }];
  //     }
  //   });
  // };
  const handleButtonLock = (buttonText) => {
    setToggledLock((prevLock) => {
      let newLock;
      console.log("prevlock: ", prevLock);
      if (prevLock.some((lock) => lock.exercise === buttonText)) {
        newLock = prevLock.filter((lock) => lock.exercise !== buttonText);
      } else {
        // const index = selectedExercises.indexOf(buttonText);
        // newLock = [...prevLock, { exercise: buttonText, index }];
        const index = selectedExercises.findIndex(
          (exercise) => exercise.name === buttonText
        );
        console.log("found index:", index);
        // Ensure index is valid before adding
        if (index !== -1) {
          const selectedExercise = selectedExercises[index];
          newLock = [
            ...prevLock,
            {
              name: selectedExercise.name,
              segment: selectedExercise.segment,
              image: selectedExercise.image,
              index: index,
            },
          ];
        } else {
          // Handle the case where the buttonText is not in selectedExercises
          console.warn(`Exercise ${buttonText} not found in selectedExercises`);
          newLock = [...prevLock]; // No changes
        }
      }
      console.log("newlock:", newLock);
      setLockedExercises(newLock);
      return newLock;
    });
  };

  useEffect(() => {
    setToggledLock(getLockedExercises());
  }, []);

  // useEffect(() => {
  //   console.log("Locked Exercises???????:", toggledLock);
  //   setLockedExercises(toggledLock);
  // }, [toggledLock]); // Log values when isPressed or toggledLock change

  useEffect(() => {
    setDisplayedExercises([]);
    if (selectedExercises.length > 0) {
      let delay = 0;
      selectedExercises.forEach((exercise, index) => {
        setTimeout(() => {
          setDisplayedExercises((prevExercises) => {
            if (!prevExercises.includes(exercise)) {
              return [...prevExercises, exercise];
            }
            return prevExercises;
          });
        }, delay);
        delay += 250; // Delay each exercise render by 500ms
      });
    }
  }, [selectedExercises]);

  // useEffect(() => {
  //   setDisplayedExercises([]);
  //   if (selectedExercises.length > 0) {
  //     let delay = 0;
  //     selectedExercises.forEach((exercise, index) => {
  //       setTimeout(() => {
  //         setDisplayedExercises((prevExercises) => {
  //           const updatedExercises = [...prevExercises, exercise];
  //           if (updatedExercises.length === selectedExercises.length) {
  //             onRendered(); // Call onRendered when all exercises are displayed
  //           }
  //           return updatedExercises;
  //         });
  //       }, delay);
  //       delay += 500; // Delay each exercise render by 500ms
  //     });
  //   }
  // }, [selectedExercises, onRendered]);

  // Check if selectedExercises is an array
  if (!Array.isArray(selectedExercises)) {
    console.error("Selected exercises is not an array:", selectedExercises);
    return null; // or return message
  }

  return (
    <>
      <style>{fadeIn}</style> {/* Include the keyframes animation */}
      <ExerciseListStyle>
        {displayedExercises.map((exercise, index) => (
          <ExerciseCardWrapper key={index} delay={index * 0.25}>
            <ExerciseCard
              exerciseName={exercise.name}
              exerciseImage={exercise.image}
              onButtonLock={handleButtonLock}
              checked={toggledLock.some((lock) => lock.name === exercise.name)}
            />
          </ExerciseCardWrapper>
        ))}
      </ExerciseListStyle>
    </>
    // <ExerciseListStyle>
    //   {selectedExercises.map((exercise, index) => (
    //     <ExerciseCard
    //       key={index}
    //       exerciseName={exercise}
    //       onButtonLock={handleButtonLock}
    //       checked={toggledLock.some((lock) => lock.exercise === exercise)}
    //     />
    //   ))}
    // </ExerciseListStyle>
  );
};

export default SelectedExerciseList;
