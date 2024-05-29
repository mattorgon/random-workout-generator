import React from "react";
import Modal from "react-modal";
import { useAuth } from "../context/AuthContext";
import "./UserMenuModal.css";

const modalStyle = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end", // Adjust as needed
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    top: 0,
    right: "-100%", // Off-screen initially
    bottom: 0,
    width: "300px",
    padding: "20px",
    background: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "right 3s ease-in-out", // Add a transition for smooth sliding
  },
};

const UserMenuModal = ({ isOpen, onClose }) => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    console.log("on close: ", onClose);
    onClose(); // Close the modal if onClose is a function
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyle}>
      <div>
        {/* Additional content for user menu */}
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </Modal>
  );
};

export default UserMenuModal;
