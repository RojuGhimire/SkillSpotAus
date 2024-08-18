import React, { useRef, useEffect } from 'react';

const NewsAndNoticeBoard: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const firstChild = scrollRef.current.firstElementChild as HTMLElement | null;
        if (firstChild) {
          const itemHeight = firstChild.offsetHeight;

          scrollRef.current.style.transition = 'transform 1s ease';
          scrollRef.current.style.transform = `translateY(-${itemHeight}px)`;

          const resetPosition = () => {
            if (scrollRef.current) {
              scrollRef.current.appendChild(firstChild);
              scrollRef.current.style.transition = 'none';
              scrollRef.current.style.transform = 'translateY(0)';
            }
          };

          setTimeout(resetPosition, 1000);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 p-6 rounded-lg w-full max-w-5xl mx-auto flex gap-6">
      {/* News & Events Section */}
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold flex items-center">
            <span className="text-red-600 mr-2">📰</span> News & Events
          </h2>
          <button className="text-sm text-red-600 hover:underline flex items-center">
            View More <span className="ml-1">→</span>
          </button>
        </div>
        <div className="overflow-hidden h-[300px] relative">
          <div ref={scrollRef} className="space-y-4">
            {/* Repeating News Items */}
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-start gap-4">
                <img src="https://via.placeholder.com/100x100" alt="News" className="w-24 h-24 object-cover rounded-lg" />
                <div>
                  <h3 className="font-semibold">Robotics Workshop</h3>
                  <p className="text-sm text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                  <p className="text-xs text-red-500 mt-1">Published date: MAR 10 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notice Board Section */}
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold flex items-center">
            <span className="text-red-600 mr-2">📋</span> Notice Board
          </h2>
          <button className="text-sm text-red-600 hover:underline flex items-center">
            View More <span className="ml-1">→</span>
          </button>
        </div>
        <div className="space-y-4">
          {/* Static Notice Items */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex flex-col ">
              <h3 className="font-semibold">Re-Registration for January 2024 Session</h3>
              <p className="text-sm text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="text-xs text-red-500 mt-1">Published date: MAR 10 2023</p>
              {index < 4 && <hr className="my-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndNoticeBoard;
