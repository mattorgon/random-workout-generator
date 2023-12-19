import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from "../components/Button"
import ToggleableButton from "./ToggleButton";
import ToggleableButtonComponent from './ToggleButton';
import SubmitButton from './SubmitButton';
import SelectedExerciseList from './SelectedExerciseList';
import { getRandomExercises } from './SelectedExercises';
import YourWorkout from './GenerateWorkout';
import WorkoutCount from './WorkoutCount';
import pushupMan from '../assets/Pushup man no bkgd.gif'



const DisplayLength = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;


const BodySeg = () => {
    let titleText = "Body Segment";
    let subtitleText = "What are we hitting today?"
    let exercises = [];
    let initialSliderValue = 5;

    const [sliderValue, setSliderValue] = useState(initialSliderValue);

    //body segment toggle buttons
    const [toggledButtons, setToggledButtons] = useState([]);

    //exercises
    const [selectedExercises, setSelectedExercises] = useState([]);

    //submit button
    const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

    const handleButtonClick = (buttonText) => {
        setToggledButtons((prevButtons) => {
        if (prevButtons.includes(buttonText)) {
            return prevButtons.filter((button) => button !== buttonText);
        } else {
            return [...prevButtons, buttonText];
        }
        });
    };

    const handleFormSubmit = () => {
        // console.log('Button clicked');
        // //const { selectedExercises: exercises, updatedBodySegments } = getRandomExercises(toggledButtons, 3);
        // exercises = getRandomExercises(toggledButtons, 3);

        // console.log('Exercises:', exercises);
        // //console.log('Updated Body Segments:', updatedBodySegments);
        // setSelectedExercises(exercises);
        // //setToggledButtons(updatedBodySegments);
        // setSubmitButtonClicked(true);
        // // Additional logic if needed

        console.log('Button clicked');
        console.log('slider val: ', sliderValue)
        const { selectedExercises: exercises } = getRandomExercises(toggledButtons, sliderValue);
        console.log('Exercises:', exercises);
        setSelectedExercises(exercises);
        setSubmitButtonClicked(true);
    };

    const TitleStyle = styled.div`
        font-weight: bold;
        font-size: 20px;
    `

    const SubtitleStyle = styled.div`
        display: flex;
        justify-content: center;
    `
    const ButtonRowStyle = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        margin: 10px;
    `

    const Pushup = styled.img`
    width: 200px;
    height: 200px;
    margin-bottom: 5px; 
    border: none;
    border-radius: 10px;
    `


    return(
        <>
        <TitleStyle>
            {titleText}
        </TitleStyle>
        <SubtitleStyle>
            {subtitleText}
        </SubtitleStyle>
        <DisplayLength>{`List Length: ${toggledButtons}`}</DisplayLength>
        <ButtonRowStyle>
            <ToggleableButtonComponent buttonText={"back"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('back')}/>
            <ToggleableButtonComponent buttonText={"biceps"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('biceps')}/>
            <ToggleableButtonComponent buttonText={"chest"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('chest')}/>
            <ToggleableButtonComponent buttonText={"triceps"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('triceps')}/>
            <ToggleableButtonComponent buttonText={"legs"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('legs')}/>
        </ButtonRowStyle>
        <ButtonRowStyle>
            <ToggleableButtonComponent buttonText={"shoulders"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('shoulders')}/>
            <ToggleableButtonComponent buttonText={"core"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('core')}/>
            <ToggleableButtonComponent buttonText={"cardio"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('cardio')}/>
            <ToggleableButtonComponent buttonText={"push"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('push')}/>
            <ToggleableButtonComponent buttonText={"pull"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('pull')}/>
        </ButtonRowStyle>
        
        <WorkoutCount onSliderChange={setSliderValue} maxSliderValue={initialSliderValue*2} />

        <SubmitButton buttonText="Submit" onButtonClick={handleFormSubmit} />
        <br></br>
        <Pushup src={pushupMan}/>
            {submitButtonClicked && <SelectedExerciseList selectedExercises={selectedExercises}/>}
            {/* <YourWorkout selectedExercises={selectedExercises} />}
            <SelectedExerciseList selectedExercises={selectedExercises}/> */}
       

        </>
        
    );


}

export default BodySeg;
