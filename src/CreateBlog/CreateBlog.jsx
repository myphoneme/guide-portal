import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './CreateBlog.module.css';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';


function CreateBlog({ showModal, handleClose }) {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    body: '',
    image: null,
  });

  useEffect(() => {
    fetch('http://fastapi.phoneme.in/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const handleQuillChange = (value) => {
    setFormData({ ...formData, body: value });
  };

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const handleTitleChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission for creating a new blog (save as draft or publish)
    console.log('Form data submitted:', formData);
    // You can later implement your save and publish logic here
    handleClose(); // Close the modal after submission
  };


  const cloud = useCKEditorCloud( {
    version: '44.2.1',
    premium: true
} );

if ( cloud.status === 'error' ) {
    return <div>Error!</div>;
}

if ( cloud.status === 'loading' ) {
    return <div>Loading...</div>;
}

const {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic
} = cloud.CKEditor;

const { FormatPainter } = cloud.CKEditorPremiumFeatures;

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
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label><b>Category:</b></label>
            <select
              id="category"
              name="category"
              required
              className={styles.formControl}
              value={formData.category} // Make sure category is selected
              onChange={handleCategoryChange}
            >
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
              name="title"
              required
              className={styles.formControl}
              value={formData.title} // Make sure title is prefilled
              onChange={handleTitleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label><b>Body:</b></label>
            {/* <ReactQuill
              theme="snow"
              placeholder="Enter Post Description"
              required
              className={styles.formControl}
              value={formData.body} // Quill editor will be prefilled with body
              onChange={handleQuillChange}
            /> */}

            <CKEditor
            editor={ ClassicEditor }
            data={ '<p>Hello world!</p>' }
            config={ {
                licenseKey: '<YOUR_LICENSE_KEY>',
                plugins: [ Essentials, Paragraph, Bold, Italic, FormatPainter ],
                toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter' ]
            } }
            />
          </div>

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
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateBlog;