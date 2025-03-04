import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import styles from './CreateBlog.module.css';

function CreateBlog({ showModal, handleClose, fetchPosts, posts, setShowModal }) {
  const [categories, setCategories] = useState([]);
  const [formData, setFormdata] = useState({
    category: '',
    title: '',
    body: '',
    image: null, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormdata({
      ...formData,
      image: file,
    });
  };

  useEffect(() => {
    fetch('http://fastapi.phoneme.in/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    console.log('formdata ',  formData);
    data.append('category', formData.category);
    data.append('title', formData.title);
    data.append('body', formData.body);
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      const response = await fetch('http://fastapi.phoneme.in/posts', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        console.log('Blog created successfully!');
        fetchPosts();
        handleClose(); 
      } else {
        console.error('Error creating blog:', response);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} size="lg"  centered>
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title className={styles.modalTitle}>Create Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <form onSubmit={handleSubmit}>

          <Row>
            <Col>
          <div className={styles.formGroup}>
            <label><b>Category:</b></label>
            <select
              name="category"
              required
              className={styles.formControl}
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>
          </Col>
         
         <Col>
          <div className={styles.formGroup}>
            <label><b>Post Title:</b></label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter Post Title"
              className={styles.formControl}
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          </Col>
          </Row>

          <div className={styles.formGroup}>
            <label><b>Body:</b></label>
            <textarea
              name="body"
              required
              placeholder="Write your blog content here..."
              className={styles.formControl}
              value={formData.body}
              onChange={handleChange}
              rows={6}
            />
          </div>
          <Row className= {styles.CreatePost}>
            <Col>
          <div className={styles.formGroup}>
            <label><b>Upload Image:</b></label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className={styles.formControlFile}
            />
          </div>
          </Col>
          <Col>
          <div className={styles.buttonGroup}>
            <Button
              variant="primary"
              size="lg"
              type="submit"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Save as Draft
            </Button>
            <Button
              variant="success"
              size="lg"
              type="submit"
              className={`${styles.button} ${styles.buttonSuccess}`}
              onClick={() => setFormdata({ ...formData })}
            >
              Publish Blog
            </Button>
          </div>
          </Col>
          </Row>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateBlog;
