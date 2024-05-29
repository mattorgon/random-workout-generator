import React, { useState } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import SignMeUp from "./SignMeUp";

const SignUpButtonStyled = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 0px 10px;
  border: none;
  cursor: pointer;
  //z-index: 2;
  border-radius: 5px;
  font-size: 0.5em;
  white-space: nowrap;
`;

const ModalContent = styled.div`
  padding: 20px;
  z-index: 3;
  width: 50%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1px; /* Adjust top position as needed */
  right: 10px; /* Adjust right position as needed */
  margin-top: 10px;
  color: darkgrey;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: darkgrey;
    color: black;
  }
`;

const SignUpButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      <SignUpButtonStyled onClick={openModal}>Sign Up</SignUpButtonStyled>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Sign Up Modal"
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Slightly darken the background
          },
          content: {
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxWidth: "500px", // Limit the max width for better responsiveness
            height: "auto",
            maxHeight: "80%", // Limit the max height for better responsiveness
            overflow: "auto",
            background: "#fff",
            border: "none", // Remove default border
            borderRadius: "8px", // Add rounded corners
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Apply a nice shadow
            padding: "20px", // Add some padding inside the modal
            outline: "none", // Remove outline
          },
        }}
        // style={{
        //   overlay: {
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        //   },
        //   content: {
        //     position: "fixed",
        //     display: "flex",
        //     justifyContent: "center",
        //     top: "50%",
        //     left: "50%",
        //     right: "auto",
        //     bottom: "auto",
        //     transform: "translate(-50%, -50%)",
        //     width: "20%",
        //     height: "40%",
        //     maxHeight: "80%",
        //     overflow: "auto",
        //     background: "#fff",
        //     border: "1px solid #ccc",
        //     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        //   },
        // }}
      >
        <ModalContent>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <SignMeUp formData={formData} setFormData={setFormData} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUpButton;
