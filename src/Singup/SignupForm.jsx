import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./SignupForm.module.css";

const SignupForm = ({ handleClose, handleShowLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validate fields
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Save user data in localStorage
    const newUser = { name, email, password };
    localStorage.setItem("userProfile", JSON.stringify(newUser));

    alert("Signup successful! Please log in.");
    handleClose();
    handleShowLogin(); // Open the login modal
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.signupContainer}>
        <h2 className={styles.heading}>Sign Up</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form className={styles.signupForm} onSubmit={handleSignupSubmit}>
          <div className={styles.inputGroup}>
            <span className={styles.icon}><FaUser /></span>
            <input
              type="text"
              placeholder="User Name"
              className={styles.inputField}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.icon}><FaEnvelope /></span>
            <input
              type="email"
              placeholder="Email"
              className={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.icon}><FaLock /></span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.icon}><FaLock /></span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className={styles.inputField}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.signupButton}>Sign Up</button>
        </form>

        <p className={styles.switchText}>
          Already have an account?{" "}
          <span className={styles.switchLink} onClick={() => { handleClose(); handleShowLogin(); }}>
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;