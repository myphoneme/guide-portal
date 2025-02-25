import React, { useEffect, useState } from 'react';
import styles from "./BlogList.module.css";
import { Button, Card, Container, Row, Col, Nav } from 'react-bootstrap';
import CreateBlog from '../CreateBlog/CreateBlog';

function BlogList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

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

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleEdit = (post) => {
        setSelectedPost(post); 
        handleShow();
    };
    const handleDelete = (id) => {
        
    };

    return (
        <Container className={styles.storyContainer}>
            <div className={styles.storyHeading}>
                <h3>Your Story</h3>
                <div className={styles.storyButtonGroup}>
                    <Button className={styles.storyWriteButton} onClick={handleShow}>Write a Story</Button>
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
                                <img src={`http://fastapi.phoneme.in/${post.image}`} alt="Story" className={styles.storyImage} />
                            </Col>
                            <Col>
                                <h5 className={styles.storyTitle}>{post.title}</h5>
                                <p className={styles.storyContent}>{post.post}</p>
                                <small className={styles.storyUpdatedText}>Created Time: {post.created_at}</small>
                                <small className={styles.storyPublishedText}>Author: {post.created_user.name}</small>
                                <div className={styles.storyButtonGroupBottom}>
                                    <Button className={styles.storyEditButton} onClick={() => handleEdit(post)}>Edit</Button>
                                    <Button className={styles.storyDeleteButton} onClick={() => handleDelete(post.id)}>Delete</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                ))
            ) : (
                <p>No posts available.</p>
            )}

            <CreateBlog  handleShow={handleShow} handleClose={handleClose} showModal={showModal} selectedPost={selectedPost} />
        </Container>
    );
}

export default BlogList;
