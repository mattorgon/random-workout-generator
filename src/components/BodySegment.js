import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from "../components/Button"
import ToggleableButton from "./ToggleButton";


const DisplayLength = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;


const BodySeg = () => {
    let titleText = "Body Segment";
    let subtitleText = "What are we hitting today?"

    const [toggledButtons, setToggledButtons] = useState([]);

    const handleButtonClick = (buttonText) => {
        setToggledButtons((prevButtons) => {
        if (prevButtons.includes(buttonText)) {
            return prevButtons.filter((button) => button !== buttonText);
        } else {
            return [...prevButtons, buttonText];
        }
        });
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
            <ToggleableButton buttonText={"back"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('back')}/>
            <ToggleableButton buttonText={"biceps"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('biceps')}/>
            <ToggleableButton buttonText={"chest"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('chest')}/>
            <ToggleableButton buttonText={"triceps"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('triceps')}/>
            <ToggleableButton buttonText={"legs"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('legs')}/>
        </ButtonRowStyle>
        <ButtonRowStyle>
            <ToggleableButton buttonText={"shoulders"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('shoulders')}/>
            <ToggleableButton buttonText={"core"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('core')}/>
            <ToggleableButton buttonText={"cardio"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('cardio')}/>
            <ToggleableButton buttonText={"push"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('push')}/>
            <ToggleableButton buttonText={"pull"} onButtonClick={handleButtonClick} checked={toggledButtons.includes('pull')}/>
        </ButtonRowStyle>



        </>
    );


}

export default BodySeg;
