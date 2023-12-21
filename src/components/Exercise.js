import React, { useState, useEffect } from 'react';
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

const ExerciseCard = ({exerciseName}) => {

    const [isPressed, setIsPressed] = useState(false);

    const handleButtonClick = () => {
        console.log('Before setIsPressed:', isPressed);
        
        setIsPressed(!isPressed);
        console.log('After setIsPressed:', isPressed);
    };

    useEffect(() => {
        // This will run every time isPressed changes
        console.log('Effect triggered. Current value of isPressed:', isPressed);
      }, [isPressed]);
      
    

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
