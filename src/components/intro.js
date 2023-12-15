import React from "react";
import styled from '@emotion/styled';

const IntroStyle = styled.div`
    display: flex
    width: 100%;
    left: 10px;
    padding: 10px
`

const Intro = () => {
    let introText = "Welcome to the randomized workout generator where you only need to choose which body segment you want to target and how many exercises you have time for today."

    return(
        <>
        <IntroStyle>
            {introText}
        </IntroStyle>
        </>
    );


}

export default Intro;
