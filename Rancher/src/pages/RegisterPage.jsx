import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useAuth } from '../AuthContext';
import './stylesheet/LoginPage.css';
import styles from './stylesheet/component.module.css';
import { GoArrowLeft } from 'react-icons/go';


const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/register', { userName, email, password });
      const { token, user } = response.data;

      login(token, user.userName, user.email);
      navigate(-1);
    } catch (error) {
      alert('Registration error:', error.response ? error.response.data : error.message);
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
          <h2>Sign Up</h2>
        </div>
        <form onSubmit={handleRegister}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
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
          <button type="submit" className="login-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
