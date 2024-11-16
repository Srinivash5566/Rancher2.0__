// src/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  // Check login state on load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const savedUserName = localStorage.getItem('userName');
    const savedEmail = localStorage.getItem('email');
    if (token) {
      setIsLoggedIn(true); // If token exists, set isLoggedIn to true
    }
    if (savedUserName) {
      setUserName(savedUserName); // Set saved username
    }
    if (savedEmail) {
      setEmail(savedEmail); // Set saved email
    }
  }, []);

  // Login function to save token, username, and email
  const login = (token, username, email) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userName', username);
    localStorage.setItem('email', email);
    setIsLoggedIn(true);
    setUserName(username);
    setEmail(email);
  };

  // Logout function to clear token, username, and email
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    setIsLoggedIn(false);
    setUserName('');
    setEmail('');
  };

  // Return the provider with values
  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
