import { useState, useEffect } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./EditProfile.module.css";

export default function EditProfile({ show, handleClose }) {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    photo: ""
  });

  const [oldPassword, setOldPassword] = useState(""); // Store old password input
  const [newPassword, setNewPassword] = useState(""); // Store new password input
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();


  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => {
          const updatedProfile = { ...prev, photo: reader.result };
          localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
          return updatedProfile;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChange = () => {
    setError("");
    setSuccess("");

    if (!oldPassword || !newPassword) {
      setError("Both fields are required.");
      return;
    }

    if (oldPassword !== profile.password) {
      setError("Old password is incorrect.");
      return;
    }

    const updatedProfile = { ...profile, password: newPassword };
    setProfile(updatedProfile);
    localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
    
    setSuccess("Password updated successfully!");
    setOldPassword("");
    setNewPassword("");
  };

  const handleSubmit = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Profile updated successfully!");
    handleClose(); // Close the modal
    navigate("/");
  };

  return (
    <Modal show={show} onHide={handleClose} centered className={styles.propmodal}> 
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        
        <div className={styles.photoContainer}>
          {profile.photo ? (
            <img src={profile.photo} alt="Profile" className={styles.profilePhoto} />
          ) : (
            <div className={styles.photoPlaceholder}>No Photo</div>
          )}
          <Form.Group className={styles.formGroup}>
            <Form.Label>Upload Photo</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handlePhotoChange} />
          </Form.Group>
        </div>
        <Form className={styles.fullScreenForm}>
          <Form.Group className={styles.formGroup}>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              placeholder="Enter name" 
              value={profile.name} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className={styles.formGroup}>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              placeholder="Enter email" 
              value={profile.email} 
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group className={styles.formGroup}>
            <Form.Label>Old Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter old password" 
              value={oldPassword} 
              onChange={(e) => setOldPassword(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className={styles.formGroup}>
            <Form.Label>New Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter new password" 
              value={newPassword} 
              onChange={(e) => setNewPassword(e.target.value)} 
            />
          </Form.Group>

          <Button variant="success" onClick={handlePasswordChange} className={styles.changeButton}>
            Change Password
          </Button>
          <Button variant="primary" onClick={handleSubmit} className={styles.saveButton}>
            Save Profile
          </Button>

        </Form>
      </Modal.Body>
    </Modal>
  );
}
