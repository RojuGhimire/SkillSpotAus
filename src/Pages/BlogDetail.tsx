import Header from '@/components/Header';
import { Footer2 } from '@/components/sections/Footer2';
import Footer3 from '@/components/sections/Footer3';
import { BiSearch } from 'react-icons/bi';

interface BlogPost {
  image: string;
  title: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    image: '/hos.png',
    title: 'Blog image post',
    date: 'Mar 10, 2023',
  },
  {
    image: '/hos.png',
    title: 'Blog image post',
    date: 'Sept 10, 2023',
  },
  {
    image: '/hos.png',
    title: 'Blog image post',
    date: 'Sept 14, 2023',
  },
];

const BlogDetail = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <Header />

      {/* Banner Image */}
      <div>
        <img src="/blog2.svg" alt="Blog Banner" className="w-full object-cover" />
      </div>

      {/* Main Content */}
      <div className="w-full lg:px-32 px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16">
          {/* Left Column: Blog Post */}
          <div className="lg:col-span-2">
            <p className="text-gray-500">Perth, October 11, 2023</p>

            <div className="mt-6 space-y-10">
              <p className="text-lg leading-[30px] lg:leading-[40px] text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ncididunt ut labore et dolore magna aliqua...
              </p>
              <p className="text-lg leading-[30px] lg:leading-[40px] text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="text-lg leading-[30px] lg:leading-[40px] text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1">
            {/* Search Bar */}
            <div className="relative  hidden lg:flex items-center mb-6">
              <input
                type="text"
                className="w-full lg:w-[290px] py-2 pl-12 rounded-full border bg-[#DDE6FF] focus:outline-none"
                placeholder="Search"
              />
              <BiSearch className="absolute left-4 text-gray-500" />
            </div>

            {/* Image with Buttons */}
            <div className="hidden lg:flex items-center justify-center relative w-full lg:w-[316px]">
              <img
                src="/hos.png"
                alt="Take a First Step"
                className="h-auto w-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <p className="w-[142px] text-white font-bold text-lg font-overpass mt-10 mb-3">
                  Take a first step
                </p>
                <button className="bg-white text-primary font-semibold rounded-full w-[129px] h-[40px] mb-8">
                  View Courses
                </button>
              </div>
              <button className="bg-secondary absolute font-bold top-[220px] left-1/2 transform -translate-x-1/2 w-[220px] h-[55px] text-white rounded-full">
                Check Your Eligibility
              </button>
            </div>

            {/* Recently Posted Blogs */}
            <div className="mt-16">
              <h2 className="text-secondary w-[244px] text-2xl border-primary border-b-4 font-bold mb-4">
                Recently Posted Blog
              </h2>
              <div className="space-y-4">
                {blogPosts.map((post, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-primary font-bold text-lg">{post.title}</h3>
                      <p className="text-gray-700 text-sm">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Blog Section */}
        <div className="mt-10">
          <p className="mb-6 text-2xl text-gray-600 font-bold">Related Blog</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[44px]">
            <img src="/hos.png" alt="Related Blog" className="rounded-3xl w-[245px] h-auto" />
            <img src="/hos.png" alt="Related Blog" className="rounded-3xl w-[245px] h-auto" />
            <img src="/hos.png" alt="Related Blog" className="rounded-3xl w-[245px] h-auto" />
            <img src="/hos.png" alt="Related Blog" className="rounded-3xl w-[245px] h-auto" />
            <img src="/hos.png" alt="Related Blog" className="rounded-3xl w-[245px] h-auto" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer3 />
      <Footer2 />
    </div>
  );
};

export default BlogDetail;
