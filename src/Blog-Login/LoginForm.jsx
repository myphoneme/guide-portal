import React, { useState } from "react";
import { Modal, Button, Form, Card, Container, Spinner, Alert } from "react-bootstrap";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DynamicModalLoginForm = ({showLogin , handleClose , handleShow}) => {
  // const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();



  // Handlers for Login Modal
  // const handleLoginClose = () => setShowLoginModal(false);
  // const handleLoginShow = () => setShowLoginModal(true);

  // Handlers for Signup Modal
  const handleSignupClose = () => setShowSignupModal(false);
  const handleSignupShow = () => setShowSignupModal(true);

  // Handle Login Submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email && password) {
        navigate("/home");
        handleClose();
      } else {
        setError("Please enter both email and password.");
      }
    }, 1500);
  };

  // Handle Signup Submission
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (signupName && signupEmail && signupPassword) {
        handleSignupClose();
        handleShow();
      } else {
        setError("Please fill in all the fields.");
      }
    }, 1500);
  };

  return (
    <>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">We BLOG - Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleLoginSubmit}>
                  <Form.Group className="mb-3">
                    <div className="input-group">
                      <span className="input-group-text bg-light">
                        <FaEnvelope />
                      </span>
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </Form.Group>

                  <div className="text-end mb-3">
                    <a href="/" className="text-decoration-none text-primary">
                      Forgot Password?
                    </a>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 mb-2"
                    disabled={loading}
                  >
                    {loading ? <Spinner animation="border" size="sm" /> : "Login"}
                  </Button>

                  <Button
                    variant="outline-primary"
                    className="w-100"
                    onClick={() => {
                      handleClose();
                      handleSignupShow();
                    }}
                  >
                    Sign up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </Modal.Body>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignupModal} onHide={handleSignupClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary">We BLOG - Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
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

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100"
                    disabled={loading}
                  >
                    {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
                  </Button>
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