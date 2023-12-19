import React, { useState } from 'react';

const YourParentComponent = () => {
    const [selectedSegments, setSelectedSegments] = useState([]);
  
    const handleSegmentSelection = (segment) => {
      setSelectedSegments((prevSelected) =>
        prevSelected.includes(segment)
          ? prevSelected.filter((s) => s !== segment)
          : [...prevSelected, segment]
      );
    };
  
    const handleGenerateWorkout = () => {
      // Call the logic to generate the workout list based on selectedSegments
      // Update the state or perform any other necessary actions
    };
  
    return (
      <>
        {/* Render ToggleableButtonComponents for segment selection */}
        <ToggleableButtonComponent
          buttonText="Back"
          onToggle={handleSegmentSelection}
        />
        {/* Add more buttons for other segments as needed */}
  
        {/* Render Submit Button */}
        <button onClick={handleGenerateWorkout}>Generate Workout</button>
  
        {/* Render YourComponent with selectedSegments as a prop */}
        <YourComponent selectedSegments={selectedSegments} />
      </>
    );
  };
  