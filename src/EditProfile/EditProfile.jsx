import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./EditProfile.module.css";

export default function EditProfile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    photo: ""
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log("Profile updated:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div className={styles.fullScreenContainer}>
      <h2 className={styles.profileTitle}>Edit Profile</h2>
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
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            name="password" 
            placeholder="Enter password" 
            value={profile.password} 
            onChange={handleChange} 
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit} className={styles.saveButton}>Save</Button>
      </Form>
    </div>
  );
}
