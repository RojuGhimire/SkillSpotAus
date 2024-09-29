import { useState } from "react";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { DashboardLayout } from "../DashboardLayout";
import CreateBlog from "./CreateBlog";

// BlogPost type definition
interface BlogPost {
  id: number;
  date: string;
  title: string;
}

// Sample blog data
const blogData: BlogPost[] = [
  { id: 1, date: 'Feb 26, 2024', title: 'Trade'},
  { id: 2, date: 'Feb 26, 2024', title: 'Market Analysis' },
];

const BlogTable = ({ onEdit, onDelete }: { onEdit: (post: BlogPost) => void, onDelete: (post: BlogPost) => void }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-gray-50 rounded-lg">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="p-4">Date</th>
            <th className="p-4">Blog</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogData.map((post) => (
            <tr key={post.id} className="border-t">
              <td className="p-4">{post.date}</td>
              <td className="p-4">{post.title}</td>
              <td className="p-4 flex space-x-4">
                <button className="text-primary hover:text-blue-700" onClick={() => onEdit(post)}>
                  <FaEdit />
                </button>
                <button className="text-secondary hover:text-red-700" onClick={() => onDelete(post)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const BlogPost = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [content, setContent] = useState('');
 

  const handleCreateBlog = () => {
    setCreateModalOpen(true);
  };

  const handleEditBlog = (post: BlogPost) => {
    setSelectedBlog(post); // Set the selected blog for editing
    setEditModalOpen(true);
  };

  const handleDeleteBlog = (post: BlogPost) => {
    setSelectedBlog(post); // Set the selected blog for deletion
    setDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setCreateModalOpen(false);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setSelectedBlog(null);
  };

  const handleDeleteConfirm = () => {
    if (selectedBlog) {
      console.log('Blog Deleted:', selectedBlog.id); // Replace with API call for deletion
    }
    handleCloseModal();
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Blog Posts</h2>
        <button
          className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          onClick={handleCreateBlog}
        >
          <FaPlus className="inline-block mr-2" />
          Create Blog
        </button>
      </div>

      <BlogTable onEdit={handleEditBlog} onDelete={handleDeleteBlog} />

      {/* Create Blog Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg w-1/2 p-6">
            <div className="flex justify-end items-center mb-4">
              <button
                className="text-secondary font-bold"
                onClick={handleCloseModal}
              >
                <ImCross />
              </button>
            </div>
            <CreateBlog />
          </div>
        </div>
      )}

      {/* Edit Blog Modal */}
      {isEditModalOpen && selectedBlog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg w-1/2 p-6">
            <div className="flex justify-end items-center mb-4">
              <button
                className="text-secondary font-bold"
                onClick={handleCloseModal}
              >
                <ImCross />
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={selectedBlog.title}
                  onChange={(e) => setSelectedBlog({ ...selectedBlog, title: e.target.value } as BlogPost)}
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

             

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                  onClick={() => console.log('Blog Updated:', selectedBlog)}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && selectedBlog && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg w-1/2 p-6">
            <div className="flex justify-end items-center mb-4">
              <button
                className="text-secondary font-bold"
                onClick={handleCloseModal}
              >
                <ImCross />
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Delete Blog</h2>
            <p>Are you sure you want to delete the blog titled "{selectedBlog.title}"?</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default BlogPost;
