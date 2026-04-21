import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { GoArrowLeft } from "react-icons/go";
import { useAuth } from "../AuthContext";
import styles from "./stylesheet/component.module.css";
import "./stylesheet/LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token, user } = response.data;
      const { userName, email: userEmail } = user;
      login(token, userName, userEmail);
      navigate(-1);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ?? "An unknown error occurred";
      alert(`Login error: ${errorMessage}`);
    }
  };

  return (
    <main className="login-page" aria-label="Login Page">
      <section className="login-container" aria-labelledby="login-header">
        <header className="backButtonContainer">
          <GoArrowLeft
            className={styles.backButton}
            onClick={() => navigate(-1)}
            aria-label="Go back"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate(-1);
            }}
          />
          <h2 id="login-header">Login</h2>
        </header>

        <form onSubmit={handleLogin}>
          <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
            <legend style={{ display: "none" }}>Login Credentials</legend>

            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
            />

            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-required="true"
            />

            <button type="submit" className="login-btn">
              Log In
            </button>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;
