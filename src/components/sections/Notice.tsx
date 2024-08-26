import React from 'react';
import NoticeBoard from './Main';

const MainComponent: React.FC = () => {
  return (
    <div className="flex items-center lg:px-20  justify-center h-[772px] bg-slate-100 p-4">
      <div className="flex flex-col md:flex-row items-start gap-36">
        {/* Notice Board Section */}
        <div className="w-full  h-[554px] md:w-1/2">
          <NoticeBoard />
        </div>
        {/* Image Section */}
        <div className="w-full  md:w-[554px] md:h-[554px] flex justify-center items-center">
          <img
            src="/News.png" // Replace with your actual image source
            alt="Person with clipboard"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
