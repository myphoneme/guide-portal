import React, { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import styles from "./ProfilePage.module.css";
import EditProfile from "../EditProfile/EditProfile";
import { Link } from 'react-router-dom';
import CreateBlog from "../CreateBlog/CreateBlog";


const ProfilePage = () => {
  
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({ name: "User", photo: "" ,email:""});

  useEffect(() => {
    //Ronik
        const savedUserId = localStorage.getItem("userId");
        if (savedUserId) {
          setUserId(savedUserId); 
        }
    
    
      }, []);
    
      useEffect(() => {
        if (userId) {
          fetchUserProfile(userId); 
          fetchPosts(userId);
        }
      }, [userId]);
    
      const fetchUserProfile = (userId) => {
        fetch(`http://fastapi.phoneme.in/users/${userId}`)
          .then(response => response.json())
          .then(data => {
            setUser({ name: data.name, photo: data.photo , email: data.email }); 
          })
          .catch(error => {
            console.error("Error fetching user profile:", error);
          });
      };
    

  const handleShow = () => setShowModal(true); // Show modal
  const handleClose = () => setShowModal(false); // Close modal


  useEffect(() => {
    if(userId){
      fetchPosts(userId);
    }
}, [userId]);

const fetchPosts = (userId) => {
    fetch(`http://fastapi.phoneme.in/get_posts_by_user_id/${userId}`)
        .then(response => response.json())
        .then(data => {
            const userPosts = data.filter(post => post.created_by === parseInt(userId));
            setPosts(userPosts);
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
          <h1 className={styles.username}>{user.name}</h1>

          <Nav className={styles.navLinks} activeKey="home">
            <Nav.Item>Your Blogs</Nav.Item>
          </Nav>

          {/* Sample Blog Card (Dummy Data) */}
         { posts.length > 0 ? (
          posts.map(post => (
           <div className={styles.projectCard} key = {post.id}>
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
          ))
        ):(
          <p>No post Found</p>
        )}
        </Col>
        {/* Right Section */}
        <Col md={3} className={styles.rightSection}>
          <div className={styles.profileInfo}>
            <img
              src={user.photo || "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"}
              alt="Profile"
              className={styles.profileImage}
            />
            <p className={styles.profileName}>{user.name}</p>
            <span>{user.email}</span>
            <Button  onClick={handleShow} className={styles.editbutton}>
              Edit Profile
            </Button>
          </div>
        </Col>
      </Row>
      {/* Edit Profile Modal */}
      <EditProfile show={showModal} handleClose={handleClose} userId= {userId}  user ={user}/>
      
    </Container>
    
  );
};

export default ProfilePage;
