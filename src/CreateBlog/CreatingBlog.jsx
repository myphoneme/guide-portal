import React, { useState } from 'react';
import styles from './CreatingBlog.module.css';

const CreatingBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      content,
      tags: tags.split(',').map(tag => tag.trim())
    };
    // Handle blog creation logic (e.g., call API or update state)
    console.log(newBlog);
    // Reset form after submission
    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <div className="create-blog-container">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog Title"
            required
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content here"
            required
          />
        </div>

        <div>
          <label htmlFor="tags">Tags (comma-separated)</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g. React, JavaScript"
          />
        </div>

        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
};

export default CreatingBlog;
