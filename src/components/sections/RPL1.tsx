import React from "react";

interface NewsItem {
  title: string;
  description: string;
  date: string;
}

const recentNews: NewsItem[] = [
  {
    title: "Ui/UX Designing Workshop",
    description:
      "Free workshop on Java Programming and Graphic Designing. Enjoy free workshops with practical, hands-on learning and free Q&A sessions with our experienced instructors.",
    date: "MAR 10 2023",
  },
  {
    title: "Ui/UX Designing Workshop",
    description:
      "Free workshop on Java Programming and Graphic Designing. Enjoy free workshops with practical, hands-on learning and free Q&A sessions with our experienced instructors.",
    date: "MAR 10 2023",
  },
  {
    title: "Ui/UX Designing Workshop",
    description:
      "Free workshop on Java Programming and Graphic Designing. Enjoy free workshops with practical, hands-on learning and free Q&A sessions with our experienced instructors.",
    date: "MAR 10 2023",
  },
];

const RPL1: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row p-6  font-overpass">
      <div className="md:w-2/3   pr-6">
        <h1 className="text-4xl font-bold mb-4">
          Recognition Of Prior Learning (RPL)
        </h1>
        <p className="text-lg text-gray-500 font-bold font-overpass  mb-6">
          RPL is a process that assesses and validates the skills, knowledge,
          and experience that you have acquired through non-formal and informal
          learning. This can include things like work experience, volunteer
          work, online courses, and self-study.
        </p>
        <p className="text-lg text-gray-500 font-bold font-overpass  mb-6">
          RPL can be used to get credit for courses or programs, to get a job,
          or to apply for a visa or immigration.
        </p>
        <p className="text-lg text-gray-500 font-bold font-overpass  mb-6">
          Recognition of Prior Learning (RPL) is a formalized procedure designed
          to assess and authenticate the competencies, expertise, and practical
          insights acquired through non-formal and informal learning pathways.
          These avenues encompass a spectrum of activities, including but not
          limited to professional work experience, volunteer engagements, online
          coursework, and self-directed study.
        </p>
        <p className="text-lg text-gray-500 font-bold font-overpass ">
          The utilization of RPL serves multifaceted purposes, such as earning
          credit for specific courses or programs, enhancing employability
          prospects, or facilitating visa and immigration application processes.
        </p>
      </div>
      <div className="md:w-1/3 h-[536.36px] h p-4 rounded-lg shadow-md">
      <div className="bg-primary items-center ">
      <h2 className="text-lg font-bold mb-4  px-4  text-white">Recent News</h2>

      </div>
        {recentNews.map((newsItem, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">{newsItem.title}</h3>
            <p className="text-muted-foreground">{newsItem.description}</p>
            <span className="text-muted">Published date : {newsItem.date}</span>
            
          </div>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default RPL1;
