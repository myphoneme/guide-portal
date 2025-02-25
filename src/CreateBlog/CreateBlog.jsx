import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './CreateBlog.module.css'; 

function CreateBlog({ showModal, handleClose }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://fastapi.phoneme.in/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      size="lg" 
      centered 
      dialogClassName={styles.modalContent} 
    >
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title className={styles.modalTitle}>Create Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <form>
          <div className={styles.formGroup}>
            <label><b>Category:</b></label>
            <select id="category" name="category" required className={styles.formControl}>
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label><b>Post Title:</b></label>
            <input
              type="text"
              placeholder="Enter Post Title"
              name="post"
              required
              className={styles.formControl}
            />
          </div>

          <div className={styles.formGroup}>
            <label><b>Body:</b></label>
            <ReactQuill theme="snow" placeholder="Enter Post Description" required className={styles.formControl} />
          </div>

          <div className={styles.formGroup}>
            <label><b>Upload Image:</b></label>
            <input
              type="file"
              name="image"
              accept="image/*"
              required
              className={styles.formControlFile}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
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
            >
              Publish Blog
            </Button>
          </div>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateBlog;
