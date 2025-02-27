import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  
import { Tab, Tabs, Row, Col, Card } from "react-bootstrap";  
import styles from "./TabSection.module.css";  

const TabSection = () => {
  const [key, setKey] = useState("tab1");  
  const [post, setPost] = useState(null);  
  const { id } = useParams();  

  
  useEffect(() => {
    if (id) {
      fetch(`http://fastapi.phoneme.in/posts/${id}`)  
        .then((response) => response.json())
        .then((data) => setPost(data))  
        .catch((error) => console.error("Error fetching post details:", error));
    }
  }, [id]);  

  if (!post) {
    return <p>Loading...</p>;  
  }

  return (
    <div className="container">
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className={`mb-3 ${styles.navTabs}`}>
        <Tab eventKey="tab1" title="Post Details" className={styles.navLink}></Tab>
      </Tabs>

      {key === "tab1" && (
        <div className={styles.blogCard}>
          <Row>
            <Col md={9}>
              <Col className={styles.storyImageCol}>
                <div className={styles.blogCard}>
                  <Card.Img
                    variant="top"
                    src={`http://fastapi.phoneme.in/${post.image}`}  
                    alt="Blog Cover"
                  />
                  <Card.Body>
                    <Card.Title className={styles.blogTitle}>{post.title}</Card.Title>  
                    <Card.Text className={styles.blogDescription}>
                      <p>{post.post}</p>  
                    </Card.Text>
                  </Card.Body>
                </div>
              </Col>
            </Col>

            <Col md={3}>
              <div style={{ width: "18rem" }} className={styles.mainCardIn}>
                <Card.Img
                  variant="top"
                  src="https://c0.wallpaperflare.com/preview/330/490/484/business-office-computer-flatlay.jpg"  
                />
                <Card.Body className={styles.bodyContent}>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default TabSection;
