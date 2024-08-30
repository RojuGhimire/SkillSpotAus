import React from "react";
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

const Testimonials: React.FC = () => {
  return (
    <section className="flex flex-col items-center font-overpass text-center my-10 px-4 lg:px-0">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">What Our Client says</h2>
      <p className="text-[#A4A4A4]  mb-8">
        Our pricing is tailored to your{" "}
        <span className="font-semibold">business size</span> and{" "}
        <span className="font-semibold">specific needs</span>:
      </p>

      <div className="flex overflow-x-auto w-full   space-x-6 items-center justify-center md:space-x-8 snap-x snap-mandatory  px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 border border-gray-300    w-72 md:w-80 lg:w-[303px] bg-white p-6 lg:h-[435px] rounded-2xl shadow-xl snap-center"
          >
            <div className="flex mb-6 lg:mb-20  items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-[70px] h-[70px] rounded-full object-cover"
              />
              <div className="ml-5  text-left">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400 text-2xl ">
                    {"★".repeat(Math.floor(testimonial.rating))}
                  </span>
                  <span className="text-yellow-400/50 text-2xl">
                    {testimonial.rating % 1 !== 0 ? "★" : ""}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-blue-700 ">{testimonial.name}</h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{testimonial.review}</p>
            <FaQuoteRight className="text-primary text-2xl mx-auto mt-auto lg:mt-16" />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
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

export default Testimonials;
