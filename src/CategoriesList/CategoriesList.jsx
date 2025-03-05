import React, { useState } from "react";
import styles from "./CategoriesList.module.css"; 
import { Button, Modal, InputGroup, Form } from "react-bootstrap";

const CategoriesList = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", description: "Gadgets and devices" },
    { id: 2, name: "Fashion", description: "Clothing and accessories" },
    { id: 3, name: "Home & Kitchen", description: "Furniture & appliances" },
    { id: 4, name: "Fashion", description: "Clothing and accessories" },
    { id: 5, name: "Home & Kitchen", description: "Furniture & appliances" },
    { id: 6, name: "Fashion", description: "Clothing and accessories" },
    { id: 7, name: "Home & Kitchen", description: "Furniture & appliances" },
    { id: 8, name: "Fashion", description: "Clothing and accessories" },
    { id: 9, name: "Home & Kitchen", description: "Furniture & appliances" },
    { id: 10, name: "Fashion", description: "Clothing and accessories" },
  ]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.mainParent}>
    <div className={styles.container}>
      <div className={styles.CatHead}>
        
        <h2 className={styles.title}>Categories</h2>
        <button className={styles.addButton}  onClick={handleShow}>
          Add Category
        </button>
      </div>
      
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>SNo</th>
              <th> Category Name</th>
          
              <th className={styles.textCenter}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td className={styles.textCenter}>
                  <button className={styles.editButton}>
                    Edit
                  </button>
                  <button className={styles.deleteButton}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

     <div>
    
      <Modal  show={show} onHide={handleClose} className={styles.modalCont}>
        <Modal.Header closeButton>
         <h6> Create Categoris </h6>
        </Modal.Header>
        <Modal.Body>
          <label className={styles.entCate}>
            Enter Category
          </label>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Category</InputGroup.Text>
            <Form.Control
              // aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
            <button className={styles.cancleButton}>
                Cancle
              </button>
              <button className={styles.submitButton}>
                submit
              </button>
        </Modal.Footer>
      </Modal>

     </div>
    </div>
  );
};

export default CategoriesList;
