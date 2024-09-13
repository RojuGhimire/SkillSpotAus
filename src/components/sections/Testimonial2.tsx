import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa";

interface Testimonial {
  name: string;
  image: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Eleana Brown",
    image: "/test.png",
    review:
      "Our membership management software provides full automation of membership renewals and payments",
    rating: 4.5,
  },
  {
    name: "Kristine Smith",
    image: "/test.png",
    review:
      "Our membership management software provides full automation of membership renewals and payments",
    rating: 4.5,
  },
  {
    name: "Harris Fallon",
    image: "/test.png",
    review:
      "Our membership management software provides full automation of membership renewals and payments",
    rating: 4.5,
  },
  {
    name: "Jimmy S",
    image: "/RPL.png",
    review:
      "Our membership management software provides full automation of membership renewals and payments",
    rating: 4.5,
  },
];

const Testimonial2: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px", // Added padding for gaps between cards
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "15px", // Adjusted padding for 3 slides view
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "15px", // Adjusted padding for 2 slides view
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px", // Adjusted padding for 1 slide view
        },
      },
    ],
  };

  return (
    <section className="flex flex-col items-center font-overpass text-center my-10 px-4 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">What Our Clients Say</h2>
      <p className="text-[#A4A4A4] mb-8">
        Our pricing is tailored to your{" "}
        <span className="font-semibold">business size</span> and{" "}
        <span className="font-semibold">specific needs</span>:
      </p>

      <div className="w-[380px] lg:w-[1281px] h-[450px]  px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className=" shadow-xl  border border-gray-100 mx-4 rounded-xl gap-[200px]  w-[303px] h-[430px]  "
            >
              <div className="flex  ml-5 mt-8 mb-6 sm:mb-20 items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[70px] h-[70px] rounded-full object-cover"
                />
                <div className="ml-5 text-left">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-2xl">
                      {"★".repeat(Math.floor(testimonial.rating))}
                    </span>
                    <span className="text-yellow-400/50 text-2xl">
                      {testimonial.rating % 1 !== 0 ? "★" : ""}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-blue-700">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.review}</p>
              <FaQuoteRight className="text-primary text-2xl mx-auto mt-auto sm:mt-16" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center mt-4 space-x-5">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === 0 ? "bg-primary" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonial2;
