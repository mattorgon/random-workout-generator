import React from "react";
import styled from "@emotion/styled";
import { useAuth } from "../context/AuthContext";

const SaveButtonStyle = styled.button`
  background-color: #cc2936;
  color: white;
  border: none;
  border-radius: 6px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  //font-family: Jomhuria;
  &:hover {
    background-color: darkred;
  }
`;

// Front-end SaveButton component
const SaveButton = ({ buttonText, exercises }) => {
  const { userId } = useAuth();

  const handleSave = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/workouts/saveWorkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: userId, // Replace with the actual user ID. username for now
            savedExercises: exercises,
          }),
        }
      );

      if (response.ok) {
        console.log("Workout saved successfully!");
        // Perform other actions if needed
      } else {
        console.error("Failed to save workout");
      }
    } catch (error) {
      console.error("Error saving workout:", error);
    }
  };

  return <SaveButtonStyle onClick={handleSave}>{buttonText}</SaveButtonStyle>;
};

export default SaveButton;
