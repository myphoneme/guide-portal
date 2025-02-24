import React, { useEffect, useState } from 'react';
import styles from "./BlogList.module.css";
import { Button, Card, Container, Row, Col, Nav } from 'react-bootstrap';

function BlogList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://fastapi.phoneme.in/posts")
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []);

    return (
        <Container className={styles.storyContainer}>
            <div className={styles.storyHeading}>
                <h3>Your Story</h3>
                <div className={styles.storyButtonGroup}>
                    <Button className={styles.storyWriteButton}>Write a Story</Button>
                    <Button className={styles.storyImportButton}>Import a Story</Button>
                </div>
            </div>
            <Nav defaultActiveKey="#published" className={styles.storyNavTabs}>
                <Nav.Item>
                    <Nav.Link eventKey="#draft" className={styles.storyDraftTab}>Draft</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#published" className={styles.storyPublishedTab}>Published</Nav.Link>
                </Nav.Item>
            </Nav>
            {loading ? (
                <p>Loading posts...</p>
            ) : posts.length > 0 ? (
                posts.map(post => (
                    <Card key={post.id} className={styles.storyCard}>
                        <Row>
                            <Col xs={2} md={2} className={styles.storyImageCol}>
                                {/* <img src={"http://fastapi.phoneme.in/."post.image || "static/images/health.jpeg"} alt="Story" className={styles.storyImage} /> */}
                                <img src={`http://fastapi.phoneme.in/${post.image}`} alt="Story" className={styles.storyImage} />
                            </Col>
                            <Col>
                                <h5 className={styles.storyTitle}>{post.title}</h5>
                                <p className={styles.storyContent}>{post.post}</p>
                                <small className={styles.storyUpdatedText}>Created Time: {post.created_at || "Unknown"}</small>
                                <small className={styles.storyPublishedText}>Author: {post.created_user.name || "Unknown"}</small>
                                <div className={styles.storyButtonGroupBottom}>
                                    <Button className={styles.storyEditButton}>Edit</Button>
                                    <Button className={styles.storyDeleteButton}>Delete</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                ))
            ) : (
                <p>No posts available.</p>
            )}
        </Container>
    );
}

export default BlogList;