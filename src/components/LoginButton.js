import React, { useState } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import LogMeIn from "./LogMeIn";

const LoginButtonStyled = styled.button`
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

const LoginButton = () => {
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
      <LoginButtonStyled onClick={openModal}>Login</LoginButtonStyled>
      <Modal
        isOpen={isModalOpen}
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
          <LogMeIn formData={formData} setFormData={setFormData} />
          <button onClick={closeModal}>Close</button>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginButton;
