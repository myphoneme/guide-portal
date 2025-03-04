import React, { useState } from "react";
import styles from "./CategoriesList.module.css"; // Import the module CSS file

const CategoriesList = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", description: "Gadgets and devices" },
    { id: 2, name: "Fashion", description: "Clothing and accessories" },
    { id: 3, name: "Home & Kitchen", description: "Furniture & appliances" },
  ]);

  const handleAddCategory = () => {
    const name = prompt("Enter category name:");
    const description = prompt("Enter category description:");
    if (name && description) {
      const newCategory = {
        id: categories.length + 1,
        name,
        description,
      };
      setCategories([...categories, newCategory]);
    }
  };

  const handleEdit = (id) => {
    alert(`Edit clicked for Category ID: ${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (confirmDelete) {
      setCategories(categories.filter((category) => category.id !== id));
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Categories</h2>
      <button className={styles.addButton} onClick={handleAddCategory}>
        Add Category
      </button>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th className={styles.textCenter}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td className={styles.textCenter}>
                  <button className={styles.editButton} onClick={() => handleEdit(category.id)}>
                    Edit
                  </button>
                  <button className={styles.deleteButton} onClick={() => handleDelete(category.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesList;
