import React from "react";
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
  //font-family: Jomhuria;
  &:hover {
    background-color: darkred;
  }
`;

const SubmitButton = ({ buttonText, onButtonClick }) => {
  return (
    <SubmitButtonStyle onClick={onButtonClick}>{buttonText}</SubmitButtonStyle>
  );
};

export default SubmitButton;
