import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDarkMode } from "../context/DarkModeProvider";
import { useAuth } from "../context/AuthContext";

const Form = styled.form`
  max-width: 400px;
  margin: auto;
`;

const Label = styled.label`
  display: block;
  font-size: 60%;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 0px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
`;

const UsernameTaken = styled.div`
  // height: 20px;
  width: 100px;
  background-color: red;
  color: black;
`;

const SignMeUp = ({ formData, setFormData }) => {
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);

  const { signIn } = useAuth();

  const handleChange = async (e) => {
    console.log("Event:", e);
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Check username availability
    if (name === "username") {
      if (value === "") {
        setIsUsernameTaken(false);
      } else {
        await checkUsernameAvailability(value);
      }
    }
    console.log("isusername taken", isUsernameTaken);
  };

  const checkUsernameAvailability = async (username) => {
    try {
      const response = await fetch(
        `http://localhost:3001/auth/check-username?username=${username}`
      );
      const result = await response.json();
      console.log("result: ", result);
      setIsUsernameTaken(
        result.isTaken ? "Username taken" : "Username available"
      );
    } catch (error) {
      console.error("Error checking username availability:", error);
    }
    console.log(isUsernameTaken);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to the registration endpoint
    try {
      const response = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response.ok) {
        // Registration successful
        const data = await response.json();
        console.log("User registered:", data);
        // Optionally, you can perform additional actions like redirecting the user
        autoLogin(formData.username, data.userID, data.token);
      } else {
        // Registration failed
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  const autoLogin = async (username, userID, token) => {
    try {
      //same authentication logic as in login function
      signIn(username, userID, token);

      console.log("Auto-login successful");
    } catch (error) {
      console.error("Error during auto-login:", error);
    }
  };

  useEffect(() => {
    console.log("formdata: ", formData);
  }, [handleChange]);

  const { darkMode } = useDarkMode();

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Username:
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          autoComplete="off"
        />
        <UsernameTaken>{isUsernameTaken}</UsernameTaken>
      </Label>
      {/* <Label>
        Email:
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Label> */}
      <Label>
        Password:
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="off"
        />
      </Label>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default SignMeUp;
