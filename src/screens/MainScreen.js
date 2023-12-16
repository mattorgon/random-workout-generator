import React from "react";
import Button from "../components/Button"
import Header from "../components/Header";
import Intro from "../components/intro";
import BodySeg from "../components/BodySegment";
import SlidingScale from "../components/SlidingScale";


const mainScreen = () => {

    return (
        <>
            <Header/>
            <Intro/>
            <BodySeg/>
            <SlidingScale/>
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