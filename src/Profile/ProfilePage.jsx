import React from 'react';
import styles from './ProfilePage.module.css';
import { Container, Row, Col, Nav } from 'react-bootstrap';
// import { ThreeDots } from 'react-bootstrap-icons';

const ProfilePage = () => {
  return (
    <Container className={styles.profilePage}>
      <Row>
        {/* Left Section */}
        <Col md={9} className={styles.leftSection}>
          <h1 className={styles.username}>Sheetal Thakur</h1>

          <Nav className={styles.navLinks} activeKey="home">
            <Nav.Item>
              Yours Blogs
            </Nav.Item>
            
          </Nav>

          <div className={styles.projectCard}>
            <h4 className={styles.projectTitle}>Template Project</h4>
            <div  className={styles.blogCon}>
                <p>
                Originally a premium product priced at $119+, made available for free in January 2025   Originally a premium product priced at $119+, made available for free in January   Originally a premium product priced at $119+, made available for free in January   Originally a premium product at $119+, made available for free in January!
                </p>
                <img
                src="https://thumbs.dreamstime.com/b/group-successful-business-people-meeting-office-sharing-their-ideas-multiethnic-273115987.jpg"
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
                src="https://img.freepik.com/premium-photo/computer-chip-with-green-sprout-using-generative-ai-technologies-organic-digital-background-was-generated_28914-5622.jpg"
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
                src="https://wallpaperaccess.com/full/1805473.jpg"
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
              src="https://thumbs.dreamstime.com/b/group-successful-business-people-meeting-office-sharing-their-ideas-multiethnic-273115987.jpg"
              alt="Profile"
              className={styles.profileImage}
            />
            <p className={styles.profileName}>SheeatlThakur</p>
            <a href="#edit" className={styles.editProfile}>Edit profile</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
