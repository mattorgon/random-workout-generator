import React from "react";
import Button from "../components/Button"
import Header from "../components/Header";
import Intro from "../components/intro";
import BodySeg from "../components/BodySegment";
import SlidingScale from "../components/SlidingScale";
import WorkoutCount from "../components/WorkoutCount";
import SubmitButton from "../components/SubmitButton";

const mainScreen = () => {

    return (
        <>
            <Header/>
            <Intro/>
            <BodySeg/>
            <WorkoutCount/>
            <SubmitButton buttonText={"Generate Workout"}/>
            <p>main screen</p>
            {/* <Button buttonText={"back"}/>
            <Button buttonText={"biceps"}/>
            <Button buttonText={"chest"}/>
            <Button buttonText={"triceps"}/>
            <Button buttonText={"legs"}/> */}
        </>
    )
}


export default mainScreen;