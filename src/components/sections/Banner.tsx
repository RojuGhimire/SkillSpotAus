
export const Banner = () => {
  return (
    <div className="bg-[#0A2A7A] text-white flex flex-col items-center justify-center py-8 px-6 rounded-md mb-8 lg:mx-20">
    <h3 className="text-lg lg:text-2xl font-semibold mb-2 text-center">
      Enroll for our various courses anywhere from the Australia
    </h3>
    <p className="text-sm lg:text-base mb-4 text-center">
      Read the articles related to Open and Distance Learning (ODL) mode of
      education and Blended mode of Learning.
    </p>
    <div className="flex flex-col lg:flex-row items-center lg:space-x-4 space-y-4 lg:space-y-0 w-full lg:w-auto">
      <input
        type="email"
        placeholder="Enter Email"
        className="w-full lg:w-[350px] py-2 px-4 rounded-md focus:outline-none text-black"
      />
      <button className="bg-[#E83434] text-white py-2 px-6 rounded-md hover:bg-[#C12B2B]">
        Subscribe
      </button>
    </div>
  </div>
  )
}
