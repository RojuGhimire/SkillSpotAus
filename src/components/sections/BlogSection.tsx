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
    <section className="my-auto  mb-8 px-4 bg-white">
      <div className="container font-overpass mx-auto text-center px-4 md:px-0">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-2">Latest Blog Post</h2>
        <p className="text-gray-500 mb-10 md:mb-20">
          At Skill Spot Australia, we provide top-notch facilities for effective
          learning
        </p>

        {/* Blog Post Grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white hover:bg-[#F6ECED] w-full max-w-[434px] mx-auto shadow-lg rounded-lg transition-transform duration-200 hover:scale-105">
                {/* Content */}
                <div className="p-6">
                  {/* Image */}
                  <img
                    src={post.imgSrc}
                    alt="Blog Post"
                    className="w-full h-[250px] object-cover mb-4 rounded-lg"
                  />
                  <p className="text-gray-700 font-overpass mb-4">
                    {post.description}
                  </p>
                  <button className="text-primary transition-transform duration-200 hover:scale-105 bg-white border-2 border-primary hover:border-white px-4 py-2 rounded-full hover:bg-secondary hover:text-white font-overpass ">
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
