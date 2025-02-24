import React from 'react'
import { Button } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
//import styles from "./EditBlog.module.css";

function EditBlog() {
  return (
    //<div>EditBlog</div>
    <div>
      <h2>Edit Blog</h2>
      <form> 
        <div>
          <label>
            <b>Title:</b>

          </label>
          <label>
            <b>Category:</b>
            </label>
            <select id="category" name="category" required>
              <option value="">
                Select Category
              </option>
            </select>
        </div>

        <label>
            <b>Body:</b>
          </label>
          <ReactQuill
            theme="snow"
            placeholder="Pre filled content"
            required
          />
           <Button variant="primary" size="sm" type="submit">
            Save as draft
          </Button>
          <Button variant="primary" size="sm" type="submit">
            Publish Blog
          </Button>

          


      </form>
    </div>
  )
}

export default EditBlog