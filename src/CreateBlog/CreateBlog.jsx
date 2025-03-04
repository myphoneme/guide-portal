import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from './CreateBlog.module.css';

function CreateBlog({ showModal, handleClose , fetchPosts , posts , setShowModal}) {
  const [categories, setCategories] = useState([]);

// ronik

const [formData, setFormdata] = useState({
  category: '',
  title: '',
  body: '',
  image: null,
});

const closeModal = () => {
  setShow(false);
}
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormdata({
    ...formData,
    [name]: value,
  });
};


useEffect(() => {
  fetch('http://fastapi.phoneme.in/categories')
    .then((response) => response.json())
    .then((data) => setCategories(data))
    .catch((error) => console.error('Error fetching categories:', error));
}, []);


const handleSubmit = async(e) => {
  e.preventDefault();
  const response = await fetch("http://fastapi.phoneme.in/posts", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formData),
  });
  const newResponse = await response.json();
  fetchPosts();
  console.log("form response");
  setShowModal(false);
  alert("User has been added successfully");
  console.log(newResponse);
  console.log("Form data");
  console.log(formData);
};

const handleImageChange = (e) => {
  const file = e.target.files[0];
  setFormdata({
    ...formData,
    image: file,
  });
};


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleImageChange = (e) => {
  //   setFormData({ ...formData, image: e.target.files[0] });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formDataToSend = new FormData();
  //   formDataToSend.append('category', formData.category);
  //   formDataToSend.append('title', formData.title);
  //   formDataToSend.append('body', formData.body);
  //   if (formData.image) {
  //     formDataToSend.append('image', formData.image);
  //   }

  //   try {
  //     const response = await fetch('http://fastapi.phoneme.in/posts', {
  //       method: 'POST',
  //       body: formDataToSend,
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to submit blog');
  //     }

  //     alert('Blog submitted successfully!');
  //     handleClose();
  //   } catch (error) {
  //     alert('Error submitting blog: ' + error.message);
  //   }
  // };

  return (
    <Modal show={showModal} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title className={styles.modalTitle}>Create Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label><b>Category:</b></label>
            <select name="category" required className={styles.formControl} value={formData.category} onChange={handleChange}>
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.category_name}</option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label><b>Post Title:</b></label>
            <input type="text" name="title" required placeholder="Enter Post Title" className={styles.formControl} value={formData.title} onChange={handleChange} />
          </div>

          <div className={styles.formGroup}>
            <label><b>Body:</b></label>
            <textarea name="body" required placeholder="Write your blog content here..." className={styles.formControl} value={formData.body} onChange={handleChange} rows={6} />
          </div>

          <div className={styles.formGroup}>
            <label><b>Upload Image:</b></label>
            <input type="file" name="image" accept="image/*" onChange={handleImageChange} className={styles.formControlFile} />
          </div>

          <div className={styles.buttonGroup}>
            <Button variant="primary" size="lg" type="submit" className={`${styles.button} ${styles.buttonPrimary}`}>Save as Draft</Button>
            <Button variant="success" size="lg" type="submit" className={`${styles.button} ${styles.buttonSuccess}`}>Publish Blog</Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateBlog;