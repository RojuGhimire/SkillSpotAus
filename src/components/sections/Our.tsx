import React from 'react';

const Affiliates: React.FC = () => {
  return (
    <section className="py-10 lg:h-[350px] flex flex-col items-center p-8 lg:px-20  lg:p-16 lg:justify-center text-center">
      {/* Heading and Subtitle */}
      <h2 className="text-3xl font-overpass font-semibold">Our Affiliates</h2>
      <p className="text-gray-400 font-overpass mt-2 lg:w-[800px] mb-12">
        Our programmes are comprehensive educational experiences that develop and enhance skill sets that can be applied to diverse job profiles.
      </p>
      
      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-[70px]">
        <img src="/1.png" alt="Affiliate 1" className="h-16" />
        <img src="/2.png" alt="Affiliate 2" className="h-16" />
        <img src="/3.png" alt="Affiliate 3" className="h-16" />
        <img src="/4.png" alt="Affiliate 4" className="h-16" />
        <img src="/5.png" alt="Affiliate 5" className="h-16" />
        <img src="/6.png" alt="Affiliate 6" className="h-16" />
      </div>
    </section>
  );
};

export default Affiliates;
