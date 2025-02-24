import React from 'react'
import { Button } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreateBlog() {
  return (
    <div>
        <h2>Create Blog</h2>
        <form>
        <div>
          <label>
            <b>Category:</b>
          </label>
          <select
            id="category"
            name="category"
            required
          >
            <option value="">Select Category</option>
          </select>

        
          <label>
            <b>Post Title:</b>
          </label>
          <input
            type="text"
            placeholder="Enter Post Title"
            name="post"
            required
          />
          
        </div>
         
          <label>
            <b>Body:</b>
          </label>
          <ReactQuill
            theme="snow"
            placeholder="Enter Post Description"
            required
          />
         

          <div>
          <label>
            <b>Upload Image:</b>
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
          />
          

          <Button variant="primary" size="sm" type="submit">
            Save as Draft
          </Button>

          <Button variant="success" size="sm" type="submit">
            Publish Blog
          </Button>
          </div>
        </form>
      </div>
  )
}

export default CreateBlog