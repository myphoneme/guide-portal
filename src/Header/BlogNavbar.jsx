import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BsSun, BsMoon } from "react-icons/bs";
import styles from "./Navbar.module.css"; // Import CSS module
import { Link } from "react-router-dom";

const BlogNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Navbar expand="lg" className={styles.LandingContainer}>
      <Container>
        <Navbar.Brand href="#" className="fw-bold">Web-blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* <Nav.Link href="#" className={styles.NavLinks}>Write</Nav.Link> */}
            <Nav.Link href="#" className={styles.NavLinks}>About</Nav.Link>
            {/* <Nav.Link to="/login" href="#" className={styles.NavLinks}>Login</Nav.Link> */}
            <Link to="/login">login</Link>
            <Nav.Link onClick={toggleTheme} className={styles.ThemeToggle}>
              {darkMode ? <BsMoon size={20} /> : <BsSun size={20} />}
            </Nav.Link>
            <Nav.Link href="#">
              <img src="https://live.staticflickr.com/65535/52211184991_eee7c06a67.jpg"alt="Profile" className={styles.ProfileImage}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BlogNavbar;
