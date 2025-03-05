import { useState } from "react";
import { Card } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import styles from "./EditProfile.module.css";

export default function EditProfile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Profile updated:", profile);
    alert("Profile updated successfully!");
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Card.Body className={styles.content}>
          <h2 className={styles.title}>Edit Profile</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                placeholder="Enter name" 
                value={profile.name} 
                onChange={handleChange} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                placeholder="Enter email" 
                value={profile.email} 
                onChange={handleChange} 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                name="password" 
                placeholder="Enter password" 
                value={profile.password} 
                onChange={handleChange} 
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit} className={styles.button}>Save</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
