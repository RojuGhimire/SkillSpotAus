import { useState } from "react";
import Header from "@/components/Header";
import { Footer2 } from "@/components/sections/Footer2";
import { FaEye, FaHeart, FaRegBookmark, FaShare } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer3 from "@/components/sections/Footer3";

interface Blogs {
  id: number;
  image: string;
  category: string;
  shares: number;
  likes: number;
  views: number;
  date: string;
  description: string;
}

const blog: Blogs[] = [
  {
    id: 1,
    image: "/Car.png",
    category: "Trade",
    shares: 100,
    likes: 868,
    views: 201000,
    date: "MAR 10 2023",
    description:
      " Lorem Ipsum is simply dummy text of the prin typesetting industry...",
  },
  {
    id: 2,
    image: "/cou.png",
    category: "Construction",
    shares: 200,
    likes: 500,
    views: 150000,
    date: "MAR 10 2023",
    description:
      " Lorem Ipsum is simply dummy text of the prin typesetting industry...",
  },
  {
    id: 3,
    image: "/vet.png",
    category: "Management",
    shares: 300,
    likes: 600,
    views: 175000,
    date: "MAR 10 2023",
    description:
      " Lorem Ipsum is simply dummy text of the prin typesetting industry...",
  },
  {
    id: 4,
    image: "/BG.jpeg",
    category: "Management",
    shares: 400,
    likes: 700,
    views: 100000,
    date: "MAR 10 2023",
    description:
      " Lorem Ipsum is simply dummy text of the prin typesetting industry...",
  },
  {
    id: 5,
    image: "/hos.png",
    category: "Health & Childcare",
    shares: 500,
    likes: 800,
    views: 120000,
    date: "MAR 10 2023",
    description:
      " Lorem Ipsum is simply dummy text of the prin typesetting industry...",
  },
  {
    id: 6,
    image: "/hi.png",
    category: "Health & Childcare",
    shares: 600,
    likes: 900,
    views: 200000,
    date: "MAR 10 2023",
    description:
      " Lorem Ipsum is simply dummy text of the prin typesetting industry...",
  },
  {
    id: 7,
    image: "/hos.png",
    category: "Trade",
    shares: 700,
    likes: 1000,
    views: 250000,
    date: "MAR 10 2023",
    description:
      " Lorem Ipsum is simply dummy text of the prin typesetting industry...",
  },
  {
    id: 8,
    image: "/small.jpeg",
    category: "Management",
    shares: 800,
    likes: 1100,
    views: 300000,
    date: "MAR 10 2023",
    description:
      " Lorem Ipsum is simply dummy text of the prin typesetting industry...",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const navigate = useNavigate(); // Initialize useNavigate

  const filteredBlog =
    activeCategory === "All"
      ? blog
      : blog.filter((blog) => blog.category === activeCategory);

  const categories = [
    "All",
    "Trade",
    "Construction",
    "Automation",
    "Management",
    "TAE Courses",
    "Health & Childcare",
  ];

  const handleReadMoreClick = () => {
    navigate("/blogdetail"); // Navigate to the RPL page
  };

  return (
    <div className="w-full">
      <Header />
      <div>
        <img src="/blog.png" alt="" className="w-full" />
        <div className="p-4 md:p-8 lg:h-full lg:px-20">
          <div className="h-[100px] items-center justify-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-4 font-overpass">
              Blog Section
            </h2>
            <p className="text-center text-[#A4A4A4] font-semibold mb-8">
              At Skill Spot Australia, we provide top-notch facilities for
              effective learning
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-xl ${
                  activeCategory === category
                    ? "bg-primary text-white  font-bold"
                    : "bg-white text-primary font-bold border border-gray-300"
                } transition-colors duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center px-10 md:px-0 justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[63px] w-full lg:w-[1368px] items-center justify-center">
              {filteredBlog.map((blog) => (
                <div
                  key={blog.id}
                  className="w-[420px] relative border rounded-2xl shadow-xl pb-4"
                >
                  <div className="relative p-4">
                    {blog.image ? (
                      <div className="relative group">
                        <img
                          src={blog.image}
                          className="w-full h-[200px] sm:h-[250px] md:h-[264px] border-primary border-[5px] sm:border-[7px] md:border-[10px] rounded-lg object-cover"
                          alt={blog.category}
                        />

                        {/* Hover overlay inside the image */}
                        <div className="absolute font-overpass inset-2 bg-black  bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                          <div className="absolute top-4 right-4 flex flex-col space-y-4">
                            <FaHeart className="text-white text-xl cursor-pointer" />
                            <FaRegBookmark className="text-white text-xl cursor-pointer" />
                          </div>
                          <div className="mt-20 px-4 ">
                            <h3 className="text-white text-2xl font-bold mb-2">
                              {blog.category}
                            </h3>
                            <p className="text-sm text-white underline mb-2">
                              {blog.date}
                            </p>
                            <p className="text-white text-start mb-2">{blog.description}</p>
                            <button
                              onClick={handleReadMoreClick}
                              className="text-sm text-secondary underline"
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image Available
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end space-x-8 px-5  items-center">
                    <div className="flex items-center space-x-2">
                      <FaShare className="text-gray-500" />
                      <span className="text-sm text-gray-500">
                        {blog.shares}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaHeart className="text-gray-500" />
                      <span className="text-sm text-gray-500">
                        {blog.likes}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaEye className="text-gray-500" />
                      <span className="text-sm text-gray-500">
                        {blog.views}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer3 />
        <Footer2 />
      </div>
    </div>
  );
};

export default Blog;
