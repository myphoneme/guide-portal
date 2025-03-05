import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import JoditEditor from 'jodit-react';
import styles from './CreatingBlog.module.css';

const CreatingBlog = () => {
  const editor = useRef(null);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    post: '',
    category_id: '',
    created_by: 1, // Assuming the user is already logged in, or you can dynamically set this
    image: null,
  });

  useEffect(() => {
    fetch('http://fastapi.phoneme.in/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

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
    console.log("Form data you entered: ", formData);
    
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('post', formData.post);
    formDataToSend.append('category_id', formData.category_id);
    formDataToSend.append('created_by', formData.created_by); // Add created_by here
  
    

    // const formData = new FormData();
    // formData.append("category_id", posts.category_id);
    // formData.append("title", posts.title);
    // formData.append("post", posts.post);
    // formData.append("created_by", posts.created_by);
    // formData.append("image", posts.image);

    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const response = await fetch('http://fastapi.phoneme.in/posts', {
        method: 'POST',
       body: formDataToSend,
      //  headers:{"Content-Type":"application/json"},
    //    body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit blog');
      }

      const result = await response.json();
      console.log('Blog submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };

  return (
    <Container className={`mt-4 ${styles.container}`}>
      <h2 className={styles.heading}>Create a Blog</h2>
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
