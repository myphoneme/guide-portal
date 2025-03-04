import React, { useState ,useEffect } from "react";
import { Navbar, Nav, Container ,Dropdown} from "react-bootstrap";
import { BsSun, BsMoon } from "react-icons/bs";
import styles from "./Navbar.module.css"; // Import CSS module

import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import DynamicModalLoginForm from "../Blog-Login/LoginForm";

const BlogNavbar = () => {
  const [darkMode, setDarkMode] = useState(() => 
    localStorage.getItem("theme") === "dark");



  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  
 

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.body.classList.toggle("dark-mode", newMode);
  };


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);
  const[showLogin, setShowLogin] = useState(false);

  const handleShow = () => setShowLogin(true);
  const handleClose = () => setShowLogin(false);

  return (
    <Navbar expand="lg" className={styles.LandingContainer}>
      <Container>
        <Navbar.Brand href="#" className="fw-bold">Web-blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* <Nav.Link href="#" className={styles.NavLinks}>Write</Nav.Link> */}
            {/* <Nav.Link href="#" className={styles.NavLinks}>About</Nav.Link> */}
            {/* <Nav.Link to="/login" href="#" className={styles.NavLinks}>Login</Nav.Link> */}

            {/* Use NavLink for the About page navigation */}
            {/* <NavLink to="/about" className={styles.NavLinks} activeClassName="active">About</NavLink> */}

            <Nav.Link as={NavLink} to="/about" className="nav-link"> About</Nav.Link>

            <Nav.Link href="#" onClick={handleShow} className={styles.NavLinks}>Login</Nav.Link>
            <Nav.Link onClick={toggleTheme} className={styles.ThemeToggle}>
              {darkMode ? <BsMoon size={20} /> : <BsSun size={20} />}
            </Nav.Link>
            <Dropdown className="profile-dropdown">
            <Dropdown.Toggle as="div" id="profile-dropdown" className="profile-toggle">
              <img src="https://live.staticflickr.com/65535/52211184991_eee7c06a67.jpg" alt="Profile" className={styles.ProfileImage} />
              </Dropdown.Toggle>
             <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/Blog">Blogs</Dropdown.Item>
                <Dropdown.Item href="/profile">Categories</Dropdown.Item>
                <Dropdown.Item href="/profile">Comments</Dropdown.Item>
                <Dropdown.Item href="/settings">Settings</Dropdown.Item>
                <Dropdown.Item href="/logout" className="logout-item">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            
          </Nav>
        </Navbar.Collapse>

        <DynamicModalLoginForm handleShow={handleShow} handleClose={handleClose} showLogin={showLogin} />
      </Container>
    </Navbar>
  );
};

export default BlogNavbar;
