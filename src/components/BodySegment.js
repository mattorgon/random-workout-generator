import React from "react";
import styled from '@emotion/styled';
import Button from "../components/Button"
import ToggleableButton from "./ToggleButton";



const BodySeg = () => {
    let titleText = "Body Segment";
    let subtitleText = "What are we hitting today?"

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
        <ButtonRowStyle>
            <ToggleableButton buttonText={"back"}/>
            <ToggleableButton buttonText={"biceps"}/>
            <ToggleableButton buttonText={"chest"}/>
            <ToggleableButton buttonText={"triceps"}/>
            <ToggleableButton buttonText={"legs"}/>
        </ButtonRowStyle>
        <ButtonRowStyle>
            <ToggleableButton buttonText={"shoulders"}/>
            <ToggleableButton buttonText={"core"}/>
            <ToggleableButton buttonText={"cardio"}/>
            <ToggleableButton buttonText={"push"}/>
            <ToggleableButton buttonText={"pull"}/>
        </ButtonRowStyle>



        </>
    );


}

export default BodySeg;
