import React, { useState } from "react";
import "./CategoriesList.css"; // Import the CSS file

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
    <div className="container">
      <h2 className="title">Categories</h2>
      <button className="add-button" onClick={handleAddCategory}>
        Add Category
      </button>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td className="text-center">
                  <button className="edit-button" onClick={() => handleEdit(category.id)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(category.id)}>
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
