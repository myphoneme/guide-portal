import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import JoditEditor from 'jodit-react';
import styles from './TextEditor.module.css';

function TextEditor() {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(''); // State for Jodit editor
  const editor = useRef(null); // Reference for Jodit editor

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Button to open modal */}
      <Button variant="primary" onClick={handleShow} className={styles.openButton}>
        Create Blog
      </Button>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title className={styles.modalTitle}>Create Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <form>
            <div className={styles.formGroup}>
              <label><b>Category:</b></label>
              <select name="category" required className={styles.formControl}>
                <option value="">Select Category</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label><b>Post Title:</b></label>
              <input type="text" name="title" required placeholder="Enter Post Title" className={styles.formControl} />
            </div>

            <div className={styles.formGroup}>
              <label><b>Body:</b></label>
              <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => setContent(newContent)}
                className={styles.joditEditor}
              />
            </div>

            <div className={styles.formGroup}>
              <label><b>Upload Image:</b></label>
              <input type="file" name="image" accept="image/*" className={styles.formControlFile} />
            </div>

            <div className={styles.buttonGroup}>
              <Button variant="primary" size="lg" type="submit" className={`${styles.button} ${styles.buttonPrimary}`}>
                Save as Draft
              </Button>
              <Button variant="success" size="lg" type="submit" className={`${styles.button} ${styles.buttonSuccess}`}>
                Publish Blog
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default TextEditor;
