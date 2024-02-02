import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDarkMode } from "../context/DarkModeProvider";
import { darkModeStyles, lightModeStyles } from "../styles";
import DarkToggleSwitch from "./DarkToggleSwitch";
import SignMeUp from "./SignMeUp";
import SignUpButton from "./SignUpButton";
import LoginButton from "./LoginButton";
import { useAuth } from "../context/AuthContext";
import UserMenuModal from "./UserMenuModal";
import SlidingPane from "react-sliding-pane";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import "react-sliding-pane/dist/react-sliding-pane.css";
import "../styles/parent-slide-pane.css";
import "../styles/sliding-pane.css";

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
  width: 90%;
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

const SignedIn = styled.div`
  background-color: red;
`;

const paneStyle = {
  width: "20px",
  // overlay: { width: "20px" },
  // content: {
  //   width: "20px",
  // },
};

const Header = (props) => {
  let title = "I Pick, U Lift";

  const { isSignedIn, username, signOut } = useAuth();

  const { darkMode, toggleDarkMode } = useDarkMode();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigateToSavedWorkouts = () => {
    navigate("/savedWorkouts");
  };

  const openUserMenu = () => {
    //setIsUserMenuOpen(true);
    setIsPaneOpen(true);
  };

  const closeUserMenu = () => {
    //setIsUserMenuOpen(false);
    setIsPaneOpen(false);
  };

  const handleSignOut = () => {
    signOut();
    setIsPaneOpen(false); // Close the modal if onClose is a function
  };

  useEffect(() => {
    console.log("username: ", username);
  }, [isSignedIn]);

  return (
    <HeaderStyle darkMode={darkMode}>
      <TitleWrapper>
        <TitleStyle darkMode={darkMode}>{title}</TitleStyle>

        <Underline />
      </TitleWrapper>

      {isSignedIn ? (
        // <>
        //   Welcome,{" "}
        //   <span onClick={openUserMenu} style={{ cursor: "pointer" }}>
        //     {username}
        //   </span>
        //   <UserMenuModal isOpen={isUserMenuOpen} onClose={closeUserMenu} />
        // </>
        <>
          Welcome,{" "}
          <span onClick={openUserMenu} style={{ cursor: "pointer" }}>
            {username}
          </span>
          {/* <div className=".custom-width-panes"> */}
          <SlidingPane
            className="my-custom-slide-pane.custom-width-panes.slide-pane_from_right my-custom-slide-pane custom-width-panes"
            // overlayClassName="some-custom-overlay-class"
            isOpen={isPaneOpen}
            // width="40%"
            title={username}
            // subtitle="Optional subtitle."
            onRequestClose={() => {
              // triggered on "<" on left top click or on outside click
              setIsPaneOpen(false);
            }}
          >
            <Button darkMode={darkMode} onClick={toggleDarkMode}>
              Toggle Dark Mode
            </Button>
            <Button onClick={handleNavigateToSavedWorkouts}>My Workouts</Button>
            <Button onClick={handleSignOut}>Sign Out</Button>
            {/* <button onClick={handleSignOut}>Sign Out</button> */}
            <div>And I am pane content.</div>
            <br />
          </SlidingPane>
          {/* </div> */}
        </>
      ) : (
        <div>
          <LoginButton />
          <SignUpButton />
        </div>
      )}
    </HeaderStyle>
  );
};

export default Header;
