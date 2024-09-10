import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

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
    image: "/BG.jpeg",
    category: "Management",
  },
  {
    id: 5,
    title: "Certificate III in Hospitality",
    image: "/hos.png",
    category: "Health & Childcare",
  },
  {
    id: 6,
    title: "Diploma of Counselling",
    image: "/hi.png",
    category: "Health & Childcare",
  },
  {
    id: 7,
    title: "Automotive Body Repair Technology",
    image: "/hos.png",
    category: "Trade",
  },
  {
    id: 8,
    title: "Graduate Diploma of Management",
    image: "/small.jpeg",
    category: "Management",
  },
];

const CourseGrid: React.FC = () => {
  const [activeCategory] = useState<string>("All");

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="p-4 md:p-8 lg:h-[1050.81px] font-overpass lg:px-20 mb-10 ">
      <div className="h-[100px] items-center justify-center mb-12">
        <h2 className="text-3xl font-bold text-center mb-4 font-overpass">
          Popular Courses
        </h2>
        <p className="text-center text-[#A4A4A4] mb-8">
          Explore our popular courses designed to elevate your skills and career
          prospects. From childcare to construction,
          <br />
          find the path to success with us.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="flex items-center justify-center  mt-10">
        {/* <button className="text-secondary text-center gap-4 flex shadow-2xl w-[183px] items-center justify-center border border-gray-300 px-4 py-2 rounded-full hover:bg-primary font-semibold hover:text-white transition-colors duration-300">
          View More <FiArrowRight />
        </button> */}
        <button className="flex gap-4 border border-secondary rounded-full text-center shadow-xl "> View More <FiArrowRight className="mt-1" /> </button>
      </div>
    </div>
  );
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="flex  flex-col items-center">
      <div className="relative border rounded-lg shadow-xl overflow-hidden pb-4">
        <div className="p-4">
          <h3 className="text-lg font-bold text-primary mb-2 text-center">
            {course.title}
          </h3>
          {course.image ? (
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[264px] rounded-lg object-cover"
            />
          ) : (
            <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </div>
      </div>
      {/* Button outside the card */}
      <div className="mt-4  mb-4">
        <button className="text-white border px-4 py-3 bg-primary rounded-lg w-[175px] hover:bg-secondary font-semibold hover:text-white transition-colors duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseGrid;
