import React from "react";
import Button from "../components/Button"


const mainScreen = () => {

    return (
        <>
            <p>main screen</p>
            <Button buttonText={"back"}/>
            <Button buttonText={"biceps"}/>
            <Button buttonText={"chest"}/>
            <Button buttonText={"triceps"}/>
            <Button buttonText={"legs"}/>
        </>
    )
}


export default mainScreen;