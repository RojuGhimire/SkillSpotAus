import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { Footer2 } from "@/components/sections/Footer2";
import { FaEye, FaHeart, FaShare } from "react-icons/fa";

interface Blogs {
  id: number;
  image: string;
  category: string;
  shares: number;
  likes: number;
  views: number;
}

const blog: Blogs[] = [
  {
    id: 1,
    image: "/Car.png",
    category: "Trade",
    shares: 100,
    likes: 868,
    views: 201000,
  },
  {
    id: 2,
    image: "/cou.png",
    category: "Construction",
    shares: 200,
    likes: 500,
    views: 150000,
  },
  {
    id: 3,
    image: "/vet.png",
    category: "Management",
    shares: 300,
    likes: 600,
    views: 175000,
  },
  {
    id: 4,
    image: "/BG.jpeg",
    category: "Management",
    shares: 400,
    likes: 700,
    views: 100000,
  },
  {
    id: 5,
    image: "/hos.png",
    category: "Health & Childcare",
    shares: 500,
    likes: 800,
    views: 120000,
  },
  {
    id: 6,
    image: "/hi.png",
    category: "Health & Childcare",
    shares: 600,
    likes: 900,
    views: 200000,
  },
  {
    id: 7,
    image: "/hos.png",
    category: "Trade",
    shares: 700,
    likes: 1000,
    views: 250000,
  },
  {
    id: 8,
    image: "/small.jpeg",
    category: "Management",
    shares: 800,
    likes: 1100,
    views: 300000,
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

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
              At Skill Spot Australia, we provide top-notch facilities for effective learning
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-xl ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-primary font-bold border border-gray-300"
                } transition-colors duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center  px-10 md:px-0  justify-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[63px] w-full lg:w-[1268px]  items-center justify-center">
              {filteredBlog.map((blog) => (
                <div key={blog.id} className="w-[380px] ">
                  <div className="relative border rounded-lg shadow-xl overflow-hidden pb-4">
                    <div className="p-4">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          className="w-full h-[200px] sm:h-[250px] md:h-[264px] border-primary border-[5px] sm:border-[7px] md:border-[10px] rounded-lg object-cover"
                          alt={blog.category}
                        />
                      ) : (
                        <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center text-gray-500">
                          No Image Available
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end space-x-8 px-5  items-center">
                      <div className="flex items-center space-x-2">
                        <FaShare className="text-gray-500" />
                        <span className="text-sm text-gray-500">{blog.shares}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaHeart className="text-gray-500" />
                        <span className="text-sm text-gray-500">{blog.likes}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaEye className="text-gray-500" />
                        <span className="text-sm text-gray-500">{blog.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Footer2 />
    </div>
  );
};

export default Blog;
