

import RootLayout from "@/layouts/RootLayout";
import Hero from "../sections/Hero";
import Frame from "../sections/Frame";

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
      </div>
    </RootLayout>
  );
};

export default Homepage;
