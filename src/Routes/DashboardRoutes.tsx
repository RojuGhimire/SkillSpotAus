import { Dashboard } from '@/components/Dashboard/Dashboard';
import ContactUS from '@/Pages/ContactUS';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Import your components

// Create a browser router instance
const myDashboardRouter = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { path: '', element: <ContactUS /> },
      { path: 'contactList', element: <ContactUS /> },
    ],
  },
]);

function DashboardRoute() {
  return <RouterProvider router={myDashboardRouter} />;
}

export default DashboardRoute;
