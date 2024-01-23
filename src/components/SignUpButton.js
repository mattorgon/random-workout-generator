// import React, { useState, useEffect } from "react";
// import styled from "@emotion/styled";
// import Modal from "react-modal";
// import SignMeUp from "./SignMeUp";

// // Set the app element (ideally, the root element of your application)
// Modal.setAppElement("#root");

// const SignUpButtonStyled = styled.button`
//   background-color: #3498db;
//   color: #fff;
//   padding: 10px;
//   border: none;
//   cursor: pointer;
//   z-index: 2; /* Set a higher z-index for the button */
// `;

// const ModalContent = styled.div`
//   //padding: 20px;
//   z-index: 3; /* Set a higher z-index for the modal content */
//   width: 100%;
// `;

// const CustomModal = styled(Modal)`
//   &__overlay {
//     z-index: 4 !important;
//     background-color: black;
//   }

//   &__content {
//     position: absolute;
//     // top: 50%;
//     // left: 50%;
//     // transform: translate(-50%, -50%);
//     width: 10%;
//     max-width: 400px; /* Adjust the maximum width as needed */
//     max-height: 80%;
//     overflow: auto;
//     background-color: #fff;
//     border: 1px solid #ccc;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   }
// `;

// const SignUpButton = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const resetFormData = () => {
//     setFormData({
//       username: "",
//       email: "",
//       password: "",
//     });
//   };

//   useEffect(() => {
//     return () => {
//       // Clean up when component unmounts
//       Modal.setAppElement(null);
//     };
//   }, []);

//   return (
//     <>
//       <SignUpButtonStyled onClick={openModal}>Sign Up</SignUpButtonStyled>
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Sign Up Modal"
//         style={{
//           overlay: {
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           },
//           content: {
//             position: "fixed",
//             display: "flex",
//             justifyContent: "center",
//             top: "50%",
//             left: "50%",
//             right: "auto",
//             bottom: "auto",
//             transform: "translate(-50%, -50%)",
//             width: "20%",
//             height: "40%",
//             maxHeight: "80%",
//             overflow: "auto",
//             background: "#fff",
//             border: "1px solid #ccc",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//             //padding: "20px",
//           },
//         }}
//       >
//         <ModalContent>
//           <SignMeUp resetFormData={resetFormData} />
//           <button onClick={closeModal}>Close</button>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default SignUpButton;

import React, { useState } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import SignMeUp from "./SignMeUp";

const SignUpButtonStyled = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  z-index: 2;
`;

const ModalContent = styled.div`
  padding: 20px;
  z-index: 3;
  width: 50%;
`;

const SignUpButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const openModal = () => {
    // setFormData({
    //   username: "",
    //   email: "",
    //   password: "",
    // });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form data when modal is closed
    // setFormData({
    //   username: "",
    //   email: "",
    //   password: "",
    // });
  };

  const resetFormData = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <SignUpButtonStyled
        // onClick={() => {
        //   openModal();
        //   resetFormData();
        // }}
        onClick={openModal}
      >
        Sign Up
      </SignUpButtonStyled>
      <Modal
        isOpen={isModalOpen}
        // onRequestClose={() => {
        //   closeModal();
        //   resetFormData();
        // }}
        onRequestClose={closeModal}
        contentLabel="Sign Up Modal"
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "20%",
            height: "40%",
            maxHeight: "80%",
            overflow: "auto",
            background: "#fff",
            border: "1px solid #ccc",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <ModalContent>
          <SignMeUp formData={formData} setFormData={setFormData} />
          <button onClick={closeModal}>Close</button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUpButton;
