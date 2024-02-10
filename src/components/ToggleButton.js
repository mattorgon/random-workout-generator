import React from "react";
import styled from "@emotion/styled";
import { darkModeStyles, lightModeStyles } from "../styles";
import { useDarkMode } from "../context/DarkModeProvider";

const ToggleableButton = styled.button`
  // background-color: ${(props) =>
    props.checked ? "DarkSlateGray" : "white"};
  // color: ${(props) => (props.checked ? "white" : "DarkSlateGray")};
  // border: 2px solid DarkSlateGray;
  // border-radius: 6px;
  // padding: 8px;
  // margin: 4px;
  // cursor: pointer;
  //background-color: ${(props) => (props.checked ? "#5B7564" : "white")};

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
  // &:hover {

  //   background-color: #1c1c1c; //#f1ba66;
  // }
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

// background-color: ${(props) =>
//   props.darkMode
//     ? darkModeStyles.toggleButton.backgroundColor
//     : lightModeStyles.toggleButton.backgroundColor};
// color: ${(props) =>
//   props.darkMode
//     ? darkModeStyles.toggleButton.color
//     : lightModeStyles.toggleButton.color};
// //${(props) => (props.checked ? "white" : "#5B7564")};
