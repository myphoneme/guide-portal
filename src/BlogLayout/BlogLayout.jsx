import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form, ListGroup, Badge } from "react-bootstrap";
import styles from "./BlogLayout.module.css";
import { Link } from "react-router-dom";
// import { StarFill,} from 'react-icons/bs';

const BlogLayout = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch("http://fastapi.phoneme.in/posts")
        .then(response => response.json())
        .then(data => {
            setPosts(data);
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
        });
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
        {posts.map(post => (
        <Card className={styles.cardContainer}>
          <div>
            <Card.Body className={styles.cardBody}>
              <div className={styles.header}>
                <span className={styles.category}>{post.created_user.name}</span>
              </div>
              <Card.Title className={styles.title}>
                  {post.title}
                </Card.Title>
                <Card.Text className={styles.description}>
                {post.post.substring(0, 150)}....
                </Card.Text>
                <div className={styles.footer}>
                  {/* <span className={styles.icon}><StarFill /></span> */}
                  <span className={styles.date}> created at : {post.created_at}</span>
                  {/* <span className={styles.icon}><Eye /> 4.7K</span> */}
                  {/* <span className={styles.icon}><ChatDots /> 122</span> */}
                </div>
              </Card.Body>
            </div>
            <div>
            <Card.Img className={styles.image} variant="right" src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*qcjCK1UFyc452RSwhqkUzg.jpeg" alt="Warren Buffett" />
            </div>
        </Card>
        ))}
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
            <Card.Title className={styles.categHead}>Categories</Card.Title>
            { posts.map(post => (
            <div className={styles.catHead}>
              <ListGroup.Item className={styles.mainTab}>
              {post.category.category_name}
              </ListGroup.Item>
            </div>
          ))}
          </div>
       </div>
       
       <div className={`${styles.sidebarCard} mt-3`}>
        <div>
          <Card.Title className={styles.categHead}>Recent Post</Card.Title>
          { posts
          .slice(0, 5)
          .map(post => (
          <div>
            <ListGroup.Item className={styles.sidebarTab}>
              <div className={styles.tabIn}>
                <h5 >{post.title}</h5>
                <div className="text-muted small mb-2">7 MIN READ</div>
                <div className="text-muted small">Created: {post.created_at} <br/> Author: {post.created_user.name}</div>
              </div>
            </ListGroup.Item>

          </div>
          ))}
        </div>
      </div>

</Col>
</Col>
        
    </Row>
    </Container>
  );
};

export default BlogLayout;
