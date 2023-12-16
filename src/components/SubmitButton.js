import React from 'react';
import styled from '@emotion/styled';

const SubmitButtonStyle = styled.button`
        background-color: red;
        color: white;
        border: none;
        border-radius: 6px;
        width: 150px;
        cursor: pointer;
        &:hover {
            background-color: darkred;
        }
    `

const SubmitButton = ({buttonText}) => {

    

  return (
    <SubmitButtonStyle>
      {buttonText}
    </SubmitButtonStyle>
  );
}

export default SubmitButton;
