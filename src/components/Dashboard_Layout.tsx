import { Outlet } from 'react-router-dom';
import { Sidebar } from './Dashboard/Sidebar';


export const Dashboard_Layout: React.FC = () => {

  return (
    <div className="flex h-screen  overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-1 flex-col">
        {/* Header */}

        {/* Main content (This is where routed components will be rendered) */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard_Layout;
