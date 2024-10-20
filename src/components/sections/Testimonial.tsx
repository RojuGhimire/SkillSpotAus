import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteRight } from "react-icons/fa";

interface Testimonial {
  image: string;
  name: string;
  feedback: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Eleana Brown",
    feedback:
      "Our membership management software provides full automation of membership renewals and payments.",
    rating: 4.5,
  },
  {
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Kristine Smith",
    feedback:
      "Our membership management software provides full automation of membership renewals and payments.",
    rating: 4.5,
  },
  {
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    name: "Harris Fallon",
    feedback:
      "Our membership management software provides full automation of membership renewals and payments.",
    rating: 4.5,
  },
  {
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Jimmy S",
    feedback:
      "Our membership management software provides full automation of membership renewals and payments.",
    rating: 4.5,
  },
];

const TestimonialSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller laptops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto p-4">
      <h2 className="text-center text-3xl font-bold mb-4">
        What Our Client Says
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Our pricing is tailored to your{" "}
        <span className="font-semibold">business size</span> and{" "}
        <span className="font-semibold">specific needs</span>:
      </p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-3xl border border-gray-200 px-5 mx-auto w-[305px] h-[435px] shadow-xl flex flex-col items-center">
              <div className="flex space-x-10 mt-12 mb-12">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <div className="flex mb-1">
                    {Array(Math.floor(testimonial.rating))
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.49 7.41l6.567-.955L10 .5l2.943 5.955 6.567.955-4.755 4.134 1.123 6.546z" />
                        </svg>
                      ))}
                    {testimonial.rating % 1 !== 0 && (
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.49 7.41l6.567-.955L10 .5l2.943 5.955 6.567.955-4.755 4.134 1.123 6.546z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-md mt-4 text-center">
                {testimonial.feedback}
              </p>
              <FaQuoteRight className="text-primary text-2xl mx-auto mt-auto sm:mt-16" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
