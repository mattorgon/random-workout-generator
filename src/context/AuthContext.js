import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [username, setUsername] = useState("");

  const signIn = (user) => {
    setIsSignedIn(true);
    setUsername(user);
    console.log(user);
  };

  const signOut = () => {
    setIsSignedIn(false);
    setUsername(""); // Reset username when signing out
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, username, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
