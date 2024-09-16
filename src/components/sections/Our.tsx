import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Affiliates: React.FC = () => {
  // Settings for the slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 4 logos at once (adjust as needed)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="mt-10 w-full   flex flex-col items-center lg:px-20 lg:justify-center text-center">
      {/* Heading and Subtitle */}
      <h2 className="text-3xl font-overpass font-semibold">Our Affiliates</h2>
      <p className="text-gray-400 font-overpass mt-2 lg:w-[800px] mb-12">
        Our programmes are comprehensive educational experiences that develop
        and enhance skill sets that can be applied to diverse job profiles.
      </p>

      {/* Logos Slider */}
      <Slider {...settings} className=" w-[300px] md:w-[1183px] ">
        <div className="flex justify-center">
          <img src="/1.png" alt="Affiliate 1" className="h-16" />
        </div>
        <div className="flex justify-center">
          <img src="/2.png" alt="Affiliate 2" className="h-16" />
        </div>
        <div className="flex justify-center">
          <img src="/3.png" alt="Affiliate 3" className="h-16" />
        </div>
        <div className="flex justify-center">
          <img src="/4.png" alt="Affiliate 4" className="h-16" />
        </div>
        <div className="flex justify-center">
          <img src="/5.png" alt="Affiliate 5" className="h-16" />
        </div>
        <div className="flex justify-center">
          <img src="/6.png" alt="Affiliate 6" className="h-16" />
        </div>
      </Slider>
    </section>
  );
};

export default Affiliates;
