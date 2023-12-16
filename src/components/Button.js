import React from 'react';
import styled from '@emotion/styled';

const ButtonStyle = styled.button`
        background-color: red;
        color: white;
        border: none;
        border-radius: 6px;
        width: 100px;
        cursor: pointer;
        &:hover {
            background-color: darkred;
        }
    `

const Button = ({buttonText}) => {

    

  return (
    <ButtonStyle>
      {buttonText}
    </ButtonStyle>
  );
}

export default Button;
