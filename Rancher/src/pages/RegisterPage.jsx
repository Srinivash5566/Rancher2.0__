import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../AuthContext";
import "./stylesheet/LoginPage.css";
import styles from "./stylesheet/component.module.css";
import { GoArrowLeft } from "react-icons/go";

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCpassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== Cpassword) {
      return alert("Passwords do not match.");
    }
    try {
      const response = await api.post("/auth/register", {
        userName,
        email,
        password,
        otp,
      });
      const { token, user } = response.data;
      login(token, user.userName, user.email);
      navigate(-1);
    } catch (error) {
      alert(
        "Registration error:",
        error.response ? error.response.data : error.message,
      );
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/sendOtp", { email });
      alert(response.data.message || "OTP sent successfully");
      setOtpSent(true);
      setTimer(30);
      startTimer();
    } catch (err) {
      alert(
        "Error sending OTP:",
        err.response ? err.response.data : err.message,
      );
    }
  };

  const startTimer = () => {
    let countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const handleResendOtp = () => {
    if (timer === 0) {
      setOtpSent(false);
    }
  };

  return (
    <main className="login-page" aria-label="Registration Page">
      <section className="login-container" aria-labelledby="register-header">
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
          <h2 id="register-header">Sign Up</h2>
        </header>

        {!otpSent && (
          <form onSubmit={handleSendOtp}>
            <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
              <legend style={{ display: "none" }}>Account Details</legend>

              <label htmlFor="register-username">Username</label>
              <input
                id="register-username"
                type="text"
                placeholder="Choose a username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                aria-required="true"
              />

              <label htmlFor="register-email">Email</label>
              <input
                id="register-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
              />

              <button type="submit" className="login-btn">
                Get OTP
              </button>
            </fieldset>
          </form>
        )}

        {otpSent && (
          <form onSubmit={handleRegister}>
            <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
              <legend style={{ display: "none" }}>Complete Registration</legend>

              <label htmlFor="register-password">Password</label>
              <input
                id="register-password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-required="true"
              />

              <label htmlFor="register-cpassword">Confirm Password</label>
              <input
                id="register-cpassword"
                type="password"
                placeholder="Repeat your password"
                value={Cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                required
                aria-required="true"
              />

              <label htmlFor="register-otp">OTP sent to {email}</label>
              <input
                id="register-otp"
                type="text"
                placeholder="Enter 6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                aria-required="true"
              />

              <div
                style={{
                  marginTop: "10px",
                  fontSize: "13px",
                  color: "var(--text_muted)",
                }}
              >
                {timer > 0 ? (
                  <p>Resend OTP in {timer}s</p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--accent_primary)",
                      cursor: "pointer",
                      padding: 0,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    Resend OTP
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="login-btn"
                style={{ marginTop: "22px" }}
              >
                Create Account
              </button>
            </fieldset>
          </form>
        )}
      </section>
    </main>
  );
};

export default RegisterPage;
