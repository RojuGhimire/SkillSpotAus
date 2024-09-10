import React from "react";

const BlogPostSection: React.FC = () => {
  const posts = [
    {
      id: 1,
      imgSrc: "/work.png",
      description:
        "Connect with our skilled counselors at Skill Spot Australia. Receive personalized guidance and support tailored to your career goals and aspirations. Start your journey to success today.",
    },
    {
      id: 2,
      imgSrc: "/Car.png",
      description:
        "Connect with our skilled counselors at Skill Spot Australia. Receive personalized guidance and support tailored to your career goals and aspirations. Start your journey to success today.",
    },
    {
      id: 3,
      imgSrc: "/cou.png",
      description:
        "Connect with our skilled counselors at Skill Spot Australia. Receive personalized guidance and support tailored to your career goals and aspirations. Start your journey to success today.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-2">Latest Blog Post</h2>
        <p className="text-gray-500 mb-20">
          At Skill Spot Australia, we provide top-notch facilities for effective learning
        </p>

        {/* Blog Post Grid */}
        <div className="  ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:ml-32  gap-[100px]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white hover:bg-[#F6ECED]  w-[334px] shadow-lg rounded-lg "
            >
                <div className="items-center justify-center ml-6  ">
              {/* Image */}
              <img
                src={post.imgSrc}
                alt="Blog Post"
                className="w-[282px]  h-48 object-cover "
              />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4">{post.description}</p>
                <button className="text-secondary bg-white border border-secondary hover:border-white px-4 py-2 rounded-full hover:bg-primary hover:text-white font-overpass  transition duration-200">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostSection;
