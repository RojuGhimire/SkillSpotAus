import React from "react";

interface NewsItem {
  title: string;
  description: string;
  date: string;
  image: string;
}

const recentNews: NewsItem[] = [
  {
    title: "Ui/UX Designing Workshop",
    description:
      "Free workshop on Java Programming and Graphic Designing. Enjoy free workshops with practical, hands-on learning and free Q&A sessions with our experienced instructors.",
    date: "MAR 10 2023",
    image: "/vet.png",
  },
  {
    title: "Ui/UX Designing Workshop",
    description:
      "Free workshop on Java Programming and Graphic Designing. Enjoy free workshops with practical, hands-on learning and free Q&A sessions with our experienced instructors.",
    date: "MAR 10 2023",
    image: "/vet.png",
  },
  {
    title: "Ui/UX Designing Workshop",
    description:
      "Free workshop on Java Programming and Graphic Designing. Enjoy free workshops with practical, hands-on learning and free Q&A sessions with our experienced instructors.",
    date: "MAR 10 2023",
    image: "/vet.png",
  },
];

const RPL1: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 font-overpass">
      {/* Main RPL Content */}
      <div className="md:w-2/3 pr-6">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Recognition Of Prior Learning (RPL)
        </h1>
        <p className="text-base md:text-lg text-gray-500 font-semibold mt-6 md:mt-16 mb-4 md:mb-6">
          RPL is a process that assesses and validates the skills, knowledge,
          and experience that you have acquired through non-formal and informal
          learning. This can include things like work experience, volunteer
          work, online courses, and self-study.
        </p>
        <p className="text-base md:text-lg text-gray-500 font-semibold mb-4 md:mb-6">
          RPL can be used to get credit for courses or programs, to get a job,
          or to apply for a visa or immigration.
        </p>
        <p className="text-base md:text-lg text-gray-500 font-semibold mb-4 md:mb-6">
          Recognition of Prior Learning (RPL) is a formalized procedure designed
          to assess and authenticate the competencies, expertise, and practical
          insights acquired through non-formal and informal learning pathways.
          These avenues encompass a spectrum of activities, including but not
          limited to professional work experience, volunteer engagements, online
          coursework, and self-directed study.
        </p>
        <p className="text-base md:text-lg text-gray-500 font-semibold">
          The utilization of RPL serves multifaceted purposes, such as earning
          credit for specific courses or programs, enhancing employability
          prospects, or facilitating visa and immigration application processes.
        </p>
      </div>

      {/* Recent News Section */}
      <div className="w-full md:w-[535px] mt-10 md:mt-0 h-auto rounded-lg shadow-md">
        <div className="bg-primary flex h-10 justify-start items-center">
          <h2 className="text-lg font-bold px-4 text-white">Recent News</h2>
        </div>
        {recentNews.map((newsItem, index) => (
          <div
            key={index}
            className="flex space-x-2 border-b-2 hover:bg-[#F6ECED] border-gray-300 p-4"
          >
            <div className="flex items-center justify-center w-[95px] h-[95px]">
              <img
                src={newsItem.image}
                alt=""
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full">
              <h3 className="font-bold mt-2 mb-1 text-sm md:text-base">
                {newsItem.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-700 mb-2">
                {newsItem.description}
              </p>
              <span className="text-secondary font-semibold text-xs md:text-sm">
                Published date: {newsItem.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default RPL1;
