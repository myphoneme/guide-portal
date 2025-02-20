import React, { useState } from "react";
import { Tab, Tabs, Row, Col, Card, Button, Form, ListGroup } from "react-bootstrap";
import styles from "./TabSection.module.css"; // Import module CSS

const TabSection = () => {
  const [key, setKey] = useState("tab1");

  return (
    <div className="container">
      {/* Tab Buttons */}
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className={`mb-3 ${styles.navTabs}`}>
        <Tab eventKey="tab1" title="Lorem ipsum" className={styles.navLink}> </Tab>
        <Tab eventKey="tab2" title="Lorem ipsum" ></Tab>
        <Tab eventKey="tab3" title="Lorem ipsum" ></Tab>
        <Tab eventKey="tab4" title="Lorem ipsum" ></Tab>
        <Tab eventKey="tab5" title="Lorem ipsum" ></Tab>
      </Tabs>

      {/* Tab Content */}
      {key === "tab1" && (
        <div className={styles.blogCard}>
        <Row>
            <Col md={9}>
                <Col  className={styles.storyImageCol}>
                <div className={styles.blogCard}>
                    <Card.Img variant="top" src="https://cdn.wallpapersafari.com/83/87/MQkEI9.jpg" alt="Blog Cover" />
                    <Card.Body>
                    <Card.Title className={styles.blogTitle}>

                        There are many variations of passages of Lorem Ipsum available,
                    </Card.Title>
                    <Card.Text className={styles.blogDescription}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quaerat sit in, minima nobis reprehenderit impedit nesciunt minus mollitia, facilis dignissimos, id inventore repudiandae dicta sed aperiam velit ipsam! Suscipit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quaerat sit in, minima nobis reprehenderit impedit nesciunt minus mollitia, facilis dignissimos, id inventore repudiandae dicta sed aperiam velit ipsam! Suscipit. impedit nesciunt minus mollitia, facilis dignissimos, id inventore repudiandae dicta sed aperiam velit ipsam! Suscipit</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quaerat sit in, minima nobis reprehenderit impedit nesciunt minus mollitia, facilis dignissimos, id inventore repudiandae dicta sed aperiam velit ipsam! Suscipit.</p>
                    
                    </Card.Text>
                    </Card.Body>
                
                  </div>
                </Col>
                <Col  className={styles.storyImageCol}>
                <div className={styles.blogCard}>
                    <Card.Img variant="top" src="https://background.live/wp-content/uploads/2022/04/41613405958rhvilahlttorlzyz8umwdaek6npyr63gswnshyoalqcmdjkwzjxvtjvzmllqd3kbgrcmpza1j4w7bzbsvk3iishphloe71gpkg6t.jpg" alt="Blog Cover" />
                    <Card.Body>
                    <Card.Title className={styles.blogTitle}>
                        There are many variations of passages of Lorem Ipsum available,
                    </Card.Title>
                    <Card.Text className={styles.blogDescription}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quaerat sit in, minima nobis reprehenderit impedit nesciunt minus mollitia, facilis dignissimos, id inventore repudiandae dicta sed aperiam velit ipsam! Suscipit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quaerat sit in, minima nobis reprehenderit impedit nesciunt minus mollitia, facilis dignissimos, id inventore repudiandae dicta sed aperiam velit ipsam! Suscipit. impedit nesciunt minus mollitia, facilis dignissimos, id inventore repudiandae dicta sed aperiam velit ipsam! Suscipit</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quaerat sit in, minima nobis reprehenderit impedit nesciunt minus mollitia, facilis dignissimos, id inventore repudiandae dicta sed aperiam velit ipsam! Suscipit.</p>
                    
                    </Card.Text>
                    </Card.Body>
                
                  </div>
                </Col>
            </Col>

            <Col md={3}>
            <div style={{ width: '18rem'}} className={styles.mainCardIn}>
                <Card.Img variant="top" src="https://c0.wallpaperflare.com/preview/330/490/484/business-office-computer-flatlay.jpg" />
                <Card.Body className={styles.bodyContent}>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </div>
            <div style={{ width: '18rem'}} className={styles.mainCardIn}>
                <Card.Img variant="top" src="https://c0.wallpaperflare.com/preview/330/490/484/business-office-computer-flatlay.jpg" />
                <Card.Body className={styles.bodyContent}>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </div>
            <div style={{ width: '18rem'}} className={styles.mainCardIn}>
                <Card.Img variant="top" src="https://c0.wallpaperflare.com/preview/330/490/484/business-office-computer-flatlay.jpg" />
                <Card.Body className={styles.bodyContent}>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </div>
           
            </Col>
       </Row>
        </div>
      )} 

      {key === "tab2" && (
        <div className={styles.blogCard}>
          <div className="row">
            <div className="col-md-6">
              <img src="https://img.freepik.com/premium-photo/office-images_883586-22411.jpg" alt="Office" className="img-fluid rounded" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="text-center">Different variations of Lorem Ipsum text used in the industry Different variations of Lorem Ipsum text used in the industry Different variations of Lorem Ipsum text used in the industry.</p>
            </div>
          </div>
        </div>
      )}

      {key === "tab3" && (
        <div className={styles.blogCard}>
          <div className="row">
            <div className="col-md-6">
              <img src="https://png.pngtree.com/background/20230604/original/pngtree-modern-corporate-business-office-help-desk-background-picture-image_2873054.jpg" alt="Coding" className="img-fluid rounded" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="text-center">Expert tips for developers to enhance coding experience.</p>
            </div>
          </div>
        </div>
      )}

      {key === "tab4" && (
        <div className={styles.blogCard}>
          <div className="row">
            <div className="col-md-6">
              <img src="https://source.unsplash.com/600x400/?chat" alt="Chat" className="img-fluid rounded" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="text-center">Ultimate guide to chat applications and communication tools.</p>
            </div>
          </div>
        </div>
      )}

      {key === "tab5" && (
        <div className={styles.blogCard}>
          <div className="row">
            <div className="col-md-6">
              <img src="https://source.unsplash.com/600x400/?design" alt="Design" className="img-fluid rounded" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="text-center">Modern design techniques and UI/UX improvements for web apps.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabSection;
