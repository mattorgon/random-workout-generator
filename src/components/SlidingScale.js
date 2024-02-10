import React, { useState } from "react";
import styled from "@emotion/styled";
import { darkModeStyles, lightModeStyles } from "../styles";
import { useDarkMode } from "../context/DarkModeProvider";

const SliderContainer = styled.div`
  flex-wrap: nowrap;
  max-width: 600px;
  margin: 20px auto; /* Center the container horizontally */
  position: relative;
`;

const Slider = styled.input`
  // display: flex;
  // width: 100%;
  // height: 4px;

  width: 100%;
  height: 4px; /* Set the height to make the bar thinner */
  appearance: none; /* Remove default styles */
  border-radius: 2px;
  background-color: ${(props) =>
    props.darkMode
      ? darkModeStyles.slider.backgroundColor
      : lightModeStyles.slider.backgroundColor};
  outline: none; /* Remove default focus style */

  // &::-webkit-slider-thumb {
  //   z-index: -1; /* Make sure the thumb is above the vertical hash marks */
  // }
  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px; /* Set the width of the thumb (circle) */
    height: 20px; /* Set the height of the thumb (circle) */
    background-color: ${(props) =>
      props.darkMode
        ? darkModeStyles.slider.thumb.backgroundColor
        : lightModeStyles.slider.thumb.backgroundColor};
    border: 2px solid
      ${(props) =>
        props.darkMode
          ? darkModeStyles.slider.thumb.border
          : lightModeStyles.slider.thumb.border};
    border-radius: 50%; /* Make it a circle */
    cursor: pointer;
    transition: background 0.3s, border 0.3s;
  }
`;

const ScaleValue = styled.span`
  display: block;
  margin-top: 10px;
  text-align: center;
`;

const SlidingScale = ({ value: propValue, onChange, max }) => {
  const { darkMode } = useDarkMode();

  const [sliderValue, setSliderValue] = useState(propValue);
  console.log(sliderValue);
  const handleSliderChange = (event) => {
    // setSliderValue(event.target.value);
    // onChange(event.target.value);
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
    onChange(newValue);
  };

  return (
    <SliderContainer>
      {/* <HashMarks>
                {[...Array(10)].map((_, index) => (
                    <HashMark key={index} />
                ))}
            </HashMarks> */}
      <Slider
        type="range"
        min="1"
        max={max}
        value={sliderValue}
        onChange={handleSliderChange}
        darkMode={darkMode}
      />
      <ScaleValue>{sliderValue}</ScaleValue>
    </SliderContainer>
  );
};

export default SlidingScale;

// import React, { useState } from 'react';
// import styled from '@emotion/styled';

// const SliderContainer = styled.div`
//     flex-wrap: nowrap;
//     max-width: 600px;
//     margin: 20px auto; /* Center the container horizontally */
//     position: relative;
// `;

// const Slider = styled.input`
//     display: flex;
//     width: 100%;
//     height: 100%;

//     &::-webkit-slider-thumb {
//         z-index: -1; /* Make sure the thumb is above the vertical hash marks */
//     }
// `;

// const HashMarks = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: space-between;
//     pointer-events: none; /* Add this line to allow mouse events to pass through */
// `;

// const HashMark = styled.div`
//     width: 2px;
//     height: 10px;
//     background-color: #000;
// `;

// const ScaleValue = styled.span`
//     display: block;
//     margin-top: 10px;
//     text-align: center;
// `;

// const SlidingScale = () => {
//     const [sliderValue, setSliderValue] = useState(5);

//     const handleSliderChange = (event) => {
//         setSliderValue(event.target.value);
//     };

//     return (
//         <SliderContainer>
//             <HashMarks>
//                 {[...Array(10)].map((_, index) => (
//                     <HashMark key={index} />
//                 ))}
//             </HashMarks>
//             <Slider
//                 type="range"
//                 min="1"
//                 max="10"
//                 value={sliderValue}
//                 onChange={handleSliderChange}
//             />
//             <ScaleValue>{sliderValue}</ScaleValue>
//         </SliderContainer>
//     );
// };

// export default SlidingScale;
