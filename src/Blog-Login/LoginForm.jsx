import React from "react";
import styles from "./LoginForm.module.css"; 
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (

    <div className={styles.background}>
    <Container>
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className={styles.card}>
            <Card.Body>
              <h3 className={styles.title}>We BLOG</h3>
              <Form>
                <Form.Group className={styles.formGroup}>
                  <div className={styles.inputBox}>
                    <FaUser className={styles.icon} />
                    <Form.Control type="text" placeholder="User Name" className={styles.input} />
                  </div>
                </Form.Group>

                <Form.Group className={styles.formGroup}>
                  <div className={styles.inputBox}>
                    <FaEnvelope className={styles.icon} />
                    <Form.Control type="email" placeholder="Email Address" className={styles.input} />
                  </div>
                </Form.Group>

                <Form.Group className={styles.formGroup}>
                  <div className={styles.inputBox}>
                    <FaLock className={styles.icon} />
                    <Form.Control type="password" placeholder="Password" className={styles.input} />
                  </div>
                </Form.Group>

                <div className={styles.linkContainer}>
                  <a href="/" className={styles.link}>Forgot Password?</a>
                </div>

                <Link to="/home"><Button className={styles.button}> Login</Button></Link>

                <Link to="/signup" ><Button  className={styles.buttonAlt}> Sign up </Button></Link>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default LoginForm;