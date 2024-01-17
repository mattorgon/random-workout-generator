import React from "react";
import styled from "@emotion/styled";
import { useDarkMode } from "../context/DarkModeProvider";
import { darkModeStyles, lightModeStyles } from "../styles";
import DarkToggleSwitch from "./DarkToggleSwitch";

const HeaderStyle = styled.div`
  //background-color: #32533D;//#2D8565;//#008B8B;
  display: flex;
  width: 100%;
  text-indent: 10px;
  text-align: left;
  justify-content: space-between;

  //color: white;

  /* Dynamic styles based on darkMode state */
  background-color: ${(props) =>
    props.darkMode
      ? darkModeStyles.header.backgroundColor
      : lightModeStyles.header.backgroundColor}; //"#32533D"};
  color: ${(props) =>
    props.darkMode
      ? darkModeStyles.header.color
      : lightModeStyles.header.color};
`;

const Header = () => {
  let title = "I Pick, U Lift";

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <HeaderStyle darkMode={darkMode}>
        {/* <p>{title}</p> */}
        {title}
        {/* <DarkToggleSwitch onClick={toggleDarkMode}/> */}
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </HeaderStyle>
    </>
  );
};

export default Header;
