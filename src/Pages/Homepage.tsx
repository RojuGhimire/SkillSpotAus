import RootLayout from "@/layouts/RootLayout";
import Hero from "../components/sections/Hero";
import Frame from "../components/sections/Frame";
import Hero2 from "../components/sections/Hero2";
import CourseGrid from "../components/sections/Course";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/sections/Footer";
import Affiliates from "../components/sections/Our";
import Services from "../components/sections/Service";
import MainComponent from "../components/sections/Notice";
import Testimonials from "../components/sections/Testimonial";
import FAQ from "../components/sections/FAQ";
import { Footer2 } from "../components/sections/Footer2";
import BlogPostSection from "@/components/sections/BlogSection";
const Homepage: React.FC = () => {
  return (
    <RootLayout>
      <div className="flex flex-col mx-auto w-full overflow-hidden space-y-25 ">
        <Hero />
        <Frame />
        <Hero2 />
        <CourseGrid />
        <Services />
        <BlogPostSection />
        <MainComponent />
        <Testimonials />
        <ContactSection />
        <FAQ />
        <Affiliates />
        <Footer />
        <Footer2 />
      </div>
    </RootLayout>
  );
};

export default Homepage;
