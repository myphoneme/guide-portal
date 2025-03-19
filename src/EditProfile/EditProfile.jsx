import { useState, useEffect } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./EditProfile.module.css";

export default function EditProfile({ show, handleClose, userId }) {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
    if (show && userId) {
      try {
        const response = await fetch(`http://fastapi.phoneme.in/users/${userId}`);
        const data = await response.json();

        if (response.ok) {
          setProfile({
            name: data.name,
            email: data.email,
            password: "", 
          });
        } else {
          setError("Failed to fetch user details.");
        }
      } catch (err) {
        setError("An error occurred while fetching user details.");
      }
    }
  };

  fetchUserData();
}, [show, userId]);

const handleChange = (e) => {
  setProfile({ ...profile, [e.target.name]: e.target.value });
};

const handleSubmit = async () => {
  setError("");
  setSuccess("");

  if (!profile.password) {
    setError("Password is required.");
    return;
  }

  const updatedProfile = {
    name: profile.name,
    email: profile.email,
    password: profile.password,
  };

  try {
    const response = await fetch(`http://fastapi.phoneme.in/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    });

    const data = await response.json();

    if (response.ok) {
      setSuccess("Profile updated successfully!");
      localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
      setTimeout(() => {
      handleClose(); 
      navigate("/home"); 
    },5000);
   } else {
      setError(data.message || "Failed to update profile.");
    }
  } catch (err) {
    setError("An error occurred. Please try again.");
  }
};

  return (
    <Modal show={show} onHide={handleClose} centered className={styles.propmodal}> 
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        
        {/* <div className={styles.photoContainer}>
          {profile.photo ? (
            <img src={profile.photo} alt="Profile" className={styles.profilePhoto} />
          ) : (
            <div className={styles.photoPlaceholder}>No Photo</div>
          )}
          <Form.Group className={styles.formGroup}>
            <Form.Label>Upload Photo</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={handlePhotoChange} />
          </Form.Group>
        </div> */}
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
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter new password" 
              value={profile.password} 
              onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSubmit} className={styles.saveButton}>
            Save Profile
          </Button>

        </Form>
      </Modal.Body>
    </Modal>
  );
}
