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
