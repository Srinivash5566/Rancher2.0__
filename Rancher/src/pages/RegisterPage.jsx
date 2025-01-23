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
  const [otpSent, setOtpSent] = useState(false); // Track OTP sent status
  const [timer, setTimer] = useState(30); // 30 seconds countdown
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
      navigate(-1); // Go back after successful registration
    } catch (error) {
      alert(
        "Registration error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/sendOtp", { email });
      alert(response.data.message || "OTP sent successfully");
      setOtpSent(true);
      setTimer(30); // Reset timer after sending OTP
      startTimer(); // Start countdown
    } catch (err) {
      alert(
        "Error sending OTP:",
        err.response ? err.response.data : err.message
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
      setOtpSent(false); // Allow OTP resend after timer ends
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="backButtonContainer">
          <GoArrowLeft
            className={styles.backButton}
            onClick={() => navigate(-1)}
          />
          <h2>Sign Up</h2>
        </div>

        {/* First form - Email and Username + OTP Request */}
        {!otpSent && (
          <form onSubmit={handleSendOtp}>
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
            <button type="submit" className="login-btn">
              Get OTP
            </button>
          </form>
        )}

        {/* Second form - Password, Confirm Password and OTP Entry */}
        {otpSent && (
          <form onSubmit={handleRegister}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={Cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              required
            />
            <label>Enter OTP sent to {email}</label>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <div>
              {timer > 0 ? (
                <p>Resend OTP in {timer} seconds</p>
              ) : (
                <p
                  onClick={handleResendOtp}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  Resend OTP
                </p>
              )}
            </div>
            <button type="submit" className="login-btn">
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
