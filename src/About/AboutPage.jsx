import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./AboutPage.module.css";
import { FaCheck } from "react-icons/fa";

function AboutPage() {
  return (
    <>

     <Container className={styles.ceoSection}>
      <Row className="align-items-center">
        {/* Text Content */}
        <Col md={6}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.description}>
          Founded by IITian's,with the objective of making the technologies friendly to human beings . The company’s main objective is to reach masses and especially in the developing nations where internet and literacy are the major challenge.
          </p>
          <ul className={styles.list}>
            <li><FaCheck className={styles.icon} /> Innovate … Not just execute but do something new which creates some standard in the industry.</li>
            <li><FaCheck className={styles.icon} /> Don’t do business, just to make short term gains, but do business so that overall industry gains.</li>
            <li><FaCheck className={styles.icon} /> Integrity is the most precious value and always do things which is right and only right. </li>
            <li><FaCheck className={styles.icon} /> Know the Facts. Good data helps you make the right decisions. Know before you decide.</li>
          </ul>
          <hr />
          {/* Quote */}
          <blockquote className={styles.quote}>
            "For initial years , main thrust is over the Voice as it the most widely used channel over the phone and then over a period of time these technologies will make roads even into the Mobile Apps and embedded devices."
          </blockquote>
        </Col>

        {/* Image Section */}
        <Col md={6} className="text-center">
          <div className={styles.imageWrapper}>
            <img
              src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/tech-news-podcast-ceo-img.png" 
              alt="CEO"
              className={styles.ceoImage}
            />
          </div>
        </Col>
      </Row>
    </Container>

      {/* Featured Section */}
      <div className={styles.header}>
          <h2>What we do offer</h2>
          <p>Services</p>
      </div>
      <Container className={styles.featuredContainer}>
        <Row className={styles.imageRow}>
          <Col md={4} className={styles.imageCol}>
            <div className="icon-box" >
              <div className="icon m-auto"><i className="fa-solid fa-computer"></i></div>
              <h4 className="title pt-3">Custom Software Development</h4>
              <p className="description">From conceptualization to deployment, we build custom software that drives efficiency, scalability, and growth.</p>
              <Image
              src="https://getwallpapers.com/wallpaper/full/2/d/f/490230.jpg"alt="Blog Image" className={styles.image}  />
            </div>
           
          </Col>
          <Col md={4} className={styles.imageCol}>
            <h5>Web Development</h5>
            <p>We create stunning, responsive websites that offer a seamless user experience across all devices.</p>
            <Image
              src="https://wallpapercave.com/wp/cb3jaMQ.jpg" alt="Technology Image" className={styles.image}/>
          </Col>
          <Col md={4} className={styles.imageCol}>
           <h5>Data Centre Infra Solutions</h5>
            <p>Customized High Availability Compute with NVME Storage For running Machine Learning and AI Solutions.</p>
            <Image
              src="https://getwallpapers.com/wallpaper/full/2/d/f/490230.jpg" alt="Global Tech Image" className={styles.image}/>
          </Col>
        </Row>
      </Container>

      <div className={styles.aboutDetail}> 
      </div>
      {/* Blog Section */}
      <Container className={styles.blogContainer}>
        <Row className="align-items-center">
          <Col md={5}>
            <Image
              src="https://www.brainpulse.com/wp-content/uploads/2020/08/unnamed.jpg"
              alt="Blog Planning"
              fluid
              className={styles.blogImage}
            />
          </Col>
          <Col md={7} className={styles.blogText}>
            <h4>Cloud Computing Services</h4>
            <p>
            Our digital team comprises of people with over 15 years of experience in telecom and internet domain and have been thoroughly involved with the evolution of consumer engagements over various mobile channels as sms, voice, mobile internet, 3G etc. Thereby our team is equiped enough to form the Digital strategy with clients to acheive three overall objectives.</p>
          </Col>
        </Row>
      </Container>
       {/* Blog Section */}
       <Container className={styles.blogContainer}>
        <Row className="align-items-center">
          
          <Col md={7} className={styles.blogText}>
            <h4>Digital Marketing Services</h4>
            <p>
            We help marketers unlock new revenue by arming them with the technology and guidance they need to succeed in Digital marketing & SEO (Search Engine Optimization) Now even in the Digital space we enable our brands to interact with their consumers in more meaningful way thereby establishing long term engagements
            </p>
          </Col>
          <Col md={5}>
            <Image
              src="http://getwallpapers.com/wallpaper/full/3/3/4/490956.jpg"
              alt="Blog Planning"
              fluid
              className={styles.blogImage}
            />
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default AboutPage;
