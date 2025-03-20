import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form, ListGroup } from "react-bootstrap";
import styles from "./BlogLayout.module.css";
import { Link } from "react-router-dom";

const BlogLayout = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);
  
  useEffect(() => {
    // Filter posts by the selected category
    if (selectedCategory) {
      setFilteredPosts(posts.filter(post => post.category.category_name === selectedCategory));
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedCategory, posts]);

  const fetchPosts = () => {
    fetch("http://fastapi.phoneme.in/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);

        // Extract unique categories from posts
        const uniqueCategories = [...new Set(data.map(post => post.category.category_name))];
        setCategories(uniqueCategories);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
      });
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className={styles.mainHome}>
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          {filteredPosts.map(post => (
            <Link key={post.id} to={`/blog/${post.id}`} className={styles.sidebarTab}>
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
                      <span className={styles.date}>Created at: {post.created_at}</span>
                    </div>
                  </Card.Body>
                </div>
                <div>
                  <Card.Img
                    className={styles.image}
                    variant="right"
                    src={`http://fastapi.phoneme.in/${post.image}`}
                    alt="Blog Post"
                  />
                </div>
              </Card>
            </Link>
          ))}
        </Col>

        <Col md={4}>
          {/* Sidebar */}
          <div className={styles.sidebarCol}>
            {/* <div className={styles.sidebarCard}>
              <Card.Body>
                <Card.Title>JOIN OUR NEWSLETTER</Card.Title>
                <Form>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Enter your Email" />
                  </Form.Group>
                </Form>
              </Card.Body>
            </div> */}


     {/* ========category============ */}
            {/* <div className={`${styles.sidebarCard} mt-3`}>
              <Card.Title className={styles.categHead}>Categories</Card.Title>
              <ListGroup>
                {categories.map(category => (
                  <ListGroup.Item
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={styles.mainTab}
                    style={{ cursor: "pointer" }}
                  >
                    {category}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div> */}

            <div className={`${styles.sidebarCard} mt-3`}>
              <Card.Title className={styles.categHead}>Recent Posts</Card.Title>
              {posts.slice(0, 5).map(post => (
                <Link key={post.id} to={`/blog/${post.id}`} className={styles.sidebarTab}>
                  <ListGroup.Item className={styles.sidebarTab}>
                    <div className={styles.tabIn}>
                      <h5>{post.title}</h5>
                      <div className="text-muted small mb-2">7 MIN READ</div>
                      <div className="text-muted small">
                        Created: {post.created_at} <br /> Author: {post.created_user.name}
                      </div>
                    </div>
                  </ListGroup.Item>
                </Link>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default BlogLayout;
