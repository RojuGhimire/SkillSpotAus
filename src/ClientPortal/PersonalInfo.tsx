import React, { useState } from 'react';
import { FaEdit, FaSave, FaMale, FaFemale, FaGenderless } from 'react-icons/fa';
import { ClientLayout } from './ClientLayout';

const PersonalInfoForm: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState('Roju Ghimire');
  const [email, setEmail] = useState('rojug1@gmail.com');
  const [address, setAddress] = useState('NYC');
  const [city, setCity] = useState('Kathmandu');
  const [country, setCountry] = useState('Nepal');
  const [gender, setGender] = useState('Female');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false); // Disable edit mode after saving
    console.log({ fullName, email, address, city, country, gender });
  };

  return (
    <ClientLayout>
      <div className="w-full max-w-[650px] bg-[#F6ECED] font-overpass  rounded-lg  p-4 sm:p-6 md:p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl text-primary font-bold">Personal Information</h2>
          <button
            onClick={handleEditToggle}
            className="text-primary flex items-center gap-1 bg-transparent border-none cursor-pointer"
          >
            {isEditing ? (
              <>
                <FaSave className="text-primary" /> Save
              </>
            ) : (
              <>
                <FaEdit className="text-primary" /> Edit
              </>
            )}
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-md text-primary mb-1">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="border rounded-lg p-2 w-full"
                required
              />
            ) : (
              <p className="border-b border-gray-300 p-2">{fullName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md text-primary mb-1">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-lg p-2 w-full"
                required
              />
            ) : (
              <p className="border-b border-gray-300 p-2">{email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-md text-primary mb-1">Address</label>
            {isEditing ? (
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border rounded-lg p-2 w-full"
                required
              />
            ) : (
              <p className="border-b border-gray-300 p-2">{address}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-md text-primary mb-1">City</label>
              {isEditing ? (
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="border rounded-lg p-2 w-full"
                  required
                />
              ) : (
                <p className="border-b border-gray-300 p-2">{city}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-md text-primary mb-1">Country</label>
              {isEditing ? (
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="border rounded-lg p-2 w-full"
                  required
                />
              ) : (
                <p className="border-b border-gray-300 p-2">{country}</p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-md text-primary mb-1">Gender</label>
            {isEditing ? (
              <div className="flex gap-4">
                <label className="flex items-center">
                  <FaMale className="mr-1 text-primary" />
                  <input
                    type="radio"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-1"
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <FaFemale className="mr-1 text-primary" />
                  <input
                    type="radio"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-1"
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <FaGenderless className="mr-1 text-primary" />
                  <input
                    type="radio"
                    value="Other"
                    checked={gender === 'Other'}
                    onChange={(e) => setGender(e.target.value)}
                    className="mr-1"
                  />
                  Other
                </label>
              </div>
            ) : (
              <p className="border-b border-gray-300 p-2">{gender}</p>
            )}
          </div>

          {isEditing && (
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-lg mt-4 w-full sm:w-auto"
            >
              Save Changes
            </button>
          )}
        </form>
      </div>
    </ClientLayout>
  );
};

export default PersonalInfoForm;
