import React, { useState } from "react";
import styled from "@emotion/styled";

const SubmitButtonStyle = styled.button`
  background-color: #cc2936;
  color: white;
  border: none;
  border-radius: 6px;
  width: 200px;
  height: 50px;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  transition: transform 0.1s ease-in-out;

  &:hover {
    background-color: darkred;
  }

  &:active {
    transform: scale(0.95);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    transition: transform 0.4s ease-in-out;
  }

  &.loading::before {
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;
const SubmitButton = ({ buttonText, onButtonClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    onButtonClick();
    setTimeout(() => setIsLoading(false), 2000); // Simulate loading time
  };

  return (
    <SubmitButtonStyle
      onClick={handleClick}
      className={isLoading ? "loading" : ""}
    >
      {buttonText}
    </SubmitButtonStyle>
  );
};

export default SubmitButton;
