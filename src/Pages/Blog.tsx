import Header from "@/components/Header"
import Footer from "@/components/sections/Footer"
import { Footer2 } from "@/components/sections/Footer2"

const Blog = () => {
  return (
    <div className="w-full">
        <Header />
        <div>
      <img src="/blog.png" alt="" className="w-full" />
      <div className="p-4 md:p-8 lg:h-full lg:px-20">
      <div className="h-[100px] items-center justify-center mb-12">
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
        </div>
            </div>
        <Footer />
        <Footer2 />
    </div>
  )
}

export default Blog