// src/pages/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { GoArrowLeft } from 'react-icons/go';
import { useAuth } from '../AuthContext';
import styles from './stylesheet/component.module.css';
import './stylesheet/LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/login', { email, password });
      const { token, user } = response.data;
      const { userName, email: userEmail } = user;

      login(token, userName, userEmail);

      navigate(-1);
    } catch (error) {
      // Extract and display the error message from the response, if it exists
      const errorMessage = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : 'An unknown error occurred';
      alert(`Login error: ${errorMessage}`);
    }
  };



  return (
    <div className="login-page">
      <div className="login-container">
        <div className="backButtonContainer">
          <GoArrowLeft
            className={`${styles.backButton}`}
            onClick={() => navigate(-1)}
          />
          <h2>Login</h2>
        </div>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-btn">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
