import { useState } from "react";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { DashboardLayout } from "../DashboardLayout";

// Testimonial type definition
interface Testimonial {
  id: number;
  author: string;
  content: string;
  image: string;
}

// Sample testimonial data
const testimonialData: Testimonial[] = [
  { id: 1, author: "John Doe", content: "This is a great service!", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, author: "Jane Smith", content: "Highly recommend this company.", image: 'https://randomuser.me/api/portraits/women/44.jpg' },
];

const TestimonialTable = ({ onEdit, onDelete }: { onEdit: (testimonial: Testimonial) => void, onDelete: (testimonial: Testimonial) => void }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-gray-50 rounded-lg">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="p-4">Image</th>
            <th className="p-4">Author</th>
            <th className="p-4">Content</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {testimonialData.map((testimonial) => (
            <tr key={testimonial.id} className="border-t">
              <td className="p-4">
                <img src={testimonial.image} alt={testimonial.author} className="w-16 h-16 rounded-full" />
              </td>
              <td className="p-4">{testimonial.author}</td>
              <td className="p-4">{testimonial.content}</td>
              <td className="p-4 flex space-x-4">
                <button className="text-primary hover:text-blue-700" onClick={() => onEdit(testimonial)}>
                  <FaEdit />
                </button>
                <button className="text-secondary hover:text-red-700" onClick={() => onDelete(testimonial)}>
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

export const TestimonialPost = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleCreateTestimonial = () => {
    setCreateModalOpen(true);
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setAuthor(testimonial.author);
    setContent(testimonial.content);
    setImage(testimonial.image);
    setEditModalOpen(true);
  };

  const handleDeleteTestimonial = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setCreateModalOpen(false);
    setEditModalOpen(false);
    setDeleteModalOpen(false);
    setSelectedTestimonial(null);
    setAuthor('');
    setContent('');
    setImage('');
  };

  const handleDeleteConfirm = () => {
    if (selectedTestimonial) {
      console.log('Testimonial Deleted:', selectedTestimonial.id); // Replace with API call for deletion
    }
    handleCloseModal();
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <button
          className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          onClick={handleCreateTestimonial}
        >
          <FaPlus className="inline-block mr-2" />
          Create Testimonial
        </button>
      </div>

      <TestimonialTable onEdit={handleEditTestimonial} onDelete={handleDeleteTestimonial} />

      {/* Create Testimonial Modal */}
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
            <h2 className="text-2xl font-bold mb-4">Create Testimonial</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Author:</label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Author name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Content:</label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Testimonial content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                  onClick={() => console.log('Testimonial Created')}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Testimonial Modal */}
      {isEditModalOpen && selectedTestimonial && (
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
            <h2 className="text-2xl font-bold mb-4">Edit Testimonial</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Author:</label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Content:</label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                  onClick={() => console.log('Testimonial Updated')}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Testimonial Modal */}
      {isDeleteModalOpen && selectedTestimonial && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4">Delete Testimonial</h2>
            <p>Are you sure you want to delete this testimonial?</p>
            <div className="flex justify-end space-x-4 mt-4">
              <button
                className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-lg focus:outline-none"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="bg-secondary hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
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
