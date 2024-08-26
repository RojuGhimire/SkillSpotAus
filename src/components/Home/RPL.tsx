import React, { useState } from "react";

interface Course {
  id: number;
  title: string;
  image: string;
  category: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Certificate III in Carpentry",
    image: "/Car.png",
    category: "Trade",
  },
  {
    id: 2,
    title: "Certificate III in Construction",
    image: "/cou.png",
    category: "Construction",
  },
  {
    id: 3,
    title: "Diploma of VET",
    image: "/vet.png",
    category: "Management",
  },
  {
    id: 4,
    title: "Certificate III in Business",
    image: "BG.jpeg",
    category: "Management",
  },
  {
    id: 5,
    title: "Certificate III in Hospitality",
    image: "hos.png",
    category: "Health & Childcare",
  },
  {
    id: 6,
    title: "Diploma of Counselling",
    image: "hi.png",
    category: "Health & Childcare",
  },
  {
    id: 7,
    title: "Automotive Body Repair Technology",
    image: "hos.png",
    category: "Trade",
  },
  {
    id: 8,
    title: "Graduate Diploma of Management",
    image: "small.jpeg",
    category: "Management",
  },
];

const RPL: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  const categories = [
    "All",
    "Trade",
    "Construction",
    "Automation",
    "Management",
    "TAE Courses",
    "Health & Childcare",
  ];

  return (
    <div className="p-4 md:p-8  lg:h-[1050.81px] lg:px-20">
      <div className="h-[100px] items-center justify-center  mb-12">
        <h2 className="text-3xl font-bold text-center mb-4 font-overpass">
          Popular Courses
        </h2>
        <p className="text-center text-[#A4A4A4] font-semibold mb-8">
          Explore our popular courses designed to elevate your skills and career
          prospects. From childcare to construction,
          <br />
          find the path to success with us.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center flex-wrap gap-3 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded ${
              activeCategory === category
                ? "bg-primary text-white"
                : "bg-white text-primary font-bold border border-gray-300"
            } `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="relative border rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105 pb-16"
          >
            <div className="p-4">
              <h3 className="text-lg font-bold text-primary mb-2 text-center">
                {course.title}
              </h3>
              {course.image ? (
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[224px] rounded-lg object-cover"
                />
              ) : (
                <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image Available
                </div>
              )}
            </div>
            <div className="absolute w-full flex justify-center">
              <button className="text-secondary border border-secondary px-4 py-2 rounded hover:bg-secondary font-semibold hover:text-white transition-colors duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RPL;
