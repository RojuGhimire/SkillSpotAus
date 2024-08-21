import RootLayout from "@/layouts/RootLayout";
import Hero from "../sections/Hero";
import Frame from "../sections/Frame";
import Hero2 from "../sections/Hero2";
import CourseGrid from "../sections/Course";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";
import Affiliates from "../sections/Our";
// import NewsAndEvents from "../sections/News";

const Homepage: React.FC = () => {
  return (
    <RootLayout>
      <div className="flex flex-col mx-auto w-full  space-y-25 ">
        <Hero />
        <Frame />
        <Hero2 />
        <CourseGrid />
        <ContactSection />
        {/* <NewsAndEvents /> */}
        <Affiliates />
        <Footer />
      </div>
    </RootLayout>
  );
};

export default Homepage;
