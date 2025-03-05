import React, { useState ,useEffect, useContext } from "react";
import { Navbar, Nav, Container ,Dropdown} from "react-bootstrap";
import { IoMoon } from "react-icons/io5";
import { HiSun } from "react-icons/hi";
import styles from "./Navbar.module.css"; // Import CSS module
import { ThemeContext } from '../Context/ThemeContext';

import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import DynamicModalLoginForm from "../Blog-Login/LoginForm";

const BlogNavbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme:", theme); // Logs every time theme changes
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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
           
            {/* Theme Toggle Button */}
            <div>
              {theme === "light" ? (
                <IoMoon
                  size={30}
                  className="bg-light text-dark p-2 rounded-circle cursor-pointer"
                  onClick={toggleTheme}
                />
              ) : (
                <HiSun
                  size={30}
                  className="bg-dark text-white p-2 rounded-circle cursor-pointer"
                  onClick={toggleTheme}
                />
              )}
            </div>

            <Dropdown className="profile-dropdown">
              <Dropdown.Toggle as="div" id="profile-dropdown"    className="profile-toggle">
                <img src="https://live.staticflickr.com/65535/52211184991_eee7c06a67.jpg" alt="Profile" className={styles.ProfileImage} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                <Dropdown.Item href="/profile">Blogs</Dropdown.Item>
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
