// Banner.tsx
import React, { useState } from 'react';

const Banner: React.FC = () => {
  const [bannerImage, setBannerImage] = useState<string | null>(null);
  const [editing, setEditing] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        setBannerImage(event.target?.result as string);
        setEditing(false); 
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDelete = () => {
    setBannerImage(null); // Remove banner image
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Banner Section</h2>

      {/* Banner Display */}
      <div className="mb-6">
        {bannerImage ? (
          <div>
            <img src={bannerImage} alt="Banner" className="w-full h-64 object-cover" />
            <div className="mt-4">
              <button
                onClick={() => setEditing(true)}
                className="mr-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full h-64 flex items-center justify-center bg-gray-200 text-gray-600">
            No Banner Image
          </div>
        )}
      </div>

      {/* Image Upload / Edit Section */}
      {editing && (
        <div>
          <label className="block mb-2 text-lg font-medium text-gray-700">Upload New Banner</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4"
          />
          <button
            onClick={() => setEditing(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Banner;
