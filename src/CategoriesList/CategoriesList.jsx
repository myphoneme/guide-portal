
import React, { useState, useEffect } from "react";
import styles from "./CategoriesList.module.css"; 
import { Button, Modal, InputGroup, Form, } from "react-bootstrap";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    category_name: '',
    id: null, 
  });
  const [show, setShow] = useState(false);
  const [catShow,setCatShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleCatClose = ()=> setCatShow(false);
  const handleShow = (category = null) => {
    if (category) {
      setFormData({ category_name: category.category_name, id: category.id });
    } else {
      setFormData({ category_name: '', id: null });
    }
    setShow(true);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("http://fastapi.phoneme.in/categories")
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSend = {
      category_name: formData.category_name,
    };

    if (formData.id) {
   
      fetch(`http://fastapi.phoneme.in/categories/${formData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })
        .then(response => response.json())
        .then(data => {
          console.log("Category updated successfully:", data);
          fetchCategories();
          handleClose();
        })
        .catch(error => {
          console.error("Error updating category:", error);
        });
    } else {
     
      fetch("http://fastapi.phoneme.in/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })
        .then(response => response.json())
        .then(data => {
          console.log("Category created successfully:", data);
          fetchCategories();
          handleClose();
        })
        .catch(error => {
          console.error("Error creating category:", error);
        });
    }
  };

  const handleDelete = (id=null) => {
      // alert(catShow);
      setCatShow(true);
      // alert(catShow);
    
    fetch(`http://fastapi.phoneme.in/categories/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(data => {
        console.log("Category deleted successfully:", data);
        fetchCategories();
      })
      .catch(error => {
        console.error("Error deleting category:", error);
      });
  };

  return (
    <div className={styles.mainParent}>
      <div className={styles.container}>
        <div className={styles.CatHead}>
          <h2 className={styles.title}>Categories</h2>
          <button className={styles.addButton} onClick={() => handleShow()}>
            Add Category
          </button>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>SNo</th>
                <th>Category Name</th>
                <th className={styles.textCenter}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <p>Loading categories...</p>
              ) : categories.length > 0 ? (
                categories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.category_name}</td>
                    <td className={styles.textCenter}>
                      <button
                        className={styles.editButton}
                        onClick={() => handleShow(category)}
                      >
                        Edit
                      </button>
                      <button className={styles.deleteButton} onClick={() => handleDelete(category.id)}> Delete </button>
                    </td>
                  </tr>
                ))
              ) : (
                <p>No Category available.</p>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className={styles.modalCont}>
        <Modal.Header closeButton>
          <h6>{formData.id ? "Edit Category" : "Create Category"}</h6>
        </Modal.Header>
        <Modal.Body>
          <label className={styles.entCate}>Category Name</label>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Please Enter Category Name:</InputGroup.Text>
            <Form.Control
              name="category_name"
              value={formData.category_name}
              onChange={handleInputChange}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <button className={styles.cancleButton} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>

      {/* =======================delete=============== */}
      <Modal  show={catShow} onHide={handleCatClose} >

      <Modal.Header closeButton>
          <h6>{formData.id ? "Delete Category" : "Delete Category"}</h6>
        </Modal.Header>
          <div className={styles.modal}>
            <div className={styles.modalHeader}></div>
            <Modal.Body>
              <div className={styles.modalBody}>
                  <div className={styles.warningIcon}>⚠</div>
                  <h3>Are you sure you want to delete this tenant?</h3>
                  <p>
                  Deleting a tenant will permanently remove it from your map and
                  network. This cannot be undone.
                  </p>
              </div>
            </Modal.Body>
      <Modal.Footer>
        <div className={styles.modalFooter}>
            <button className={styles.cancelBtn} >
            cancel
            </button>
            <button className={styles.deleteBtn} >
            Delete 
            </button>
        </div>
      </Modal.Footer>
    </div>
    </Modal>
    </div>
  );
};

export default CategoriesList;
