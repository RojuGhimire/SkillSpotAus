import { useState } from 'react';
import { ClientLayout } from './ClientLayout';

const ReferFriendForm = () => {
  const [formData, setFormData] = useState({
    yourFirstName: '',
    yourLastName: '',
    yourEmail: '',
    yourMobile: '',
    friendFirstName: '',
    friendLastName: '',
    friendEmail: '',
    friendMobile: '',
    qualification: '',
    specialty: '',
    location: 'Australia',
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Handle checkbox for terms acceptance
    if (e.target.type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.termsAccepted) {
      // Submit form data logic
      console.log('Form Submitted:', formData);
    }
  };

  return (
    <ClientLayout>
           <div className="max-w-lg  p-8 bg-white shadow-md rounded-md">
      <h2 className="text-xl text-primary font-bold mb-4">Your details</h2>
      <form onSubmit={handleSubmit}>
        {/* Your Details Section */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="yourFirstName"
              value={formData.yourFirstName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="yourLastName"
              value={formData.yourLastName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="yourEmail"
            value={formData.yourEmail}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Mobile</label>
          <input
            type="tel"
            name="yourMobile"
            value={formData.yourMobile}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        {/* Friend's Details Section */}
        <h2 className="text-xl text-primary font-bold mb-4">Your friend's details</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="friendFirstName"
              value={formData.friendFirstName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="friendLastName"
              value={formData.friendLastName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="friendEmail"
            value={formData.friendEmail}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Mobile</label>
          <input
            type="tel"
            name="friendMobile"
            value={formData.friendMobile}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Qualification</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Specialty</label>
          <input
            type="text"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          >
            <option value="Australia">Australia</option>
            {/* Add more locations as needed */}
          </select>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
              required
            />
            I accept the terms and conditions    
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded disabled:opacity-50"
          disabled={!formData.termsAccepted}
        >
          Submit
        </button>
      </form>
    </div>
    </ClientLayout>
 
  );
};

export default ReferFriendForm;
