// import React from "react";
// import styled from "@emotion/styled";
// import { useDarkMode } from "../context/DarkModeProvider";
// import { darkModeStyles, lightModeStyles } from "../styles";
// import DarkToggleSwitch from "./DarkToggleSwitch";

// const HeaderStyle = styled.div`
//   //background-color: #32533D;//#2D8565;//#008B8B;
//   display: flex;
//   width: 100%;
//   text-indent: 10px;
//   text-align: left;
//   //justify-content: space-between;

//   //color: white;

//   /* Dynamic styles based on darkMode state */
//   background-color: ${(props) =>
//     props.darkMode
//       ? darkModeStyles.header.backgroundColor
//       : lightModeStyles.header.backgroundColor}; //"#32533D"};
//   color: ${(props) =>
//     props.darkMode
//       ? darkModeStyles.header.color
//       : lightModeStyles.header.color};
// `;

// const Underline = styled.div`
//   position: absolute;
//   bottom: 0;
//   //left: 50%;
//   border-radius: 1.5px;
//   //transform: translateX(-50%); /* Center the underline */
//   width: 250px; /* Set the width of the underline */
//   height: 3px; /* Adjust the height of the underline */
//   background-color: #f1ba66; /* Adjust the color of the underline */
//   z-index: 1;
//   margin: 0; /* Reset margin */
//   padding: 0; /* Reset padding */
//   margin-bottom: 1px; /* Reset margin-bottom */
//   line-height: 0;
//   margin-right: 40px;
// `;

// const TitleWrapper = styled.div`
//   position: relative;
// `;

// const Header = () => {
//   let title = "I Pick, U Lift";

//   const { darkMode, toggleDarkMode } = useDarkMode();

//   return (
//     <>
//       <TitleWrapper>
//         <HeaderStyle darkMode={darkMode}>
//           {/* <p>{title}</p> */}
//           {title}
//           {/* <DarkToggleSwitch onClick={toggleDarkMode}/> */}
//           <Underline />
//           <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
//         </HeaderStyle>
//       </TitleWrapper>
//     </>
//   );
// };

// export default Header;

import React from "react";
import styled from "@emotion/styled";
import { useDarkMode } from "../context/DarkModeProvider";
import { darkModeStyles, lightModeStyles } from "../styles";
import DarkToggleSwitch from "./DarkToggleSwitch";
import SignMeUp from "./SignMeUp";
import SignUpButton from "./SignUpButton";

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  justify-content: space-between; /* Align children to the start and end */
  //align-items: center; /* Center children vertically */
  padding: 0 20px; /* Add some padding for better spacing */

  /* Dynamic styles based on darkMode state */
  background-color: ${(props) =>
    props.darkMode
      ? darkModeStyles.header.backgroundColor
      : lightModeStyles.header.backgroundColor};
  color: ${(props) =>
    props.darkMode
      ? darkModeStyles.header.color
      : lightModeStyles.header.color};
  line-height: 0; /* Adjust line-height to remove gap */
  margin-bottom: 0; /* Reset margin-bottom */
  padding: 0; /* Reset padding */
  padding-left: 10px;
  padding-bottom: 10px;
  padding-top: 5px;
  // padding: 10px;
`;

// const Underline = styled.div`
//   position: absolute;
//   border-radius: 1.5px;
//   width: 100%; /* Occupy the full width */
//   height: 3px;
//   background-color: #f1ba66;
//   margin-bottom: 2px;
//   //z-index: 1;
//   margin-top: 10px;
//   //   bottom: 0;
//   //   left: 0;
// `;

const Underline = styled.div`
  border-radius: 1.5px;
  width: 100px;
  height: 2px;
  background-color: #f1ba66;
  margin-top: 6px;
`;

const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
`;

const Button = styled.button`
  //align-self: flex-end;
  //padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 50px;
  height: 15px;
  font-size: 5px;
`;

const TitleStyle = styled.div`
  font-weight: bold;
  font-size: 15px;
  //color: #32533D
  background-color: rgba(0, 0, 0, 0);

  color: ${(props) =>
    props.darkMode
      ? darkModeStyles.titleText.color
      : darkModeStyles.titleText.color};
  display: inline;
  z-index: 2;
  position: relative;
  // align-items: flex-end;

  line-height: 0; /* Adjust line-height to remove gap */
  margin-bottom: 0; /* Reset margin-bottom */
  padding: 0px; /* Reset padding */
  margin-top: 10px;
`;
const Header = () => {
  let title = "I Pick, U Lift";

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <HeaderStyle darkMode={darkMode}>
      <TitleWrapper>
        <TitleStyle darkMode={darkMode}>{title}</TitleStyle>

        <Underline />
      </TitleWrapper>

      <Button darkMode={darkMode} onClick={toggleDarkMode}>
        Toggle Dark Mode
      </Button>
      <SignUpButton />
    </HeaderStyle>
  );
};

export default Header;
