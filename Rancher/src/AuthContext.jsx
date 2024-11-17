import { createContext, useContext, useState, useEffect } from 'react';

// Create the context for authentication
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = (e) => {
  const { children } = e;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  // Check login state when component mounts
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const savedUserName = localStorage.getItem('userName');
    const savedEmail = localStorage.getItem('email');

    // Set login state based on saved data
    if (token) setIsLoggedIn(true);
    if (savedUserName) setUserName(savedUserName);
    if (savedEmail) setEmail(savedEmail);
  }, []);

  // Login function: saves token, username, and email in localStorage
  const login = (token, username, email) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('userName', username);
    localStorage.setItem('email', email);
    console.log(username);
    console.log(email);

    setIsLoggedIn(true);
    setUserName(username);
    setEmail(email);
  };

  // Logout function: removes token, username, and email from localStorage
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');

    setIsLoggedIn(false);
    setUserName('');
    setEmail('');
  };

  // Providing state and functions to children components
  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using AuthContext
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);