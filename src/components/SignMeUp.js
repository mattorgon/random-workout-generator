// import React, { useEffect, useState } from "react";
// import styled from "@emotion/styled";
// import { darkModeStyles, lightModeStyles } from "../styles";
// import { useDarkMode } from "../context/DarkModeProvider";

// const Form = styled.form`
//   max-width: 400px;
//   margin: auto;
//   background: black;
// `;

// const Label = styled.label`
//   display: block;
//   //margin-bottom: 10px;
//   background-color: blue;
//   font-size: 60%;
// `;

// const Input = styled.input`
//   width: 100%;
//   //height: 100%;
//   //padding: 6px;
//   // margin-bottom: 15px;
//   margin-top: 0px;
//   background-color: red;
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   background-color: #3498db;
//   color: #fff;
//   //padding: 10px;
//   border: none;
//   cursor: pointer;
// `;

// const SignMeUp = ({ resetFormData }) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send data to the backend for user registration
//     // You can use a fetch or axios to make an API call to your server
//   };

//   const { darkMode } = useDarkMode();

//   useEffect(() => {
//     return () => {
//       // Clean up when component unmounts
//       resetFormData(); // Call the reset function when the component unmounts
//     };
//   }, [resetFormData]);

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Label>
//         Username:
//         <Input
//           type="text"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//         />
//       </Label>
//       <Label>
//         Email:
//         <Input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </Label>
//       <Label>
//         Password:
//         <Input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//       </Label>
//       <Button type="submit">Sign Up</Button>
//     </Form>
//   );
// };

// export default SignMeUp;

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useDarkMode } from "../context/DarkModeProvider";

const Form = styled.form`
  max-width: 400px;
  margin: auto;
  background: black;
`;

const Label = styled.label`
  display: block;
  background-color: blue;
  font-size: 60%;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 0px;
  background-color: red;
`;

const Button = styled.button`
  background-color: #3498db;
  color: #fff;
`;

const SignMeUp = ({ formData, setFormData }) => {
  // useEffect(() => {
  //   // Set initial empty state when the component mounts
  //   setFormData({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  // }, [setFormData]);

  const handleChange = (e) => {
    console.log("Event:", e);
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the backend for user registration
    // You can use a fetch or axios to make an API call to your server
  };

  // useEffect(() => {
  //   // Set initial empty state when the component mounts
  //   setFormData({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  // }, []);

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
      </Label>
      <Label>
        Email:
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Label>
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
