import React, { useState } from 'react';
import styled from '@emotion/styled';

const SliderContainer = styled.div`
    flex-wrap: nowrap;
    max-width: 600px;
    margin: 20px auto; /* Center the container horizontally */
    justify-content: center;
`;

const Slider = styled.input`
    display: flex;
    width: 100%;

`;

const ScaleValue = styled.span`
    display: block;
    margin-top: 10px;
    text-align: center;
`;

const SlidingScale = () => {
    const [sliderValue, setSliderValue] = useState(5);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    return (
        <SliderContainer>
            <Slider
                type="range"
                min="1"
                max="10"
                value={sliderValue}
                onChange={handleSliderChange}
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

