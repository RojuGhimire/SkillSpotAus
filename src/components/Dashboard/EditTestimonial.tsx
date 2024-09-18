import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Replace with your own data source or mock data
const mockTestimonialData = {
  author: "John Doe",
  position: "Developer",
  description: "This is a testimonial description.",
  imageUrl: "https://via.placeholder.com/120",
};

export const EditTestimonial = () => {
  const { id } = useParams(); // ID parameter for identifying the testimonial
  const [editedForm, setEditedForm] = useState({
    author: '',
    position: '',
    description: '',
    imageUrl: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      try {
        // Replace with actual data fetching logic
        setEditedForm(mockTestimonialData);
        setUploadedImageUrl(mockTestimonialData.imageUrl);
      } catch (error) {
        console.error('Error fetching Testimonial data:', error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const uploadFile = async (file: File) => {
      // Simulate file upload and get URL
      // Replace with actual file upload logic
      const downloadURL = URL.createObjectURL(file);
      setUploadedImageUrl(downloadURL);
      setEditedForm((prevForm) => ({ ...prevForm, imageUrl: downloadURL }));
    };

    if (file) {
      uploadFile(file);
    }
  }, [file]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmptyField = Object.values(editedForm).some((value) => value === '');
    if (isEmptyField) {
      setError('All fields are required.');
      return;
    }

    setIsSubmit(true);
    // Simulate form submission
    // Replace with actual submission logic
    setTimeout(() => {
      alert('Data is updated in the database');
      navigate('/viewtestimonial');
      setIsSubmit(false);
    }, 1000);
  };

  return (
    <main className="mt-20 ml-20">
      <h1 className="w-fit mx-auto text-blue-700">Edit Testimonial</h1>
      <span className="flex w-[120px] h-[2px] bg-[#e1e1e1] mx-auto mb-4">
        <em className="w-[60px] h-[2px] bg-blue-700 mx-auto" />
      </span>
      <form className="w-[80%] h-auto p-10 bg-slate-50 shadow-lg mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <input
              onChange={handleChange}
              value={editedForm.author}
              type="text"
              name="author"
              className="p-3 my-3 w-96 bg-gray-100 rounded"
              placeholder="Author"
              required
            />
          </div>
          <div className="flex-1">
            <input
              onChange={handleChange}
              value={editedForm.position}
              type="text"
              name="position"
              className="p-3 my-3 w-96 bg-gray-100 rounded"
              placeholder="Position"
              required
            />
          </div>
          <textarea
            name="description"
            rows={4}
            placeholder="Write description"
            value={editedForm.description}
            onChange={handleChange}
            className="p-3 my-3 w-full bg-gray-100 rounded"
          />
          <label htmlFor="fileInput" className="cursor-pointer flex items-center justify-center border border-dashed border-[#1475cf] min-h-[120px] min-w-[120px] max-h-[120px] max-w-[120px]">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files && setFile(e.target.files[0])}
            />
            <span className="text-[12px] text-center font-bold">(Choose file)</span>
          </label>
          {uploadedImageUrl && (
            <img
              src={uploadedImageUrl}
              alt="Uploaded"
              className="w-[120px] h-[120px] border border-blue-600 object-cover"
            />
          )}
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          className="bg-blue-400 py-2 px-20 rounded text-black mt-5"
          disabled={isSubmit}
        >
          {isSubmit ? "Updating..." : "Update"}
        </button>
      </form>
    </main>
  );
};
