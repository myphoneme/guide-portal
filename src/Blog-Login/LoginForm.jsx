import React, { useState } from "react";
import { Modal, Button, Form, Card, Container, Spinner, Alert } from "react-bootstrap";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";
import { API_URL} from  "../config";

const DynamicModalLoginForm = ({ showLogin, handleClose, handleShow }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
 
  //ronik
  const[loginData , setLoginData] = useState({  
    
    email:"",
    password:""

  });

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

// signup functionality 
  // 
  const handleLoginSubmit = async (e) => {
  e.preventDefault();
    try {
      const response = await fetch(`${API_URL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: loginData.email,
          password: loginData.password,
        }),
      })

        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Response Data:", data);
          if (data.access_token) {
            localStorage.setItem("accessToken", data.access_token);

            if (data.user && data.user.id) {
              localStorage.setItem("userId", data.user.id);  // Store user ID   ronik 
            }
            window.location.href = "/home";
            console.log("user id of the user is : ",data.user.id);//ronik
          } else {
            console.error("Token not found in response");
          }
        })
        .catch((error) => {
          console.error("Error during fetch:", error);
        });
    } catch (e) {
      console.log("Something Went Wrong " + e);
    }

    console.log(loginData);
  };
  // Handlers for Signup Modal
  const handleSignupClose = () => setShowSignupModal(false);
  const handleSignupShow = () => setShowSignupModal(true);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    try {
      const response = await fetch("http://fastapi.phoneme.in/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: signupName,      
          email: signupEmail,    
          password: signupPassword, 
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Response Data:", data);
  
      if (data.id) {  
        localStorage.setItem("userProfile", JSON.stringify({
          name: signupName,
          email: signupEmail,
          id: data.id,  
          profile_picture: data.profile_picture || "",
        }));
  
        handleSignupClose();
        handleShow(); 
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title >Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLoginSubmit} >
                  <Form.Group className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <FaEnvelope />
                      </span>
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        value={loginData.email}
                        onChange={handleInputChange}
                        name ="email"
                        required
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <FaLock />
                      </span>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleInputChange}
                        name ="password"
                        required
                      />
                    </div>
                  </Form.Group>

                  <Button type="submit" className={styles.loginBtn} variant="success" disabled={loading}>{loading ? <Spinner animation="border" size="sm" /> : "Login"}</Button>

                  <button  className={styles.SignBtn} onClick={() => { handleClose(); handleSignupShow(); }} >Create an Account</button>
                  
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </Modal.Body>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignupModal} onHide={handleSignupClose} centered>
        <Modal.Header closeButton>
          <Modal.Title >Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSignupSubmit}>
                  <Form.Group className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <FaUser />
                      </span>
                      <Form.Control
                        type="text"
                        placeholder="Full Name"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <FaEnvelope />
                      </span>
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <FaLock />
                      </span>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        required
                      />
                    </div>
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100" disabled={loading}> {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"} </Button>

                </Form>
              </Card.Body>
            </Card>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DynamicModalLoginForm;