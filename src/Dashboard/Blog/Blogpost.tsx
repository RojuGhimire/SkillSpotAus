import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { DashboardLayout } from "../DashboardLayout";

interface BlogPost {
    id: number;
    date: string;
    title: string;
    status: string;
  }
  
  const blogData: BlogPost[] = [
    { id: 1, date: 'Feb 26, 2024', title: 'Trade', status: 'Posted' },
    { id: 2, date: 'Feb 26, 2024', title: 'Trade', status: 'Not Posted' },
    // Add more data
  ];
  
  const BlogTable = () => {
   
  
    return (
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-gray-50 rounded-lg">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="p-4">Date</th>
              <th className="p-4">Blog</th>
              <th className="p-4">Status</th>
              <th className="p-4">Edit</th>
            </tr>
          </thead>
          <tbody>
            {blogData.map((post) => (
              <tr key={post.id} className="border-t">
                <td className="p-4">{post.date}</td>
                <td className="p-4">{post.title}</td>
                <td className="p-4">{post.status}</td>
                <td className="p-4 flex space-x-4">
                <button className="text-blue-500">
                  <FaEdit />
                </button>
                <button className="text-red-500">
                  <FaTrashAlt />
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export const DashboardPage = () => {
    return (
      <DashboardLayout>
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Blog Posts</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Create</button>
        </div>
        <BlogTable />
      </DashboardLayout>
    );
  };
  