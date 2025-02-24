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
          <h2 className={styles.heading}>Lorem ispum dolor</h2>
          <p className={styles.description}>
            Facilisi sed ultrices fringilla nec nisl est faucibus augue enim, lobortis cras
            leo consectetur pellentesque at cras ut quis mattis elit ut nam placerat.
          </p>
          <ul className={styles.list}>
            <li><FaCheck className={styles.icon} /> Pellentesque nulla at pharetra</li>
            <li><FaCheck className={styles.icon} /> Magna morbi aenean vel convallis</li>
            <li><FaCheck className={styles.icon} /> Tempus vitae bibendum venenatis pulvinar</li>
            <li><FaCheck className={styles.icon} /> Lectus erat pharetra ultrices aliquet</li>
          </ul>
          <hr />
          {/* Quote */}
          <blockquote className={styles.quote}>
            "Tortor potenti sed aliquet feugiat integer dolor vulputate ultrices et semper tellus pretium justo, 
            suscipit sollicitudin erat massa euismod ac."
          </blockquote>
          <p className={styles.author}>John Smith</p>
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
      <Container fluid className={styles.featuredContainer}>
        <div className={styles.header}>
          <h2>LOREM IPSUM</h2>
          <p>Printing and Typesetting</p>
        </div>
        <Row className={styles.imageRow}>
          <Col md={4} className={styles.imageCol}>
            <h5>Remaining Essentially Unchanged.</h5>
            <p>It is a long established fact that a reader</p>
            <Image
              src="https://getwallpapers.com/wallpaper/full/2/d/f/490230.jpg"alt="Blog Image" className={styles.image}  />
           
          </Col>
          <Col md={4} className={styles.imageCol}>
            <h5>Remaining Essentially Unchanged.</h5>
            <p>It is a long established fact that a reader</p>
            <Image
              src="https://wallpapercave.com/wp/cb3jaMQ.jpg" alt="Technology Image" className={styles.image}/>
           
          </Col>
          <Col md={4} className={styles.imageCol}>
           <h5>Remaining Essentially Unchanged.</h5>
            <p>It is a long established fact that a reader</p>
            <Image
              src="https://getwallpapers.com/wallpaper/full/2/d/f/490230.jpg" alt="Global Tech Image" className={styles.image}/>
            
          </Col>
        </Row>
      </Container>

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
          <h2 className={styles.aboutHead}>ABOUT US </h2>
            <h4>Lorem Ipsum is simply dummy text of the printing</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem.
            </p>
          </Col>
        </Row>
      </Container>
       {/* Blog Section */}
       <Container className={styles.blogContainer}>
        <Row className="align-items-center">
          
          <Col md={7} className={styles.blogText}>
          <h2 className={styles.aboutHead}>ABOUT US </h2>
            <h4>Lorem Ipsum is simply dummy text of the printing</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem.
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
