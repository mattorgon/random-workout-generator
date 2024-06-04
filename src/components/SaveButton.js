import React, { useState, useEffect } from "react";
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
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  transition: transform 0.1s ease-in-out;

  &:hover {
    background-color: darkred;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    transition: transform 0.4s ease-in-out;
  }

  &.loading::before {
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;

const SaveButton = ({ buttonText, exercises, isWorkoutGenerated }) => {
  const { userId } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (isWorkoutGenerated) {
      setIsSaved(false);
    }
  }, [isWorkoutGenerated]);

  const handleSave = async () => {
    setIsLoading(true);
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
        setIsSaved(true);
      } else {
        console.error("Failed to save workout");
      }
    } catch (error) {
      console.error("Error saving workout:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <SaveButtonStyle
      onClick={handleSave}
      disabled={isSaved && !isLoading}
      className={isLoading ? "loading" : ""}
    >
      {isSaved && !isLoading ? "Saved" : buttonText}
    </SaveButtonStyle>
  );
};

export default SaveButton;
