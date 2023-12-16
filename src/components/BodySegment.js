import React from "react";
import styled from '@emotion/styled';
import Button from "../components/Button"



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
            <Button buttonText={"back"}/>
            <Button buttonText={"biceps"}/>
            <Button buttonText={"chest"}/>
            <Button buttonText={"triceps"}/>
            <Button buttonText={"legs"}/>
        </ButtonRowStyle>
        <ButtonRowStyle>
            <Button buttonText={"shoulders"}/>
            <Button buttonText={"core"}/>
            <Button buttonText={"cardio"}/>
            <Button buttonText={"push"}/>
            <Button buttonText={"pull"}/>
        </ButtonRowStyle>



        </>
    );


}

export default BodySeg;
