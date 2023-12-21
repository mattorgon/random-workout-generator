import React, { useState } from 'react';
import styled from '@emotion/styled';
import exerciseGif from '../assets/Bicep-Curl-1gif.gif'
import lockedImage from '../assets/illustration-of-lock-icon-vector.jpg'
import unlockedImage from '../assets/21-213657_padlock-146537-unlock-clipart-png-download.png'

const LockButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #32533D;
    color: white;
    border: none;
    border-radius: 6px;
    width: 100px;
    height: 40px;
    cursor: pointer;
    &:hover {
        background-color: darkred;
    }
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
    justify-content: center;

`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Vertical alignment */
    margin-bottom: 10px; /* Adjust the margin as needed */
    // background-color: red;
`;

const ExerciseCard = ({exerciseName, onToggleLock}) => {

    const [isPressed, setIsPressed] = useState(false);

    //exercises locked in
    //const [lockedExercises, setLockedExercises] = useState([]);

    // const handleButtonClick = () => {
    //     console.log(isPressed);
    //     setIsPressed((prevState) => {
    //         const newState = !prevState;
    //         console.log('New state:', newState);
    //         onToggleLock(exerciseName, newState);
    //         console.log('onToggleLock called');
    //         return newState;
    //     });
    //     console.log(isPressed);
    const handleButtonClick = () => {
        console.log('Before setIsPressed:', isPressed);
        setIsPressed(!isPressed);
        console.log('After setIsPressed:', isPressed);
        onToggleLock(exerciseName, isPressed);
    };
    
    

        // console.log("handlebuttonclick fired");
        // setIsPressed(!isPressed);
        // console.log(isPressed);
        // onToggleLock(exerciseName, isPressed);

        // console.log('isPressed:', isPressed); // Log to check the value of isPressed
    // };

  return (
    <CardContainer>
        <ExerciseGif src={exerciseGif} alt="bicep curls"/>
        <LockButton onClick={handleButtonClick}>{exerciseName}
            <LockImg src={isPressed ? lockedImage : unlockedImage} alt={isPressed ? 'unlocked' : 'locked'}/>
        </LockButton>
    </CardContainer>
  );
}

export default ExerciseCard;
