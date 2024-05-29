import React from "react";
import styled from "@emotion/styled";
import { darkModeStyles, lightModeStyles } from "../styles";
import { useDarkMode } from "../context/DarkModeProvider";

const ToggleableButton = styled.button`
  // background-color: ${(props) =>
    props.checked ? "DarkSlateGray" : "white"};

  background-color: ${
    (props) =>
      props.checked
        ? props.darkMode
          ? darkModeStyles.toggleButton.checked_backgroundColor // Background color when checked in dark mode
          : lightModeStyles.toggleButton.checked_backgroundColor // Background color when checked in light mode
        : props.darkMode
        ? darkModeStyles.toggleButton.backgroundColor // Dark mode background color when not checked
        : lightModeStyles.toggleButton.backgroundColor // Light mode background color when not checked
  };

  color: ${
    (props) =>
      props.checked
        ? props.darkMode
          ? darkModeStyles.toggleButton.checked_color // Background color when checked in dark mode
          : lightModeStyles.toggleButton.checked_color // Background color when checked in light mode
        : props.darkMode
        ? darkModeStyles.toggleButton.color // Dark mode background color when not checked
        : lightModeStyles.toggleButton.color // Light mode background color when not checked
  };

  //background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: ${(props) =>
    props.darkMode
      ? darkModeStyles.toggleButton.border_radius
      : lightModeStyles.toggleButton.border_radius};
  height: 30px;
  width: 100px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.darkMode
        ? darkModeStyles.toggleButton.hover_backgroundColor
        : lightModeStyles.toggleButton.hover_backgroundColor};
  }

  border: ${(props) =>
    props.darkMode
      ? darkModeStyles.toggleButton.border
      : lightModeStyles.toggleButton.border};
`;

const ToggleableButtonComponent = ({ buttonText, onButtonClick, checked }) => {
  const { darkMode } = useDarkMode();

  return (
    <ToggleableButton
      checked={checked}
      onClick={() => onButtonClick(buttonText)}
      darkMode={darkMode}
    >
      {buttonText}
    </ToggleableButton>
  );
};

export default ToggleableButtonComponent;
