import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';  
import styles from "./BlogList.module.css";

function BlogList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
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
    };

    const handleDelete = (id) => {
        console.log("Delete post with ID:", id);
        fetch(`http://fastapi.phoneme.in/posts/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                
                setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
            } else {
                console.error("Failed to delete post");
            }
        })
        .catch(error => {
            console.error("Error deleting post:", error);
        });
    };

    return (
        <Container className={styles.storyContainer}>
            <div className={styles.storyHeading}>
                <h3>Your Story</h3>
                <div className={styles.storyButtonGroup}>
                    <Button className={styles.storyWriteButton} onClick={() => navigate('/write')}>Write a Story</Button>
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
                          <img src={`http://fastapi.phoneme.in/${post.image}`} alt="Story" className={styles.storyImage} />
                        </Col>
                        <Col>
                          <h5 className={styles.storyTitle}>{post.title}</h5>
                          <p className={styles.storyContent}>{post.post.substring(0, 200)}...</p>
                          <small className={styles.storyUpdatedText}>Created Time: {post.created_at}</small>
                          <small className={styles.storyPublishedText}>Author: {post.created_user.name}</small>
                          <div className={styles.storyButtonGroupBottom}>
                            <Link to={`/creatingblog/${post.id}`}>
                               <Button className={styles.storyEditButton}>Edit</Button>
                            </Link>
                            <Button className={styles.storyDeleteButton} onClick={() => handleDelete(post.id)}>Delete</Button>
                            <Link to={`/blog/${post.id}`}>
                               <Button className={styles.storyReadMoreButton}>Read More</Button>
                            </Link>
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
