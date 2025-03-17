import React, { useState ,useEffect, useContext } from "react";
import { Navbar, Nav, Container ,Dropdown , Button} from "react-bootstrap";
import { IoMoon } from "react-icons/io5";
import { HiSun } from "react-icons/hi";
import styles from "./Navbar.module.css"; // Import CSS module
import { ThemeContext } from '../Context/ThemeContext';

import { NavLink , useNavigate } from "react-router-dom"; // Use NavLink instead of Link
import DynamicModalLoginForm from "../Blog-Login/LoginForm";

const BlogNavbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const[showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Theme:", theme);
  }, [theme]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
    navigate("/"); 
  };
           

  const handleShow = () => setShowLogin(true);
  const handleClose = () => setShowLogin(false);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Navbar expand="lg" className={`${styles.LandingContainer} ${theme === "dark" ? "dark" : ""}`}>

      <Container>
        <Navbar.Brand href="#" className="fw-bold">Web-blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={NavLink} to="/about" className="nav-link"> About</Nav.Link>
            {/* {!isLoggedIn ? ( */}
            <Button variant="outline-primary" onClick={handleShow} className={styles.NavLinks}>
            Login
          </Button>
                {/* ) : ( */}
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
                {/* <Dropdown.Item href="/logout" className="logout-item">Logout</Dropdown.Item> */}
                <Dropdown.Item onClick={handleLogout} className="logout-item">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
                {/* )} */}
          <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
              {theme === "light" ? (
                <IoMoon size={30} className="text-dark" />
              ) : (
                <HiSun size={30} className="text-white" />
              )}
            </div>
          </Nav>
        </Navbar.Collapse>

        <DynamicModalLoginForm handleShow={handleShow} handleClose={handleClose} showLogin={showLogin} />
      </Container>
    </Navbar>
  );
};

export default BlogNavbar;
