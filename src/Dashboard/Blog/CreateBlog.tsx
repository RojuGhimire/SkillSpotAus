import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa'; // Importing icons for the button

const CreateBlog = () => {
  // Blog form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('Not Posted');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Logic to handle the form submission (like sending data to API)
    const newBlog = {
      title,
      content,
      status,
    };

    console.log('Blog Created:', newBlog);

    // Clear form fields after submission
    setTitle('');
    setContent('');
    setStatus('Not Posted');
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
            Blog Title:
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Blog Title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter Blog Content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
            Status:
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="Not Posted">Not Posted</option>
            <option value="Posted">Posted</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          <FaPlusCircle className="inline-block mr-2" />
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
