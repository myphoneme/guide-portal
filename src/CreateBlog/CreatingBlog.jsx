import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import JoditEditor from 'jodit-react';
import styles from './CreatingBlog.module.css';

const CreatingBlog = () => {
  const { id } = useParams(); // Get post ID from URL
  const navigate = useNavigate(); // Initialize navigate
  const editor = useRef(null);
  const [categories, setCategories] = useState([]);
  const savedUserId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    title: '',
    post: '',
    category_id: '',
    created_by: savedUserId,
    image: null,
  });

  useEffect(() => {
    fetch('http://fastapi.phoneme.in/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
    
    if (id) {
      fetch(`http://fastapi.phoneme.in/posts/${id}`)
        .then(response => response.json())
        .then(data => {
          setFormData({
            title: data.title,
            post: data.post,
            category_id: data.category_id,
            created_by: data.created_by,
            image: null, 
          });
        })
        .catch(error => console.error('Error fetching post for editing:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (newContent) => {
    setFormData({ ...formData, post: newContent });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('post', formData.post);
    formDataToSend.append('category_id', formData.category_id);
    formDataToSend.append('created_by', formData.created_by);

    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const response = await fetch(id ? `http://fastapi.phoneme.in/posts/${id}` : 'http://fastapi.phoneme.in/posts', {
        method: id ? 'PUT' : 'POST', 
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to submit blog');
      }

      const result = await response.json();
      console.log('Blog submitted successfully:', result);
      
      navigate('/list');
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };

  return (
    <Container className={`mt-4 ${styles.container}`}>
      <h2 className={styles.heading}>{id ? 'Edit Blog' : 'Create a Blog'}</h2>
      <Form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                required 
                className={styles.input}
              />
            </Form.Group>
          </Col>
          <Col md={6}>  
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select 
                name="category_id" 
                value={formData.category_id} 
                onChange={handleChange} 
                required
                className={styles.input}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.category_name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Body</Form.Label>
          <JoditEditor
            ref={editor}
            value={formData.post}
            onChange={handleEditorChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control 
            type="file" 
            name="image" 
            onChange={handleFileChange} 
            className={styles.input}
          />
        </Form.Group>
        <div className={styles.EndButton}>
          <Button variant="primary" type="submit" className={styles.Draftbutton}>Save as Draft</Button>
          <Button variant="primary" type="submit" className={styles.Publishbutton}>Publish Blog</Button>
        </div>
      </Form>
    </Container>
  );
};

export default CreatingBlog;
