import React from "react";
import styled from '@emotion/styled';
import SlidingScale from "./SlidingScale";



const WorkoutCount = () => {
    let titleText = "Number of Exercises";
    let subtitleText = "How many are we hitting today?"

    const TitleStyle = styled.div`
        font-weight: bold;
        font-size: 20px;
    `

    const SubtitleStyle = styled.div`
        display: flex;
        justify-content: center;
    `

    return(
        <>
        <TitleStyle>
            {titleText}
        </TitleStyle>
        <SubtitleStyle>
            {subtitleText}
        </SubtitleStyle>
        <SlidingScale/>


        </>
    );


}

export default WorkoutCount;
