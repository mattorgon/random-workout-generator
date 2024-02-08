import React from "react";
import styled from "@emotion/styled";

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

const SaveButton = ({ buttonText, exercises }) => {
  const handleSave = async () => {
    try {
      // Make a POST request to your backend endpoint
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify({ savedExercises: exercises }),
      });

      if (response.ok) {
        // Workout saved successfully
        console.log("Workout saved successfully!");
        // You can perform any other actions here after successful save
      } else {
        // Handle error if the request was not successful
        console.error("Failed to save workout");
      }
    } catch (error) {
      console.error("Error saving workout:", error);
    }
  };

  return <SaveButtonStyle onClick={handleSave}>{buttonText}</SaveButtonStyle>;
};

export default SaveButton;
