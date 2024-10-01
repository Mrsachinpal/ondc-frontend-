import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize auth state from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth ? JSON.parse(storedAuth) : false; // Default to false if not found
  });

  // Login function, set authenticated state in both state and localStorage
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true)); // Persist state
  };

  // Logout function, remove authentication state from both state and localStorage
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Clear state
  };

  // Seller registration function (behaves the same as login)
  const sellerRegister = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true)); // Persist state
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, sellerRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);
