import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa'; // Importing icons for the button

const CreateBlog = () => {
  // Blog form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Logic to handle the form submission (like sending data to API)
    const newBlog = {
      title,
      content,
    };

    console.log('Blog Created:', newBlog);

    // Clear form fields after submission
    setTitle('');
     setContent('');
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
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

     

<div className='flex items-center justify-center'>
<button
          type="submit"
          className="bg-primary text-white font-bold py-2 px-4 rounded-lg  hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          <FaPlusCircle className="inline-block mr-2" />
          Create Blog
        </button>
</div>
       
      </form>
    </div>
  );
};

export default CreateBlog;
