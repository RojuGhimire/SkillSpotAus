export const Banner2 = () => {
  return (
    <div className="relative">
      <div className="bg-primary text-white p-6 rounded-3xl h-[155px] lg:w-[1225px] items-center justify-center font-overpass shadow-2xl mx-auto max-w-7xl">
        <div className="absolute flex flex-col lg:flex-row justify-between lg:px-10 items-center space-y-4 lg:space-y-0">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold">
              Enroll for our various courses <br /> anywhere from Australia
            </h2>
            <p className="text-sm mt-2">
              Read the articles related to Open and Distance Learning (ODL) mode
              of education and Blended mode of  Learning.
            </p>
          </div>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 rounded-l-full text-black w-[390px] max-w-xs shadow-custom-light"
              style={{
                boxShadow: "0px 0px 0px 5.93px rgba(255, 255, 255, 0.25)",
              }}
            />
            <button
              className="bg-secondary text-white p-3 w-[99px] rounded-r-full shadow-custom-light"
              style={{
                boxShadow: "0px 0px 0px 5.93px rgba(255, 255, 255, 0.25)",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Images */}
      <img
        src="/r4.png"
        alt="Decorative"
        className="absolute w-[348.64px] h-[155.66px] top-[-30.57px] left-[587.5px] border-[0.92px] border-transparent transform rotate-[-25.82deg]"
      />
    </div>
  );
};
