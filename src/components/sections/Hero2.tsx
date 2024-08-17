import React from 'react';

const Hero2: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start p-8 px-20  lg:p-16">
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-red-600 text-lg font-semibold">Skill Spot Australia</h2>
        <h1 className="text-3xl font-bold text-gray-800">Who Are We?</h1>
        <p className="text-gray-600">
          Skill Spot Australia is not just an educational consultant; we're your partners in success. With a focus on Recognition of Prior Learning (RPL), training and qualifications, we’re your gateway to certifications across Australia.
        </p>
        <p className="text-gray-600">
          We understand that each individual journey is unique. That’s why we’re committed to providing personalized guidance and support every step of the way. Whether you’re aiming to advance in your career or embark on a new educational path, we’re here to empower you. Join us on this transformative journey and let Skill Spot Australia be your guide to achieving your aspirations.
        </p>
        <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600">
          Explore more
        </button>
      </div>

      {/* Right Content - Image and Call to Action */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-end mt-8 lg:mt-0">
        <img
          src="https://via.placeholder.com/400" // Replace with actual image URL
          alt="Who Are We"
          className="rounded-lg shadow-lg"
        />
        <div className="bg-white border border-gray-300 p-4 rounded-lg shadow-lg mt-4 text-center lg:text-left">
          <p className="text-red-500 font-semibold">We Build for your comfort</p>
          <p className="text-gray-800 font-bold text-lg">Call: +61 450 545 073</p>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
