import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = () => {
    // Implement your sign-in logic here
    setIsSignedIn(true);
  };

  const signOut = () => {
    // Implement your sign-out logic here
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
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
