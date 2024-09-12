import React from 'react';

type Notice = {
  title: string;
  description: string;
  publishedDate: string;
};

const notices: Notice[] = [
  {
    title: 'Re- Registration for January 2024 Session',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s...",
    publishedDate: 'MAR 10 2023',
  },
  {
    title: 'Re- Registration for January 2024 Session',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s...",
    publishedDate: 'MAR 10 2023',
  },
  {
    title: 'Re- Registration for January 2024 Session',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s...",
    publishedDate: 'MAR 10 2023',
  },
  {
    title: 'Re- Registration for January 2024 Session',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text ever since the 1500s...",
    publishedDate: 'MAR 10 2023',
  },
];

const MainComponent: React.FC = () => {
  return (
    <div className="flex items-center lg:px-20 justify-center h-auto lg:h-[672px] bg-[#F6ECED] p-4">
      <div className="flex flex-col md:flex-row gap-36 items-center justify-center w-full max-w-8xl">
        {/* Notice Board Section */}
        <div className="p-6 bg-white items-center justify-between rounded-lg shadow-xl w-full md:w-2/3 lg:w-[630px]">
          <div className="flex justify-between items-center">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <span className="bg-secondary rounded">&#128221;</span> Notice Board
            </h2>
          </div>
          <div className="mt-4 space-y-5 max-h-[485px] w-full font-overpass overflow-y-auto custom-scrollbar px-6">
            {notices.map((notice, index) => (
              <div key={index} className="border-b pb-4 last:border-none">
                <h3 className="text-base sm:text-lg font-semibold">{notice.title}</h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  {notice.description}
                </p>
                <p className="text-xs sm:text-sm text-secondary mt-1">
                  Published date: {notice.publishedDate}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex lg:w-[550px] md:h-[554px] justify-center items-center">
          <img
            src="/News.png" 
            alt="Person with clipboard"
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
