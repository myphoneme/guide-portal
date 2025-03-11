import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import styles from "./ProfilePage.module.css";
import EditProfile from "../EditProfile/EditProfile";
import { Link } from 'react-router-dom';


const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "User",
    photo: "",
  });
  const [showModal, setShowModal] = useState(false); 
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleShow = () => setShowModal(true); 
  const handleClose = () => setShowModal(false); // Close modal


  useEffect(() => {
    fetchPosts();
}, []);

const fetchPosts = () => {
    fetch("http://fastapi.phoneme.in/posts")
        .then(response => response.json())
        .then(data => {
            setPosts(data);
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
        });
};

  return (
    <Container className={styles.profilePage}>
      <Row>
        {/* Left Section */}
        <Col md={9} className={styles.leftSection}>
          <h1 className={styles.username}>{profile.name}</h1>

          <Nav className={styles.navLinks} activeKey="home">
            <Nav.Item>Your Blogs</Nav.Item>
          </Nav>

          {/* Sample Blog Card (Dummy Data) */}
         { posts.map(post => (
           <div className={styles.projectCard}>
            <h4 className={styles.projectTitle}>{post.title}</h4>
            <div className={styles.blogCon}>
              <p>
                {post.post.substring(0, 500)}...
              </p>
              <img
                src={`http://fastapi.phoneme.in/${post.image}`}
                alt="Blog"
                className={styles.blogImg}
              />
            </div>
            <div className= {styles.Readcont}>
            <span className={styles.date}>Created on : {post.created_at.split('T')[0]}</span>

            <Link to={`/blog/${post.id}`} className= {styles.Readmorecon}>
            Read More
            </Link>
            </div>
          </div>
          ))}
        </Col>
        {/* Right Section */}
        <Col md={3} className={styles.rightSection}>
          <div className={styles.profileInfo}>
            <img
              src={profile.photo || "https://via.placeholder.com/150"}
              alt="Profile"
              className={styles.profileImage}
            />
            <p className={styles.profileName}>{profile.name}</p>
            <span>ravi@gmail.com</span>
            <Button  onClick={handleShow} className={styles.editbutton}>
              Edit Profile
            </Button>
          </div>
        </Col>
      </Row>
      {/* Edit Profile Modal */}
      <EditProfile show={showModal} handleClose={handleClose} />
    </Container>
    
  );
};

export default ProfilePage;
