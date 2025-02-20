import React from "react";
import styles from "./SingupForm.module.css"; // Importing CSS module

const SignupForm = () => {
  return (
    <div className={styles.mainWrapper}>
    <div className={styles.signupContainer}>
      <h2 className={styles.heading}>Sign up</h2>
      <form className={styles.signupForm}>
        <div className={styles.inputGroup}>
          <span className={styles.icon}>👤</span>
          <input type="text" placeholder="User Name" className={styles.inputField} />
        </div> 

        <div className={styles.inputGroup}>
          <span className={styles.icon}>✉️</span>
          <input type="email" placeholder="Email" className={styles.inputField} />
        </div>

        <div className={styles.inputGroup}>
          <span className={styles.icon}>🔒</span>
          <input type="password" placeholder="Password" className={styles.inputField} />
        </div>

        <div className={styles.inputGroup}>
          <span className={styles.icon}>🔒</span>
          <input type="password" placeholder="Confirm Password" className={styles.inputField} />
        </div>

        <button type="submit" className={styles.signupButton}>Sign up</button>
      </form>
    </div>
    </div>
  );
};

export default SignupForm;
