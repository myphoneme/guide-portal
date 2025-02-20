import React from 'react';
import styles from './Blog.module.css';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FaLightbulb } from "react-icons/fa";
import { MdVerified } from "react-icons/md"; 


function BlogLanding() {
  return (
    <div>
        <div className={styles.LandingContainer}>
        <Container className="text-center"> 
            <Row>
                <h2 className={styles.welcomeText}>
                    Welcome to Our Tech Blog! Dive into the world of innovation, where we explore the latest trends in technology, software development, and digital transformation.
                </h2>
                <Col md={6} className={styles.contentMid}>
                <Form className={styles.inputContainer}>
                    <Form.Control type="text" placeholder="" className={styles.emailInput} />
                </Form>
                <Button className={styles.getStartedBtn}>Get Started</Button>
                {/* <button className={styles.btnTornado}>Get Started</button> */}
                </Col>
            </Row>
        </Container>
        </div>

    <Container className={styles.blogContainer}>
      <Row>
        <Col md={6} className={styles.textSection}>
          <h2 className={styles.heading}>There are many variations of passages of Lorem Ipsum available,</h2>
          <p className={styles.description}>
            The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          {/* <Button className={styles.learnMoreBtn}>Learn More</Button> */}
          <button className={styles.btnTextReveal}>Text Reveal</button>

          <Row className={styles.featureIcons}>

            <Col className={styles.iconBox}>
            <MdVerified size={50} />
              <h5>Lorem Ipsum</h5>
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
            </Col>
            <Col className={styles.iconBox}>
            <MdVerified size={50} />
              <h5>Lorem Ipsum</h5>
              <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
            </Col>
          </Row>
        </Col>

        <Col md={6} className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <div className={styles.bgBack}>
               <img src="https://wallpapercave.com/wp/wp8930684.jpg" alt="Workspace" className={styles.mainImage} />
               <div className={styles.imageBg}></div>
            </div>
            <div className={styles.overlayBox}>
              <h4>Lorem Ipsum</h4>
              <p>The majority have suffered alteration in some form, humour, or randomised words which don't look even believable majority have suffered alteration in some form, humour, or randomised words which don't look even believable.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

    </div>
    // -------//
    

  );
}

export default BlogLanding;
