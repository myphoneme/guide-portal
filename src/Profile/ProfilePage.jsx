import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProfilePage.module.css";
import { Container, Row, Col, Nav } from "react-bootstrap";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "User",
    photo: "",
  });

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  return (
    <Container className={styles.profilePage}>
      <Row>
        {/* Left Section */}
        <Col md={9} className={styles.leftSection}>
          <h1 className={styles.username}>{profile.name}</h1>

          <Nav className={styles.navLinks} activeKey="home">
            <Nav.Item>Your Blogs</Nav.Item>
          </Nav>

          {/* Sample Blog Card (Repeat as needed) */}
          <div className={styles.projectCard}>
            <h4 className={styles.projectTitle}>Template Project</h4>
            <div className={styles.blogCon}>
              <p>
                Originally a premium product priced at $119+, made available for
                free in January 2025...Originally a premium product priced at $119+, made available for free in January 2025   Originally a premium product priced at $119+, made available for free i
              </p>
              <img
                src="https://thumbs.dreamstime.com/b/group-successful-business-people-meeting-office-sharing-their-ideas-multiethnic-273115987.jpg"
                alt="Blog"
                className={styles.blogImg}
              />
            </div>
            <span className={styles.date}>Feb 5</span>
          </div>
          <div className={styles.projectCard}>
            <h4 className={styles.projectTitle}>Template Project</h4>
            <div  className={styles.blogCon}>
                <p>
                Originally a premium product priced at $119+, made available for free in January 2025   Originally a premium product priced at $119+, made available for free in January   Originally a premium product priced at $119+, made available for free in January   Originally a premium product at $119+, made available for free in January!
                </p>
                <img
                src="https://leadchangegroup.com/wp-content/uploads/2019/03/DDS-LCG-March.jpg"
                alt="Profile"
                className={styles.blogImg}
                />
            </div>
            <span className={styles.date}>Feb 5</span>
            {/* <ThreeDots className={styles.icon} /> */}
          </div>

          <div className={styles.projectCard}>
            <h4 className={styles.projectTitle}>Template Project</h4>
            <div  className={styles.blogCon}>
                <p>
                Originally a premium product priced at $119+, made available for free in January 2025   Originally a premium product priced at $119+, made available for free in January   Originally a premium product priced at $119+, made available for free in January   Originally a premium product at $119+, made available for free in January!
                </p>
                <img
                src="https://leadchangegroup.com/wp-content/uploads/2019/03/DDS-LCG-March.jpg"
                alt="Profile"
                className={styles.blogImg}
                />
            </div>
            <span className={styles.date}>Feb 5</span>
            {/* <ThreeDots className={styles.icon} /> */}
          </div>
          <div className={styles.projectCard}>
            <h4 className={styles.projectTitle}>Template Project</h4>
            <div  className={styles.blogCon}>
                <p>
                Originally a premium product priced at $119+, made available for free in January 2025   Originally a premium product priced at $119+, made available for free in January   Originally a premium product priced at $119+, made available for free in January   Originally a premium product at $119+, made available for free in January!
                </p>
                <img
                src="https://leadchangegroup.com/wp-content/uploads/2019/03/DDS-LCG-March.jpg"
                alt="Profile"
                className={styles.blogImg}
                />
            </div>
            <span className={styles.date}>Feb 5</span>
            {/* <ThreeDots className={styles.icon} /> */}
          </div>

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
            <Link to="/edit-profile" className={styles.editProfile}>
              Edit profile
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;