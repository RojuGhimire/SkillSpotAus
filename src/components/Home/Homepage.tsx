

import RootLayout from "@/layouts/RootLayout";
import Hero from "../sections/Hero";
import Frame from "../sections/Frame";
import Footer2 from "../sections/Footer2";

const Homepage: React.FC = () => {
  return (
    <RootLayout>
      <div className="flex flex-col mx-auto w-full  space-y-25 ">
        {/* <HeroSection />
        <Hero2 />
        <About />
        <Service />
        <Banner />
        <Software />
        <Price />
        <Meeting />
        <Contact />
        <Banner2 />
        <Footer />
        <Footer2 /> */}
        <Hero />
        <Frame />
        <Footer2 />
      </div>
    </RootLayout>
  );
};

export default Homepage;
