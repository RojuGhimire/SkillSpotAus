import React from "react";

const Hero2: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start p-8 lg:px-20 lg:h-[550px] lg:p-16">
      <div className="flex flex-col lg:flex-row  lg:-mt-8 ">
        {/* Left Content */}
        <div className="lg:w-1/2  space-y-6 ">
          <div className="w-[242px] h-[92px] gap-[8px] ">
            <h2 className="text-secondary leading-[30px] text-lg font-bold">
              Skill Spot Australia
            </h2>
            <h1 className="text-3xl font-bold text-gray-800">Who Are We?</h1>
          </div>
          <div className="mx-auto  ">
            <p className="text-[#6C757D] text-[17px] font-semibold leading-[25px] text-left lg:mb-8">
              Skill Spot Australia is not just an educational consultant; we're
              your partners in success. With a focus on Recognition of Prior
              Learning (RPL), training and qualifications, we’re your gateway to
              certifications across Australia.
            </p>
            <p className="text-[#6C757D] text-[17px] font-semibold leading-[25px] text-left">
              We understand that each individual's journey is unique. That's why
              we're committed to providing personalized guidance and support
              every step of the way. Whether you're aiming to advance in your
              career or embark on a new educational path, we're here to empower
              you. Join us on this transformative journey and let Skill Spot
              Australia be your guide to achieving your aspirations.
            </p>
          </div>

          <button className="w-[117px]  h-[38px]  gap-[10px] border border-secondary hover:border-white hover:bg-primary font-semibold rounded-lg text-secondary hover:text-white bg-white ">
            Explore more
          </button>
        </div>

        {/* Right Content - Image and Call to Action */}
        <div className="lg:w-1/2 flex flex-col items-center h-[503px] lg:items-end  mt-16 lg:mt-0">
          <img
            src="/hero.png" // Replace with actual image URL
            alt="Who Are We"
            className=" w-[700px] h-[425px] object-cover "
          />
          <div className=" -mt-10  bg-white rounded-xl shadow-lg items-center justify-center  p-4 border-l-4 md:w-[364px] h-[85px] md:top-[350px] lg:left-[35px] text-secondary hover:bg-primary hover:text-white  border-secondary">
            <div className="w-[231.61px] h-[39px] top-[17.59px] left-[25.73px] ">
              <h2 className="font-overpass text-[18.17px] font-semibold leading-[23px] text-left   " >
                We Build for your comfort
              </h2>
              <p className="font-overpass font-bold text-lg">
                Call: +61 450 545 073
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
