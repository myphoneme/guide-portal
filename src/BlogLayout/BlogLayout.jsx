import React from "react";
import { Container, Row, Col, Card, Button, Form, ListGroup, Badge } from "react-bootstrap";
import styles from "./BlogLayout.module.css";
import { Link } from "react-router-dom";

const BlogLayout = () => {
  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
        {/* Main Content */}
        <Col className={styles.storyImageCol}>
          <Card className={styles.blogCard}>
            <Card.Img variant="top" src="https://wallpaperaccess.com/full/1650990.jpg" alt="Blog Cover" />
            <Card.Body>
              <Card.Title className={styles.blogTitle}>
                There are many variations of passages of Lorem Ipsum available,
              </Card.Title>
              <Card.Text>
                <span className={styles.category}>EDUCATIONAL UI/UX</span> · <span className={styles.timeRead}>7 MIN READ</span>
              </Card.Text>
              <Card.Text className="text-muted small">
                UPDATED: 2 MONTHS AGO · PUBLISHED: 2 MONTHS AGO
              </Card.Text>
              <Card.Text className={styles.blogDescription}>
                Artificial intelligence (AI) is increasingly integral to web design, reshaping how we build and interact
                with modern websites. In fact, a significant number of web designers—about 93%—are already utilizing AI
                to...
              </Card.Text>
              <Link to="/detail "><Button variant="primary">Read More</Button></Link>
            </Card.Body>
            <Card.Footer className={styles.blogAuthor}>
              <img
                src="https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Technology-Photos.jpg"
                alt="Author"
                className={styles.authorAvatar}
              />
              <span className={styles.authorName}>Alexandra Murtaza</span>
            </Card.Footer>
          </Card>
        </Col>
        <Col  className={styles.storyImageCol}>
          <Card className={styles.blogCard}>
            <Card.Img variant="top" src="https://wallpapercave.com/wp/wp2848583.jpg" alt="Blog Cover" />
            <Card.Body>
              <Card.Title className={styles.blogTitle}>
                There are many variations of passages of Lorem Ipsum available,
              </Card.Title>
              <Card.Text>
                <span className={styles.category}>EDUCATIONAL UI/UX</span> · <span className={styles.timeRead}>7 MIN READ</span>
              </Card.Text>
              <Card.Text className="text-muted small">
                UPDATED: 2 MONTHS AGO · PUBLISHED: 2 MONTHS AGO
              </Card.Text>
              <Card.Text className={styles.blogDescription}>
                Artificial intelligence (AI) is increasingly integral to web design, reshaping how we build and interact
                with modern websites. In fact, a significant number of web designers—about 93%—are already utilizing AI
                to...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
            <Card.Footer className={styles.blogAuthor}>
              <img
                src="https://www.pixelstalk.net/wp-content/uploads/2016/06/HD-Technology-Photos.jpg"
                alt="Author"
                className={styles.authorAvatar}
              />
              <span className={styles.authorName}>Alexandra Murtaza</span>
            </Card.Footer>
          </Card>
        </Col>
        </Col>

        <Col md={4}>
        {/* Sidebar */}
        <Col className={styles.sidebarCol}>
          <div className={styles.sidebarCard}>
            <Card.Body>
              <Card.Title>JOIN OUR NEWSLETTER</Card.Title>
              <Form>
                <Form.Group>
                  <Form.Control type="email" placeholder="Enter your Email" />
                </Form.Group>
               
              </Form>
            </Card.Body>
          </div>

          <div className={`${styles.sidebarCard} mt-3`}>
            <div>
              <Card.Title>POPULAR TAG</Card.Title>
              <div>
                <ListGroup.Item className={styles.mainTab}>
                  Web Design 
                  <div><Badge className={styles.badgeMain}>102</Badge></div>
                </ListGroup.Item>

                <ListGroup.Item className={styles.mainTab}>
                   Web Development
                  <div><Badge className={styles.badgeMain}>102</Badge></div>
                </ListGroup.Item>

                <ListGroup.Item className={styles.mainTab}>
                     Educational Tech
                  <div><Badge className={styles.badgeMain}>102</Badge></div>
                </ListGroup.Item>

                <ListGroup.Item className={styles.mainTab}>
                   Crypto News 
                  <div><Badge className={styles.badgeMain}>102</Badge></div>
                </ListGroup.Item>
              </div>
            </div>
          </div>

          <div className={`${styles.sidebarCard} mt-3`}>
            <div>
              <Card.Title>Recent Post</Card.Title>
              <div>
                <ListGroup.Item className={styles.sidebarTab}>
                  <div className={styles.tabIn}>
                  <h5 >How to Integrate AI into Your W...</h5>
                  <div className="text-muted small mb-2">7 MIN READ</div>
                  <div className="text-muted small">UPDATED: 2 MONTHS AGO · PUBLISHED: 2 MONTHS AGO</div>
                  </div>
                  <div className={styles.tabIn}>
                  <h5>How to Integrate AI into Your W...</h5>
                  <div className="text-muted small mb-2">7 MIN READ</div>
                  <div className="text-muted small">UPDATED: 2 MONTHS AGO · PUBLISHED: 2 MONTHS AGO</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className={styles.sidebarTab}>
                  <div className={styles.tabIn}>
                  <h5 >How to Integrate AI into Your W...</h5>
                  <div className="text-muted small mb-2">7 MIN READ</div>
                  <div className="text-muted small">UPDATED: 2 MONTHS AGO · PUBLISHED: 2 MONTHS AGO</div>
                  </div>
                  <div className={styles.tabIn}>
                  <h5>How to Integrate AI into Your W...</h5>
                  <div className="text-muted small mb-2">7 MIN READ</div>
                  <div className="text-muted small">UPDATED: 2 MONTHS AGO · PUBLISHED: 2 MONTHS AGO</div>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className={styles.sidebarTab}>
                  <div className={styles.tabIn}>
                  <h5 >How to Integrate AI into Your W...</h5>
                  <div className="text-muted small mb-2">7 MIN READ</div>
                  <div className="text-muted small">UPDATED: 2 MONTHS AGO · PUBLISHED: 2 MONTHS AGO</div>
                  </div>
                  <div className={styles.tabIn}>
                  <h5>How to Integrate AI into Your W...</h5>
                  <div className="text-muted small mb-2">7 MIN READ</div>
                  <div className="text-muted small">UPDATED: 2 MONTHS AGO · PUBLISHED: 2 MONTHS AGO</div>
                  </div>
                </ListGroup.Item>

              </div>
            </div>
          </div>

        </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogLayout;
