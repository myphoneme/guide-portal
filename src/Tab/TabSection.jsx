import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card ,ListGroup } from "react-bootstrap";
import styles from "./TabSection.module.css";
import { Link } from "react-router-dom";

const TabSection = () => {
  const [key, setKey] = useState("tab1");
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`http://fastapi.phoneme.in/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setPost(data);
          

          if (data.category) {
            fetch(`http://fastapi.phoneme.in/posts?category=${data.category}`)
              .then((response) => response.json())
              .then((posts) => {
                const recentPosts = posts
                  .filter((post) => post.id !== data.id) 
                  .slice(0, 3); 
                setRelatedPosts(recentPosts);
                console.log(recentPosts);
                
              })
              .catch((error) => console.error("Error fetching related posts:", error));
          }
        })
        .catch((error) => console.error("Error fetching post details:", error));
    }
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div>
        <h3 className={styles.headMain}> Blog Details </h3>
      </div>

      {key === "tab1" && (
        <div className={styles.blogCard}>
          <Row>
            <Col md={9}>
              <Col className={styles.storyImageCol}>
                <div className={styles.blogCard}>
                  <Card.Title className={styles.blogTitle}>{post.title}</Card.Title>
                  <Card.Img
                    variant="top"
                    src={`http://fastapi.phoneme.in/${post.image}`}
                    alt="Blog Cover"
                  />
                  <Card.Body>
                    <Card.Text className={styles.blogDescription}>
                      <p>{post.post}</p>
                    </Card.Text>
                  </Card.Body>
                </div>
              </Col>
            </Col>

            <Col md={3} className={styles.cardBody}>

              {/* <div style={{ width: "18rem" }} className={styles.mainCardIn}>
               
                <Card.Body className={styles.bodyContent}>
                  <Card.Text>
                    <h5 className={styles.titleCard}>More Blogs</h5>
                    {relatedPosts.length > 0 ? (
                      relatedPosts.map((relatedPost) => (
                        <Card key={relatedPost.id} className="mb-3">
                          <Card.Img
                            variant="top"
                            src={`http://fastapi.phoneme.in/${relatedPost.image}`} 
                            alt="Related Blog Cover"
                          />
                          <Card.Body>
                            <Card.Title>{relatedPost.title}</Card.Title>
                            <Card.Text>
                              {relatedPost.post.slice(0, 50)}...
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      ))
                    ) : (
                      <p>No related posts available.</p>
                    )}
                  </Card.Text>
                </Card.Body>
              </div> */}
              <div className={`${styles.sidebarCard} mt-3`}>
              <Card.Title className={styles.categHead}>Recent Posts</Card.Title>
              { relatedPosts.map((relatedPost) => (
                <Link key={post.id} to={`/blog/${relatedPost.id}`} className={styles.sidebarTab}>
                  <ListGroup.Item className={styles.sidebarTab}>
                    <div className={styles.tabIn}>
                      <h5>{relatedPost.title}</h5>
                      <div className="text-muted small mb-2">7 MIN READ</div>
                      <div className="text-muted small">
                        Created: {relatedPost.created_at} <br /> Author: {relatedPost.created_user.name}
                      </div>
                      {/* <Card.Img
                            variant="top"
                            src={`http://fastapi.phoneme.in/${relatedPost.image}`} 
                            alt="Related Blog Cover"
                            className="styles.relatedPostimg"
                          /> */}
                    </div>
                  </ListGroup.Item>
                </Link>
              ))}
            </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default TabSection;
