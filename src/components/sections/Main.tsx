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

const NoticeBoard: React.FC = () => {
  return (
    <div className="p-6 bg-white  rounded-lg shadow-xl">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span className="bg-secondary rounded ">&#128221;</span> Notice Board
        </h2>
        <button className="text-semibold text-secondary  hover:bg-primary hover:text-white font-overpass h-[35px] w-[110px] rounded-full shadow-xl border border-gray-200 flex items-center justify-center gap-1">
          View More <span className=''>&rarr;</span>
        </button>
      </div>
      <div className="mt-4 space-y-4 max-h-[485px] px-6 w-[513px] font-overpass  overflow-y-auto   ">
        {notices.map((notice, index) => (
          <div key={index} className="border-b pb-4 last:border-none">
            <h3 className="text-lg font-semibold">{notice.title}</h3>
            <p className="text-gray-600 mt-1">{notice.description}</p>
            <p className="text-sm text-secondary mt-1">Published date: {notice.publishedDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
