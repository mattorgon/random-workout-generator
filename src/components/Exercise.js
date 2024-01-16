import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import exerciseGif from '../assets/Bicep-Curl-1gif.gif'
import lockedImage from '../assets/illustration-of-lock-icon-vector.jpg'
import unlockedImage from '../assets/21-213657_padlock-146537-unlock-clipart-png-download.png'



const LockButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: DarkSlateGray;
    color: white;
    border: none;
    border-radius: 6px;
    width: 100px;
    height: 30px;
    cursor: pointer;
    &:hover {
        background-color: darkred;
    }

    /* Dynamic font size based on text length */
    font-size: ${(props) => props.fontSize}px;
`

const ExerciseGif = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 5px; 
    border: solid;
    border-radius: 10px;

`

const LockImg = styled.img`
    width: 10px;
    height: 10px;
    border: solid;
    border-radius: 10px;
    margin-left: 5px;
    //margin-right: 5px;
    justify-content: center;
    position: absolute
    background-color: ${(props) => (props.checked ? '#5B7564' : 'white')};

`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Vertical alignment */
    margin-bottom: 10px; /* Adjust the margin as needed */
    // background-color: red;
`;

let locked = [];

// const setLockedExercise = (exerciseName, isLocked) => {
//     if (isLocked) {
//         locked((prevLocked) => [...prevLocked, exerciseName]);
//       } else {
//         setLockedExercises((prevLocked) => prevLocked.filter((exercise) => exercise !== exerciseName));
//       }
// }



export const getLockedExercises = (lockExercises) => {
     locked = lockExercises;
}




const ExerciseCard = ({exerciseName, onButtonLock, checked, onToggleLock}) => {

    const [isPressed, setIsPressed] = useState(false);

    const [fontSize, setFontSize] = useState(12);

    const buttonRef = useRef();

    const handleLockButtonClick = () => {
        onButtonLock(exerciseName);
        console.log('Effect triggered. Current value of isPressed:', isPressed);
       // setIsPressed(prevState => !prevState);
        setIsPressed(!isPressed);
        // Call your other function here
      };

    useEffect(() => {
        console.log('After setIsPressed:', isPressed);
    }, [isPressed]); // Log values when isPressed or toggledLock change

    // useEffect(() => {
    //     // Update font size based on text length
    //     const textLength = buttonRef.current.scrollWidth;
    //     setFontSize(Math.min(16, Math.max(10, 200 / textLength))); // Adjust the formula as needed
    // }, [exerciseName]);
    useEffect(() => {
        console.log(exerciseName, buttonRef.current.scrollWidth, buttonRef.current.scrollHeight)
        const textLength = buttonRef.current.scrollWidth; //exerciseName.length;//
        const textHeight = buttonRef.current.scrollHeight;
        const maxWidth = 90; // You can adjust this value based on your requirements
        const maxHeight = 30;
        const scaleFactor = maxWidth / textLength;
        const heightScale = maxHeight / textHeight;
        const adjustedFontSize = Math.floor(fontSize * scaleFactor);
        //setFontSize(adjustedFontSize);
        setFontSize(Math.min(12,  Math.min(adjustedFontSize, (fontSize * heightScale))));
    }, [exerciseName]);
    

  return (
    <CardContainer>
        <ExerciseGif src={exerciseGif} alt="bicep curls"/>
        <LockButton onClick={handleLockButtonClick} checked={checked} fontSize={fontSize} ref={buttonRef}>
            {exerciseName}
            <LockImg src={checked ? lockedImage : unlockedImage} alt={checked ? 'unlocked' : 'locked'} checked={checked}/>
        </LockButton>
    </CardContainer>
  );
}

export default ExerciseCard;




    // //body segment toggle buttons
    // const [toggledLock, setToggledLock] = useState([]);

    // const handleButtonClick = () => {
    //     console.log('Before setIsPressed:', isPressed);
        
    //     setIsPressed(prevState => !prevState);
    //     setToggledLock((prevLock) => {
    //         if (prevLock.includes(exerciseName)) {
    //             return prevLock.filter((lock) => lock !== exerciseName);
    //         } else {
    //             return [...prevLock, exerciseName];
    //         }
    //         });
    //    // setLockedExercise(exerciseName, isPressed);
    //     console.log('After setIsPressed:', isPressed);
    // };

    // useEffect(() => {
    //     // This will run every time isPressed changes
    //     console.log('Effect triggered. Current value of isPressed:', isPressed);
    //     //onToggleLock(exerciseName, isPressed);
    //     console.log("toggled lock", toggledLock)
    //     getLockedExercises(toggledLock)
    //     console.log(locked);
    //   }, [isPressed]);

    //   useEffect(() => {
    //     console.log('After setIsPressed:', isPressed);
    //     console.log('Locked Exercises:', toggledLock);
    // }, [isPressed, toggledLock]); // Log values when isPressed or toggledLock change

    // useEffect(() => {
    //     console.log('Component re-rendered.');
    // });
    


    //   const setLockedExercise = (exerciseName) => {
    //     setToggledLock((prevLock) => {
    //     if (prevLock.includes(exerciseName)) {
    //         return prevLock.filter((lock) => lock !== exerciseName);
    //     } else {
    //         return [...prevLock, exerciseName];
    //     }
    //     });
    // };
      
    //onClick={() => onButtonClick(buttonText)}

