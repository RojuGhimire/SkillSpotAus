import RootLayout from "@/layouts/RootLayout";
import Hero from "../sections/Hero";
import Frame from "../sections/Frame";
import Hero2 from "../sections/Hero2";
import CourseGrid from "../sections/Course";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";
import Affiliates from "../sections/Our";
import Services from "../sections/Service";
import MainComponent from "../sections/Notice";
import Testimonials from "../sections/Testimonial";
const Homepage: React.FC = () => {
  return (
    <RootLayout>
      <div className="flex flex-col mx-auto w-full overflow-hidden space-y-25 ">
        <Hero />
        <Frame />
        <Hero2 />
        <CourseGrid />
        <Services />
        <MainComponent />
        <Testimonials />
        <ContactSection />
        <Affiliates />
        <Footer />
      </div>
    </RootLayout>
  );
};

export default Homepage;
